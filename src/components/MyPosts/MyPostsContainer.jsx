import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../redux/post-reducer';
import MyPosts from './MyPosts';





const MyPostsContainer = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (postText) => {
    props.dispatch(onPostChangeActionCreator(postText));
  }

  return (
      <MyPosts onPostChange={onPostChange} addPost={addPost} postData={props.postData} newPostText={props.newPostText}/>
  );
}
export default MyPostsContainer;


