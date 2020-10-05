import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { loginThunkCreator } from '../../redux/auth-reducer';
import { maxLengthCreator, requireField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import s from '../common/FormsControls/FormsControls.module.css';
import { getProfileThunkCreator } from "../../redux/profile-reducer";
import { getStatusHeadThunkCreator } from "../../redux/header-reducer";
import { appStateType } from '../../redux/redux-store';




const maxLengthCreatorEmail30 = maxLengthCreator(30);
const maxLengthCreatorPassword12 = maxLengthCreator(12);

type loginOwnPropsType = {
    captcha: string | null

}
type logonFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type logonFormValuesKeys = keyof logonFormValuesType
const LoginForm: React.FC<InjectedFormProps<logonFormValuesType, loginOwnPropsType> & loginOwnPropsType> = ({ handleSubmit, error, captcha }) => {
    return (
        <div className="col-lg-6">
            <div className="login-reg-bg">
                <div className="log-reg-area sign">
                    <h2 className="log-title">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <Field component={Input} validate={[requireField, maxLengthCreatorEmail30]} name={"email"}
                                placeholder={"Email"} />
                        </div>
                        <div className="form-group">
                            <Field type={"password"} component={Input}
                                validate={[requireField, maxLengthCreatorPassword12]} name={"password"}
                                placeholder={"Password"} />
                        </div>
                        <div className="checkbox">
                            <label>
                                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /><i
                                    className="check-box" />
                            </label>
                            <label style={{ paddingLeft: "25px" }}>Always Remember Me.</label>
                        </div>
                        {error && <div className={s.formError}>{error}</div>}
                        <div className="submit-btns">
                            {captcha && <img src={captcha} />}
                            {captcha && <Field validate={[requireField]} component={Input} name={"captcha"} />}
                            <button type="submit" style={{ marginRight: "10px" }} className="mtr-btn signin"><span
                                style={{ color: "white" }}>Login</span></button>
                            <button className="mtr-btn signup"><span style={{ color: "white" }}>Register</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
const LoginReduxForm = reduxForm<logonFormValuesType, loginOwnPropsType>({ form: 'Login' })(LoginForm);


type mapStatePropsType = {
    isAuth: boolean | null
    id: number | null
    captcha: string | null
}

type mapDispatchPropsType = {
    getStatusHeadThunkCreator:()=> void
    getProfileThunkCreator:()=> void
    loginThunkCreator:()=> void
}
type propsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    getProfileThunkCreator: (id: number | null) => void
    getStatusHeadThunkCreator: (id: number | null) => void
}
type ownPropsType = {

}


class Login extends PureComponent<propsType&mapStatePropsType & mapDispatchPropsType> {
    componentDidUpdate() {
        this.props.getProfileThunkCreator(this.props.id);
        this.props.getStatusHeadThunkCreator(this.props.id);
    }
    render() {
        const onSubmit = (formData: logonFormValuesType) => {
            this.props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha);
        }
        if (this.props.isAuth) {
            return <Redirect to={"/MyPosts"} />
        } else {
            return <LoginReduxForm captcha={this.props.captcha} onSubmit={onSubmit} />
        }
    }
}

let mapStateToProps = (state: appStateType): mapStatePropsType => ({
    isAuth: state.authReducerKey.isAuth,
    id: state.authReducerKey.id,
    captcha: state.authReducerKey.captcha
})
export default connect<mapStatePropsType, mapDispatchPropsType, ownPropsType, appStateType>(mapStateToProps, 
    { loginThunkCreator, getStatusHeadThunkCreator, getProfileThunkCreator })(Login);
