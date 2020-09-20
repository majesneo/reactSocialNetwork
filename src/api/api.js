import * as axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "6e653f6e-b667-4c69-b909-e415cdfb364d" }
});

export const getUsersAPI = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    });
}

export const getFollowDelAPI = (id) => {
    return instance.delete(`follow/${id}`).then(response => {
        return response.data
    });
}

export const getFollowPostAPI = (id) => {
    return instance.post(`follow/${id}`).then(response => {
        return response.data
    });
}

