import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type propsType = {
    posts: any,
}

function Profile(props: propsType) {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts = {props.posts.postsData}/>
        </div>
    )
}

export default Profile