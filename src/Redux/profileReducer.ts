import {profilePageType, profileType} from "./Types";

const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";


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
            let newPost = { id: 5, message: state.newPostText, likesCount: 0 }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: "",
            }

        case updateNewPostText:
            if (action.newText) {
                return {
                    ...state,
                    newPostText: action.newText,
                }
            }
        case SET_USER_PROFILE:
            return {
                ...state,

            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: addPost }
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return { type: updateNewPostText, newText: newText }
}
export const setUsersProfile = (profile: profileType) => ({type: SET_USER_PROFILE, profile})


export default profileReducer;