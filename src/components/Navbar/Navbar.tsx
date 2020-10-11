import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


type propsType = {}
const Navbar: React.FC<propsType> = (props) => {
    return (
        <div class="col-lg-3">
            <aside class="sidebar static">
                <div class="widget">
                    <h4 class="widget-title">Shortcuts</h4>
                    <ul class="naves">
                        <li className={classes.item}>
                            <i class="fa fa-newspaper-o"></i>
                            <NavLink to="/MyPosts" activeClassName={classes.active}>News feed</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-envelope"></i>
                            <NavLink to="/Inbox" activeClassName={classes.active}>Inbox</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-file-text-o"></i>
                            <NavLink to="/Profile" activeClassName={classes.active}>Profile</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-users"></i>
                            <NavLink to="/Friends" activeClassName={classes.active}>friends</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-picture-o"></i>
                            <NavLink to="/Images" activeClassName={classes.active}>images</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-video-camera"></i>
                            <NavLink to="/Videos" activeClassName={classes.active}>videos</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-comment-o"></i>
                            <NavLink activeClassName={classes.active} to="/Dialogs">Messages</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa  fa-bell-o"></i>
                            <NavLink to="/Notifications" activeClassName={classes.active}>Notifications</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-map-marker"></i>
                            <NavLink to="/Peoples" activeClassName={classes.active}>Peoples</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-bar-chart-o"></i>
                            <NavLink to="/Insights" activeClassName={classes.active}>insights</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-sign-out"></i>
                            <NavLink to="/Logout" activeClassName={classes.active}>Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}
export default Navbar;