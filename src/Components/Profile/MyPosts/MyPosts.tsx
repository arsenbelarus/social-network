import React, {useCallback} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostReduxForm} from "./AddPostForm";
import {postType} from "../../../Redux/Types";

type propsType = {
    posts: [postType, string],
    sendNewPost: (post: postType) => void,
    deletePost: (serverID: string) => void,
    avatar: string,
    isOwner: boolean,
}


const MyPosts = React.memo((props: propsType) => {
    let postElements;
    const deletePost = useCallback((serverID: string) => {
        props.deletePost(serverID)
    }, [props])
    if (props.posts !== null) {
        if (props.isOwner) {
            if (props.isOwner) {
                postElements = props.posts.map((p: any) => {
                    return <Post key={p[0].id}
                                 message={p[0].message}
                                 likesCount={p[0].likesCount}
                                 serverID={p[1]}
                                 deletePost={deletePost}
                                 avatar={props.avatar}
                    />
                }).reverse()
            }
        }
    }


    const onSubmit = useCallback((values: any) => {
        const post = {id: Math.random(), message: values.addNewPost, likesCount: 0}
        props.sendNewPost(post)
    }, [])

    return (
        <div className={s.main}>
            <h3> My posts </h3>
            <AddPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>  {postElements}  </div>
        </div>
    )
})

export default MyPosts