import {profilePageType} from "./state";

const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";
export const addPostActionCreator = () => {
    return { type: addPost }
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return { type: updateNewPostText, newText: newText }
}

const profileReducer = (state: profilePageType, action: any) => {

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