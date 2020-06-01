import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let postsData = [
    {id: 1, message: "How are you?", likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 3, message: "I want to learn React", likesCount: 35},
    {id: 4, message: "Lorem ipsum", likesCount: 1},
]

function MyPosts () {
    return (
        <div className={s.main}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                 <Post message ={postsData[0].message} likesCount = {postsData[0].likesCount} />
                 <Post message = {postsData[1].message} likesCount = {postsData[1].likesCount} />
                 <Post message = {postsData[2].message} likesCount = {postsData[2].likesCount} />
                 <Post message = {postsData[3].message} likesCount = {postsData[3].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts