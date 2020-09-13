import { connect } from 'react-redux';
import { onMessageChangeActionCreator,addMessageActionCreator } from '../../../redux/dialogs-reducer';
import Messages from './Messages';


let mapStateToProps = (state) => {
    return {
        messagesDataYou: state.dialogsReducerKey.messagesDataYou,
        messagesDataMe: state.dialogsReducerKey.messagesDataMe,
        newMessageText: state.dialogsReducerKey.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (messageText) => {
            dispatch(onMessageChangeActionCreator(messageText));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

