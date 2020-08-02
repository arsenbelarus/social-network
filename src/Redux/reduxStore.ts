import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

export type AppStateType = ReturnType<typeof reducers>

let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store