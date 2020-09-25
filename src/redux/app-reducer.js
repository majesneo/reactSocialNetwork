import {getGetAuthThunkCreator} from "./auth-reducer";

const set_Initialized = 'set_Initialized';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case set_Initialized: {
            return {
                ...state, initialized: true
            }
        }
        default:
            return state;
    }
}
export default appReducer;

export const initializedSuccess = () => ({type: 'set_Initialized'});

export const initializedThunkCreator = () => (dispatch) => {
    debugger
    let promise = dispatch(getGetAuthThunkCreator());

    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
}
