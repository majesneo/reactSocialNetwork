import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';



class HeaderContainer extends React.Component {

	render() {
		return <Header {...this.props} />
	};
}

let mapStateToProps = (state) => ({
	login: state.authReducerKey.login,
	status: state.headerReducerKey.status
});


export default compose(connect(mapStateToProps))(HeaderContainer)
