import {profilePageType, profileType} from "./Types";
import {profileApi, userApi} from "../API/api";
import {strict} from "assert";

const addPost = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";


let initialState = {
    profile: null,
    status: "",
    postsData: [
        {id: 1, message: "How are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "I want to learn React", likesCount: 35},
        {id: 4, message: "Lorem ipsum", likesCount: 1},
    ],
}

const profileReducer = (state: profilePageType = initialState, action: any) => {

    switch (action.type) {
        case addPost:
            let newPost = {id: 5, message: action.addNewPost, likesCount: 0}
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.id),
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (addNewPost: string) => {
    return {type: addPost, addNewPost}
}
export const deletePostActionCreator = (id: number) => {
    return {type: DELETE_POST, id}
}
const setUsersProfile = (profile: profileType) => ({type: SET_USERS_PROFILE, profile})
const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId: number) => {
    return (dispatch: any) => {
        userApi.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
            })
    }
}

export const getUserStatus = (userId: number) => {
    return (dispatch: any) => {
        profileApi.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))
        });
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: any) => {
        profileApi.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        });
    }
}


export default profileReducer;