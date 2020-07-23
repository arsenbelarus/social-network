import {checkAuth} from "./authReducer";
import {appType} from "./Types";


const INITIALISED_SUCCESFULLY = "INITIALISED_SUCCESFULLY";

let initialState = {
    initialised: false
}

const appReducer = (state: appType = initialState, action: any) => {

    switch (action.type) {

        case INITIALISED_SUCCESFULLY:
            return {
                ...state,
                initialised: true,
            }
        default:
            return state;
    }
}

export const initialisedSuccessfully = () => ({type: INITIALISED_SUCCESFULLY})

export const initialiseApp = () => (dispatch: any) => {
    let checkAuthResult = dispatch(checkAuth())
    Promise.all([checkAuthResult])
        .then(() => {
            dispatch(initialisedSuccessfully())
        })
}

export default appReducer;