import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './People.module.css';

const People = (props) => {
    return (
        <li className={s.peopleItem}>
            <div class="nearly-pepls">
                <figure>
                    <NavLink to={"/Peoples/" + props.name} title=""><img width="60px" height="60px" src={props.imageUrl} alt={props.alt}></img></NavLink>
                </figure>
                <div class="pepl-info">
                    <h4><NavLink activeClassName={s.activeLink} to={"/Peoples/" + props.name}>{props.name}</NavLink></h4>
                    <span>{props.about}</span>
                    {props.friend
                        ? <button onClick={() => { props.unFriend(props.id) }} title="" class="add-butn more-action" data-ripple="">unfriend</button>
                        : <button onClick={() => { props.addFriend(props.id) }} className={s.btn} title="" class="add-butn" data-ripple="">add friend</button>}
                </div>
            </div>
        </li>
    );
}
export default People;