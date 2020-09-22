import {  updatedStatusAPI } from "../api/api";

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
        default: return state;
    }
}
export default headerReducer;

export const setStatus = (status) => ({ type: 'set_Status', status });



export const updatedStatusThunkCreator = (status) => {
    return (dispatch) => {
        updatedStatusAPI(status).then(response => {
                    debugger
            if (response.data.resultCode == 0) {
                dispatch(setStatus(response));
            }
        });
    }
}

