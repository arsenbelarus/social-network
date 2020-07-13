import React from "react";
import {connect} from "react-redux";
import {_stateType} from "../../Redux/Types";
import {
    follow, setCurrentPage, setTotalUsersQuantity,
    setUsers, toggleIsFetching, toggleIsFollowStatusChanging, unFollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {userApi} from "../../API/api";


class UsersAPIContainer extends React.Component<any> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        userApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersQuantity(data.totalCount);
        });
    }

    onPaginationClickHandler = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setUsers([]);
        this.props.setCurrentPage(pageNumber);
        userApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
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

const UsersContainer = connect (mapStateToProps, {follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersQuantity, toggleIsFetching, toggleIsFollowStatusChanging})(UsersAPIContainer)

export default UsersContainer