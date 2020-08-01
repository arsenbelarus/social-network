import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a318ecb3-f5df-4512-99ed-aabe354d9b6f"
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
    getFriends (friends: boolean) {
        return axiosInstance.get(`users?friend=${friends}`)
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
    }
}

export const loginApi = {
    signIn (data: {email: string, password: string|number, rememberMe?: boolean, captcha?: boolean} ) {
        return axiosInstance.post("auth/login", data)
    },
    signOut () {
        return axiosInstance.delete("auth/login")
    }
}


