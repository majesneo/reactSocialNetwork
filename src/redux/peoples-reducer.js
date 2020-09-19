const toggleIs_Fetching = 'toggleIs_Fetching';
const add_People = 'add_People';
const add_Friend = 'add_Friend';
const un_Friend = 'un_Friend';
const set_Peoples = 'set_Peoples';
const current_Page = 'current_Page';

let initialState = {
    peoplesData: [],
    pageSize: 6,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false
};

const peoplesReducer = (state = initialState, action) => {
    switch (action.type) {
        case add_People: {
            return {
                // ...state, peoplesData: [...state.peoplesData, { id: 5, name: 'Kill Bill', friend: true, about: "Ftv Model", imageUrl: require("../components/images/resources/friend-avatar7.jpg") },
                // { id: 6, name: 'Amy Watson', friend: false, about: "Study In University", imageUrl: require("../components/images/resources/nearly5.jpg") },
                // { id: 7, name: 'Caty Lasbo', friend: false, about: "Work As Dancers", imageUrl: require("../components/images/resources/nearly6.jpg") },
                // { id: 8, name: 'Ema Watson', friend: false, about: "Personal Business", imageUrl: require("../components/images/resources/nearly2.jpg") }]
            }
        }
        case add_Friend: {
            return {
                ...state, peoplesData: state.peoplesData.map(people => {
                    if (people.id === action.peopleId) {
                        return { ...people, friend: true }
                    }
                    return people;
                })
            }
        }
        case un_Friend: {
            return {
                ...state, peoplesData: state.peoplesData.map(people => {
                    if (people.id === action.peopleId) {
                        return { ...people, friend: false }
                    }
                    return people;
                })
            }
        }
        case set_Peoples: {
            return {
                ...state, peoplesData: action.peoples
            }
        }
        case current_Page: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case toggleIs_Fetching: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default: return state;
    }
}
export default peoplesReducer;

export const addPeople = () => ({ type: 'add_People' });
export const addFriend = (peopleId) => ({ type: 'add_Friend', peopleId });
export const unFriend = (peopleId) => ({ type: 'un_Friend', peopleId });
export const setPeoples = (peoples) => ({ type: 'set_Peoples', peoples });
export const setCurrent = (currentPage) => ({ type: 'current_Page', currentPage });
export const toggleIsFetching = (isFetching) => ({ type: 'toggleIs_Fetching', isFetching });
