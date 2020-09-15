import { connect } from 'react-redux';
import { addFriendAC,unFriendAC, addPeopleActionCreator, setPeoplesAC } from '../../redux/peoples-reducer';
import Peoples from './Peoples';



let mapStateToProps = (state) => {
    return {
        peoplesData: state.peoplesReducerKey.peoplesData
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
        }
    }
}

const PeoplesContainer = connect(mapStateToProps, mapDispatchToProps)(Peoples);

export default PeoplesContainer;
