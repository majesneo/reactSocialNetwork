import {getProfileAPI, getStatusAPI} from "../api/api";
import {getPhotoProfile} from "./header-reducer";
import {profileType} from "../types/types";

const set_PeoplesProfile = 'set_PeoplesProfile';
const set_Status = 'set_Status';




let initialState = {
    profile: null as profileType | null,
    status: ""
}
export type initialStateType = typeof initialState


const pofileReducer = (state = initialState, action: any): initialStateType => {
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
type setStatusProfType = {
    type: typeof set_Status
    status: string
}

export const setPeoplesProfile = (profile: profileType): setPeoplesProfileType => ({
    type: 'set_PeoplesProfile',
    profile
});
export const setStatusProf = (status: string): setStatusProfType => ({type: 'set_Status', status});


export const getProfileThunkCreator = (userId: number) => async (dispatch: any) => {
    const data = await getProfileAPI(userId);
    dispatch(setPeoplesProfile(data));
    dispatch(getPhotoProfile(data.photos));
}
export const getStatusThunkCreator = (userId: number) => async (dispatch: any) => {
    const response = await getStatusAPI(userId)
    dispatch(setStatusProf(response.data));

}


