import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getGetAuthThunkCreator } from "./auth-reducer";
import { appStateType, inferActionsTypes } from "./redux-store";


let initialState = {
  initialized: false,
};

export type initialStateType = typeof initialState;

const appReducer = (state = initialState, action: actionsTypes): initialStateType => {
  switch (action.type) {
    case "app/set_Initialized": {
      return {
        ...state, initialized: true,
      };
    }
    default:
      return state;
  }
};
export default appReducer;

type actionsTypes = inferActionsTypes<typeof actions>

export const actions = {
  initializedSuccess: () => ({ type: "app/set_Initialized" } as const)
}

// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>;
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>;

export const initializedThunkCreator = (): thunkType => {
  return async (dispatch) => {
    await dispatch(getGetAuthThunkCreator());
    dispatch(actions.initializedSuccess());
  };
};
