export const getPeoples = (state) => {
    return state.peoplesReducerKey.peoplesData
}
export const getPageSize = (state) => {
    return state.peoplesReducerKey.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.peoplesReducerKey.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.peoplesReducerKey.currentPage
}
export const getIsFetching = (state) => {
    return state.peoplesReducerKey.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.peoplesReducerKey.followingInProgress
}
