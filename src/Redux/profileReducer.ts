import {photosType, postsDataType, postType, profilePageType, profileType} from "./Types";
import {postApi, profileApi, userApi} from "../API/api";
import {stopSubmit} from "redux-form";

const addPost = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const SET_UPDATED_PROFILE_STATUS = "SET_UPDATED_PROFILE_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_POSTS = "SET_POSTS";


let initialState = {
    profile: null,
    status: "",
    postsData: [],
}

const profileReducer = (state: profilePageType = initialState, action: any) => {

    switch (action.type) {
        case addPost:
            return {
                ...state,
                postsData: [...state.postsData, {...action.post}],
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.id),
            }
        case SET_POSTS:
            return {
                ...state,
                postsData: action.posts,
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
        case SET_USER_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SET_UPDATED_PROFILE_STATUS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    fullName: action.profile.fullName,
                    lookingForAJobDescription: action.profile.lookingForAJobDescription,
                    lookingForAJob: action.profile.lookingForAJob,
                    aboutMe: action.profile.aboutMe,
                    contacts: {
                        ...action.profile.contacts
                    }
                }
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (post: postType) => {
    return {type: addPost, post}
}
export const deletePostActionCreator = (id: number) => {
    return {type: DELETE_POST, id}
}
const setPosts = (posts: postsDataType) => ({type: SET_POSTS, posts})
const setUsersProfile = (profile: profileType) => ({type: SET_USERS_PROFILE, profile})
const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status})
const setUserPhoto = (photos: photosType) => ({type: SET_USER_PHOTO, photos})
const setUpdatedProfileData = (profile: profileType) => ({type: SET_UPDATED_PROFILE_STATUS, profile})

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

export const savePhoto = (file: File) => {
    return (dispatch: any) => {
        profileApi.savePhoto(file)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserPhoto(response.data.data.photos))
                }
            });
    }
}

export const updateProfileData = (profile: profileType) => async (dispatch: any) => {
    const response = await profileApi.updateProfileData(profile)
    if (response.data.resultCode === 0) {
        dispatch(setUpdatedProfileData(profile))
    } else {
        let key = response.data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
        dispatch(stopSubmit("profileData", {contacts: {[key]: response.data.messages[0]}}))
        return Promise.reject(response.data.messages[0])
    }
}

export const getPosts = () => async (dispatch: any) => {
    debugger
    const response = await postApi.getPosts()
    if (response.status === 200) {
        response.data = Object.keys(response.data).map(key => {// @ts-ignore
            return [response.data[key], key]})
        dispatch(setPosts(response.data))
    }
}

export const sendNewPost = (post: postType) => async (dispatch: any) => {
    const response = await postApi.sendPost(post)
    if (response.status === 200) {
        dispatch(getPosts())
    }
}
export const deletePost = (serverID: string) => async (dispatch: any) => {
    const response = await postApi.deletePost(serverID)
    if (response.status === 200) {
        dispatch(getPosts())
    }
}


export default profileReducer;