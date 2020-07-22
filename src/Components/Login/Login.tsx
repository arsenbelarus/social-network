import React from "react";
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/authReducer";
import {_stateType} from "../../Redux/Types";
import { Redirect } from "react-router-dom";

type loginType = {
    login: (email: string, password: string|number, rememberMe: boolean) => void,
    isAuth: boolean,
}

const Login = (props: loginType) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: _stateType) => ({
    isAuth: state.auth.isAuth
})

// @ts-ignore
export default connect(mapStateToProps, {login, logout})(Login)