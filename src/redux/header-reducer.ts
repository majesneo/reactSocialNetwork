import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getStatusAPI, putSavePhotoAPI, updatedStatusAPI } from "../api/api";
import { photosType } from "../types/types";
import { appStateType, inferActionsTypes } from "./redux-store";

let initialState = {
    status: "" as string | null,
    photos: "" as string | photosType | null
};
export type initialStateType = typeof initialState

const headerReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case 'head/logout_status':
        case 'headStatusWH/set_Status': {
            return {
                ...state, status: action.status
            }
        }
        case 'headStatusWH/set_Photo': {
            return {
                ...state, photos: action.photos
            }
        }
        case 'head/logout_Photo':
        case 'head/getPhotoProfile': {
            return {
                ...state, photos: action.photo
            }
        }
        default:
            return state;
    }
}
export default headerReducer;

type actionsTypes = inferActionsTypes<typeof actions>

export const actions = {
    setStatus: (status: string | null) => ({ type: 'headStatusWH/set_Status', status } as const),
    setPhoto: (photos: photosType | null) => ({ type: 'headStatusWH/set_Photo', photos } as const),
    getPhotoProfile: (photo: photosType | null) => ({ type: 'head/getPhotoProfile', photo } as const),
    logoutSatus: (status: null) => ({ type: 'head/logout_status', status } as const),
    logoutPhoto: (photo: photosType | null) => ({ type: 'head/logout_Photo', photo } as const)
}

// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const updatedStatusHeadThunkCreator = (status: string): thunkType => {
    return async (dispatch) => {
        const response = await updatedStatusAPI(status)
        if (response.data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    }
}

export const getStatusHeadThunkCreator = (userId: number): thunkType => {
    return async (dispatch) => {
        const response = await getStatusAPI(userId)
        dispatch(actions.setStatus(response.data));
    }
}

export const savePhoto = (photo: photosType): thunkType => async (dispatch: any) => {
    const response = await putSavePhotoAPI(photo)
    if (response.data.resultCode === 0) {
        dispatch(actions.setPhoto(response.data.data.photos));
    }
}