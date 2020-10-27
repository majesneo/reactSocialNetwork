import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import MyPosts from './MyPosts';
import React from 'react';
import { appStateType } from '../../redux/redux-store';
import { photosType, postDataType } from '../../types/types';
import { actions, getPostThunkCreator } from '../../redux/post-reducer';

const { addPost } = actions;

type propsType = {
    getPostThunkCreator: () => void
    photos: photosType
    postData: Array<postDataType>
    login: string
    addPost: (value: string) => void

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
type mapDispatchToPropsType = {

}
type mapStateToPropsType = {
    postData: Array<postDataType>
    login: string | null
    photos: string | photosType | null
}
let mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        postData: state.postReducerKey.postData,
        // newPostText: state.postReducerKey.newPostText,
        login: state.authReducerKey.login,
        photos: state.headerReducerKey.photos
    }
}

type ownPropsType = {

}

// let AuthRedirectComponent = withAuthRedirect(MyPosts);
// const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);//compose рефакторит этот код на аналогичный ниже
export default compose<React.ComponentType>(connect<mapStateToPropsType, mapDispatchToPropsType, ownPropsType, appStateType>(mapStateToProps, {
    addPost,
    getPostThunkCreator,
}), withAuthRedirect)(MyPostsContainer)