import { getStatusAPI, putSavePhotoAPI, resultCodesEnum, updatedStatusAPI } from "../api/api";
import { photosType } from "../types/types";
import { baseThunkType, inferActionsTypes } from "./redux-store";

let initialState = {
    status: "" as string | null,
    photos: "" as string | photosType
};
export type initialStateType = typeof initialState

const headerReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case "head/logout_status":
        case "headStatusWH/set_Status": {
            return {
                ...state, status: action.status
            }
        }
        case "headStatusWH/set_Photo": {
            return {
                ...state, photos: action.photos
            }
        }
        case "head/logout_Photo":
        case "head/getPhotoProfile": {
            return {
                ...state, photos: action.photo
            }
        }
        default:
            return state;
    }
}
export default headerReducer;

type actionsTypes = ReturnType<inferActionsTypes<typeof headerActions>>

export const headerActions = {
    setStatus: (status: string) => ({ type: "headStatusWH/set_Status", status } as const),
    setPhoto: (photos: photosType) => ({ type: "headStatusWH/set_Photo", photos } as const),
    getPhotoProfile: (photo: photosType) => ({ type: "head/getPhotoProfile", photo } as const),
    logoutSatus: (status: null) => ({ type: "head/logout_status", status } as const),
    logoutPhoto: (photo: photosType | string) => ({ type: "head/logout_Photo", photo } as const)
}

// type getStateType = () => appStateType
// type dispatchType = Dispatch<actionsTypes>
// type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const updatedStatusHeadThunkCreator = (status: string): baseThunkType => {
    return async (dispatch) => {
        const response = await updatedStatusAPI(status)
        if (response.data.resultCode === resultCodesEnum.success) {
            dispatch(headerActions.setStatus(status));
        }
    }
}

export const getStatusHeadThunkCreator = (userId: number): baseThunkType => {
    return async (dispatch) => {
        const response = await getStatusAPI(userId)
        dispatch(headerActions.setStatus(response.data));
    }
}

export const savePhoto = (photo: File): baseThunkType => async (dispatch: any) => {
    const response = await putSavePhotoAPI(photo)
    if (response.data.resultCode === resultCodesEnum.success) {
        dispatch(headerActions.setPhoto(response.data.data.photos));
    }
}