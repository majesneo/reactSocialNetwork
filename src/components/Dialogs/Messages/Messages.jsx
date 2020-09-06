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



const Message = (props) => {
    return (
        <p className={s.messages}>{props.message}</p>
    );
}

const Messages = (props) => {

    let messagesDataYou = [
        { id: 1, message: "what's liz short for? :)" },
        { id: 2, message: 'yes' },
        { id: 3, message: 'coooooooooool dude ;)' },
    ];
    let messageElementYou = messagesDataYou.map(messagesDataYou => <Message message={messagesDataYou.message} id={messagesDataYou.id} />)

    let messagesDataMe = [
        { id: 1, message: 'Elizabeth lol' },
        { id: 2, message: 'wanna know whats my second guess was?' },
        { id: 3, message: "Disney's the lizard king" },
        { id: 4, message: 'i know him 5 years ago' },
    ];
    let messageElementMe = messagesDataMe.map(messagesDataMe => <Message message={messagesDataMe.message} id={messagesDataMe.id} />)

    return (
                        <div class="peoples-mesg-box">
                            <div class="conversation-head">
                                <figure><img src={Userlist3} alt=""></img></figure>
                                <span>jason bourne <i>online</i></span>
                            </div>
                            <ul class="chatting-area">
                                <li class="you">
                                    <figure><img src={you} alt=""></img></figure>
                                    {messageElementYou}
                                </li>
                                <li class="me">
                                    <figure><img src={me} alt=""></img></figure>
                                    {messageElementMe}
                                </li>
                            </ul>
                            <div class="message-text-container">
                                <form method="post">
                                    <textarea></textarea>
                                    <button title="send"><i class="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
    );
}
export default Messages;