import { appStateType } from "./redux-store"

export const getPeoples = (state:appStateType) => {
    return state.peoplesReducerKey.peoplesData
}
export const getPageSize = (state:appStateType) => {
    return state.peoplesReducerKey.pageSize
}
export const getTotalUsersCount = (state:appStateType) => {
    return state.peoplesReducerKey.totalUsersCount
}
export const getCurrentPage = (state:appStateType) => {
    return state.peoplesReducerKey.currentPage
}
export const getIsFetching = (state:appStateType) => {
    return state.peoplesReducerKey.isFetching
}
export const getFollowingInProgress = (state:appStateType) => {
    return state.peoplesReducerKey.followingInProgress
}
