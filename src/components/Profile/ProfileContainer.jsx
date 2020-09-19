import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setPeoplesProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';




class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11529;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setPeoplesProfile(response.data);
            });
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
export default connect(mapStateToProps, { setPeoplesProfile })(WitUrlProfileContainer, ProfileContainer);