
import { connect } from 'react-redux';
import { addPostActionCreator, onPostChangeActionCreator } from '../../redux/post-reducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
  return {
    postData: state.postReducerKey.postData,
    newPostText: state.postReducerKey.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (postText) => {
      dispatch(onPostChangeActionCreator(postText));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

