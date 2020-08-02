import {authType} from "./Types";
import {loginApi, userApi} from "../API/api";
import {stopSubmit} from "redux-form";
import {getFriends, setFriends} from "./friendsReducer";


const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state: authType = initialState, action: any) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setUserData = (id: number|null, email: string|null, login: string|null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

export const checkAuth = () => {
   return (dispatch: any) => {
       return userApi.checkAuth()
           .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch (setUserData (id, email, login, true))
            }
        });
    }
}

export const login = (email: string, password: string|number, rememberMe: boolean) => {
    return (dispatch: any) => {
        loginApi.signIn({email, password, rememberMe})
            .then(data => {
            if (data.data.resultCode === 0) {
                dispatch (checkAuth())
                dispatch (getFriends())
            } else {
                let formErrorMessage = data.data.messages.length > 0 ? data.data.messages : "Error occurred";
                dispatch(stopSubmit("login", {_error: `${formErrorMessage}`}))
            }
        });
    }
}

export const logout = () => {
    return (dispatch: any) => {
        loginApi.signOut()
            .then(data => {
            if (data.data. resultCode === 0) {
                dispatch (setUserData (null, null, null, false))
                dispatch (setFriends([]))
            }
        });
    }
}


export default authReducer;