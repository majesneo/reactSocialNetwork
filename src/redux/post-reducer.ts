import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {getPostAPI, setPostAPI} from "../api/api";
import {postDataType} from "../types/types";
import {appStateType, baseThunkType, inferActionsTypes} from "./redux-store";

let initialState = {
    postData: [] as Array<postDataType>,
};
export type initialStateType = typeof initialState;

const postReducer = (state = initialState, action: actionsTypes): initialStateType => {

    switch (action.type) {
        case 'add_Post': {
            return {
                ...state,
                postData: [...state.postData, {id: 3, message: action.value, like: 4}]
            };
        }
        case 'set_Posts': {
            return {
                ...state, postData: action.posts
            }
        }
        default:
            return state;
    }
}
export default postReducer;

type actionsTypes = ReturnType<inferActionsTypes<typeof actions>>

export const actions = {
    addPost: (value: string) => ({type: 'add_Post', value} as const),
    setPosts: (posts: Array<postDataType>) => ({type: 'set_Posts', posts} as const),
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

