import React from 'react';
import { connect } from 'react-redux';
import {  Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { logoutThunkCreator } from '../../redux/auth-reducer';





class Logout extends React.Component {

    componentDidMount() {
        this.props.logoutThunkCreator();
    }
    render() {
         if (this.props.isAuth) {
         return <Redirect to={"/Logout"} />}else {
            return <Redirect to={"/Login"} />}
        }
    }

let mapStateToProps = (state) => {
    return { isAuth: state.authReducerKey.isAuth }
}
export default compose(connect(mapStateToProps, { logoutThunkCreator }), withAuthRedirect)(Logout)
 