import React from 'react';
import { Redirect } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';


let Profile = (props) => {
    if (props.isAuth == false) return <Redirect to={"Logout"} />

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div class="col-lg-6">
            <div class="central-meta item">
                <div class="user-post">
                    <div class="friend-info">
                        <figure>
                            <img src={props.profile.photos.small} alt=""></img>
                        </figure>
                        <div class="friend-name">
                            <ins><a href="#" title="">{props.profile.fullName}</a></ins>
                            <span>Online</span>
                        </div>
                        <div class="post-meta">
                            <div>{props.profile.aboutMe}</div>
                            <div class="description">
                                <span>{props.profile.lookingForAJob}</span>
                                <p>
                                    {props.profile.lookingForAJob}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;