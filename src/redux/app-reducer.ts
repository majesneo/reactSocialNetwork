import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getGetAuthThunkCreator } from "./auth-reducer";
import { appStateType } from "./redux-store";


const set_Initialized = 'app/set_Initialized';

let initialState = {
    initialized: false
};

export type initialStateType = typeof initialState

const appReducer = (state = initialState, action: actionsTypes): initialStateType => {
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


type actionsTypes = initializedSuccessActionType
type initializedSuccessActionType = {
    type: typeof set_Initialized;
}
export const initializedSuccess = (): initializedSuccessActionType => ({ type: 'app/set_Initialized' });

// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const initializedThunkCreator = (): thunkType => {
    return async (dispatch) => {
        await dispatch(getGetAuthThunkCreator());
        dispatch(initializedSuccess());
    }
}
