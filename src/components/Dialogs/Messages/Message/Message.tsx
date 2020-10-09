import React from 'react';
import s from './Message.module.css';

type propsType = {
    message: string
    id: number
}

const Message: React.FC<propsType> = (props) => {
    return (

        <p {...props.id} className={s.messages}>{props.message}</p>
    );
}
export default Message;