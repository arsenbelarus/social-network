import {messagesPageType} from "./state";

const addMessage = "ADD-MESSAGE";
const updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessageActionCreator = () => {
    return { type: addMessage }
}
export const updateNewMessageTextActionCreator = (newMessage: string) => {
    return { type: updateNewMessageText, newMessage: newMessage }
}

const messageReducer = (state: messagesPageType, action: any) => {

    switch (action.type) {
        case updateNewMessageText:
            state.newMessageText = action.newMessage;
            return state;
        case addMessage:
            let newMessage = {id: 5, message: state.newMessageText,}
            state.messagesDataLeft.push(newMessage);
            state.newMessageText = "";
            return state;
        default: return state;
    }
}

export default messageReducer;
