import React from 'react';
import s from './Dialogs.module.css';
import me from '../images/resources/side-friend6.jpg';
import Userlist1 from '../images/resources/friend-avatar2.jpg';
import Userlist2 from '../images/resources/friend-avatar3.jpg';
import Userlist3 from '../images/resources/friend-avatar.jpg';
import Userlist4 from '../images/resources/friend-avatar4.jpg';
import Userlist5 from '../images/resources/friend-avatar5.jpg';
import Userlist6 from '../images/resources/friend-avatar6.jpg';
import Userlist7 from '../images/resources/friend-avatar7.jpg';
import Userlist8 from '../images/resources/friend-avatar8.jpg';
import you from '../images/resources/userlist-2.jpg';
import { NavLink } from 'react-router-dom';
import Messages from './Messages/Messages';

const Dialog = (props) => {
    return (
        <li className={s.dialogsItem}>
            <NavLink activeClassName={s.activeLink}  to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Molly cyrus1' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Jason Bourne' },
        { id: 4, name: 'Sarah Grey' },
        { id: 5, name: 'Bill Doe' },
        { id: 6, name: 'Shen Cornery' },
        { id: 7, name: 'Kill Bill' },
        { id: 8, name: 'Jasmin Walia' },
        { id: 9, name: 'Neclos Cage' }
    ];
    let dialogsElement = dialogsData.map(dialogsData => <Dialog name={dialogsData.name} id={dialogsData.id} />)

    return (

        <div class="col-lg-6">
            <div class="central-meta">
                <div class="messages">
                    <h5 class="f-title"><i class="fa  fa-bell-o"></i>All Messages <span class="more-options"><i class="fa fa-ellipsis-h"></i></span></h5>
                    <div class="message-box">
                        <ul class="peoples">
                            {dialogsElement}
                        </ul>
                        <Messages/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;