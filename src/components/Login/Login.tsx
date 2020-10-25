import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { loginThunkCreator } from '../../redux/auth-reducer';
import { maxLengthCreator, requireField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import s from '../common/FormsControls/FormsControls.module.css';
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
        <div class="col-lg-6">
            <div class="login-reg-bg">
                <div class="log-reg-area sign">
                    <h2 class="log-title">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <Field component={Input} validate={[requireField, maxLengthCreatorEmail30]} name={"email"}
                                placeholder={"Email"} />
                        </div>
                        <div class="form-group">
                            <Field type={"password"} component={Input}
                                validate={[requireField, maxLengthCreatorPassword12]} name={"password"}
                                placeholder={"Password"} />
                        </div>
                        <div class="checkbox">
                            <label>
                                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /><i
                                    class="check-box" />
                            </label>
                            <label style={{ paddingLeft: "25px" }}>Always Remember Me.</label>
                        </div>
                        {error && <div class={s.formError}>{error}</div>}
                        <div class="submit-btns">
                            {captcha && <img src={captcha} />}
                            {captcha && <Field validate={[requireField]} component={Input} name={"captcha"} />}
                            <button type="submit" style={{ marginRight: "10px" }} class="mtr-btn signin"><span
                                style={{ color: "white" }}>Login</span></button>
                            <button class="mtr-btn signup"><span style={{ color: "white" }}>Register</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
const LoginReduxForm = reduxForm<logonFormValuesType, loginOwnPropsType>({ form: 'Login' })(LoginForm);



export const Login: React.FC = () => {
    const captcha = useSelector((state: appStateType) => state.authReducerKey.captcha)
    const isAuth = useSelector((state: appStateType) => state.authReducerKey.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: logonFormValuesType) => {
        dispatch(loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={"/Profile"} />
    } else {
        return <LoginReduxForm captcha={captcha} onSubmit={onSubmit} />
    }
}
