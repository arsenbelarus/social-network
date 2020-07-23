import React from 'react';
import s from './ProfileInfo.module.css';
import {profileType} from "../../../Redux/Types";
import ProfileStatus from "./ProfileStatus";


type propsType = {
    profile: profileType,
    status: string,
    update: (status: string) => void,
}

function ProfileInfo(props: propsType) {
    debugger
    return (

        <div>
            {props.profile &&
                <div>
                    <div className={s.description}>
                        <img src={props.profile.photos.small} alt="small avatar"/>
                    </div>
                    <div className={s.description}>
                        {props.profile.fullName}
                    </div>
                    <div className={s.description}>
                        {props.profile.contacts.facebook}
                    </div>
                    <ProfileStatus profile={props.profile} status={props.status} update={props.update}/>
                </div>
            }

        </div>
    )
}

export default ProfileInfo