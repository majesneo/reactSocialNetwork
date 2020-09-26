import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginThunkCreator } from '../../redux/auth-reducer';
import { maxLengthCreator, requireField } from '../../validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import s from '../common/FormsControls/FormsControls.module.css';


const maxLengthCreatorEmail30 = maxLengthCreator(30);
const maxLengthCreatorPassword12 = maxLengthCreator(12);

const LoginForm = (props) => {

    return (
        <div class="col-lg-6">
            <div class="login-reg-bg">
                <div class="log-reg-area sign">
                    <h2 class="log-title">Login</h2>
                    <form onSubmit={props.handleSubmit}>
                        <div class="form-group">
                            <Field component={Input} validate={[requireField, maxLengthCreatorEmail30]} name={"email"} placeholder={"Email"} />
                        </div>
                        <div class="form-group">
                            <Field type={"password"} component={Input} validate={[requireField, maxLengthCreatorPassword12]} name={"password"} placeholder={"Password"} />
                        </div>
                        <div class="checkbox">
                            <label>
                                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /><i class="check-box"></i>
                            </label>
                            <label style={{ paddingLeft: "25px" }}>Always Remember Me.</label>
                        </div>
                        {props.error && <div className={s.formError}>{props.error}</div>}
                        <div class="submit-btns">
                            <button type="submit" style={{ marginRight: "10px" }} class="mtr-btn signin" ><span style={{ color: "white" }}>Login</span></button>
                            <button class="mtr-btn signup"><span style={{ color: "white" }}>Register</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/MyPosts"} />
    } else {
        return <LoginReduxForm onSubmit={onSubmit} />
    }

}
let mapStateToProps = (state) => {
    return { isAuth: state.authReducerKey.isAuth }
}
export default connect(mapStateToProps, { loginThunkCreator })(Login);
