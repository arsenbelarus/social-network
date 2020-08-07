import React from "react";
import s from "./ProfileInfo.module.css";
import {profileType} from "../../../Redux/Types";
import {InputCheckbox, MyInput, MyTextarea} from "../../Common/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../Utils/Validation/validators";

type ProfileDataFormTypes = {
    handleSubmit: any;
    error: string;
    profile: profileType;
}

const ProfileDataForm = (props: ProfileDataFormTypes) => {
    return (
        <div className={s.profileData}>
            <form onSubmit={props.handleSubmit} >
                <div className={s.profileDataButton}>
                    <button><strong> Save changes </strong></button>
                    {props.error && <div className={s.formSummaryError}>
                        {props.error}
                    </div>
                    }
                </div>
                <div className={s.formControlItem}>
                    <p>Full name</p>
                    <Field type={"text"} name={"fullName"} component={MyInput} placeholder={"Full name"}
                           validate={[requiredField]}/>
                </div>
                <div>
                    <p>Looking for a job</p>
                    <Field type={"checkbox"} name={"lookingForAJob"} component={InputCheckbox}/>
                </div>
                <div>
                    <p>My professional skills</p>
                    <Field type={"textarea"} name={"lookingForAJobDescription"} component={MyTextarea}
                           validate={[requiredField]}/>
                </div>
                <div>
                    <p>About me</p>
                    <Field type={"textarea"} name={"aboutMe"} component={MyTextarea}
                           validate={[requiredField]}/>
                </div>
                <div>
                    <p>Contacts</p>
                    {Object.keys(props.profile.contacts).map(key => {
                        return (
                            <div>
                                <strong> {key}: </strong> <Field type={"text"} name={"contacts." + key}
                                                                 component={MyInput}/>
                            </div>
                        )
                    })}
                </div>
            </form>
        </div>
    )
}

export const ProfileDataReduxForm = reduxForm<any, any>({
    form: 'profileData'
})(ProfileDataForm)