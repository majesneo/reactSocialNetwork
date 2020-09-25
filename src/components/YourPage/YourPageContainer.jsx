import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import YourPage from './YourPage';
import {logoutThunkCreator} from "../../redux/auth-reducer";


class YourPageContainer extends React.Component {

    render() {
        return (
            <YourPage {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authReducerKey.isAuth,
    login: state.authReducerKey.login
});
export default compose(connect(mapStateToProps,{logoutThunkCreator}))(YourPageContainer)

