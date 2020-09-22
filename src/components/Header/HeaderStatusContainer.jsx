import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { updatedStatusThunkCreator, getStatusThunkCreator } from '../../redux/header-reducer';

import HeaderStatus from './HeaderStatus';


class HeaderStatusContainer extends React.Component {


	componentDidMount() {

		let userId = 11529;

		this.props.getStatusThunkCreator(userId);
	}

	
	render() {

		return <HeaderStatus {...this.props} status={this.props.status} updatedStatusThunkCreator={this.props.updatedStatusThunkCreator} />
	};
}

let mapStateToProps = (state) => ({
	login: state.authReducerKey.login,
	status: state.headerReducerKey.status
});


export default compose(connect(mapStateToProps, { updatedStatusThunkCreator, getStatusThunkCreator }))(HeaderStatusContainer)
