import { getFrendsAPI } from "../api/api";
import { friendsDataType } from "../types/types";
import { baseThunkType, inferActionsTypes } from "./redux-store";



let initialState = {
  friends: [] as Array<friendsDataType>,
};
export type initialStateType = typeof initialState;


const friendReducer = (state = initialState, action: actionsTypes): initialStateType => {
  switch (action.type) {
    case "friend/setFriend": {
      return {
        ...state, friends: action.friends
      }
    }
    default:
      return state;
  }
}
export default friendReducer;

type actionsTypes = ReturnType<inferActionsTypes<typeof actions>>

export const actions = {
  setFriend: (friends: Array<friendsDataType>) => ({ type: "friend/setFriend", friends } as const)
}


export const getFriendThunkCreator = (): baseThunkType => {
  return async (dispatch) => {
    let response = await getFrendsAPI()
    dispatch(actions.setFriend(response.data.items));
  }
}
