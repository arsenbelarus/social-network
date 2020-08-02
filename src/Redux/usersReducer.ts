import {usersPageType, usersType} from "./Types";
import {userApi} from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_QUANTITY = "SET_TOTAL_USERS_QUANTITY";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOW_STATUS_CHANGING = "TOGGLE_FOLLOW_STATUS_CHANGING";

let initialState: usersPageType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowStatusChanging: [],
}


const usersReducer = (state: usersPageType = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case SET_TOTAL_USERS_QUANTITY:
            return {
                ...state,
                totalUsersCount: action.totalUsersQuantity,
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOW_STATUS_CHANGING:
            return {
                ...state,
                isFollowStatusChanging: action.isFollowStatusChanging
                    ? [...state.isFollowStatusChanging, action.userId]
                    : state.isFollowStatusChanging.filter(id => id !== action.userId),
            }
        default:
            return state;
    }
}


// Action creators
export const followSuccess = (userId: number) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId: number) => ({type: UNFOLLOW, userId});
export const setUsers = (users: usersType[]) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersQuantity = (totalUsersQuantity: number) => ({
    type: SET_TOTAL_USERS_QUANTITY,
    totalUsersQuantity
});
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowStatusChanging = (isFollowStatusChanging: boolean, userId: number) =>
    ({type: TOGGLE_FOLLOW_STATUS_CHANGING, isFollowStatusChanging, userId});


// Thunk creators
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setUsers([]));
        dispatch(setCurrentPage(currentPage));
        userApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersQuantity(data.totalCount));
        });
    }
}
export const unFollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch (toggleFollowStatusChanging(true, userId))
        userApi.unFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch (unFollowSuccess(userId))
            }
            dispatch (toggleFollowStatusChanging(false, userId))
        });
    }
}
export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch (toggleFollowStatusChanging(true, userId))
        userApi.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch (followSuccess(userId))
            }
            dispatch (toggleFollowStatusChanging(false, userId))
        });
    }
}


export default usersReducer;