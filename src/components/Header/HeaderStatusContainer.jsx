import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {  updatedStatusThunkCreator } from '../../redux/header-reducer';
import HeaderStatus from './HeaderStatus';


class HeaderStatusContainer extends React.Component {


	render() {

		return <HeaderStatus {...this.props} status={this.props.status} updatedStatusThunkCreator={this.props.updatedStatusThunkCreator}  />
	};
}

let mapStateToProps = (state) => ({
	login: state.authReducerKey.login,
	status: state.profileReducerKey.status
});


export default compose(connect(mapStateToProps, { updatedStatusThunkCreator }))(HeaderStatusContainer)
