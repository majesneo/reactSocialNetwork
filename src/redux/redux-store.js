import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import peoplesReducer from './peoples-reducer';
import postReducer from './post-reducer';
import profileReducer from './profile-reducer';
import thunkMiddleware from "redux-thunk";
import headerReducer from './header-reducer';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    dialogsReducerKey: dialogsReducer,
    postReducerKey: postReducer,
    peoplesReducerKey: peoplesReducer,
    profileReducerKey: profileReducer,
    authReducerKey: authReducer,
    headerReducerKey: headerReducer,
    form: formReducer,
    appReducerKey: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
