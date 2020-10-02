import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getPostAPI } from "../api/api";
import { postDataType } from "../types/types";
import { appStateType } from "./redux-store";

const add_Post = 'add_Post';
const set_Posts = 'set_Posts';


let initialState = {
    postData: [] as Array<postDataType>,
};
export type initialStateType = typeof initialState;

const postReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case add_Post: {
            return {
                ...state,
                postData: [...state.postData, { id: 3, message: action.value, like: 4 }],
            };
        }
        case set_Posts: {
            return {
                ...state, postData: [...action.posts]
            }
        }
        default:
            return state;
    }
}
export default postReducer;


type addPostType = {
    type: typeof add_Post
    value: string
}
export const addPost = (value: string): addPostType => ({ type: 'add_Post', value });


type setPostsType = {
    type: typeof set_Posts
    posts: postDataType
}
export const setPosts = (posts: postDataType): setPostsType => ({ type: 'set_Posts', posts });

type actionsTypes = addPostType | setPostsType

// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const getPostThunkCreator = (): thunkType => async (dispatch) => {
    const post = await getPostAPI()
    dispatch(setPosts(post))
}
