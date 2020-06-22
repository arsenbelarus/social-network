import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {type} from "os";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";

type propsType = {
    posts: Array<{ id: number, message: string, likesCount: number }>,
    dispatch: (action: any) => void,
    newPostText: string,
}



function MyPosts (props: propsType) {
    let postElements = props.posts.map(p => <Post message ={p.message} likesCount = {p.likesCount} />)
    let newPost: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch ( addPostActionCreator() );
    }
    let onChangeHandler = () => {
        let newText = newPost.current?.value;
        if (newText) {
            props.dispatch (updateNewPostTextActionCreator(newText));
        }
    }
    return (
        <div className={s.main}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onChangeHandler} ref={newPost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts