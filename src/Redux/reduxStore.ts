import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    friends: friendsReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof reducers>

let store: Store = createStore(reducers)

export default store