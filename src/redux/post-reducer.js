const addPost = 'addPost';
const onPostChange = 'onPostChange';
const setPosts = 'setPosts';

let initialState = {
    postData: [

    ],
    newPostText: ''
};


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost: {
            return {
                ...state,
                postData: [...state.postData, { id: 3, message: state.newPostText, like: 4 }],
                newPostText: ''
            };
        }
        case onPostChange: {
            return {
                ...state,
                newPostText: action.postText
            };
        }
        case setPosts: {
            return {
                ...state, postData: [...action.posts] 
            }
        }
        default: return state;
    }
}
export default postReducer;

export const addPostActionCreator = () => ({ type: 'addPost' });
export const onPostChangeActionCreator = (postText) => ({ type: 'onPostChange', postText });
export const setPostsAC = (posts) => ({ type: 'setPosts', posts });