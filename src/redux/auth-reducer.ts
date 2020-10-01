import {stopSubmit} from "redux-form";
import {captchaAPI, delLogoutAPI, getGetAuthAPI, postLoginAPI} from "../api/api";
import {logoutPhoto, logoutSatus} from "./header-reducer";

const set_UserData = 'set_UserData';
const set_Captcha = 'auth/set_Captcha';


let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean | null,
    captcha: null as string | null,
};
export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case set_UserData: {
            return {
                ...state, ...action.data
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

type setAuthUserDataTypeDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean

}

type setAuthUserDataType = {
    type: typeof set_UserData,
    data: setAuthUserDataTypeDataType
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({
    type: 'set_UserData',
    data: {id, email, login, isAuth}
});

type setCaptchaType = {
    type: typeof set_Captcha,
    captcha: string
}
export const setCaptcha = (captcha: string): setCaptchaType => ({type: 'auth/set_Captcha', captcha});

export const getGetAuthThunkCreator = () => {
    return async (dispatch: any) => {
        const data = await getGetAuthAPI();
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const loginThunkCreator = (email: string, password: number, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        const data = await postLoginAPI({email, password, rememberMe, captcha})
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
    return async (dispatch: any) => {
        const data = await delLogoutAPI()
        if (data.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
            dispatch(logoutSatus(null));
            dispatch(logoutPhoto("https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"));

        }
    }
}
export const getCaptchaThunkCreat = () => async (dispatch: any) => {
    const response = await captchaAPI()
    const captchaURL = response.data.url;
    dispatch(setCaptcha(captchaURL));
}
