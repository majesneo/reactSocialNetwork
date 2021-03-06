import { getProfileAPI, getStatusAPI } from "../api/api";
import { headerActions } from "./header-reducer";
import { profileType } from "../types/types";
import { baseThunkType, inferActionsTypes } from "./redux-store";


let initialState = {
    profile: null as profileType | null,
    statusProf: "" as string | null
}
export type initialStateType = typeof initialState


const pofileReducer = (state = initialState, action: actionsTypes): initialStateType => {

    switch (action.type) {
        case 'set_PeoplesProfile': {
            return {
                ...state, profile: action.profile
            }
        }
        case 'set_Status': {
            return {
                ...state, statusProf: action.statusProf
            }
        }
        default:
            return state;
    }
}
export default pofileReducer;


type actionsTypes = ReturnType<inferActionsTypes<typeof actions>>

export const actions = {
    setPeoplesProfile: (profile: profileType) => ({ type: 'set_PeoplesProfile', profile } as const),
    setStatusProf: (statusProf: string | null) => ({ type: 'set_Status', statusProf } as const)
}


// type getStateType = () => appStateType


export const getProfileThunkCreator = (userId: number): baseThunkType => {
    return async (dispatch) => {
        const data = await getProfileAPI(userId);
        dispatch(actions.setPeoplesProfile(data));
        dispatch(headerActions.getPhotoProfile(data.photos));
    }
}
export const getStatusThunkCreator = (userId: number): baseThunkType => async (dispatch) => {
    const response = await getStatusAPI(userId)

    dispatch(headerActions.setStatus(response.data));
    dispatch(actions.setStatusProf(response.data));
}


