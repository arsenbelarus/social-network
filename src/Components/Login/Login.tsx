import React from "react";
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {getCaptcha, login, logout} from "../../Redux/authReducer";
import {_stateType} from "../../Redux/Types";
import { Redirect } from "react-router-dom";

type loginType = {
    login: (email: string, password: string|number, rememberMe: boolean, captcha: string) => void,
    isAuth: boolean,
    captchaUrl: string,
}

const Login = (props: loginType) => {
    const onSubmit = (formData: { email: string, password: string|number, rememberMe: boolean, captcha: string}) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state: _stateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

// @ts-ignore
export default connect(mapStateToProps, {login, logout, getCaptcha})(Login)