import peoplesReducer, { actions, initialStateType } from "./peoples-reducer"


let state: initialStateType;

beforeEach(() => {
    state = {
        peoplesData: [
            { id: 0, name: "lion0", followed: false, photos: { small: null, large: null }, status: "status0" },
            { id: 1, name: "lion1", followed: false, photos: { small: null, large: null }, status: "status1" },
            { id: 2, name: "lion2", followed: true, photos: { small: null, large: null }, status: "status2" },
            { id: 3, name: "lion3", followed: true, photos: { small: null, large: null }, status: "status3" },
        ],
        pageSize: 7,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('follow success', () => {
    const newState = peoplesReducer(state, actions.addFriend(1))
    expect(newState.peoplesData[0].followed).toBeFalsy();
    expect(newState.peoplesData[1].followed).toBeTruthy();
})
test('unfollow success', () => {
    const newState = peoplesReducer(state, actions.unFriend(3))
    expect(newState.peoplesData[2].followed).toBeTruthy();
    expect(newState.peoplesData[3].followed).toBeFalsy();
})
