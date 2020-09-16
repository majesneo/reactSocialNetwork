import { connect } from 'react-redux';
import { addFriendAC, unFriendAC, addPeopleActionCreator, setPeoplesAC, setCurrentPagesAC } from '../../redux/peoples-reducer';
import Peoples from './Peoples';



let mapStateToProps = (state) => {
    return {
        peoplesData: state.peoplesReducerKey.peoplesData,
        pageSize: state.peoplesReducerKey.pageSize,
        totalUsersCount: state.peoplesReducerKey.totalUsersCount,
        originalPage: state.peoplesReducerKey.originalPage
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
        originalPage: (originalPage) => {
            dispatch(setCurrentPagesAC(originalPage));
        }
    }
}

const PeoplesContainer = connect(mapStateToProps, mapDispatchToProps)(Peoples);

export default PeoplesContainer;
