import {getStatusAPI, putSavePhotoAPI, updatedStatusAPI} from "../api/api";
import {photosType} from "../types/types";

const headStatusWHsetStatus = 'headStatusWH/set_Status';
const headStatusWHsetPhoto = 'headStatusWH/set_Photo';
const headGetPhotoProfile = 'head/getPhotoProfile';
const headLogoutStatus = 'head/logout_status';
const headLogoutPhoto = 'head/logout_Photo';

let initialState = {
    status: "",
    photos: ""
};
export type initialStateType = typeof initialState

const headerReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case headLogoutStatus :
        case headStatusWHsetStatus : {
            return {
                ...state, status: action.status
            }
        }
        case headStatusWHsetPhoto : {
            return {
                ...state, photos: action.photos
            }
        }
        case headLogoutPhoto :
        case headGetPhotoProfile : {
            return {
                ...state, photos: action.photo
            }
        }
        default:
            return state;
    }
}
export default headerReducer;

type setStatusType = {
    type: typeof headStatusWHsetStatus
    status: string
}
export const setStatus = (status: string): setStatusType => ({type: 'headStatusWH/set_Status', status});

type setPhotoType = {
    type: typeof headStatusWHsetPhoto
    photos: photosType
}
export const setPhoto = (photos: photosType): setPhotoType => ({type: 'headStatusWH/set_Photo', photos});

type getPhotoProfileType = {
    type: typeof headGetPhotoProfile
    photo: photosType
}
export const getPhotoProfile = (photo: photosType): getPhotoProfileType => ({type: 'head/getPhotoProfile', photo});

type logoutSatusType = {
    type: typeof headLogoutStatus
    status:  null
}
export const logoutSatus = (status: null): logoutSatusType => ({type: 'head/logout_status', status});

type logoutPhotoType = {
    type: typeof headLogoutPhoto
    photo: photosType
}
export const logoutPhoto = (photo: any): logoutPhotoType => ({type: 'head/logout_Photo', photo});


export const updatedStatusHeadThunkCreator = (status:string) => {
    return async (dispatch:any) => {
        const response = await updatedStatusAPI(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const getStatusHeadThunkCreator = (userId:number) => {
    return async (dispatch:any) => {
        const response = await getStatusAPI(userId)
        dispatch(setStatus(response.data));
    }
}

export const savePhoto = (photo:photosType) => async (dispatch:any) => {
    const response = await putSavePhotoAPI(photo)
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos));
    }
}