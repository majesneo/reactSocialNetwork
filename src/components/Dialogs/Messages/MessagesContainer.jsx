import React from 'react';
import { onMessageChangeActionCreator, addMessageActionCreator } from '../../../redux/dialogs-reducer';
import Messages from './Messages';




const MessagesContainer = (props) => {

    let onMessageChange = (messageText) => {
        props.dispatch(onMessageChangeActionCreator(messageText));
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }


    return (
        <Messages onMessageChange={onMessageChange} addMessage={addMessage} dispatch={props.dispatch} dialogsReducerKey={props.dialogsReducerKey} newMessageText={props.dialogsReducerKey.newMessageText}/>
    );
}
export default MessagesContainer;