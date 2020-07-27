import {_stateType} from "./Types";
import {createSelector} from "reselect";

const getUsersPrimitiveSelector = (state: _stateType) => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsersPrimitiveSelector, (users) => {return users.filter(u => true)})


export const getPageSizeSelector = (state: _stateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state: _stateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state: _stateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state: _stateType) => {
    return state.usersPage.isFetching
}

export const getIsFollowStatusChangingSelector = (state: _stateType) => {
    return state.usersPage.isFollowStatusChanging
}