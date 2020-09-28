// import React from 'react';
// import {connect} from 'react-redux';
// import {compose} from 'redux';
// import HeaderStatus from './HeaderStatus';
// import {getStatusThunkCreator, updatedStatusThunkCreator} from "../../redux/header-reducer";
//
//
// class HeaderStatusContainer extends React.Component {
//
//
//
//     render() {
//         return <HeaderStatus {...this.props} status={this.props.status} getStatusThunkCreator={this.props.getStatusThunkCreator}
//                              updatedStatusThunkCreator={this.props.updatedStatusThunkCreator}/>
//     };
// }
//
// let mapStateToProps = (state) => ({
//     login: state.authReducerKey.login,
//     status: state.headerReducerKey.status,
//     isAuth: state.authReducerKey.isAuth,
//     id: state.authReducerKey.id
// });
//
//
// export default compose(connect(mapStateToProps, {
//     updatedStatusThunkCreator,
//     getStatusThunkCreator
// }))(HeaderStatusContainer)
