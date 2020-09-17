import { connect } from 'react-redux';
import { addFriendAC, unFriendAC, addPeopleActionCreator, setPeoplesAC, setCurrentPageAC } from '../../redux/peoples-reducer';
import Peoples from './Peoples';



let mapStateToProps = (state) => {
    return {
        peoplesData: state.peoplesReducerKey.peoplesData,
        pageSize: state.peoplesReducerKey.pageSize,
        totalUsersCount: state.peoplesReducerKey.totalUsersCount,
        currentPage: state.peoplesReducerKey.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPeople: () => {
            dispatch(addPeopleActionCreator());
        },
        addFriend: (peopleId) => {
            dispatch(addFriendAC(peopleId));
        },
        unFriend: (peopleId) => {
            dispatch(unFriendAC(peopleId));
        },
        setPeoples: (peoples) => {
            dispatch(setPeoplesAC(peoples));
        },
        setCurrentPages: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    }
}

const PeoplesContainer = connect(mapStateToProps, mapDispatchToProps)(Peoples);

export default PeoplesContainer;
