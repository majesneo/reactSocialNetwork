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
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
            <Peoples totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     peoplesData={this.props.peoplesData}
                     onPageChanged={this.onPageChanged}
                     addPeople={this.props.addPeople}
                     currentPage={this.props.currentPage}
                     addFriend={this.props.addFriend}
                     unFriend={this.props.unFriend}
                     followingInProgress={this.props.followingInProgress}
                     getFollowDelThunkCreator={this.props.getFollowDelThunkCreator}
                     getFollowPostThunkCreator={this.props.getFollowPostThunkCreator}
            />
        </>
    }
}


let mapStateToProps = (state) => {

    return {
        peoplesData: state.peoplesReducerKey.peoplesData,
        pageSize: state.peoplesReducerKey.pageSize,
        totalUsersCount: state.peoplesReducerKey.totalUsersCount,
        currentPage: state.peoplesReducerKey.currentPage,
        isFetching: state.peoplesReducerKey.isFetching,
        followingInProgress: state.peoplesReducerKey.followingInProgress
    }
}


export default compose(connect(mapStateToProps, {
    addPeople,
    addFriend,
    unFriend,
    getFollowDelThunkCreator,
    getFollowPostThunkCreator,
    getUsersThunkCreator
}),withAuthRedirect)(PeoplesContainer);




