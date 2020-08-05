import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../Common/FormControls/FormControls";
import {maxLength, requiredField} from "../../Utils/Validation/validators";
import s from "../Common/FormControls/FormControls.module.css"

type loginFormType = {
    captchaUrl: string | null
}

const maxLength10 = maxLength(10);
const maxLength50 = maxLength(50);

let LoginForm: React.FC<InjectedFormProps<any, loginFormType> & loginFormType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
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
            {
                captchaUrl &&
                <div> <img src={captchaUrl} alt="Captcha"/> </div>
            }
            {
                captchaUrl &&
                <div>
                    <Field type={"text"} name={"captcha"} component={Input}
                           placeholder={"Type antibot symbols"}
                           validate={[requiredField]}/>
                </div>
            }
            {
                error &&
            <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<any, any>({
    // a unique name for the form
    form: 'login'
})(LoginForm)