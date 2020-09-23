import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addPostActionCreator, setPostsAC } from '../../redux/post-reducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
  return {
    postData: state.postReducerKey.postData,
    newPostText: state.postReducerKey.newPostText,
    login: state.authReducerKey.login
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (value) => {
      dispatch(addPostActionCreator(value));
    },
    setPosts: (posts) => {
      dispatch(setPostsAC(posts));
    }
  }
}

// let AuthRedirectComponent = withAuthRedirect(MyPosts);
// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);//compose рефакторит этот код на аналогичный ниже
export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(MyPosts)

