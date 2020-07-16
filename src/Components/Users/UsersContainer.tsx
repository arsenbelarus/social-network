import React from "react";
import {connect} from "react-redux";
import {_stateType} from "../../Redux/Types";
import {
    follow,
    getUsers,
    toggleFollowStatusChanging,
    unFollow,
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersAPIContainer extends React.Component<any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPaginationClickHandler = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
        <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   isFollowStatusChanging = {this.props.isFollowStatusChanging}
                   toggleIsFollowStatusChanging = {this.props.toggleIsFollowStatusChanging}
                   onPaginationClickHandler={this.onPaginationClickHandler}
                   users={this.props.users}/>
        </>

        )

    }
}

const mapStateToProps = (state: _stateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowStatusChanging: state.usersPage.isFollowStatusChanging,
    }
}

const UsersContainer = connect (mapStateToProps, {follow,
    toggleFollowStatusChanging, getUsers, unFollow})(UsersAPIContainer)

export default UsersContainer