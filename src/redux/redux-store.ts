import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import peoplesReducer from './peoples-reducer';
import postReducer from './post-reducer';
import profileReducer from './profile-reducer';
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import headerReducer from './header-reducer';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";


type rootReducerType = typeof rootReducer;

export type appStateType = ReturnType<rootReducerType>

let rootReducer = combineReducers({
    dialogsReducerKey: dialogsReducer,
    postReducerKey: postReducer,
    peoplesReducerKey: peoplesReducer,
    profileReducerKey: profileReducer,
    authReducerKey: authReducer,
    headerReducerKey: headerReducer,
    appReducerKey: appReducer,
    form: formReducer
});


type propertyTypes<T> = T extends { [key: string]: infer U } ? U : never

export type inferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<propertyTypes<T>>
export type baseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;
export default store;
