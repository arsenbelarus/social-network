import React from "react";
import { Field, reduxForm } from 'redux-form'

type loginFormType = {
    handleSubmit: any;
}

let LoginForm = (props: loginFormType) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type={"text"}  name={"input"} component={"input"} placeholder={"login"}/>
                </div>
                <div>
                    <Field type={"password"} name={"password"} component={"input"} placeholder={"password"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"checkbox"} component={"input"}/> <span>remember me</span>
                </div>
                <div>
                    <button>Sign in</button>
                </div>
            </form>
    )
}

export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)