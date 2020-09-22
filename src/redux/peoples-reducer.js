import { getFollowDelAPI, getFollowPostAPI, getUsersAPI } from "../api/api";

const toggleIs_Fetching = 'toggleIs_Fetching';
const add_People = 'add_People';
const add_Friend = 'add_Friend';
const un_Friend = 'un_Friend';
const set_Peoples = 'set_Peoples';
const current_Page = 'current_Page';
const toggle_followingInProgress = 'toggle_followingInProgress';



let initialState = {
    peoplesData: [],
    pageSize: 7,
    totalUsersCount: 31,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const peoplesReducer = (state = initialState, action) => {

    switch (action.type) {
        case add_People: {
            return {
                // ...state, peoplesData: [...state.peoplesData, { id: 5, name: 'Kill Bill', friend: true, about: "Ftv Model", imageUrl: require("../components/images/resources/friend-avatar7.jpg") },
                // { id: 6, name: 'Amy Watson', friend: false, about: "Study In University", imageUrl: require("../components/images/resources/nearly5.jpg") },
                // { id: 7, name: 'Caty Lasbo', friend: false, about: "Work As Dancers", imageUrl: require("../components/images/resources/nearly6.jpg") },
                // { id: 8, name: 'Ema Watson', friend: false, about: "Personal Business", imageUrl: require("../components/images/resources/nearly2.jpg") }]
            }
        }
        case add_Friend: {
            return {
                ...state, peoplesData: state.peoplesData.map(people => {
                    if (people.id === action.peopleId) {
                        return { ...people, followed: true }
                    }
                    return people;
                })
            }
        }
        case un_Friend: {

            return {
                ...state, peoplesData: state.peoplesData.map(people => {
                    if (people.id === action.peopleId) {
                        return { ...people, followed: false }
                    }
                    return people;
                })
            }
        }
        case set_Peoples: {
            return {
                ...state, peoplesData: action.peoples
            }
        }
        case current_Page: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case toggleIs_Fetching: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case toggle_followingInProgress: {
            return {
                ...state, followingInProgress: action.following
                    ? [...state.followingInProgress, action.peopleId]
                    : state.followingInProgress.filter(id => id != action.peopleId)
            }
        }
        default: return state;
    }
}
export default peoplesReducer;

export const addPeople = () => ({ type: 'add_People' });
export const addFriend = (peopleId) => ({ type: 'add_Friend', peopleId });
export const unFriend = (peopleId) => ({ type: 'un_Friend', peopleId });
export const setPeoples = (peoples) => ({ type: 'set_Peoples', peoples });
export const setCurrent = (currentPage) => ({ type: 'current_Page', currentPage });
export const toggleIsFetching = (isFetching) => ({ type: 'toggleIs_Fetching', isFetching });
export const togglefollowingInProgress = (following, peopleId) => ({ type: 'toggle_followingInProgress', following, peopleId });



export const getUsersThunkCreator = (p, currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrent(p));
        dispatch(toggleIsFetching(true));
        getUsersAPI(p, currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setPeoples(data.items));
        });
    }
}
export const getFollowDelThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(togglefollowingInProgress(true, id));
        getFollowDelAPI(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(unFriend(id));
            }
            dispatch(togglefollowingInProgress(false, id));
        });
    }
}
export const getFollowPostThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(togglefollowingInProgress(true, id));
        getFollowPostAPI(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(addFriend(id));
            }
            dispatch(togglefollowingInProgress(false, id));
        });
    }
}


