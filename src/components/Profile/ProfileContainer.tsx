import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { match, RouteComponentProps } from 'react-router'
import { getProfileThunkCreator, getStatusThunkCreator } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Preloader from "../Preloader/Preloader";
import { appStateType } from '../../redux/redux-store';
import { profileType } from '../../types/types';
import { getIdAuthRed, getIsAuthAuthRed, getLoginAuthRed, getProfileProfileRed, getStatusHeaderRed } from '../../redux/profile-selector';
import { type } from 'os';


type mapStatePropsType = {
    profile: profileType | null
    login: string | null
    statusHead: string
    isAuth: boolean | null
    id: number | null
}
type mapDispatchPropsType = {
    getStatusThunkCreator: (userId: number) => void
    getProfileThunkCreator: (userId: number) => void
}
type ownPropsType = {
    pageTitle: string
}

interface propsType extends RouteComponentProps<matchParams> {
    getProfileThunkCreator: (userId: number) => void
    getStatusThunkCreator: (userId: number) => void
    statusHead: string | null
    profile: profileType | null
    statusProf: string | null
    id: number | null
}
type stateType = {

}
type matchParams = {

    userId: number

}



class ProfileContainer extends React.Component<propsType & stateType> {
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
    componentDidUpdate(prevProps: propsType) {
        if (this.props.match.params.userId != prevProps.match.params.userId || this.props.statusHead != prevProps.statusHead) {
            this.refreshProfile();
        }
    }
    render() {
        if (!this.props.profile) {
            return <Preloader />
        }
        return (
            <Profile  {...this.props} statusProf={this.props.statusProf} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state: appStateType): mapStatePropsType => {
    return {
        profile: getProfileProfileRed(state),
        login: getLoginAuthRed(state),
        statusHead: getStatusHeaderRed(state),
        isAuth: getIsAuthAuthRed(state),
        id: getIdAuthRed(state)
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WitUrlProfileContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getProfileThunkCreator })(WitUrlProfileContainer);//compose рефакторит этот код на аналогичный ниже
export default compose(connect<mapStatePropsType, mapDispatchPropsType, ownPropsType, appStateType>(mapStateToProps, {
    getStatusThunkCreator,
    getProfileThunkCreator
}), withRouter, withAuthRedirect)(ProfileContainer) as React.ComponentType;
