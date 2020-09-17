import React from 'react';
import * as axios from 'axios';
import PhotoInput from '../images/resources/admin3.jpg';
import './MyPosts.css';
import Post from './Post/Post';



class MyPosts extends React.Component {

  postList=()=>{
   return this.props.postData.map(postData => <Post key={postData.id} id={postData.id} message={postData.message} like={postData.like} />)
  }
  newPostElement = React.createRef();

  onPostChange = () => {
    let postText = this.newPostElement.current.value;
    this.props.onPostChange(postText);
  }
  
  addPost = (e) => {
    e.preventDefault();
    this.props.addPost();
  }

  componentDidMount() {
    axios.get("http://test-api.quando.pro/reactsocialnetwork/post")
      .then(response => {
        this.props.setPosts(response.data);
      });
  }

  render() {
    return (
      <div class="col-lg-6">
        <div class="central-meta">
          <div class="new-postbox">
            <figure>
              <img src={PhotoInput} alt=""></img>
            </figure>
            <div class="newpst-input">
              <form method="post">
                <textarea onChange={this.onPostChange} value={this.props.newPostText} ref={this.newPostElement} rows="3" placeholder="write something" />
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
                      <button onClick={this.addPost} class="btn-input" type="submit">Publish</button>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
        {this.postList()}
      </div>
    );
  }
}
export default MyPosts;