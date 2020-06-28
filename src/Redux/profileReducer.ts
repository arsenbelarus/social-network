import {profilePageType} from "./state";

const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";
export const addPostActionCreator = () => {
    return { type: addPost }
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return { type: updateNewPostText, newText: newText }
}

let initialState = {
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
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case updateNewPostText:
            if (action.newText) {
                state.newPostText = action.newText;
            }
            return state;
        default:
            return state;
    }
}

export default profileReducer;