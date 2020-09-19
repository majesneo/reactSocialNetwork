const set_UserData = 'set_UserData';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case set_UserData: {
            return {
                ...state, ...action.data,
                isAuth: true
            }
        }
        default: return state;
    }
}
export default authReducer;

export const setAuthUserData = (id, email, login) => ({ type: 'set_UserData', data: { id, email, login } });
