import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import peoplesReducer from './peoples-reducer';
import postReducer from './post-reducer';



let reducers = combineReducers({
    dialogsReducerKey: dialogsReducer,
    postReducerKey: postReducer,
    peoplesReducerKey: peoplesReducer
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
