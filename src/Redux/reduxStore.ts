import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    friends: friendsReducer,
})

export type AppStateType = ReturnType<typeof reducers>

let store: Store = createStore(reducers)

export default store