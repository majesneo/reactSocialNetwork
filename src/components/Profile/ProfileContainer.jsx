import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfileThunkCreator } from '../../redux/profile-reducer';




class ProfileContainer extends React.Component {
    
    componentDidMount() {
        
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11529;
        }
        this.props.getProfileThunkCreator(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profileReducerKey.profile,
    isAuth: state.authReducerKey.isAuth,
    login: state.authReducerKey.login
})
let WitUrlProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getProfileThunkCreator })(WitUrlProfileContainer, ProfileContainer);