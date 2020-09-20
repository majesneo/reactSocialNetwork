import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import peoplesReducer from './peoples-reducer';
import postReducer from './post-reducer';
import profileReducer from './profile-reducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    dialogsReducerKey: dialogsReducer,
    postReducerKey: postReducer,
    peoplesReducerKey: peoplesReducer,
    profileReducerKey: profileReducer,
    authReducerKey: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
