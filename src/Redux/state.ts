import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import friendsReducer from "./friendsReducer";

export type postsDataType = Array <{ id: number, message: string, likesCount: number }>
export type profilePageType = { postsData: postsDataType, newPostText: string }
export type dialogsDataType = { id: number, name: string}
export type messagesDataType = { id: number, message: string }
export type messagesPageType = { dialogsData: dialogsDataType[], messagesDataLeft: messagesDataType[], messagesDataRight: messagesDataType[], newMessageText: string }
export type friendsType = { name: string, imgSource: string }
export type _stateType = { profilePage: profilePageType, messagesPage: messagesPageType, friends: friendsType[] }
export type storeType = {
    _state: _stateType,
    _callSubscriber: (state: storeType) => void,
    getState: () => _stateType,
    subscribe: (observer: (state: storeType) => void) => void
    dispatch: (action: any, newText?: string) => void
}

let store: storeType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "How are you?", likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 20},
                {id: 3, message: "I want to learn React", likesCount: 35},
                {id: 4, message: "Lorem ipsum", likesCount: 1},
            ],
            newPostText: ""
        },
        messagesPage: {
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
        },

        friends: [
            {name: "David", imgSource: "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"},
            {name: "Tigran", imgSource: "https://freesvg.org/img/myAvatar.png"},
            {name: "Olga", imgSource: "https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695985-stock-illustration-male-avatar.jpg"},
        ],

    },
    _callSubscriber(state: storeType) {

    },

    getState() {
        return this._state;
    },
    subscribe(observer: (state: storeType) => void) {
        this._callSubscriber = observer;
    },

    dispatch (action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._state.friends = friendsReducer(this._state.friends, action)

        this._callSubscriber(this)
    }
}

export default store;
