const addPost = 'addPost';
const onPostChange = 'onPostChange';

let initialState = {
    postData: [
        { id: 1, message: "hi, how are you?", like: 25 },
        { id: 2, message: "it's its my first post", like: 35 }
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
        default: return state;
    }
}
export default postReducer;

export const addPostActionCreator = () => ({ type: 'addPost' });

export const onPostChangeActionCreator = (postText) => ({ type: 'onPostChange', postText });