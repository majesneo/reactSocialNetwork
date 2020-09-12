import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, onPostChangeActionCreator } from '../../redux/post-reducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
  return {
    postData: state.postData
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

