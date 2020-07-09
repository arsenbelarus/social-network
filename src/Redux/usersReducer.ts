import {usersPageType, usersType} from "./state";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_QUANTITY = "SET_TOTAL_USERS_QUANTITY";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState: usersPageType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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

        default:
            return state;
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId})
export const unFollow = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers = (users: usersType[]) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersQuantity = (totalUsersQuantity: number) => ({type: SET_TOTAL_USERS_QUANTITY, totalUsersQuantity})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;