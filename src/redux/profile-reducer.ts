import { getProfileAPI, getStatusAPI } from "../api/api";
import getPhotoProfile from "./header-reducer";
import { profileType } from "../types/types";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
import { appStateType, inferActionsTypes } from "./redux-store";


let initialState = {
    profile: null as profileType | null,
    status: ""
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
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}
export default pofileReducer;


type actionsTypes = inferActionsTypes<typeof actions>

export const actions = {
    setPeoplesProfile: (profile: profileType) => ({ type: 'set_PeoplesProfile', profile } as const),
    setStatusProf: (status: string) => ({ type: 'set_Status', status } as const)
}


// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const getProfileThunkCreator = (userId: number): thunkType => async (dispatch) => {
    const data = await getProfileAPI(userId);
    dispatch(actions.setPeoplesProfile(data));

    dispatch(getPhotoProfile(data.photos));
}
export const getStatusThunkCreator = (userId: number): thunkType => async (dispatch) => {
    const response = await getStatusAPI(userId)
    dispatch(actions.setStatusProf(response.data));

}


