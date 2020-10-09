import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import MyPosts from './MyPosts';
import addPost from "../../redux/post-reducer";
import getPostThunkCreator from "../../redux/post-reducer";
import React from 'react';
import { appStateType } from '../../redux/redux-store';
import { photosType, postDataType } from '../../types/types';

type propsType = {
    getPostThunkCreator: () => void
    photos: photosType
    postData: Array<postDataType>
    login: string
    addPost: () => void
}

class MyPostsContainer extends React.Component<propsType> {
    componentDidMount() {
        this.props.getPostThunkCreator();
    }

    render() {
        return (
            <MyPosts {...this.props} />
        );
    }
}

let mapStateToProps = (state: appStateType) => {
    return {
        postData: state.postReducerKey.postData,
        // newPostText: state.postReducerKey.newPostText,
        login: state.authReducerKey.login,
        photos: state.headerReducerKey.photos
    }
}

// let AuthRedirectComponent = withAuthRedirect(MyPosts);
// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);//compose рефакторит этот код на аналогичный ниже
export default compose<React.ComponentType>(connect(mapStateToProps, {
    addPost,
    getPostThunkCreator
}), withAuthRedirect)(MyPostsContainer)