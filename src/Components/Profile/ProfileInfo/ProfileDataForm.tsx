import React from "react";
import s from "./ProfileInfo.module.css";
import {profileType} from "../../../Redux/Types";
import {Input, Textarea} from "../../Common/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../Utils/Validation/validators";

type ProfileDataFormTypes = {
    handleSubmit: any;
    error: string;
    profile: profileType;
}

const ProfileDataForm = (props: ProfileDataFormTypes) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button> Save changes</button>
                {props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>
                }
            </div>
            <div>
                <p>Full name</p>
                <Field type={"text"} name={"fullName"} component={Input} placeholder={"Full name"}
                       validate={[requiredField]}/>
            </div>
            <div>
                <p>Looking for a job</p>
                <Field type={"checkbox"} name={"lookingForAJob"} component={Input}/>
            </div>
            <div>
                <p>My professional skills</p>
                <Field type={"textarea"} name={"lookingForAJobDescription"} component={Textarea}
                       validate={[requiredField]}/>
            </div>
            <div>
                <p>About me</p>
                <Field type={"textarea"} name={"aboutMe"} component={Textarea}
                       validate={[requiredField]}/>
            </div>
            <div>
                <p>Contacts</p>
                {Object.keys(props.profile.contacts).map(key => {
                    return (
                        <div>
                            <strong> {key}: </strong> <Field type={"text"} name={"contacts."+key} component={Input}/>
                        </div>
                        )
                }) }
            </div>

        </form>
    )
}

export const ProfileDataReduxForm = reduxForm<any, any>({
    form: 'profileData'
})(ProfileDataForm)