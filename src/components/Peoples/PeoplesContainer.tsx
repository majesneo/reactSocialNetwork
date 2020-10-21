import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';
import {
    // addPeople,
    getFollowDelThunkCreator,
    getFollowPostThunkCreator, getUsersThunkCreator,
} from '../../redux/peoples-reducer';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getPeoples,
    getTotalUsersCount
} from "../../redux/peoples-selector";
import Preloader from '../Preloader/Preloader';
import Peoples from './Peoples';
import { appStateType } from '../../redux/redux-store';
import { peoplesDataType } from '../../types/types';

type mapStatePropsType = {
    peoplesData: Array<peoplesDataType>
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    followingInProgress: Array<number>
}
type mapDispatchPropsType = {
    // addPeople: () => void
    getFollowDelThunkCreator: (id: number) => void
    getFollowPostThunkCreator: (id: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}
type ownPropsType = {
    pageTitle: string
}


class PeoplesContainer extends React.Component<mapStatePropsType & mapDispatchPropsType & ownPropsType> {
    componentDidMount() {
        let { currentPage, pageSize } = this.props
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }
    onPageChanged = (p: number) => {
        let { pageSize } = this.props
        this.props.getUsersThunkCreator(p, pageSize);
    }
    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader /> : null}
            <Peoples {...this.props} onPageChanged={this.onPageChanged} />
        </>
    }
}

let mapStateToProps = (state: appStateType): mapStatePropsType => {
    return {
        peoplesData: getPeoples(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
export default compose(connect<mapStatePropsType, mapDispatchPropsType, ownPropsType, appStateType>(mapStateToProps, {
    // addPeople,
    getFollowDelThunkCreator,
    getFollowPostThunkCreator,
    getUsersThunkCreator,
}))(PeoplesContainer);




