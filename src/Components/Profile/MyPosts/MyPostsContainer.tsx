import React from 'react';
import {addPostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {_stateType} from "../../../Redux/Types";
import {connect} from "react-redux";

const mapStateToProps = (state: _stateType) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (addNewPost: string) => {
            dispatch ( addPostActionCreator(addNewPost) )
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer