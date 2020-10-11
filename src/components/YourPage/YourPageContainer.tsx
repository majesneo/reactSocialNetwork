import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import YourPage from './YourPage';
import { logoutThunkCreator } from "../../redux/auth-reducer";
import { appStateType } from '../../redux/redux-store';
import { type } from 'os';
import { photosType } from '../../types/types';

type mapStateToPropsType = {
    photos: string | photosType
    login: string | null
    isAuth: boolean | null
}
type mapDispatchToPropsType = {
    logoutThunkCreator: () => void
}

type propsType = {
    isAuth: boolean | null
    logoutThunkCreator: () => void
    photos: string | photosType
    login: string | null
}

class YourPageContainer extends React.Component<propsType> {

    render() {
        return (
            <YourPage {...this.props} />
        );
    }
}

let mapStateToProps = (state: appStateType): mapStateToPropsType => ({
    isAuth: state.authReducerKey.isAuth,
    login: state.authReducerKey.login,
    photos: state.headerReducerKey.photos
});
export default compose(connect<mapStateToPropsType, mapDispatchToPropsType, {}, appStateType>(mapStateToProps, { logoutThunkCreator }))(YourPageContainer)

