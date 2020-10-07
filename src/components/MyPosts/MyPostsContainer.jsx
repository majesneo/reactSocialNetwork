import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import MyPosts from './MyPosts';
import addPost from "../../redux/post-reducer";
import getPostThunkCreator from "../../redux/post-reducer";
import React from 'react';


class MyPostsContainer extends React.Component {
    componentDidMount() {
        this.props.getPostThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <MyPosts {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        postData: state.postReducerKey.postData,
        newPostText: state.postReducerKey.newPostText,
        login: state.authReducerKey.login,
        photos: state.headerReducerKey.photos
    }
}

// let AuthRedirectComponent = withAuthRedirect(MyPosts);
// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);//compose рефакторит этот код на аналогичный ниже
export default compose(connect(mapStateToProps, {
    addPost,
    getPostThunkCreator
}), withAuthRedirect)(MyPostsContainer)