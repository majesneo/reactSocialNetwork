import {getProfileAPI, getStatusAPI} from "../api/api";

const set_PeoplesProfile = 'set_PeoplesProfile';
const set_Status = 'set_Status';


let initialState = {
    profile: null,
    status: ""
};


const pofileReducer = (state = initialState, action) => {
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

export const setPeoplesProfile = (profile) => ({type: 'set_PeoplesProfile', profile});
export const setStatusProf = (status) => ({type: 'set_Status', status});


export const getProfileThunkCreator = (userId) => async (dispatch) => {
    const data = await getProfileAPI(userId);
    dispatch(setPeoplesProfile(data));
}
export const getStatusThunkCreator = (userId) => async (dispatch) => {
    const response = await getStatusAPI(userId)
    dispatch(setStatusProf(response.data));

}


