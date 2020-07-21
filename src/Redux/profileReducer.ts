import {profilePageType, profileType} from "./Types";
import {profileApi, userApi} from "../API/api";
import {strict} from "assert";

const addPost = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";


let initialState = {
    profile: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    status: "",
    postsData: [
        {id: 1, message: "How are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "I want to learn React", likesCount: 35},
        {id: 4, message: "Lorem ipsum", likesCount: 1},
    ],
    newPostText: ""
}

const profileReducer = (state: profilePageType = initialState, action: any) => {

    switch (action.type) {
        case addPost:
            let newPost = {id: 5, message: action.addNewPost, likesCount: 0}
            return {
                ...state,
                postsData: [...state.postsData, newPost],
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

export const addPostActionCreator = (addNewPost: any) => {
    return {type: addPost, addNewPost}
}
const setUsersProfile = (profile: profileType) => ({type: SET_USERS_PROFILE, profile})
const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId: number) => {
    return (dispatch: any) => {
        userApi.getProfile(userId).then(response => {
            dispatch(setUsersProfile(response.data))
        });
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