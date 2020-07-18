import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {profileType} from "../../Redux/Types";
import { Redirect } from 'react-router-dom';

type propsType = {
    profile: profileType,
}

function Profile(props: propsType) {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile