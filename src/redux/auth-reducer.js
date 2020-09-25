import {stopSubmit} from "redux-form";
import {delLogoutAPI, getGetAuthAPI, postLoginAPI} from "../api/api";


const set_UserData = 'set_UserData';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case set_UserData: {
            return {
                ...state, ...action.data,
            }
        }
        default:
            return state;
    }
}
export default authReducer;

export const setAuthUserData = (id, email, login, isAuth) => ({type: 'set_UserData', data: {id, email, login, isAuth}});


export const getGetAuthThunkCreator = () => (dispatch) => {
    getGetAuthAPI().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}
export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    postLoginAPI({email, password, rememberMe}).then(data => {
        if (data.data.resultCode === 0) {
            dispatch(getGetAuthThunkCreator());
        } else {

            let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
            dispatch(stopSubmit('Login', {_error: message}));
        }
    });
}

export const logoutThunkCreator = () => (dispatch) => {
    delLogoutAPI().then(data => {
        if (data.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}
