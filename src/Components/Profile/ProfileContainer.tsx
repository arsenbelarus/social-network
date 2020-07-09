import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {_stateType} from "../../Redux/Types";
import {setUsersProfile} from "../../Redux/profileReducer";


class ProfileApiContainer extends React.Component<any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

const ProfileContainer = connect (mapStateToProps, {setUsersProfile})(ProfileApiContainer)

export default ProfileContainer