import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfileThunkCreator, getStatusThunkCreator} from '../../redux/profile-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import Preloader from "../Preloader/Preloader";



class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
            if (!userId) {
                this.props.history.push('/Login');
            }
        }
        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId || this.props.statusHead != prevProps.statusHead) {
            this.refreshProfile();
        }
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return (
            <Profile  {...this.props} statusProf={this.props.statusProf} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileReducerKey.profile,
    login: state.authReducerKey.login,
    statusProf: state.profileReducerKey.status,
    statusHead: state.headerReducerKey.status,
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
