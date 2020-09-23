const addPost = 'addPost';
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
                postData: [...state.postData, { id: 3, message: action.value, like: 4 }],
                newPostText: ''
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

export const addPostActionCreator = (value) => ({ type: 'addPost', value });
export const onPostChangeActionCreator = (postText) => ({ type: 'onPostChange', postText });
export const setPostsAC = (posts) => ({ type: 'setPosts', posts });