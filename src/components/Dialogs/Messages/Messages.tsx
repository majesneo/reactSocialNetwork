import React from 'react';
import me from '../../images/resources/side-friend6.jpg';
import Userlist3 from '../../images/resources/friend-avatar.jpg';
import you from '../../images/resources/userlist-2.jpg';
import Message from './Message/Message';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, requireField } from '../../../utils/validators/validators';
import { messagesDataMe, messagesDataYou } from '../../../types/types';

type propsType = {
    addMessage: (newMessageText: string) => void
    messagesDataYou: Array<messagesDataYou>
    messagesDataMe: Array<messagesDataMe>
    class?: any
}
export const Messages: React.FC<propsType> = (props) => {
    let addNewMessage = (value: { newMessageText: string }) => {
        props.addMessage(value.newMessageText);
    }
    let messageYouList = () => {
        return [...props.messagesDataYou].map(messagesDataYou => <Message key={messagesDataYou.id}
            message={messagesDataYou.message}
            id={messagesDataYou.id} />)
    }
    let messageMeList = () => {
        return [...props.messagesDataMe].map(messagesDataMe => <Message key={messagesDataMe.id}
            message={messagesDataMe.message}
            id={messagesDataMe.id} />)
    }
    return (
        <div className="peoples-mesg-box">
            <div className="conversation-head">
                <figure><img src={Userlist3} alt="" /></figure>
                <span>jason bourne <i>online</i></span>
            </div>
            <ul className="chatting-area">
                <li className="you">
                    <figure><img src={you} alt="" /></figure>
                    {messageYouList()}
                </li>
                <li className="me">
                    <figure><img src={me} alt="" /></figure>
                    {messageMeList()}
                </li>
            </ul>
            <div className="message-text-container">
                <AddMessageFormReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

type newMessagesValuesType = {
    newMessageText: string
}
type loginOwnPropsType = {

}
// type newMessagesValuesKeysType = Extract<keyof newMessagesValuesType, string>
const maxLengthCreator20 = maxLengthCreator(20);
const AddMessageForm: React.FC<InjectedFormProps<newMessagesValuesType, loginOwnPropsType> & loginOwnPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Enter your message"} component={Textarea} name={"newMessageText"}
                validate={[requireField, maxLengthCreator20]} />
            <button type="submit" title="send"><i className="fa fa-paper-plane" /></button>
        </form>
    );
}
const AddMessageFormReduxForm = reduxForm<newMessagesValuesType, loginOwnPropsType>({ form: "AddMessageForm", onSubmit: handleSubmit => console.log(handleSubmit) })(AddMessageForm);
export default Message;
