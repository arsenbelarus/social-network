//AUTHENTICATION TYPES
export type authType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

// PROFILE PAGE TYPES
export type contactsType = {
    facebook: string | null, website: string | null, vk: string | null, twitter: string | null,
    instagram: string | null, youtube: string | null, github: string | null, mainLink: string | null
}
export type profileType = {
    aboutMe: string | null, contacts: contactsType, lookingForAJob: boolean,
    lookingForAJobDescription: string | null, fullName: string | null, userId: number, photos: photosType,
}
export type postsDataType = Array<{ id: number, message: string, likesCount: number }>
export type profilePageType = { profile: profileType, postsData: postsDataType, newPostText: string }

// DIALOGS PAGE TYPES
export type dialogsDataType = { id: number, name: string }
export type messagesDataType = { id: number, message: string }
export type messagesPageType = { dialogsData: dialogsDataType[], messagesDataLeft: messagesDataType[], messagesDataRight: messagesDataType[], newMessageText: string }

// USERS PAGE TYPES
export type photosType = { small: string, large: string }
export type usersType = { name: string, id: number, uniqueUrlName: string, photos: photosType, status: string, followed: boolean }
export type usersPageType = {
    users: Array<usersType>, pageSize: number,
    totalUsersCount: number, currentPage: number, isFetching: boolean, isFollowStatusChanging: Array<number>,
}

// FRIENDS PAGE TYPES
export type friendsType = { name: string, imgSource: string }

// MAIN STATE TYPE
export type _stateType = { profilePage: profilePageType, messagesPage: messagesPageType, usersPage: usersPageType, friends: friendsType[], auth: authType }

