import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router'
import { getProfileThunkCreator, getStatusThunkCreator } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Preloader from "../Preloader/Preloader";
import { appStateType } from '../../redux/redux-store';
import { getIdAuthRed, getIsAuthAuthRed, getLoginAuthRed, getProfileProfileRed, getStatusHeaderRed } from '../../redux/profile-selector';
import { profileType } from '../../types/types';
import { getStatusProf } from '../../redux/peoples-selector';



type mapDispatchPropsType = {
    getStatusThunkCreator: (userId: number) => void
    getProfileThunkCreator: (userId: number) => void
}
type ownPropsType = {
    pageTitle: string
}

type PathParamsType = {
    userId: string
}

type propsType = mapDispatchPropsType & mapStatePropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<propsType> {
    refreshProfile() {
        debugger
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
            if (!userId) {
                this.props.history.push('/Login');
            }
        }
        this.props.getProfileThunkCreator(userId as number);
        this.props.getStatusThunkCreator(userId as number);
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
            <Profile  {...this.props} profile={this.props.profile} />
        );
    }
}
// statusProf={this.props.statusProf}
type mapStatePropsType = {
    profile: profileType | null
    login: string | null
    statusHead: string | null
    isAuth: boolean | null
    id: number | null
    statusProf: string | null
}
let mapStateToProps = (state: appStateType): mapStatePropsType => {
    return {
        profile: getProfileProfileRed(state),
        login: getLoginAuthRed(state),
        statusHead: getStatusHeaderRed(state),
        isAuth: getIsAuthAuthRed(state),
        id: getIdAuthRed(state),
        statusProf: getStatusProf(state)
    }
}
// 


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WitUrlProfileContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getProfileThunkCreator })(WitUrlProfileContainer);//compose рефакторит этот код на аналогичный ниже
export default compose(connect<mapStatePropsType, mapDispatchPropsType, ownPropsType, appStateType>(mapStateToProps, {
    getStatusThunkCreator,
    getProfileThunkCreator
}), withRouter, withAuthRedirect)(ProfileContainer) as React.ComponentType;
