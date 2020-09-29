import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Header from './Header';
import {getStatusHeadThunkCreator, savePhoto, updatedStatusHeadThunkCreator} from "../../redux/header-reducer";
import {getProfileThunkCreator} from "../../redux/profile-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileThunkCreator(this.props.id);
    }

    render() {
        return <Header  {...this.props}
                        getStatusHeadThunkCreator={this.props.getStatusHeadThunkCreator}
                        savePhoto={this.props.savePhoto}
                        photos={this.props.photos}

                        updatedStatusHeadThunkCreator={this.props.updatedStatusHeadThunkCreator}/>
    };
}

let mapStateToProps = (state) => ({
    login: state.authReducerKey.login,
    status: state.headerReducerKey.status,
    id: state.authReducerKey.id,
    photos: state.headerReducerKey.photos
});


export default compose(connect(mapStateToProps, {
    getStatusHeadThunkCreator,
    updatedStatusHeadThunkCreator,
    savePhoto,
    getProfileThunkCreator
}))(HeaderContainer);
