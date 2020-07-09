import React from "react";
import {connect} from "react-redux";
import {_stateType} from "../../Redux/Types";
import {follow, setCurrentPage, setTotalUsersQuantity,
        setUsers, toggleIsFetching, unFollow} from "../../Redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersAPIContainer extends React.Component<any> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersQuantity(response.data.totalCount);
        });
    }

    onPaginationClickHandler = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setUsers([]);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
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
    }
}

const UsersContainer = connect (mapStateToProps, {follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersQuantity, toggleIsFetching})(UsersAPIContainer)

export default UsersContainer