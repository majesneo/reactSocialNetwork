import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getStatusAPI, putSavePhotoAPI, updatedStatusAPI } from "../api/api";
import { photosType } from "../types/types";
import { appStateType } from "./redux-store";

const headStatusWHsetStatus = 'headStatusWH/set_Status';
const headStatusWHsetPhoto = 'headStatusWH/set_Photo';
const headGetPhotoProfile = 'head/getPhotoProfile';
const headLogoutStatus = 'head/logout_status';
const headLogoutPhoto = 'head/logout_Photo';

let initialState = {
    status: "" as string | null,
    photos: "" as string | photosType | null
};
export type initialStateType = typeof initialState

const headerReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case headLogoutStatus:
        case headStatusWHsetStatus: {
            return {
                ...state, status: action.status
            }
        }
        case headStatusWHsetPhoto: {
            return {
                ...state, photos: action.photos
            }
        }
        case headLogoutPhoto:
        case headGetPhotoProfile: {
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
    status: string | null
}
export const setStatus = (status: string | null): setStatusType => ({ type: 'headStatusWH/set_Status', status });

type setPhotoType = {
    type: typeof headStatusWHsetPhoto
    photos: photosType | null
}
export const setPhoto = (photos: photosType | null): setPhotoType => ({ type: 'headStatusWH/set_Photo', photos });

type getPhotoProfileType = {
    type: typeof headGetPhotoProfile
    photo: photosType | null
}
export const getPhotoProfile = (photo: photosType | null): getPhotoProfileType => ({ type: 'head/getPhotoProfile', photo });

type logoutSatusType = {
    type: typeof headLogoutStatus
    status: null
}
export const logoutSatus = (status: null): logoutSatusType => ({ type: 'head/logout_status', status });

type logoutPhotoType = {
    type: typeof headLogoutPhoto
    photo: photosType | null
}
export const logoutPhoto = (photo: photosType | null): logoutPhotoType => ({ type: 'head/logout_Photo', photo });


type actionsTypes = setStatusType | setPhotoType | getPhotoProfileType | logoutSatusType | logoutPhotoType

// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const updatedStatusHeadThunkCreator = (status: string): thunkType => {
    return async (dispatch) => {
        const response = await updatedStatusAPI(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const getStatusHeadThunkCreator = (userId: number): thunkType => {
    return async (dispatch) => {
        const response = await getStatusAPI(userId)
        dispatch(setStatus(response.data));
    }
}

export const savePhoto = (photo: photosType): thunkType => async (dispatch: any) => {
    const response = await putSavePhotoAPI(photo)
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos));
    }
}