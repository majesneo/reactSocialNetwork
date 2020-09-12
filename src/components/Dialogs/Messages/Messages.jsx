import React from 'react';
import s from './Messages.module.css';
import me from '../../images/resources/side-friend6.jpg';
import Userlist1 from '../../images/resources/friend-avatar2.jpg';
import Userlist2 from '../../images/resources/friend-avatar3.jpg';
import Userlist3 from '../../images/resources/friend-avatar.jpg';
import Userlist4 from '../../images/resources/friend-avatar4.jpg';
import Userlist5 from '../../images/resources/friend-avatar5.jpg';
import Userlist6 from '../../images/resources/friend-avatar6.jpg';
import Userlist7 from '../../images/resources/friend-avatar7.jpg';
import Userlist8 from '../../images/resources/friend-avatar8.jpg';
import you from '../../images/resources/userlist-2.jpg';
import Message from './Message/Message';
import { onMessageChangeActionCreator, addMessageActionCreator } from '../../../redux/dialogs-reducer';




const Messages = (props) => {

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let messageText = newMessageElement.current.value;
        props.dispatch(onMessageChangeActionCreator(messageText));
    }

    let addMessage = (e) => {
        e.preventDefault();
        props.dispatch(addMessageActionCreator());
    }

    let messageElementYou = props.messagesDataYou.map(messagesDataYou => <Message message={messagesDataYou.message} id={messagesDataYou.id} />)

    let messageElementMe = props.messagesDataMe.map(messagesDataMe => <Message message={messagesDataMe.message} id={messagesDataMe.id} />)

    return (
        <div class="peoples-mesg-box">
            <div class="conversation-head">
                <figure><img src={Userlist3} alt=""></img></figure>
                <span>jason bourne <i>online</i></span>
            </div>
            <ul class="chatting-area">
                <li class="you">
                    <figure><img src={you} alt=""></img></figure>
                    {messageElementYou[0]}
                </li>
                <li class="me">
                    <figure><img src={me} alt=""></img></figure>
                    {messageElementMe[0]}
                </li>
                <li class="me">
                    <figure><img src={me} alt=""></img></figure>
                    {messageElementMe[1]}
                </li>
                <li class="you">
                    <figure><img src={you} alt=""></img></figure>
                    {messageElementYou[1]}
                </li>
                <li class="me">
                    <figure><img src={me} alt=""></img></figure>
                    {messageElementMe[2]}
                </li>
                <li class="me">
                    <figure><img src={me} alt=""></img></figure>
                    {messageElementMe[3]}
                </li>
                <li class="me">
                    <figure><img src={me} alt=""></img></figure>
                    {messageElementMe}
                </li>
            </ul>
            <div class="message-text-container">
                <form method="post">
                    <textarea onChange={onMessageChange} value={props.newMessageText} ref={newMessageElement}></textarea>
                    <button onClick={addMessage} title="send"><i class="fa fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    );
}
export default Messages;