import React from 'react';
import { connect } from 'react-redux';

import { getGetAuthThunkCreator} from '../../redux/auth-reducer';
import YourPage from './YourPage';


class YourPageContainer extends React.Component {
    componentDidMount() {
        this.props.getGetAuthThunkCreator();
    }

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
export default connect(mapStateToProps, { getGetAuthThunkCreator })(YourPageContainer);
