import {getStatusAPI, updatedStatusAPI} from "../api/api";

const set_Status = 'set_Status';


let initialState = {
    status: ""
};


const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case set_Status: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}
export default headerReducer;

export const setStatus = (status) => ({type: 'set_Status', status});


export const updatedStatusThunkCreator = (status) => {
    return async (dispatch) => {
        const response = await updatedStatusAPI(status)
        if (response.data.resultCode == 0) {
            dispatch(setStatus(status));
        }
    }
}

export const getStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        const response = await getStatusAPI(userId)
        dispatch(setStatus(response.data));
    }
}