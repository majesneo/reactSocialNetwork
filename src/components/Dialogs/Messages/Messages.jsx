import React from 'react';
import s from './Messages.module.css';
import me from '../../images/resources/side-friend6.jpg';
import Userlist1 from '../../images/resources/friend-avatar2.jpg';
import Userlist2 from '../../images/resources/friend-avatar3.jpg';
import Userlist3 from '../../images/resources/friend-avatar.jpg';
import Userlist4 from '../../images/resources/friend-avatar4.jpg';
import Userlist5 from '../../images/resources/friend-avatar5.jpg';
import Userlist7 from '../../images/resources/friend-avatar7.jpg';
import Userlist8 from '../../images/resources/friend-avatar8.jpg';
import you from '../../images/resources/userlist-2.jpg';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, requireField } from '../../../validators/validators';


class Messages extends React.Component {
    addMessage = (value) => {
        this.props.addMessage(value.newMessageText);
        value.newMessageText=this.props.newMessageText;
    }

    messageYouList = () => { return this.props.messagesDataYou.map(messagesDataYou => <Message key={messagesDataYou.id} message={messagesDataYou.message} id={messagesDataYou.id} />) }
    messageMeList = () => { return this.props.messagesDataMe.map(messagesDataMe => <Message key={messagesDataMe.id} message={messagesDataMe.message} id={messagesDataMe.id} />) }

    render() {
        return (
            <div class="peoples-mesg-box" >
                <div class="conversation-head">
                    <figure><img src={Userlist3} alt=""></img></figure>
                    <span>jason bourne <i>online</i></span>
                </div>
                <ul class="chatting-area">
                    <li class="you">
                        <figure><img src={you} alt=""></img></figure>
                        {this.messageYouList()}
                    </li>
                    <li class="me">
                        <figure><img src={me} alt=""></img></figure>
                        {this.messageMeList()}
                    </li>
                </ul>
                <div class="message-text-container">
                    <AddMessageFormReduxForm onSubmit={this.addMessage} />
                </div>
            </div>
        );
    }
}
const maxLengthCreator20 = maxLengthCreator(20);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Enter your message"} component={Textarea} name={"newMessageText"} validate={[requireField, maxLengthCreator20]} />
            <button type="submit" title="send"><i class="fa fa-paper-plane"></i></button>
        </form>
    );
}
const AddMessageFormReduxForm = reduxForm({ form: "AddMessageForm", onSubmit: handleSubmit => console.log(handleSubmit) })(AddMessageForm);
export default Messages;
