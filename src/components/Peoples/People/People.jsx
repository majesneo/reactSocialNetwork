import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './People.module.css';

class People extends React.Component {
    
    render() {
        return (
            <li className={s.peopleItem}>
                <div class="nearly-pepls">
                    <figure>
                        <NavLink to={"/Peoples/" + this.props.name} title=""><img width="60px" height="60px" src={this.props.photos.small} alt={this.props.alt}></img></NavLink>
                    </figure>
                    <div class="pepl-info">
                        <h4><NavLink activeClassName={s.activeLink} to={"/Peoples/" + this.props.name}>{this.props.name}</NavLink></h4>
                        <span>{this.props.about}</span>
                        {this.props.friend
                            ? <button onClick={() => { this.props.unFriend(this.props.id) }} title="" class="add-butn more-action" data-ripple="">unfriend</button>
                            : <button onClick={() => { this.props.addFriend(this.props.id) }} className={s.btn} title="" class="add-butn" data-ripple="">add friend</button>}
                    </div>
                </div>
            </li>
        );
    }
}
export default People;