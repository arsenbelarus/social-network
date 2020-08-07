import React from "react";
import s from "./ProfileInfo.module.css";
import {profileType} from "../../../Redux/Types";
import {Button} from "@material-ui/core";

type ProfileDataTypes = {
    profile: profileType
    isOwner: boolean
    activateEditMode: () => void
}

const ProfileData = (props: ProfileDataTypes) => {
    return (
        <div className={s.profileData}>
            {
                props.isOwner &&
                <div className={s.profileDataButton}>
                    <Button variant={"outlined"} onClick={props.activateEditMode}> <strong> Edit Profile </strong> </Button>
                </div>
            }

            <div className={s.description}>
                <strong> Full name: </strong> {props.profile.fullName}
            </div>
            <div className={s.description}>
                <strong> About me: </strong> {props.profile.aboutMe}
            </div>
            <div className={s.description}>
                <strong> Looking for a job: </strong> {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {props.profile.lookingForAJob &&
            <div className={s.description}>
                <strong> Professional background: </strong> {props.profile.lookingForAJobDescription}
            </div>
            }
            <div className={s.description}>
                <strong> Contacts: </strong> {Object.keys(props.profile.contacts).map(key => {
                return <div key={key}>
                    <strong>{key}: </strong> {props.profile.contacts[key]}
                </div>
            })}
            </div>
        </div>
    )
}

export default ProfileData