import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getPostAPI } from "../api/api";
import { postDataType } from "../types/types";
import { appStateType, inferActionsTypes } from "./redux-store";

let initialState = {
    postData: [] as Array<postDataType>,
};
export type initialStateType = typeof initialState;

const postReducer = (state = initialState, action: actionsTypes): initialStateType => {

    switch (action.type) {
        case 'add_Post': {
            return {
                ...state,
                postData: [...state.postData,],
            };
        }
        case 'set_Posts': {
            return {
                ...state, postData: state.postData.concat(action.posts)
            }
        }
        default:
            return state;
    }
}
export default postReducer;

type actionsTypes = ReturnType<inferActionsTypes<typeof actions>>

export const actions = {
    addPost: (value: string) => ({ type: 'add_Post', value } as const),
    setPosts: (posts: postDataType) => ({ type: 'set_Posts', posts } as const),
}


// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const getPostThunkCreator = (): thunkType => {
    return async (dispatch) => {
        const post = await getPostAPI()
        dispatch(actions.setPosts(post))
    }
}
