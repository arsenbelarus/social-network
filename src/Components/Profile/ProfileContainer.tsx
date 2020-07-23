import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {_stateType} from "../../Redux/Types";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/profileReducer";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedId
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
        <div className={s.content}>
            <Profile profile={this.props.profile} status={this.props.status} update={this.props.updateUserStatus}/>
        </div>
        )
    }
}

const mapStateToProps = (state: _stateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedId: state.auth.id,
    isAuth: state.auth.isAuth,
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
)(ProfileContainer);



