import React from 'react';
import * as axios from 'axios';
import PhotoInput from '../images/resources/admin3.jpg';
import './MyPosts.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { requireField, maxLengthCreator } from '../../validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';




class MyPosts extends React.Component {

  postList = () => {
    return this.props.postData.map(postData => <Post key={postData.id} login={this.props.login} id={postData.id} message={postData.message} like={postData.like} />)
  }

  addPost = (value) => {
    this.props.addPost(value.newPostText);
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
              <div class="wrapper">
                <AddTextFormRedux onSubmit={this.addPost} />
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.postList()}
      </div>


    );
  }
}

const maxLengthCreator10 = maxLengthCreator(10);
const AddTextForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field style={{ display: "block", height: "100%", width: "100%", paddingBottom: "35px" }}
        component={Textarea} name={"newPostText"} placeholder={"Write something"} validate={[requireField, maxLengthCreator10]} />
      <button style={{ float: " right" }} class="btn-input" type="submit">Publish</button>
    </form>
  );
}
const AddTextFormRedux = reduxForm({ form: "AddTextForm", onSubmit: handleSubmit => console.log(handleSubmit) })(AddTextForm);
export default MyPosts;
