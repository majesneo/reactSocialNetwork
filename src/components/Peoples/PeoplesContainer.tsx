import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';
import {
    filterType,
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
import { getFilter } from '../../redux/profile-selector';

type mapStatePropsType = {
    peoplesData: Array<peoplesDataType>
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    followingInProgress: Array<number>
    filter: filterType
}
type mapDispatchPropsType = {
    // addPeople: () => void
    getFollowDelThunkCreator: (id: number) => void
    getFollowPostThunkCreator: (id: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number, filter: filterType) => void
}
type ownPropsType = {

}


class PeoplesContainer extends React.Component<mapStatePropsType & mapDispatchPropsType & ownPropsType> {
    componentDidMount() {
        let { currentPage, pageSize, filter } = this.props
        this.props.getUsersThunkCreator(currentPage, pageSize, filter);
    }
    onPageChanged = (p: number) => {
        let { pageSize, filter } = this.props
        this.props.getUsersThunkCreator(p, pageSize, filter);
    }
    onFilterChanged = (filter: filterType) => {
        let { pageSize } = this.props;
        this.props.getUsersThunkCreator(1, pageSize, filter)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Peoples {...this.props} onPageChanged={this.onPageChanged} onFilterChanged={this.onFilterChanged} />
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
        followingInProgress: getFollowingInProgress(state),
        filter: getFilter(state)
    }
}
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
export default compose(connect<mapStatePropsType, mapDispatchPropsType, ownPropsType, appStateType>(mapStateToProps, {
    // addPeople,
    getFollowDelThunkCreator,
    getFollowPostThunkCreator,
    getUsersThunkCreator,
}))(PeoplesContainer);




