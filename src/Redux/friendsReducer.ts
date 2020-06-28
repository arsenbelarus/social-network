import {friendsType} from "./state";

let initialState = [
    {name: "David", imgSource: "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"},
    {name: "Tigran", imgSource: "https://freesvg.org/img/myAvatar.png"},
    {name: "Olga", imgSource: "https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695985-stock-illustration-male-avatar.jpg"},
]

const friendsReducer = (state: friendsType[] = initialState, action: any) => {

    return state
}

export default friendsReducer;