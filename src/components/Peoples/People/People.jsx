import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './People.module.css';
import profilePhoto from "../../images/profile-icon.png";


const People = (props) => (
    <li className={s.peopleItem}>
        <div class="nearly-pepls">
            <figure>
                <NavLink to={"/Profile/" + props.id} title=""><img width="60px" height="60px"
                                                                   style={{width:"70px", height:"70px"}}
                                                                   src={props.photos.small || profilePhoto}
                                                                   alt={props.alt}/></NavLink>
            </figure>
            <div class="pepl-info">
                <h4><NavLink activeClassName={s.activeLink}
                             to={"/Profile/" + props.id}>{props.name}</NavLink></h4>
                <span>{props.about}</span>
                {props.followed
                    ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                              onClick={() => {
                                  props.getFollowDelThunkCreator(props.id)
                              }} title="" class="add-butn more-action" data-ripple="">unfriend</button>
                    : <button disabled={props.followingInProgress.some(id => id === props.id)}
                              onClick={() => {
                                  props.getFollowPostThunkCreator(props.id)
                              }} className={s.btn} title="" class="add-butn" data-ripple="">add friend</button>}
            </div>
        </div>
    </li>
);
export default People;