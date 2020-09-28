import React from 'react';
import profilePhoto from '../images/profile-icon.png'

const Profile = (props) => {
    return (
        <div class="col-lg-6">
            <div class="central-meta item">
                <div class="user-post">
                    <div class="friend-info">
                        <figure>
                            <img style={{width:"80px", height:"80px"}} src={props.profile.photos.small || profilePhoto} alt=""/>
                            {props.isOwner }
                        </figure>
                        <div class="friend-name">
                            <ins><a href="#" title="">{props.profile.fullName}</a></ins>
                            <span>{props.statusProf}</span>
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