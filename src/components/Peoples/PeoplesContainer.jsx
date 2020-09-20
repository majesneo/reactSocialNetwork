import { connect } from 'react-redux';
import { addFriend, unFriend, addPeople, setPeoples, setCurrent, toggleIsFetching, togglefollowingInProgress } from '../../redux/peoples-reducer';
import Peoples from './Peoples';
import * as axios from "axios";
import React from 'react';
import Preloader from '../Preloader/Preloader';
import { getUsersAPI } from '../../api/api';


class PeoplesContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsersAPI(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setPeoples(data.items);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (p) => {
        this.props.setCurrent(p);
        this.props.toggleIsFetching(true);
        getUsersAPI(p, this.props.pageSize).then(data => {
            this.props.setPeoples(data.items);
            this.props.toggleIsFetching(false);
        });
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Peoples totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                peoplesData={this.props.peoplesData}
                onPageChanged={this.onPageChanged}
                addPeople={this.props.addPeople}
                currentPage={this.props.currentPage}
                addFriend={this.props.addFriend}
                unFriend={this.props.unFriend}
                togglefollowingInProgress={this.props.togglefollowingInProgress}
                followingInProgress={this.props.followingInProgress}
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


export default connect(mapStateToProps, {
    addPeople,
    addFriend,
    unFriend,
    setPeoples,
    setCurrent,
    toggleIsFetching,
    togglefollowingInProgress
})
    (PeoplesContainer);
