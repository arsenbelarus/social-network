import React from 'react';
import {deletePost, getPosts, sendNewPost} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {_stateType} from "../../../Redux/Types";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";


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
                         avatar={this.props.avatar}
                         isOwner={!this.props.match.params.userId}
                />
            </div>
        )

    }
}

const mapStateToProps = (state: _stateType) => {
    return {
        posts: state.profilePage.postsData,
        avatar: state.profilePage.profile?.photos.small
    }
}



export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {sendNewPost, getPosts, deletePost}))(MyPostsContainer)