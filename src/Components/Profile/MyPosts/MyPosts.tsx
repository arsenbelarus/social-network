import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostReduxForm} from "./AddPostForm";

type propsType = {
    posts: Array<{ id: number, message: string, likesCount: number }>,
    addPost: (addNewPost: string) => void,
}



function MyPosts (props: propsType) {
    let postElements = props.posts.map(p => <Post message ={p.message} likesCount = {p.likesCount} />)

    const addPost = (addNewPost: string) => {
        props.addPost(addNewPost);
    }

    const onSubmit = (values: any) => {
        addPost(values.addNewPost)
    }

    return (
        <div className={s.main}>
            <h3> My posts </h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>  {postElements}  </div>
        </div>
    )
}

export default MyPosts