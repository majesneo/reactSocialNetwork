import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actions } from '../../../redux/dialogs-reducer';
import { appStateType } from '../../../redux/redux-store';
import Messages from "./Messages";




let mapStateToProps = (state: appStateType) => {
    return {
        messagesDataYou: state.dialogsReducerKey.messagesDataYou,
        messagesDataMe: state.dialogsReducerKey.messagesDataMe,
        // newMessageText: state.dialogsReducerKey.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (value: string) => {
            dispatch(actions.addMessageActionCreator(value));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

