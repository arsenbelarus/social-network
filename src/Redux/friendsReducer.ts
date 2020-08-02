import {friendsPageType, friendsType} from "./Types";
import {userApi} from "../API/api";

const SET_FRIENDS = "SET_FRIENDS";

let initialState: friendsPageType = {
    friends: [],
}

const friendsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_FRIENDS":
            return {
                ...state,
                friends: action.friends
            }
        default:
            return state
    }
}


// Action creators
export const setFriends = (friends: friendsType[]) => ({type: SET_FRIENDS, friends});

// Thunk creators
export const getFriends = () => {
    return (dispatch: any) => {
        userApi.getFriends(true).then(data => {
            dispatch(setFriends(data.items));
        });
    }
}

export default friendsReducer;