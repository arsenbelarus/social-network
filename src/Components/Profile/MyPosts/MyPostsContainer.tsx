import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

type propsType = {
    posts: Array<{ id: number, message: string, likesCount: number }>,
    dispatch: (action: any) => void,
    newPostText: string,
}

function MyPostsContainer (props: propsType) {

    const addPost = () => {
        props.dispatch ( addPostActionCreator() );
    }
    const onChangeHandler = (text: string) => {
        if (text) {
            props.dispatch (updateNewPostTextActionCreator(text));
        }
    }
    return (<MyPosts updateNewPostText={onChangeHandler} addPost={addPost}
                     newPostText={props.newPostText} posts={props.posts}/>)
}

export default MyPostsContainer