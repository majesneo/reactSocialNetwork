import { getProfileAPI, getStatusAPI } from "../api/api";
import { getPhotoProfile } from "./header-reducer";
import { profileType } from "../types/types";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "redux";
import { appStateType } from "./redux-store";

const set_PeoplesProfile = 'set_PeoplesProfile';
const set_Status = 'set_Status';




let initialState = {
    profile: null as profileType | null,
    status: ""
}
export type initialStateType = typeof initialState


const pofileReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case set_PeoplesProfile: {
            return {
                ...state, profile: action.profile
            }
        }
        case set_Status: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}
export default pofileReducer;


type setPeoplesProfileType = {
    type: typeof set_PeoplesProfile
    profile: profileType
}
export const setPeoplesProfile = (profile: profileType): setPeoplesProfileType => ({ type: 'set_PeoplesProfile', profile });


type setStatusProfType = {
    type: typeof set_Status
    status: string
}
export const setStatusProf = (status: string): setStatusProfType => ({ type: 'set_Status', status });


type actionsTypes = setPeoplesProfileType | setStatusProfType

// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const getProfileThunkCreator = (userId: number):thunkType => async (dispatch) => {
    const data = await getProfileAPI(userId);
    dispatch(setPeoplesProfile(data));
    //@ts-ignore
    dispatch(getPhotoProfile(data.photos));
}
export const getStatusThunkCreator = (userId: number):thunkType => async (dispatch) => {
    const response = await getStatusAPI(userId)
    dispatch(setStatusProf(response.data));

}


