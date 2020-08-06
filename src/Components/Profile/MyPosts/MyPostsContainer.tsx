import React from 'react';
import {deletePost, getPosts, sendNewPost} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {_stateType} from "../../../Redux/Types";
import {connect} from "react-redux";


class MyPostsContainer extends React.Component<any> {

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <div>
                <MyPosts posts={this.props.posts}
                         sendNewPost={this.props.sendNewPost}
                         deletePost={this.props.deletePost}
                />
            </div>
        )

    }
}

const mapStateToProps = (state: _stateType) => {
    return {
        posts: state.profilePage.postsData,
    }
}



export default connect(mapStateToProps, {sendNewPost, getPosts, deletePost})(MyPostsContainer)