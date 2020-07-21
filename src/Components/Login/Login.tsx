import React from "react";
import {LoginReduxForm} from "./LoginForm";

type loginType = {}

const Login = (props: loginType) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

export default Login