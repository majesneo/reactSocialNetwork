import { getFollowDelAPI, getFollowPostAPI, getUsersAPI, responseType, resultCodesEnum } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
import { peoplesDataType } from "../types/types";
import { Dispatch } from "redux";
import { appStateType, inferActionsTypes } from "./redux-store";
import { ThunkAction } from "redux-thunk";


let initialState = {
    peoplesData: [] as Array<peoplesDataType>,
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,//array of peoples id
    filter: {
        term: "",
        friend: null as null | boolean
    }
};
export type initialStateType = typeof initialState;
export type filterType = typeof initialState.filter;


const peoplesReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        // case add_People: {
        //     return {
        //         ...state, peoplesData: action.people
        //     }
        // }
        case "add_Friend": {
            return {
                ...state, peoplesData: updateObjectInArray(state.peoplesData, action.peopleId, "id", { followed: true })
            }
        }
        case "un_Friend": {
            return {
                ...state, peoplesData: updateObjectInArray(state.peoplesData, action.peopleId, "id", { followed: false })
            }
        }
        case "set_Peoples": {
            return {
                ...state, peoplesData: action.peoples
            }
        }
        case "current_Page": {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case "toggleIs_Fetching": {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case "total_UsersCount": {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case "toggle_followingInProgress": {
            return {
                ...state, followingInProgress: action.following
                    ? [...state.followingInProgress, action.peopleId]
                    : state.followingInProgress.filter(id => id != action.peopleId)
            }
        }
        case 'PEOPLES/setFilter': {
            return {
                ...state, filter: action.payload
            }
        }
        default:
            return state;
    }
}
export default peoplesReducer;

type actionsTypes = ReturnType<inferActionsTypes<typeof actions>>

export const actions = {
    addFriend: (peopleId: number) => ({ type: 'add_Friend', peopleId } as const),
    unFriend: (peopleId: number) => ({ type: 'un_Friend', peopleId } as const),
    setPeoples: (peoples: Array<peoplesDataType>) => ({ type: 'set_Peoples', peoples } as const),
    setCurrent: (currentPage: number) => ({ type: 'current_Page', currentPage } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'toggleIs_Fetching', isFetching } as const),
    togglefollowingInProgress: (following: boolean, peopleId: number) => ({ type: 'toggle_followingInProgress', following, peopleId } as const),
    setUsersCount: (totalCount: number) => ({ type: 'total_UsersCount', totalCount } as const),
    setFilter: (filter: filterType) => ({ type: 'PEOPLES/setFilter', payload: filter } as const),
}

// export const addPeople = (): addPeopleType => ({type: 'add_People'});
// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const getUsersThunkCreator = (currentPage: number, pageSize: number, filter: filterType): thunkType =>
    async (dispatch) => {
        dispatch(actions.setCurrent(currentPage));
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setFilter(filter));
        const data = await getUsersAPI(currentPage, pageSize, filter.term, filter.friend)
        dispatch(actions.setUsersCount(data.totalCount));
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setPeoples(data.items));

    }

export const getFollowPostThunkCreator = (id: number): thunkType => {
    return async (dispatch) => {
        getFollowPostAndDelFlow(dispatch, getFollowPostAPI.bind(getFollowPostAPI), actions.addFriend.bind(actions.addFriend), id);
    }
}
export const getFollowDelThunkCreator = (id: number): thunkType => {
    return async (dispatch) => {
        getFollowPostAndDelFlow(dispatch, getFollowDelAPI.bind(getFollowDelAPI), actions.unFriend.bind(actions.unFriend), id);
    }
}
const getFollowPostAndDelFlow = async (dispatch: dispatchType, methodApi: (id: number) => Promise<responseType>, actionCreator: (id: number) => actionsTypes, id: number) => {
    dispatch(actions.togglefollowingInProgress(true, id));
    const data = await methodApi(id)
    if (data.resultCode == resultCodesEnum.success) {
        dispatch(actionCreator(id));
    }
    dispatch(actions.togglefollowingInProgress(false, id));
}