import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Header from './Header';
import {getStatusHeadThunkCreator, updatedStatusHeadThunkCreator} from "../../redux/header-reducer";
import {withRouter} from "react-router-dom";


class HeaderContainer extends React.Component {
    render() {
        return <Header  {...this.props}
                       getStatusHeadThunkCreator={this.props.getStatusHeadThunkCreator}
                       updatedStatusHeadThunkCreator={this.props.updatedStatusHeadThunkCreator}/>
    };
}

let mapStateToProps = (state) => ({
    login: state.authReducerKey.login,
    status: state.headerReducerKey.status,
    id: state.authReducerKey.id
});

debugger
export default compose(connect(mapStateToProps, {
    getStatusHeadThunkCreator,
    updatedStatusHeadThunkCreator
}))(HeaderContainer);
