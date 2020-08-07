import React from "react";
import s from "./FormControls.module.css"
import {Input, TextField} from "@material-ui/core";


type propsType = {}

// @ts-ignore
export const MyTextarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <TextField variant={"outlined"} multiline {...input} {...props} />
            </div>
            {hasError &&  <span>{meta.error}</span> }
        </div>
    )
}

// @ts-ignore
export const MyInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <Input {...input} {...props} />
            </div>
            {hasError &&  <span>{meta.error}</span> }
        </div>
    )
}

// @ts-ignore
export const InputCheckbox = ({input, meta, ...props}) => {
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