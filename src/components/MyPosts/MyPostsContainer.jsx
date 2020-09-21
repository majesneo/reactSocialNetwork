import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addPostActionCreator, onPostChangeActionCreator, setPostsAC } from '../../redux/post-reducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
  return {
    postData: state.postReducerKey.postData,
    newPostText: state.postReducerKey.newPostText,
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

let AuthRedirectComponent = withAuthRedirect(MyPosts);

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MyPostsContainer;

