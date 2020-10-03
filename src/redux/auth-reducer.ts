import { Dispatch } from "redux";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { captchaAPI, delLogoutAPI, getGetAuthAPI, postLoginAPI, resultCodeForCaptcha, resultCodesEnum } from "../api/api";
import { logoutPhoto, logoutSatus } from "./header-reducer";
import { appStateType } from "./redux-store";

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

const authReducer = (state = initialState, action: actionsTypes): initialStateType => {
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

type actionsTypes = setAuthUserDataActionType | setCaptchaType

type setAuthUserDataTypeDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type setAuthUserDataActionType = {
    type: typeof set_UserData,
    data: setAuthUserDataTypeDataType
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => ({
    type: 'set_UserData',
    data: { id, email, login, isAuth }
});


type setCaptchaType = {
    type: typeof set_Captcha,
    captcha: string
}
export const setCaptcha = (captcha: string): setCaptchaType => ({ type: 'auth/set_Captcha', captcha });




// type getStateType = () => appStateType
type dispatchType = Dispatch<actionsTypes>
type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const getGetAuthThunkCreator = (): thunkType => {
    return async (dispatch) => {
        const data = await getGetAuthAPI();
        if (data.resultCode === resultCodesEnum.success) {
            let { id, email, login } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string): thunkType => {
    return async (dispatch) => {
        const data = await postLoginAPI(email, password, rememberMe, captcha)
        if (data.data.resultCode === resultCodesEnum.success) {
            dispatch(getGetAuthThunkCreator());
        } else {
            if (data.data.resultCode === resultCodeForCaptcha.captchaIsRequired) {
                dispatch(getCaptchaThunkCreat());
            }
            let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
            //@ts-ignore
            dispatch(stopSubmit('Login', { _error: message }));
        }
    }
}

export const logoutThunkCreator = (): thunkType => {
    return async (dispatch) => {
        const data = await delLogoutAPI()
        if (data.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
            //@ts-ignore
            dispatch(logoutSatus(null));
            //@ts-ignore
            dispatch(logoutPhoto("https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"));
        }
    }
}
export const getCaptchaThunkCreat = (): thunkType => async (dispatch) => {
    const response = await captchaAPI()
    const captchaURL = response.data.url;
    dispatch(setCaptcha(captchaURL));
}
