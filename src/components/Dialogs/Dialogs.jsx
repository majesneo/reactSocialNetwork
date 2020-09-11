import React from 'react';
import s from './Dialogs.module.css';
import Userlist0 from '../images/resources/side-friend6.jpg';
import Userlist1 from '../images/resources/friend-avatar2.jpg';
import Userlist2 from '../images/resources/friend-avatar3.jpg';
import Userlist3 from '../images/resources/friend-avatar.jpg';
import Userlist4 from '../images/resources/friend-avatar4.jpg';
import Userlist5 from '../images/resources/friend-avatar5.jpg';
import Userlist6 from '../images/resources/friend-avatar6.jpg';
import Userlist7 from '../images/resources/friend-avatar7.jpg';


import Userlist8 from '../images/resources/friend-avatar8.jpg';
import you from '../images/resources/userlist-2.jpg';
import Messages from './Messages/Messages';
import Dialog from './Dialog/Dialog';


const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map(dialogsData => <Dialog imageUrl={dialogsData.imageUrl} name={dialogsData.name} id={dialogsData.id} />)
    return (

        <div class="col-lg-6">
            <div class="central-meta">
                <div class="messages">
                    <h5 class="f-title"><i class="fa  fa-bell-o"></i>All Messages <span class="more-options"><i class="fa fa-ellipsis-h"></i></span></h5>
                    <div class="message-box">
                        <ul class="peoples">
                            {dialogsElement}
                        </ul>
                        <Messages dispatch={props.dispatch} newMessageText={props.newMessageText} messagesDataYou={props.messagesDataYou} messagesDataMe={props.messagesDataMe} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;