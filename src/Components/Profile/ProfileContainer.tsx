import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {_stateType} from "../../Redux/Types";
import {getUserProfile} from "../../Redux/profileReducer";
import { withRouter } from 'react-router-dom';
import {userApi} from "../../API/api";


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId: number = this.props.match.params.userId;
        if (!userId) {userId = 2}
        this.props.getUserProfile(userId)
    }

    render() {
        return (
        <div className={s.content}>
            <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
        </div>
        )
    }
}

const mapStateToProps = (state: _stateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

const ProfileContainerWithUrl = withRouter(ProfileContainer)

export default connect (mapStateToProps, {getUserProfile})(ProfileContainerWithUrl)
