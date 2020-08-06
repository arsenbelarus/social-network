import React from 'react';
import s from './Post.module.css';

type propsType = {
    message: string,
    likesCount: number,
    deletePost: (postId: string) => void,
    serverID: string
};

const Post = React.memo((props: propsType) => {
    return (
        <div className={s.item}>
            <img src={"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"}/>
            {props.message}
            <div>
                <span>{props.likesCount}  likes</span>
            </div>
            <div>
                <button onClick={() => props.deletePost(props.serverID)}> Delete post </button>
            </div>
        </div>
    )
})

export default Post