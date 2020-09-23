import React from 'react';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {

    return (
        <div class="col-lg-6">
            <div class="login-reg-bg">
                <div class="log-reg-area sign">
                    <h2 class="log-title">Login</h2>
                    <form onSubmit={props.handleSubmit}>
                        <div class="form-group">
                            <Field component={"input"} name={"Username"} placeholder={"Username"} />
                        </div>
                        <div class="form-group">
                            <Field component={"input"} name={"Password"} placeholder={"Password"} />
                        </div>
                        <div class="checkbox">
                            <label>
                                <Field component={"input"} name={"RememberMe"} type={"checkbox"} /><i class="check-box"></i>
                            </label>
                            <label style={{ paddingLeft: "25px" }}>Always Remember Me.</label>
                        </div>
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

const LoginReduxForm = reduxForm({ form: 'Login', onSubmit: handleSubmit => console.log(handleSubmit) })(LoginForm);

const Login = (props) => {
    return (
        <LoginReduxForm />
    );
}
export default Login;
