import React from 'react';
import {Field, reduxForm, SubmitHandler} from "redux-form";
import {maxLength, requiredField} from "../../../Utils/Validation/validators";
import {Textarea} from "../../Common/FormControls/FormControls";

type propsType = {
    handleSubmit: SubmitHandler;
}
const maxLength10 = maxLength(10);

function AddPostForm(props: propsType) {

    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={"addNewPost"}
                           placeholder={"Add your post here"} validate={[requiredField, maxLength10]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({
    form: 'AddPost'
})(AddPostForm)