import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <li className={s.dialogsItem}>
            <NavLink activeClassName={s.activeLink}  to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    );
}
export default Dialog;