import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {_stateType} from "../../../Redux/state";
import {connect} from "react-redux";

const mapStateToProps = (state: _stateType) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            if (text) {
                dispatch (updateNewPostTextActionCreator(text));
            }
        },
        addPost: () => {
            dispatch ( addPostActionCreator() )
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer