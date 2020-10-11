import React, { ReactNode, SetStateAction } from 'react';
import './Header.css'
import back from '../images/resources/timeline-1.jpg';
import HeaderStatusWithHooks from "./HeaderStatusWithHooks";
import { ChangeEvent } from 'react';
import { photosType } from '../../types/types';
import { type } from 'os';

type propsType = {
    savePhoto: (files: File) => void
    photos: photosType
    login: string | null
    status: string | null
    getStatusHeadThunkCreator: (id: number) => SetStateAction<string | null>
    updatedStatusHeadThunkCreator: (status: string) => void
    id: number | null
}


const Header: React.FC<propsType & { children?: ReactNode; }> = (props) => {
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div class="feature-photo">
            <figure><img src={back} alt="" /></figure>
            <div class="container-fluid">
                <div class="row merged">
                    <div class="col-lg-2 col-sm-3">
                        <div class="user-avatar">
                            <figure>
                                <img src={props.photos.large} alt="" />
                                <form class="edit-phto">
                                    <i class="fa fa-camera-retro" />
                                    <label class="fileContainer">
                                        Edit Display Photo
                                        <input onChange={onMainPhotoSelected} type="file" />
                                    </label>
                                </form>
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-10 col-sm-9">
                        <div class="timeline-info">
                            <ul>
                                <li class="admin-name">
                                    <h5>{props.login}</h5>
                                    <HeaderStatusWithHooks {...props} status={props.status}
                                        getStatusHeadThunkCreator={props.getStatusHeadThunkCreator}
                                        updatedStatusHeadThunkCreator={props.updatedStatusHeadThunkCreator} id={props.id} />
                                </li>
                                <li>
                                    <a class="active" href="fav-page.html" title="" data-ripple="">Page</a>
                                    <a class="" href="notifications.html" title="" data-ripple="">Notifications</a>
                                    <a class="" href="inbox.html" title="" data-ripple="">inbox</a>
                                    <a class="" href="insights.html" title="" data-ripple="">insights</a>
                                    <a class="" href="fav-page.html" title="" data-ripple="">posts</a>
                                    <a class="" href="page-likers.html" title="" data-ripple="">likers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;