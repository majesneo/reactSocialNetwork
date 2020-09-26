import { connect } from 'react-redux';
import { addMessageActionCreator } from '../../../redux/dialogs-reducer';
import Messages from "./Messages";




let mapStateToProps = (state) => {
    return {
        messagesDataYou: state.dialogsReducerKey.messagesDataYou,
        messagesDataMe: state.dialogsReducerKey.messagesDataMe,
        newMessageText: state.dialogsReducerKey.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (value) => {
            dispatch(addMessageActionCreator(value));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

