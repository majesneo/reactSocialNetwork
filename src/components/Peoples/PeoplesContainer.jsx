import {connect} from 'react-redux';
import {
    addFriend,
    unFriend,
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
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.getUsersThunkCreator(p, this.props.pageSize);
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
    addFriend,
    unFriend,
    getFollowDelThunkCreator,
    getFollowPostThunkCreator,
    getUsersThunkCreator
}))(PeoplesContainer);




