import axios from 'axios';

import {peoplesDataType, photosType, postDataType, profileType} from '../types/types';


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "2ee5855d-c164-4398-b1a8-6ce3e6773c75"}
});

export enum resultCodesEnum {
    success = 0,
    error = 1
}

export enum resultCodeForCaptcha {
    captchaIsRequired = 10
}

export type responseType<D = {}, RC = resultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}


type getUsersAPIType = {
    items: Array<peoplesDataType>
    totalCount: number
    error: string | null
}
export const getUsersAPI = (currentPage = 1, pageSize = 10, term: string = "", friend: null | boolean = null) => {
    return instance.get<getUsersAPIType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`)).then(response => {
        return response.data
    });
}

export const getFollowDelAPI = (id: number) => {
    return instance.delete(`follow/${id}`).then(response => {
        return response.data
    }) as Promise<responseType>;
}

export const getFollowPostAPI = (id: number) => {
    return instance.post<responseType>(`follow/${id}`).then(response => {
        return response.data
    });
}

export const getProfileAPI = (userId: number) => {
    return instance.get<profileType>(`profile/${userId}`).then(response => {
        return response.data
    });
}

export const getStatusAPI = (userId: number) => {
    return instance.get<string>(`profile/status/` + userId).then(response => {
        return response
    });
}

export const updatedStatusAPI = (status: string) => {
    return instance.put<responseType>(`profile/status`, {status}).then(response => {
        return response
    });
}


//после типизации зарефакторить все запросы в общий запрос с подзапросами и общей типизацией


type getGetAuthAPIDataType = {
    id: number
    email: string
    login: string
}
export const getGetAuthAPI = async () => {
    const response = await instance.get<responseType<getGetAuthAPIDataType>>(`auth/me`)
    return response.data

}
type postLoginAPIDataType = {
    userId: number
}
export const postLoginAPI = (email: string, password: string, rememberMe = false, captcha: null | string = null) => {
    return instance.post<responseType<postLoginAPIDataType, resultCodesEnum | resultCodeForCaptcha>>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha
    }).then(response => {
        return response
    });
}
export const delLogoutAPI = () => {
    return instance.delete(`auth/login`,).then(response => {
        return response
    }) as Promise<responseType>;
}


export const getPostAPI = () => {
    return axios.get<Array<postDataType>>("http://test-api.quando.pro/reactsocialnetwork/post").then(response => {
        return response.data
    });
}


type putSavePhotoAPIDataType = {
    photos: photosType
}
export const putSavePhotoAPI = (photo: File) => {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put<responseType<putSavePhotoAPIDataType>>(`profile/photo`, formData, {
        headers: {'Content-Type': 'multipart/form-data'}
    });
}
export const captchaAPI = () => {
    return instance.post(`security/get-captcha-url`, {}).then(response => {
        return response
    });
}


export const getFrendsAPI = () => {
    return instance.get(`users?friend=true`).then(response => {
        return response
    });
}


export const setPostAPI = (params: { id: number, message: string, like: number }) => {
    JSON.stringify(params)
    return axios.post(`http://test-api.quando.pro/reactsocialnetwork/post`, params).then(response => {
        console.log(response)
        return response
    });
}
