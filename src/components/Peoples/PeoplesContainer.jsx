import { connect } from 'react-redux';
import { addFriend, unFriend, addPeople, setPeoples, setCurrent, toggleIsFetching } from '../../redux/peoples-reducer';
import Peoples from './Peoples';
import * as axios from "axios";
import React from 'react';
import Preloader from '../Preloader/Preloader';


class PeoplesContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setPeoples(response.data.items);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = (p) => {
        this.props.setCurrent(p);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setPeoples(response.data.items);
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
                unFriend={this.props.unFriend} />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        peoplesData: state.peoplesReducerKey.peoplesData,
        pageSize: state.peoplesReducerKey.pageSize,
        totalUsersCount: state.peoplesReducerKey.totalUsersCount,
        currentPage: state.peoplesReducerKey.currentPage,
        isFetching: state.peoplesReducerKey.isFetching
    }
}


export default connect(mapStateToProps, {addPeople,
    addFriend,
    unFriend,
    setPeoples,
    setCurrent,
    toggleIsFetching})(PeoplesContainer);
