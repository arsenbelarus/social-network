import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profileType} from "../../Redux/Types";

type propsType = {
    profile: profileType,
    status: string,
    update: (status: string) => void,
}

function Profile(props: propsType) {

    return (
        <div >
            <ProfileInfo profile={props.profile} status={props.status} update={props.update}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile