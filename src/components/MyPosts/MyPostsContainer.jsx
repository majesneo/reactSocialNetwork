
import { connect } from 'react-redux';
import { addPostActionCreator, onPostChangeActionCreator, setPostsAC } from '../../redux/post-reducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
  return {
    postData: state.postReducerKey.postData,
    newPostText: state.postReducerKey.newPostText,
    isAuth: state.authReducerKey.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (postText) => {
      dispatch(onPostChangeActionCreator(postText));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    setPosts: (posts) => {
      dispatch(setPostsAC(posts));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

