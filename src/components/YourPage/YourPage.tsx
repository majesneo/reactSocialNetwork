/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Userlist1 from '../images/resources/userlist-1.jpg';
import Userlist2 from '../images/resources/userlist-2.jpg';
import Userlist3 from '../images/resources/userlist-3.jpg';
import Userlist4 from '../images/resources/userlist-4.jpg';
import Userlist5 from '../images/resources/userlist-5.jpg';
import Userlist6 from '../images/resources/userlist-6.jpg';
import Userlist7 from '../images/resources/userlist-7.jpg';
import { NavLink } from "react-router-dom";
import s from "./YourPage.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { appStateType } from '../../redux/redux-store';
import { FriendsContainer } from './../Friends/FriendsContainer';


export const YourPage: React.FC = (props) => {
    // if (!props.isAuth) {
    //     return <Redirect to={"/Login"} />
    // }

    const photos = useSelector((state: appStateType) => state.headerReducerKey.photos)
    const isAuth = useSelector((state: appStateType) => state.authReducerKey.isAuth)
    const login = useSelector((state: appStateType) => state.authReducerKey.login)

    const dispatch = useDispatch()
    const logoutThunkCreator = () => {
        dispatch(logoutThunkCreator());
    }


    return (
        <div class="col-lg-3">
            <aside class="sidebar static">
                <div class="widget">
                    <div class="flex">
                        <h4 class="widget-title">Your page</h4>
                        {isAuth
                            ? <button onClick={logoutThunkCreator} className={s.logout} >Logout</button>
                            : <NavLink to={'/Login'} className={s.login} />}
                    </div>
                    <div class="your-page">
                        <figure>
                            <img src={photos.small} alt="" />
                        </figure>
                        <div class="page-meta">
                            <a href="#" title="" class="underline">{login}</a>
                            <span><i class="fa fa-comment-o"></i><a href="insight.html" title="">Messages <em>9</em></a></span>
                            <span><i class="fa  fa-bell-o" /><a href="insight.html" title="">Notifications <em>2</em></a></span>
                        </div>
                        <div class="page-likes">
                            <ul class="nav nav-tabs likes-btn">
                                <li class="nav-item"><a class="active" href="#link1" data-toggle="tab">likes</a></li>
                                <li class="nav-item"><a class="" href="#link2" data-toggle="tab">views</a></li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active fade show " id="link1" >
                                    <span><i class="fa fa-heart-o" />884</span>
                                    <a href="#" title="weekly-likes">35 new likes this week</a>
                                    <div class="users-thumb-list">
                                        <a href="#" title="Anderw" data-toggle="tooltip">
                                            <img src={Userlist1} alt=""></img>
                                        </a>
                                        <a href="#" title="frank" data-toggle="tooltip">
                                            <img src={Userlist2} alt=""></img>
                                        </a>
                                        <a href="#" title="Sara" data-toggle="tooltip">
                                            <img src={Userlist3} alt=""></img>
                                        </a>
                                        <a href="#" title="Amy" data-toggle="tooltip">
                                            <img src={Userlist4} alt=""></img>
                                        </a>
                                        <a href="#" title="Ema" data-toggle="tooltip">
                                            <img src={Userlist5} alt=""></img>
                                        </a>
                                        <a href="#" title="Sophie" data-toggle="tooltip">
                                            <img src={Userlist6} alt=""></img>
                                        </a>
                                        <a href="#" title="Maria" data-toggle="tooltip">
                                            <img src={Userlist7} alt=""></img>
                                        </a>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="link2" >
                                    <span><i class="ti-eye"></i>440</span>
                                    <a href="#" title="weekly-likes">440 new views this week</a>
                                    <div class="users-thumb-list">
                                        <a href="#" title="Anderw" data-toggle="tooltip">
                                            <img src={Userlist1} alt=""></img>
                                        </a>
                                        <a href="#" title="frank" data-toggle="tooltip">
                                            <img src={Userlist2} alt=""></img>
                                        </a>
                                        <a href="#" title="Sara" data-toggle="tooltip">
                                            <img src={Userlist3} alt=""></img>
                                        </a>
                                        <a href="#" title="Amy" data-toggle="tooltip">
                                            <img src={Userlist4} alt=""></img>
                                        </a>
                                        <a href="#" title="Ema" data-toggle="tooltip">
                                            <img src={Userlist5} alt=""></img>
                                        </a>
                                        <a href="#" title="Sophie" data-toggle="tooltip">
                                            <img src={Userlist6} alt=""></img>
                                        </a>
                                        <a href="#" title="Maria" data-toggle="tooltip">
                                            <img src={Userlist7} alt=""></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FriendsContainer />
            </aside>
        </div>
    );
}
