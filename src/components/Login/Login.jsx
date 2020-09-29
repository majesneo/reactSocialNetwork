import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {loginThunkCreator} from '../../redux/auth-reducer';
import {maxLengthCreator, requireField} from '../../utils/validators/validators';
import {Input} from '../common/FormsControls/FormsControls';
import s from '../common/FormsControls/FormsControls.module.css';
import {getProfileThunkCreator} from "../../redux/profile-reducer";
import {getStatusHeadThunkCreator} from "../../redux/header-reducer";


const maxLengthCreatorEmail30 = maxLengthCreator(30);
const maxLengthCreatorPassword12 = maxLengthCreator(12);

const LoginForm = ({handleSubmit, error, captcha}) => {
    return (
        <div class="col-lg-6">
            <div class="login-reg-bg">
                <div class="log-reg-area sign">
                    <h2 class="log-title">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <Field component={Input} validate={[requireField, maxLengthCreatorEmail30]} name={"email"}
                                   placeholder={"Email"}/>
                        </div>
                        <div class="form-group">
                            <Field type={"password"} component={Input}
                                   validate={[requireField, maxLengthCreatorPassword12]} name={"password"}
                                   placeholder={"Password"}/>
                        </div>
                        <div class="checkbox">
                            <label>
                                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/><i
                                class="check-box"/>
                            </label>
                            <label style={{paddingLeft: "25px"}}>Always Remember Me.</label>
                        </div>
                        {error && <div className={s.formError}>{error}</div>}
                        <div class="submit-btns">
                            {captcha && <img src={captcha}/>}
                            {captcha && <Field validate={[requireField]} component={Input} name={"captcha"}/>}
                            <button type="submit" style={{marginRight: "10px"}} class="mtr-btn signin"><span
                                style={{color: "white"}}>Login</span></button>
                            <button class="mtr-btn signup"><span style={{color: "white"}}>Register</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm);

class Login extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props != this.prevProps) {
            this.props.getProfileThunkCreator(this.props.id);
            this.props.getStatusHeadThunkCreator(this.props.id);
        }
    }

    render() {

        const onSubmit = (formData) => {
            this.props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);

        }
        if (this.props.isAuth) {
            return <Redirect to={"/MyPosts"}/>
        } else {
            return <LoginReduxForm captcha={this.props.captcha} onSubmit={onSubmit}/>
        }

    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authReducerKey.isAuth, id: state.authReducerKey.id, captcha: state.authReducerKey.captcha
})
export default connect(mapStateToProps, {loginThunkCreator, getStatusHeadThunkCreator, getProfileThunkCreator})(Login);
