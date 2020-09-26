import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './People.module.css';



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
                            ? <button disabled={this.props.followingInProgress.some(id => id === this.props.id)} onClick={() => { this.props.getFollowDelThunkCreator(this.props.id) }} title="" class="add-butn more-action" data-ripple="">unfriend</button>
                            : <button disabled={this.props.followingInProgress.some(id => id === this.props.id)} onClick={() => { this.props.getFollowPostThunkCreator(this.props.id) }} className={s.btn} title="" class="add-butn" data-ripple="">add friend</button>}

                    </div>
                </div>
            </li>
        );
    }
}
export default People;