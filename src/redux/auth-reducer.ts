import { stopSubmit } from "redux-form";
import { captchaAPI, delLogoutAPI, getGetAuthAPI, postLoginAPI, resultCodeForCaptcha, resultCodesEnum } from "../api/api";
import logoutPhoto from "./header-reducer";
import logoutSatus from "./header-reducer";
import { baseThunkType, inferActionsTypes } from "./redux-store";

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
        case 'set_UserData': {
            return {
                ...state, ...action.data
            }
        }
        case 'auth/set_Captcha': {
            return {
                ...state, captcha: action.captcha
            }
        }
        default:
            return state;
    }
}
export default authReducer;



type actionsTypes = inferActionsTypes<typeof actions>

export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'set_UserData',
        data: { id, email, login, isAuth }
    } as const),
    setCaptcha: (captcha: string) => ({ type: 'auth/set_Captcha', captcha } as const)
}


// type getStateType = () => appStateType
// type dispatchType = Dispatch<actionsTypes>
// type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const getGetAuthThunkCreator = (): baseThunkType => {
    return async (dispatch) => {
        const data = await getGetAuthAPI();
        if (data.resultCode === resultCodesEnum.success) {
            let { id, email, login } = data.data;
            dispatch(actions.setAuthUserData(id, email, login, true));
        }
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string): baseThunkType => {
    return async (dispatch) => {
        const data = await postLoginAPI(email, password, rememberMe, captcha)
        if (data.data.resultCode === resultCodesEnum.success) {
            dispatch(getGetAuthThunkCreator());
        } else {
            if (data.data.resultCode === resultCodeForCaptcha.captchaIsRequired) {
                dispatch(getCaptchaThunkCreat());
            }
            let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
            dispatch(stopSubmit('Login', { _error: message }));
        }
    }
}

export const logoutThunkCreator = (): baseThunkType => {
    return async (dispatch) => {
        const data = await delLogoutAPI()
        if (data.resultCode === resultCodesEnum.success) {
            dispatch(actions.setAuthUserData(null, null, null, false));
            //@ts-ignore
            dispatch(logoutSatus(null));
            //@ts-ignore
            dispatch(logoutPhoto("https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"));
        }
    }
}
export const getCaptchaThunkCreat = (): baseThunkType => async (dispatch) => {
    const response = await captchaAPI()
    const captchaURL = response.data.url;
    dispatch(actions.setCaptcha(captchaURL));
}
