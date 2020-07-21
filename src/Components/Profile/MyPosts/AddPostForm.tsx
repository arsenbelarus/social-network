import React from 'react';
import {Field, reduxForm, SubmitHandler} from "redux-form";

type propsType = {
    handleSubmit: SubmitHandler;
}

function AddPostForm(props: propsType) {


    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={"textarea"} name={"addNewPost"} placeholder={"Add your post here"}/>
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