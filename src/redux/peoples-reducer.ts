import {getFollowDelAPI, getFollowPostAPI, getUsersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

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
export type initialStateType = typeof initialState;

const peoplesReducer = (state = initialState, action:any):initialStateType => {

    switch (action.type) {
        case add_People: {
            return {
                ...state
            }
        }
        case add_Friend: {
            return {
                ...state, peoplesData: updateObjectInArray(state.peoplesData, action.peopleId, "id", {followed: true})
            }
        }
        case un_Friend: {
            return {
                ...state, peoplesData: updateObjectInArray(state.peoplesData, action.peopleId, "id", {followed: false})
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
        default:
            return state;
    }
}
export default peoplesReducer;

export const addPeople = () => ({type: 'add_People'});
export const addFriend = (peopleId) => ({type: 'add_Friend', peopleId});
export const unFriend = (peopleId) => ({type: 'un_Friend', peopleId});
export const setPeoples = (peoples) => ({type: 'set_Peoples', peoples});
export const setCurrent = (currentPage) => ({type: 'current_Page', currentPage});
export const toggleIsFetching = (isFetching) => ({type: 'toggleIs_Fetching', isFetching});
export const togglefollowingInProgress = (following, peopleId) => ({
    type: 'toggle_followingInProgress',
    following,
    peopleId
});


export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrent(currentPage));
    dispatch(toggleIsFetching(true));
    const data = await getUsersAPI(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setPeoples(data.items));
}

export const getFollowPostThunkCreator = (id) => {
    return async (dispatch) => {
        getFollowPostAndDelFlow(dispatch, getFollowPostAPI.bind(getFollowPostAPI), addFriend.bind(addFriend), id);
    }
}
export const getFollowDelThunkCreator = (id) => {
    return async (dispatch) => {
        getFollowPostAndDelFlow(dispatch, getFollowDelAPI.bind(getFollowDelAPI), unFriend.bind(unFriend), id);
    }
}

const getFollowPostAndDelFlow = async (dispatch, methodApi, actionCreator, id) => {
    dispatch(togglefollowingInProgress(true, id));
    let data = await methodApi(id)
    if (data.resultCode == 0) {

        dispatch(actionCreator(id));
    }
    dispatch(togglefollowingInProgress(false, id));
}