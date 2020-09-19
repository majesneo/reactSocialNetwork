import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import YourPage from './YourPage';


class YourPageContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                    
                }
            });
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
export default connect(mapStateToProps, { setAuthUserData })(YourPageContainer);