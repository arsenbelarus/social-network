import {usersPageType, usersType} from "./state";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState: usersPageType =  {
    users: [],
}



const usersReducer = (state: usersPageType = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followActionCreator = (userId: number) => ({type: FOLLOW, userId})
export const unFollowActionCreator = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users: usersType[]) => ({type: SET_USERS, users})

export default usersReducer;