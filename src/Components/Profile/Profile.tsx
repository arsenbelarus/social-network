import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type propsType = {
    posts: Array<{ id: number, message: string, likesCount: number }>,
    dispatch: (action: any) => void,
    newPostText: string,
}

function Profile(props: propsType) {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer posts = {props.posts}
                     dispatch = {props.dispatch}
                     newPostText = {props.newPostText}/>
        </div>
    )
}

export default Profile