

const addPeople = 'addPeople';
const addFriend = 'addFriend';
const unFriend = 'unFriend';
const setPeoples = 'setPeoples';

let initialState = {
    peoplesData: []
};

const peoplesReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPeople: {
            return {
                ...state, peoplesData: [...state.peoplesData, { id: 5, name: 'Kill Bill', friend: true, about: "Ftv Model", imageUrl: require("../components/images/resources/friend-avatar7.jpg") },
                { id: 6, name: 'Amy Watson', friend: false, about: "Study In University", imageUrl: require("../components/images/resources/nearly5.jpg") },
                { id: 7, name: 'Caty Lasbo', friend: false, about: "Work As Dancers", imageUrl: require("../components/images/resources/nearly6.jpg") },
                { id: 8, name: 'Ema Watson', friend: false, about: "Personal Business", imageUrl: require("../components/images/resources/nearly2.jpg") }]
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
                ...state, peoplesData: [...state.peoplesData, ...action.peoples] //изначально данных о людях у нас нет мы их берем с серва а потом уже нужно передать в нашь стейт поэтому создадим экшин который будет добавлять людей в стейт, но для того что бы каждый раз не перезаписывать людей если у нас уже есть в стайте какие то люди то мы их копируем и добовляем новых которые пришли из экшена т.к. их много это массив приминяем опять спрэт оператор
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