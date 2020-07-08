import React from "react"
import Users from "./Users";
import {connect} from "react-redux";
import {_stateType, usersType} from "../../Redux/state";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../Redux/usersReducer";


const mapStateToProps = (state: _stateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch (followActionCreator(userId))
        },
        unFollow: (userId: number) => {
            dispatch (unFollowActionCreator(userId))
        },
        setUsers: (users: Array<usersType>) => {
            dispatch (setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer