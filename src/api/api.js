import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "c4acf5d4-46da-4413-92d7-aa12b40d3ce6",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data
            });
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    follow(id) {
        return instance.post(`follow/${id}`, {}, {})
            .then(response => {
                return response.data
            });
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            });
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false, id) {
        return instance.post(`auth/login`, {email, password, rememberMe, id})
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}



