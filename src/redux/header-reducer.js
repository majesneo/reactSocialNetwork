import {getStatusAPI, putSavePhotoAPI, updatedStatusAPI} from "../api/api";

const headStatusWHsetStatus = 'headStatusWH/set_Status';
const headStatusWHsetPhoto = 'headStatusWH/set_Photo';
const headGetPhotoProfile = 'head/getPhotoProfile';
const headLogoutStatus = 'head/logout_status';
const headLogoutPhoto = 'head/logout_Photo';

let initialState = {

    status: "",
    photos: ""
};


const headerReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case headGetPhotoProfile : {
            return {
                ...state, photos: action.photo
            }
        }
        case headLogoutStatus : {
            return {
                ...state, status: action.status
            }
        }
        case headLogoutPhoto : {
            return {
                ...state, photos: action.photo
            }
        }
        default:
            return state;
    }
}
export default headerReducer;

export const setStatus = (status) => ({type: 'headStatusWH/set_Status', status});
export const setPhoto = (photos) => ({type: 'headStatusWH/set_Photo', photos});
export const getPhotoProfile = (photo) => ({type: 'head/getPhotoProfile', photo});
export const logoutSatus =(status)=>({type: 'head/logout_status', status});
export const logoutPhoto =(photo)=>({type: 'head/logout_Photo', photo});


export const updatedStatusHeadThunkCreator = (status) => {
    return async (dispatch) => {
        const response = await updatedStatusAPI(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const getStatusHeadThunkCreator = (userId) => {
    return async (dispatch) => {
        const response = await getStatusAPI(userId)
        dispatch(setStatus(response.data));
    }
}

export const savePhoto = (photo) => async (dispatch) => {
    const response = await putSavePhotoAPI(photo)
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos));
    }
}