import {getGetAuthThunkCreator} from "./auth-reducer";

const set_Initialized = 'app/set_Initialized';

export type nitialStateType = {
    initialized: boolean;
}

let initialState: nitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any): nitialStateType => {
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

type initializedSuccessType = {
    type: typeof set_Initialized;
}
export const initializedSuccess = ():initializedSuccessType => ({type: 'app/set_Initialized'});


export const initializedThunkCreator = () => {
    return async (dispatch: any) => {
        await dispatch(getGetAuthThunkCreator());
        dispatch(initializedSuccess());
    }
}
