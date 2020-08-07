import React from 'react';
import {Field, reduxForm, SubmitHandler} from "redux-form";
import {MyTextarea} from "../Common/FormControls/FormControls";
import {maxLength, requiredField} from "../../Utils/Validation/validators";

type propsType = {
    handleSubmit: SubmitHandler;
}

function AddMessageForm(props: propsType) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={MyTextarea} name={"newMessageBody"} placeholder={"Enter your message here"}/>
            </div>
            <div>
                <button> Add message </button>
            </div>

        </form>

    )
}

export const AddMessageReduxForm = reduxForm({
    form: 'AddMessage'
})(AddMessageForm)