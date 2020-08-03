import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {_stateType} from "../../Redux/Types";
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus} from "../../Redux/profileReducer";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<any> {

    goToProfile () {
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

    componentDidMount() {
        this.goToProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.goToProfile()
        }
    }

    render() {
        return (
        <div className={s.content}>
            <Profile profile={this.props.profile} status={this.props.status}
                     update={this.props.updateUserStatus} isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}/>
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
    connect (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
)(ProfileContainer);



