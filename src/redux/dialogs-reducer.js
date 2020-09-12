const addMessage = 'addMessage';
const onMessageChange = 'onMessageChange';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case addMessage:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messagesDataMe.push(newMessage);
            state.newMessageText = '';
            return state;
        case onMessageChange:
            state.newMessageText = action.messageText
            return state;
        default:
            return state;
    }
}
export default dialogsReducer;


export const onMessageChangeActionCreator = (messageText) => ({ type: 'onMessageChange', messageText });

export const addMessageActionCreator = () => ({ type: 'addMessage' });
