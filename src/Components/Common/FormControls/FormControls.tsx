import React from "react";
import s from "./FormControls.module.css"

type propsType = {}

// @ts-ignore
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError &&  <span>{meta.error}</span> }
        </div>
    )
}

// @ts-ignore
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError &&  <span>{meta.error}</span> }
        </div>
    )
}