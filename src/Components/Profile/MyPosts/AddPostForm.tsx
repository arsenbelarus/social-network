import React from 'react';
import {Field, reduxForm, reset, SubmitHandler} from "redux-form";
import {MyTextarea} from "../../Common/FormControls/FormControls";

type propsType = {
    handleSubmit: SubmitHandler;
}

const AddPostForm = React.memo((props: propsType) => {

    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={MyTextarea} name={"addNewPost"}
                           placeholder={"Add your post here"}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
        </form>
    )
})

const afterSubmit = (result: any, dispatch: any) => {
    dispatch(reset('AddPost'));
}

export const AddPostReduxForm = reduxForm({
    form: 'AddPost',
    onSubmitSuccess: afterSubmit,
})(AddPostForm)