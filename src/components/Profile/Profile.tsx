import React from 'react';
import { profileType } from '../../types/types';
import profilePhoto from '../images/profile-icon.png'

type propsType = {
    profile: profileType

}

const Profile: React.FC<propsType> = (props) => {
    return (
        <div class="col-lg-6">
            <div class="central-meta item">
                <div class="user-post">
                    <div class="friend-info">
                        <figure>
                            <img style={{ width: "80px", height: "80px" }} src={props.profile.photos.small ? props.profile.photos.small : profilePhoto} alt="" />
                        </figure>
                        <div class="friend-name">
                            <ins><a href="#" title="">{props.profile.fullName}</a></ins>
                            {/* <span>{props.statusProf}</span> */}
                        </div>
                        <div class="post-meta">
                            {/* <div>{props.profile.aboutMe}</div> */}
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