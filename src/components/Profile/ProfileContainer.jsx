import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import {getProfileThunkCreator, getStatusThunkCreator} from '../../redux/profile-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId && this.props.isAuth) {
            userId = this.props.id;
            this.props.getProfileThunkCreator(userId);
            this.props.getStatusThunkCreator(userId);
        }
        if (userId) {
            this.props.getProfileThunkCreator(userId);
            this.props.getStatusThunkCreator(userId);
        } else {
            return <Redirect to='/Peoples'/>
        }

    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileReducerKey.profile,
    login: state.authReducerKey.login,
    status: state.profileReducerKey.status,
    isAuth: state.authReducerKey.isAuth,
    id: state.authReducerKey.id
})

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WitUrlProfileContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getProfileThunkCreator })(WitUrlProfileContainer);//compose рефакторит этот код на аналогичный ниже
export default compose(connect(mapStateToProps, {
    getStatusThunkCreator,
    getProfileThunkCreator
}), withRouter, withAuthRedirect)(ProfileContainer);
