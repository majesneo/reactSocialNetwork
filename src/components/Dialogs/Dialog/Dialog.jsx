import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

class Dialog extends React.Component {
    render() {
        return (
            <li className={s.dialogsItem}>
                <img style={{ marginRight: '10px' }} width="45px" height="45px" src={this.props.imageUrl} alt={this.props.alt} />
                <NavLink activeClassName={s.activeLink} to={"/Dialogs/" + this.props.id}>{this.props.name}</NavLink>
            </li>
        );
    }
}
export default Dialog;