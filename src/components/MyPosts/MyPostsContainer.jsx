import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../redux/post-reducer';
import StoreContext from '../../storeContext';
import MyPosts from './MyPosts';





const MyPostsContainer = (props) => {



  return (
    <StoreContext.Consumer>{(store) => {
      let addPost = () => {
        props.dispatch(addPostActionCreator());
      }

      let onPostChange = (postText) => {
        props.dispatch(onPostChangeActionCreator(postText));
      }
      return<MyPosts onPostChange={onPostChange} addPost={addPost} postData={props.postData} newPostText={props.newPostText} />
    }}</StoreContext.Consumer>
  );
}
export default MyPostsContainer;


