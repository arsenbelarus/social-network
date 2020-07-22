import React from 'react';
import {Field, reduxForm, SubmitHandler} from "redux-form";
import {Textarea} from "../Common/FormControls/FormControls";
import {maxLength, requiredField} from "../../Utils/Validation/validators";

type propsType = {
    handleSubmit: SubmitHandler;
}

const maxLength20 = maxLength(20);

function AddMessageForm(props: propsType) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter your message here"}
                       validate={[requiredField, maxLength20]}/>
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