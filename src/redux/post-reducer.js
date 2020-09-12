const addPost = 'addPost';
const onPostChange = 'onPostChange';

const postReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 3,
                message: state.newPostText,
                like: 4
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case onPostChange:
            state.newPostText = action.postText;
            return state;
        default:
            return state;
    }
}
export default postReducer;

export const addPostActionCreator = () => ({ type: 'addPost' });

export const onPostChangeActionCreator = (postText) => ({ type: 'onPostChange', postText });