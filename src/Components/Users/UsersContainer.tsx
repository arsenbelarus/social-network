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
import {compose} from "redux";
import {
    getCurrentPageSelector, getIsFetchingSelector, getIsFollowStatusChangingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../Redux/user-selector";


class UsersContainer extends React.Component<any> {

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
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFollowStatusChanging: getIsFollowStatusChangingSelector(state),
    }
}


export default compose(

    connect (mapStateToProps, {follow,
        toggleFollowStatusChanging, getUsers, unFollow})
)(UsersContainer)
