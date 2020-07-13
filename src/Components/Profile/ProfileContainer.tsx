import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {_stateType} from "../../Redux/Types";
import {setUsersProfile} from "../../Redux/profileReducer";
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId: number = this.props.match.params.userId;
        if (!userId) {userId = 2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUsersProfile(response.data);
        });
    }

    render() {
        return (
        <div className={s.content}>
            <Profile profile={this.props.profile}/>
        </div>
        )
    }
}

const mapStateToProps = (state: _stateType) => ({
    profile: state.profilePage.profile
})

const ProfileContainerWithUrl = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUsersProfile})(ProfileContainerWithUrl)
