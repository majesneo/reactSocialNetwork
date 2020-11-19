import React from 'react';
import {photosType, postDataType} from '../../../types/types';
import s from './Post.module.css';

type propsType = {
    photos: photosType
    login: string
    message: string | postDataType
    like: number | postDataType
    id: number | postDataType

}

const Post: React.FC<propsType> = (props) => {

    return (
        <div className={s.item}>
            <div class="central-meta item">
                <div class="user-post">
                    <div class="friend-info">
                        <figure>
                            <img src={props.photos.small} alt=""/>
                        </figure>
                        <div class="friend-name">
                            <ins><a href="#" title="">{props.login}</a></ins>
                            <span>published: june,2 2018 19:PM</span>
                        </div>
                        <div class="post-meta">
                            <div>CONTENT POST</div>
                            <div class="we-video-info">
                                <ul>
                                    <li>
                                        <span class="views" data-toggle="tooltip" title="views">
                                            <i class="fa fa-eye"/>
                                            <ins>1.2k</ins>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="comment" data-toggle="tooltip" title="Comments">
                                            <i class="fa fa-comments-o"/>
                                            <ins>52</ins>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="like" data-toggle="tooltip" title="like">
                                            <i class="fa fa-thumbs-o-up"/>
                                            <ins>{props.like}</ins>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="dislike" data-toggle="tooltip" title="dislike">
                                            <i class="fa fa-thumbs-o-down"/>
                                            <ins>200</ins>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="description">
                                <span>TITLE YOU COMMENT POST</span>
                                <p>
                                    {props.message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Post;
