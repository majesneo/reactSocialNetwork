import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {updatedStatusThunkCreator, getStatusThunkCreator} from '../../redux/header-reducer';

import HeaderStatus from './HeaderStatus';
import {getGetAuthThunkCreator} from "../../redux/auth-reducer";


class HeaderStatusContainer extends React.Component {
    componentDidMount() {
        if (this.props.isAuth) {
            let userId = this.props.id;
            this.props.getGetAuthThunkCreator();
            this.props.getStatusThunkCreator(userId);

        }
    }


    render() {

        return <HeaderStatus {...this.props} status={this.props.status}
                             updatedStatusThunkCreator={this.props.updatedStatusThunkCreator}/>
    };
}

let mapStateToProps = (state) => ({
    login: state.authReducerKey.login,
    status: state.headerReducerKey.status,
    isAuth: state.authReducerKey.isAuth,
    id: state.authReducerKey.id
});


export default compose(connect(mapStateToProps, {
    getGetAuthThunkCreator,
    updatedStatusThunkCreator,
    getStatusThunkCreator
}))(HeaderStatusContainer)
