import {getStatusAPI, updatedStatusAPI} from "../api/api";

const headStatusWHsetStatus = 'headStatusWH/set_Status';


let initialState = {
    status: ""
};


const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case headStatusWHsetStatus : {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}
export default headerReducer;

export const setStatus = (status) => ({type: 'headStatusWH/set_Status', status});


export const updatedStatusHeadThunkCreator = (status) => {
    return async (dispatch) => {
        const response = await updatedStatusAPI(status)
        if (response.data.resultCode == 0) {
            dispatch(setStatus(status));
        }
    }
}

export const getStatusHeadThunkCreator = (userId) => {
    return async (dispatch) => {
        const response = await getStatusAPI(userId)
        dispatch(setStatus(response.data));
    }
}