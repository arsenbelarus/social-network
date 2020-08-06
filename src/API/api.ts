import axios from "axios";
import {postsDataType, postType, profileType} from "../Redux/Types";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a318ecb3-f5df-4512-99ed-aabe354d9b6f"
    },
})

const axiosFireBase = axios.create({
    baseURL: "https://social-network-1f63a.firebaseio.com/",
    headers: {
        "Content-Type": "text/plain",
        "API-KEY": "AIzaSyCllyQV9B_bsPepLBxHZCFa85p5cLfJbs4",
    },
})

export const userApi = {
    getUsers (currentPage: number = 1, pageSize: number = 100) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    checkAuth () {
        return axiosInstance.get('auth/me')
            .then(response => response.data)
    },
    follow (userId: number) {
        return axiosInstance.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
    unFollow (userId: number) {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile (userId: number) {
        console.log("Obsolete method. Please use profileApi")
        return profileApi.getProfile(userId)
    },
    getFriends (friends: boolean, pageSize: number = 100) {
        return axiosInstance.get(`users?friend=${friends}&count=${pageSize}`)
            .then(response => response.data)
    },
}

export const profileApi = {
    getProfile (userId: number) {
        return axiosInstance.get(`profile/${userId}`)
    },
    getStatus (userId: number) {
        return axiosInstance.get(`profile/status/${userId}`)
    },
    updateStatus (status: string) {
        return axiosInstance.put("profile/status", {status: status})
    },
    updateProfileData (profile: profileType) {
        return axiosInstance.put("profile", profile)
    },
    savePhoto (photo: File) {
        const formData = new FormData()
        formData.append("image", photo)
        return axiosInstance.put("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

export const loginApi = {
    signIn(data: { password: string | number; captcha: string | null; rememberMe: boolean; email: string }) {
        return axiosInstance.post("auth/login", data)
    },
    signOut () {
        return axiosInstance.delete("auth/login")
    }
}

export const securityApi = {
    getCaptchaUrl () {
        return axiosInstance.get("security/get-captcha-url")
    }
}

export const postApi = {
    sendPost (data: postType) {
        return axiosFireBase.post("posts.json", data)
    },
    getPosts () {
        return axiosFireBase.get("posts.json")
    },
    deletePost (serverID: string) {
        return axiosFireBase.delete(`posts/${serverID}.json`)
    }
}


