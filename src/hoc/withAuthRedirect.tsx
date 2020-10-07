import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { appStateType } from '../redux/redux-store';


let mapStateToPropsForRedirect = (state: appStateType) => ({
    isAuth: state.authReducerKey.isAuth
});

type mapPropsType = {
    isAuth: boolean | null
}
type mapDispatchToProps = {

}
export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<mapPropsType & mapDispatchToProps> = (props) => {
        let { isAuth, ...restProps } = props
        if (!isAuth) return <Redirect to='/Login' />
        return <WrappedComponent {...restProps as WCP} />
    }

    let ConnectedAuthRedirectComponent = connect<mapPropsType, mapDispatchToProps, WCP, appStateType>(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}


