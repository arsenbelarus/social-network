import {authType} from "./Types";


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
            debugger
            return {
                ...state,
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setUserData = (data: authType) => ({type: SET_USER_DATA, data})


export default authReducer;