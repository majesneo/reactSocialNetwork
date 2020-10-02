import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "6e653f6e-b667-4c69-b909-e415cdfb364d" }
});

export enum resultCodesEnum {
    success = 0,
    error = 1
}
export enum resultCodeForCaptcha {
    captchaIsRequired = 10
}



export const getUsersAPI = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    });
}

export const getFollowDelAPI = (id: number) => {
    return instance.delete(`follow/${id}`).then(response => {
        return response.data
    });
}

export const getFollowPostAPI = (id: number) => {
    return instance.post(`follow/${id}`).then(response => {
        return response.data
    });
}

export const getProfileAPI = (userId: number) => {
    return instance.get(`profile/${userId}`).then(response => {
        return response.data
    });
}

export const getStatusAPI = (userId: number) => {
    return instance.get(`profile/status/` + userId).then(response => {
        return response
    });
}

export const updatedStatusAPI = (status: string) => {
    return instance.put(`profile/status`, { status }).then(response => {
        return response
    });
}


//после типизации зарефакторить все запросы в общий запрос с подзапросами и общей типизацией 
type getGetAuthAPIType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: resultCodesEnum
    messages: Array<string>
}
export const getGetAuthAPI = async () => {
    const response = await instance.get<getGetAuthAPIType>(`auth/me`)
    return response.data

}
type postLoginAPIType = {
    data: {
        userId: number
    }
    resultCode: resultCodesEnum | resultCodeForCaptcha
    messages: Array<string>
}
export const postLoginAPI = (email: string, password: string, rememberMe = false, captcha: null | string = null) => {
    return instance.post<postLoginAPIType>(`auth/login`, { email, password, rememberMe, captcha }).then(response => {
        return response
    });
}
export const delLogoutAPI = () => {
    return instance.delete(`auth/login`,).then(response => {
        return response
    });
}




export const getPostAPI = () => {
    return axios.get("http://test-api.quando.pro/reactsocialnetwork/post").then(response => {
        return response.data
    });
}
export const putSavePhotoAPI = (photo: any) => {
    var formData = new FormData();
    formData.append('image', photo);
    return instance.put(`profile/photo`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
}
export const captchaAPI = () => {
    return instance.post(`security/get-captcha-url`, {}).then(response => {
        return response
    });
}
