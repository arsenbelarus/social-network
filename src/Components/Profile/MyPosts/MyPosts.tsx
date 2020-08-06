import React, {useCallback} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostReduxForm} from "./AddPostForm";
import {postType} from "../../../Redux/Types";

type propsType = {
    posts: any,
    sendNewPost: (post: postType) => void,
    deletePost: (serverID: string) => void,
}


const MyPosts = React.memo((props: propsType) => {
    let postElements;
    debugger
    const deletePost = useCallback((serverID: string) => {
        props.deletePost(serverID)
    }, [props.deletePost])
    if (props.posts !== null) {
        postElements = props.posts.map((p: any) => {
            return <Post key={p[0].id}
                         message={p[0].message}
                         likesCount={p[0].likesCount}
                         serverID={p[1]}
                         deletePost={deletePost}
            />
        }).reverse()
    }


    const onSubmit = (values: any) => {
        const post = {id: Math.random(), message: values.addNewPost, likesCount: 0}
        props.sendNewPost(post)
    }

    return (
        <div className={s.main}>
            <h3> My posts </h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>  {postElements}  </div>
        </div>
    )
})

export default MyPosts