import { getFollowDelAPI, getFollowPostAPI, getUsersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
import { peoplesDataType } from "../types/types";
import { Dispatch } from "redux";
import { appStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { type } from "os";


const toggleIs_Fetching = 'toggleIs_Fetching';
// const add_People = 'add_People';
const add_Friend = 'add_Friend';
const un_Friend = 'un_Friend';
const set_Peoples = 'set_Peoples';
const current_Page = 'current_Page';
const toggle_followingInProgress = 'toggle_followingInProgress';
const total_UsersCount = "total_UsersCount";


let initialState = {
    peoplesData: [] as Array<peoplesDataType>,
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of peoples id
};
export type initialStateType = typeof initialState;

type actionsTypes = setUsersCountActionType | addFriendActionType | unFriendActionType | setPeoplesActionType
    | setCurrentActionType | toggleIsFetchingActionType | togglefollowingInProgressActionType

const peoplesReducer = (state = initialState, action: actionsTypes): initialStateType => {

    switch (action.type) {
        // case add_People: {
        //     return {
        //         ...state, peoplesData: action.people
        //     }
        // }
        case add_Friend: {
            return {
                ...state, peoplesData: updateObjectInArray(state.peoplesData, action.peopleId, "id", { followed: true })
            }
        }
        case un_Friend: {
            return {
                ...state, peoplesData: updateObjectInArray(state.peoplesData, action.peopleId, "id", { followed: false })
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
        case total_UsersCount: {
            return {
                ...state, totalUsersCount: action.totalCount
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


type setUsersCountActionType = {
    type: typeof total_UsersCount
    totalCount: number
}
export const setUsersCount = (totalCount: number): setUsersCountActionType => ({ type: 'total_UsersCount', totalCount });

// type addPeopleType = {
//     type: typeof add_People
//     people:
// }
// export const addPeople = (): addPeopleType => ({type: 'add_People'});


type addFriendActionType = {
    type: typeof add_Friend
    peopleId: number
}
export const addFriend = (peopleId: number): addFriendActionType => ({ type: 'add_Friend', peopleId });


type unFriendActionType = {
    type: typeof un_Friend
    peopleId: number
}
export const unFriend = (peopleId: number): unFriendActionType => ({ type: 'un_Friend', peopleId });


type setPeoplesActionType = {
    type: typeof set_Peoples
    peoples: Array<peoplesDataType>
}
export const setPeoples = (peoples: Array<peoplesDataType>): setPeoplesActionType => ({ type: 'set_Peoples', peoples });


type setCurrentActionType = {
    type: typeof current_Page
    currentPage: number
}
export const setCurrent = (currentPage: number): setCurrentActionType => ({ type: 'current_Page', currentPage });


type toggleIsFetchingActionType = {
    type: typeof toggleIs_Fetching
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: 'toggleIs_Fetching', isFetching });


type togglefollowingInProgressActionType = {
    type: typeof toggle_followingInProgress
    following: boolean
    peopleId: number
}
export const togglefollowingInProgress = (following: boolean, peopleId: number): togglefollowingInProgressActionType => ({
    type: 'toggle_followingInProgress',
    following,
    peopleId
});


// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const getUsersThunkCreator = (currentPage: number, pageSize: number): thunkType => async (dispatch) => {
    dispatch(setCurrent(currentPage));
    dispatch(toggleIsFetching(true));
    const data = await getUsersAPI(currentPage, pageSize)
    dispatch(setUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
    dispatch(setPeoples(data.items));
}

export const getFollowPostThunkCreator = (id: number): thunkType => {
    return async (dispatch) => {
        getFollowPostAndDelFlow(dispatch, getFollowPostAPI.bind(getFollowPostAPI), addFriend.bind(addFriend), id);
    }
}
export const getFollowDelThunkCreator = (id: number): thunkType => {
    return async (dispatch) => {
        getFollowPostAndDelFlow(dispatch, getFollowDelAPI.bind(getFollowDelAPI), unFriend.bind(unFriend), id);
    }
}
const getFollowPostAndDelFlow = async (dispatch: dispatchType, methodApi: any, actionCreator: (id: number) => addFriendActionType | unFriendActionType, id: number) => {
    dispatch(togglefollowingInProgress(true, id));
    let data = await methodApi(id)
    if (data.resultCode == 0) {
        dispatch(actionCreator(id));
    }
    dispatch(togglefollowingInProgress(false, id));
}