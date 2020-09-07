import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <p className={s.messages}>{props.message}</p>
    );
}
export default Message;