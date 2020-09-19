import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './People.module.css';
import * as axios from "axios";

class People extends React.Component {
       
    render() {

        return (
           
            <li className={s.peopleItem}>
                <div class="nearly-pepls">
                    <figure>
                        <NavLink to={"/Profile/" + this.props.id} title=""><img width="60px" height="60px" src={this.props.photos.small} alt={this.props.alt}></img></NavLink>
                    </figure>
                    <div class="pepl-info">
                        <h4><NavLink activeClassName={s.activeLink} to={"/Profile/" + this.props.id}>{this.props.name}</NavLink></h4>
                        <span>{this.props.about}</span>
                        {this.props.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`, { withCredentials: true, headers: { "API-KEY": "6e653f6e-b667-4c69-b909-e415cdfb364d" } })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            this.props.unFriend(this.props.id)
                                        }
                                    });
                            }} title="" class="add-butn more-action" data-ripple="">unfriend</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${this.props.id}`, {}, { withCredentials: true, headers: { "API-KEY": "6e653f6e-b667-4c69-b909-e415cdfb364d" } })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            this.props.addFriend(this.props.id)
                                        }
                                    });
                            }} className={s.btn} title="" class="add-butn" data-ripple="">add friend</button>}
                    </div>
                </div>
            </li>
        );
    }
}
export default People;