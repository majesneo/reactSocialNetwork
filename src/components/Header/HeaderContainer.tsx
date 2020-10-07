import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import { getStatusHeadThunkCreator, savePhoto, updatedStatusHeadThunkCreator } from "../../redux/header-reducer";
import { getProfileThunkCreator } from "../../redux/profile-reducer";
import { appStateType } from '../../redux/redux-store';
import { type } from 'os';
import { photosType } from '../../types/types';


type propsType = {
    getProfileThunkCreator: (id: number) => void
    savePhoto: (arg0: File) => void
    getStatusHeadThunkCreator: (userId: number) => void
    photos: string | photosType | null
    updatedStatusHeadThunkCreator: () => void
}
type mapStateToPropsType = {
    login: string | null
    status: string | null
    id: number | null
    photos: string | photosType | null
}
type mapDispatchPropsType = {

}
type ownPropsType = {

}

class HeaderContainer extends React.Component<propsType> {
    componentDidMount() {
        this.props.getProfileThunkCreator(this.props.id);
    }

    render() {
        return <Header  {...this.props}
            getStatusHeadThunkCreator={this.props.getStatusHeadThunkCreator}
            savePhoto={this.props.savePhoto}
            photos={this.props.photos}

            updatedStatusHeadThunkCreator={this.props.updatedStatusHeadThunkCreator} />
    };
}

let mapStateToProps = (state: appStateType): mapStateToPropsType => ({
    login: state.authReducerKey.login,
    status: state.headerReducerKey.status,
    id: state.authReducerKey.id,
    photos: state.headerReducerKey.photos
});


export default compose(connect<mapStateToPropsType, mapDispatchPropsType, ownPropsType, appStateType>(mapStateToProps, {
    getStatusHeadThunkCreator,
    updatedStatusHeadThunkCreator,
    savePhoto,
    getProfileThunkCreator
}))(HeaderContainer);
