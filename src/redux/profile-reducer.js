const set_PeoplesProfile = 'set_PeoplesProfile';

let initialState = {
    profile: null
};


const pofileReducer = (state = initialState, action) => {
    switch (action.type) {
        case set_PeoplesProfile: {
            return {
                ...state, profile: action.profile
            }
        }
        default: return state;
    }
}
export default pofileReducer;

export const setPeoplesProfile = (profile) => ({ type: 'set_PeoplesProfile', profile });