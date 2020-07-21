import React from 'react';
import {Field, reduxForm, SubmitHandler} from "redux-form";

type propsType = {
    handleSubmit: SubmitHandler;
}

function AddMessageForm(props: propsType) {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message here"}/>
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