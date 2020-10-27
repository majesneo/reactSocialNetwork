import { type } from 'os';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { inferActionsTypes } from './redux-store';


const reducers = {
    // ... your other reducers here ...
    form: formReducer.plugin({
        account: (state, action) => { // <------ 'account' is name of form given to reduxForm()
            switch (action.type) {
                case "cleanForm":
                    return undefined;       // <--- blow away form data
                default:
                    return state;
            }
        }
    })
};

type actionsTypes = ReturnType<inferActionsTypes<typeof actions>>
export const actions = {
    cleanForm: () => ({ type: "cleanForm" } as const)
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);