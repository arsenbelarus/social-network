import React from 'react';
import s from './ProfileInfo.module.css';
import {profileType} from "../../../Redux/Types";
import ProfileStatus from "./ProfileStatus";


type propsType = {
    profile: profileType
}

function ProfileInfo(props: propsType) {
    return (
        <div>
{/*            <div className={s.profileImage}>
                <img src="https://www.colbeck.co.uk/wp-content/uploads/2018/09/sunset-banner.jpg" alt="banner"/>
            </div>*/}
            <div className={s.description}>
                <img src={props.profile.photos.small} alt="small avatar"/>
            </div>
            <div className={s.description}>
                {props.profile.fullName}
            </div>
            <div className={s.description}>
                {props.profile.contacts.facebook}
            </div>
            <ProfileStatus profile={props.profile}/>
        </div>
    )
}

export default ProfileInfo