import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../Common/FormControls/FormControls";
import {maxLength, requiredField} from "../../Utils/Validation/validators";
import s from "../Common/FormControls/FormControls.module.css"

type loginFormType = {
    handleSubmit: any;
    error: string;
}

const maxLength10 = maxLength(10);
const maxLength50 = maxLength(50);

let LoginForm = (props: loginFormType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={"text"} name={"email"} component={Input} placeholder={"email"}
                       validate={[requiredField, maxLength50]}/>
            </div>
            <div>
                <Field type={"password"} name={"password"} component={Input} placeholder={"password"}
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div style={{display: "inline-flex"}}>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> <span>remember me</span>
            </div>
            {props.error &&
            <div className={s.formSummaryError}>
                {props.error}
            </div>}
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