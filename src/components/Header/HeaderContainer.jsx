import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Header from './Header';
import {getStatusThunkCreator, updatedStatusThunkCreator} from "../../redux/header-reducer";



class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props} getStatusThunkCreator={this.props.getStatusThunkCreator}
                       updatedStatusThunkCreator={this.props.updatedStatusThunkCreator}/>
    };
}

let mapStateToProps = (state) => ({
    login: state.authReducerKey.login,
    status: state.headerReducerKey.status,
    id: state.authReducerKey.id
});


export default compose(connect(mapStateToProps, {getStatusThunkCreator, updatedStatusThunkCreator}))(HeaderContainer);
