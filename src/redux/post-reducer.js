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
            let newPost = {
                id: 3,
                message: state.newPostText,
                like: 4
            };
            let stateCopy = { ...state };
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case onPostChange: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.postText;
            return stateCopy;
        }
        default:
            return state;
    }
}
export default postReducer;

export const addPostActionCreator = () => ({ type: 'addPost' });

export const onPostChangeActionCreator = (postText) => ({ type: 'onPostChange', postText });