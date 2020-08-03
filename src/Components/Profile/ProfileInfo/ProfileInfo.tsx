import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {profileType} from "../../../Redux/Types";
import avatarLogo from "../../../Assets/Images/avatar.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWtihHooks";


type propsType = {
    profile: profileType,
    status: string,
    update: (status: string) => void,
    isOwner: boolean,
    savePhoto: (e: File) => void,
}

function ProfileInfo(props: propsType) {

    const photoUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            props.savePhoto (e.target.files[0])
        }
    }

    return (

        <div>
            {props.profile &&
                <div>
                    <div className={s.description}>
                        <img src={props.profile.photos.large || avatarLogo} alt="large avatar"/>
                        {props.isOwner && <input type={"file"} onChange={photoUploadHandler}/>}
                    </div>
                    <div className={s.description}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.description}>
                        {props.profile.contacts.facebook}
                    </div>
                    <ProfileStatusWithHooks profile={props.profile} status={props.status} update={props.update}/>
                </div>
            }

        </div>
    )
}

export default ProfileInfo