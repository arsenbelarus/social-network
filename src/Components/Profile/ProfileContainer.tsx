import React from 'react';
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {_stateType} from "../../Redux/Types";
import {getUserProfile} from "../../Redux/profileReducer";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId: number = this.props.match.params.userId;
        if (!userId) {userId = 2}
        this.props.getUserProfile(userId)
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
    profile: state.profilePage.profile,
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect (mapStateToProps, {getUserProfile}),
)(ProfileContainer);



