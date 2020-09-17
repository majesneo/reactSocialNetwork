

const addPeople = 'addPeople';
const addFriend = 'addFriend';
const unFriend = 'unFriend';
const setPeoples = 'setPeoples';
const currentPage= 'currentPage';

let initialState = {
    peoplesData: [],
    pageSize: 6,
    totalUsersCount: 22,
    currentPage: 1
};

const peoplesReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPeople: {
            return {
                // ...state, peoplesData: [...state.peoplesData, { id: 5, name: 'Kill Bill', friend: true, about: "Ftv Model", imageUrl: require("../components/images/resources/friend-avatar7.jpg") },
                // { id: 6, name: 'Amy Watson', friend: false, about: "Study In University", imageUrl: require("../components/images/resources/nearly5.jpg") },
                // { id: 7, name: 'Caty Lasbo', friend: false, about: "Work As Dancers", imageUrl: require("../components/images/resources/nearly6.jpg") },
                // { id: 8, name: 'Ema Watson', friend: false, about: "Personal Business", imageUrl: require("../components/images/resources/nearly2.jpg") }]
            }
        }
        case addFriend: {
            return {
                ...state, peoplesData: state.peoplesData.map(people => {
                    if (people.id === action.peopleId) {
                        return { ...people, friend: true }
                    }
                    return people;
                })
            }
        }
        case unFriend: {
            return {
                ...state, peoplesData: state.peoplesData.map(people => {
                    if (people.id === action.peopleId) {
                        return { ...people, friend: false }
                    }
                    return people;
                })
            }
        }
        case setPeoples: {
            return {
                ...state,  peoplesData: action.peoples
            }
        }
        case currentPage: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        default: return state;
    }
}
export default peoplesReducer;

export const addPeopleActionCreator = () => ({ type: 'addPeople' });
export const addFriendAC = (peopleId) => ({ type: 'addFriend', peopleId });
export const unFriendAC = (peopleId) => ({ type: 'unFriend', peopleId });
export const setPeoplesAC = (peoples) => ({ type: 'setPeoples', peoples });
export const setCurrentPageAC = (currentPage) => ({ type: 'currentPage', currentPage });