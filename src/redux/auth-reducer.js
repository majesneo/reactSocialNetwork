import {stopSubmit} from "redux-form";
import {captchaAPI, delLogoutAPI, getGetAuthAPI, postLoginAPI} from "../api/api";
import {logoutPhoto, logoutSatus} from "./header-reducer";

const set_UserData = 'set_UserData';
const set_Captcha = 'auth/set_Captcha';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case set_UserData: {
            return {
                ...state, ...action.data,
            }
        }
        case set_Captcha: {
            return {
                ...state, captcha: action.captcha
            }
        }
        default:
            return state;
    }
}
export default authReducer;

export const setAuthUserData = (id, email, login, isAuth) => ({type: 'set_UserData', data: {id, email, login, isAuth}});
export const setCaptcha = (captcha) => ({type: 'auth/set_Captcha', captcha});

export const getGetAuthThunkCreator = () => {
    return async (dispatch) => {
        const data = await getGetAuthAPI();
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const loginThunkCreator = (email, password, rememberMe,captcha) => {
    return async (dispatch) => {
        const data = await postLoginAPI({email, password, rememberMe,captcha})
        if (data.data.resultCode === 0) {
            dispatch(getGetAuthThunkCreator());
        } else {
            if (data.data.resultCode === 10) {
                dispatch(getCaptchaThunkCreat());
            }
            let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
            dispatch(stopSubmit('Login', {_error: message}));
        }
    }
}

export const logoutThunkCreator = () => {
    return async (dispatch) => {
        const data = await delLogoutAPI()
        if (data.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
            dispatch(logoutSatus(null));
            dispatch(logoutPhoto("https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"));

        }
    }
}
export const getCaptchaThunkCreat = () => async (dispatch) => {
    debugger
    const response = await captchaAPI()
    const captchaURL = response.data.url;

    dispatch(setCaptcha(captchaURL));
}
