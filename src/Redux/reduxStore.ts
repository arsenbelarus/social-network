import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import friendsReducer from "./friendsReducer";
import {storeType} from "./state";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    friends: friendsReducer,
})

let store: storeType = createStore(reducers)

export default store