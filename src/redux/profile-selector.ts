import { appStateType } from "./redux-store"

export const getProfileProfileRed = (state: appStateType) => {
    return state.profileReducerKey.profile
}
export const getLoginAuthRed = (state: appStateType) => {
    return state.authReducerKey.login
}
export const getStatusHeaderRed = (state: appStateType) => {
    return state.headerReducerKey.status
}
export const getIsAuthAuthRed = (state: appStateType) => {
    return state.authReducerKey.isAuth
}
export const getIdAuthRed = (state: appStateType) => {
    return state.authReducerKey.id
}
export const getFilter = (state: appStateType) => {
    return state.peoplesReducerKey.filter
}

