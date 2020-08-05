import {authType} from "./Types";
import {loginApi, securityApi, userApi} from "../API/api";
import {stopSubmit} from "redux-form";
import {getFriends, setFriends} from "./friendsReducer";


const SET_USER_DATA = "SET_USER_DATA";
const CAPTCHA_URL_SUCCESS = "CAPTCHA_URL_SUCCESS";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state: authType = initialState, action: any) => {

    switch (action.type) {

        case SET_USER_DATA:
        case CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl: string | null) =>
    ({type: CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const checkAuth = () => {
    return (dispatch: any) => {
        return userApi.checkAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserData(id, email, login, true))
                }
            });
    }
}

export const login = (email: string, password: string | number, rememberMe: boolean, captcha: string | null = null) => {
    return (dispatch: any) => {
        loginApi.signIn({email, password, rememberMe, captcha})
            .then(data => {
                if (data.data.resultCode === 0) {
                    dispatch(checkAuth())
                    dispatch(getFriends())
                } else {
                    if (data.data.resultCode === 10) {
                        dispatch (getCaptcha())
                    }
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
                if (data.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false,))
                    dispatch(setFriends([]))
                }
            });
    }
}

export const getCaptcha = () => async (dispatch: any) => {
    const response = await securityApi.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export default authReducer;