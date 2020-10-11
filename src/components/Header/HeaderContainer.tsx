import React, { SetStateAction } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import getStatusHeadThunkCreator from "../../redux/header-reducer";
import { savePhoto } from "../../redux/header-reducer";
import updatedStatusHeadThunkCreator from "../../redux/header-reducer";
import { getProfileThunkCreator } from "../../redux/profile-reducer";
import { appStateType } from '../../redux/redux-store';
import { photosType } from '../../types/types';


type propsType = {
    getProfileThunkCreator: (id: number) => void
    savePhoto: (arg0: File) => void
    photos: photosType
    getStatusHeadThunkCreator: (id: number) => SetStateAction<string | null>
    updatedStatusHeadThunkCreator: (status: string) => void
}
type mapStateToPropsType = {
    login: string | null
    status: string | null
    id: number | null
    photos: string | photosType | null
}


class HeaderContainer extends React.Component<propsType & mapStateToPropsType> {
    componentDidMount() {
        this.props.getProfileThunkCreator(this.props.id!);
    }

    render() {
        return <Header  {...this.props}
            getStatusHeadThunkCreator={this.props.getStatusHeadThunkCreator}
            savePhoto={this.props.savePhoto}
            photos={this.props.photos}
            updatedStatusHeadThunkCreator={this.props.updatedStatusHeadThunkCreator} id={this.props.id} />
    };
}

let mapStateToProps = (state: appStateType): mapStateToPropsType => ({
    login: state.authReducerKey.login,
    status: state.headerReducerKey.status,
    id: state.authReducerKey.id,
    photos: state.headerReducerKey.photos
});


export default compose<React.ComponentType>(connect<mapStateToPropsType, {}, {}, appStateType>(mapStateToProps, {
    getStatusHeadThunkCreator,
    updatedStatusHeadThunkCreator,
    savePhoto,
    getProfileThunkCreator
}))(HeaderContainer);
