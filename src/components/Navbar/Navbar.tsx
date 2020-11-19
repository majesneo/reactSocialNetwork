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
                            <i class="fa fa-file-text-o"></i>
                            <NavLink to="/Profile" activeClassName={classes.active}>Profile</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-comment-o"></i>
                            <NavLink activeClassName={classes.active} to="/Dialogs">Messages</NavLink>
                        </li>
                        <li className={classes.item}>
                            <i class="fa fa-map-marker"></i>
                            <NavLink to="/Peoples" activeClassName={classes.active}>Peoples</NavLink>
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
