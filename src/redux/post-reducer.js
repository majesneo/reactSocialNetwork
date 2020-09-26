import {getPostAPI} from "../api/api";

const add_Post = 'add_Post';
const set_Posts = 'set_Posts';

let initialState = {
    postData: [],
    newPostText: ''
};


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_Post: {
            return {
                ...state,
                postData: [...state.postData, {id: 3, message: action.value, like: 4}],
                newPostText: ''
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

export const addPost = (value) => ({type: 'add_Post', value});
export const setPosts = (posts) => ({type: 'set_Posts', posts});

export const getPostThunkCreator = () => {
    return (dispatch) => {

        getPostAPI().then(post => {
            dispatch(setPosts(post))
        });
    }
}
