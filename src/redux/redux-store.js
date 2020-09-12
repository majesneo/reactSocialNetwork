import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import postReducer from './post-reducer';



let reducers = combineReducers({
    messagesDataMe: dialogsReducer,
    postData: postReducer
});

let store = createStore(reducers);
export default store;
