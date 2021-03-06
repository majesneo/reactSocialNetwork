import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";


let store = {
    _state: {

        MyPhoto: [
            { imageUrl: require("../components/images/resources/side-friend6.jpg") },
            { alt: 'MyPhoto' }
        ],

        dialogsData: [
            { id: 1, name: 'Molly cyrus', imageUrl: require("../components/images/resources/friend-avatar2.jpg") },
            { id: 2, name: 'Andrew', imageUrl: require("../components/images/resources/friend-avatar3.jpg") },
            { id: 3, name: 'Jason Bourne', imageUrl: require("../components/images/resources/friend-avatar.jpg") },
            { id: 4, name: 'Sarah Grey', imageUrl: require("../components/images/resources/friend-avatar4.jpg") },
            { id: 5, name: 'Bill Doe', imageUrl: require("../components/images/resources/friend-avatar5.jpg") },
            { id: 6, name: 'Shen Cornery', imageUrl: require("../components/images/resources/friend-avatar6.jpg") },
            { id: 7, name: 'Kill Bill', imageUrl: require("../components/images/resources/friend-avatar7.jpg") },
            { id: 8, name: 'Jasmin Walia', imageUrl: require("../components/images/resources/friend-avatar8.jpg") },
            { id: 9, name: 'Neclos Cage', imageUrl: require("../components/images/resources/friend-avatar9.jpg") }
        ],

        messagesDataMe: [
            { id: 1, message: 'Elizabeth lol' },
            { id: 2, message: 'wanna know whats my second guess was?' },
            { id: 3, message: "Disney's the lizard king" },
            { id: 4, message: 'i know him 5 years ago' }
        ],

        messagesDataYou: [
            { id: 1, message: "what's liz short for? :)" },
            { id: 2, message: 'yes' },
            { id: 3, message: 'coooooooooool dude ;)' }
        ],

        postData: [
            { id: 1, message: "hi, how are you?", like: 25 },
            { id: 2, message: "it's its my first post", like: 35 }
        ],

        newPostText: '',
        newMessageText: '',
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state = postReducer(this._state, action);
        this._state = dialogsReducer(this._state, action);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
export default store;

window.store = store;






