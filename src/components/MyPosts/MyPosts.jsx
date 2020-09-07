import React from 'react';
import PhotoInput from '../images/resources/admin3.jpg';
import './MyPosts.css';
import Post from './Post/Post';
const MyPosts = (props) => {

 

  let postElements = props.postData.map(postData=><Post id={postData.id} message={postData.message} like={postData.like} />)

  return (
    <div class="col-lg-6">
      <div class="central-meta">
        <div class="new-postbox">
          <figure>
            <img src={PhotoInput} alt=""></img>
          </figure>
          <div class="newpst-input">
            <form method="post">
              <textarea rows="3" placeholder="write something"></textarea>
              <div class="attachments">
                <ul>
                  <li>
                    <i class="fa fa-music"></i>
                    <label class="fileContainer">
                      <input type="file"></input>
                    </label>
                  </li>
                  <li>
                    <i class="fa fa-image"></i>
                    <label class="fileContainer">
                      <input type="file"></input>
                    </label>
                  </li>
                  <li>
                    <i class="fa fa-video-camera"></i>
                    <label class="fileContainer">
                      <input type="file"></input>
                    </label>
                  </li>
                  <li>
                    <i class="fa fa-camera"></i>
                    <label class="fileContainer">
                      <input type="file"></input>
                    </label>
                  </li>
                  <li>
                    <button class="btn-input" type="submit">Publish</button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
      {postElements}
    </div>
  );
}
export default MyPosts;