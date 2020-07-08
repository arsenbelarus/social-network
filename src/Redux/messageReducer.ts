import {messagesPageType} from "./state";

const addMessage = "ADD-MESSAGE";
const updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessageActionCreator = () => {
    return {type: addMessage}
}
export const updateNewMessageTextActionCreator = (newMessage: string) => {
    return {type: updateNewMessageText, newMessage: newMessage}
}

let initialState = {
    dialogsData: [
        {id: 1, name: "Arsen"},
        {id: 2, name: "Olya"},
        {id: 3, name: "Tigran"},
        {id: 4, name: "David"},
    ],
    messagesDataLeft: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Hello world"},
        {id: 4, message: "Lorem ipsum"},
    ],
    messagesDataRight: [
        {id: 1, message: "I love my wife"},
        {id: 2, message: "fg gfdgsdfg g fd"},
        {id: 3, message: "fg dfgdf dfg "},
        {id: 4, message: " fd sgdf dfg df "},
    ],
    newMessageText: "",
}

const messageReducer = (state: messagesPageType = initialState, action: any) => {
    switch (action.type) {
        case updateNewMessageText:
            return {
                ...state,
                newMessageText: action.newMessage,
            }
        case addMessage:
            let newMessage = {id: 5, message: state.newMessageText,}
            return {
                ...state,
                messagesDataLeft: [...state.messagesDataLeft, newMessage],
                newMessageText: "",
            }
        default:
            return state;
    }
}

export default messageReducer;
