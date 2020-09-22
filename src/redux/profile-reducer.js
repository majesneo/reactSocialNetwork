import { getProfileAPI, getStatusAPI } from "../api/api";

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
        default: return state;
    }
}
export default pofileReducer;

export const setPeoplesProfile = (profile) => ({ type: 'set_PeoplesProfile', profile });
export const setStatusProf = (status) => ({ type: 'set_Status', status });


export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        getProfileAPI(userId).then(data => {
            dispatch(setPeoplesProfile(data));
        });
    }
}
export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        debugger
        getStatusAPI(userId).then(response => {
            debugger
            dispatch(setStatusProf(response.data));
        });
    }
}


