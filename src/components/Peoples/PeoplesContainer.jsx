import {connect} from 'react-redux';
import {
    addPeople,
    getUsersThunkCreator,
    getFollowDelThunkCreator,
    getFollowPostThunkCreator
} from '../../redux/peoples-reducer';
import Peoples from './Peoples';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getPeoples,
    getTotalUsersCount
} from "../../redux/peoples-selector";


class PeoplesContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    onPageChanged = (p) => {
        let {pageSize} = this.props
        this.props.getUsersThunkCreator(p, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Peoples {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        peoplesData: getPeoples(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(connect(mapStateToProps, {
    addPeople,
    getFollowDelThunkCreator,
    getFollowPostThunkCreator,
    getUsersThunkCreator
}))(PeoplesContainer);




