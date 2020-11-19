import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm, reset} from 'redux-form';
import {maxLengthCreator, requireField} from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControls/FormsControls';
import {photosType, postDataType} from '../../types/types';
import {useDispatch} from "react-redux";


type propsType = {
    postData: Array<postDataType>
    photos: photosType
    login: string
    addPost: (newPostText: string) => void

}

export const MyPosts: React.FC<propsType> = (props) => {
    let dispatch = useDispatch()
    let postList = () => {
        return [...props.postData].reverse().map(postData => <Post photos={props.photos} key={postData.id}
                                                                   login={props.login} id={postData.id}
                                                                   message={postData.message}
                                                                   like={postData.like}/>)
    }
    let addPost = (value: logonFormValuesType) => {
        props.addPost(value.newPostText);
        dispatch(reset('AddTextForm'))
    }

    return (
        <div class="col-lg-6">
            <div class="central-meta">
                <div class="new-postbox">
                    <figure>
                        <img src={props.photos.small!} alt=""/>
                    </figure>
                    <div class="newpst-input">
                        <div class="wrapper">
                            <AddTextFormRedux onSubmit={addPost}/>
                            <div class="attachments">
                                <ul>
                                    <li>
                                        <i class="fa fa-music"/>
                                        <label class="fileContainer">
                                            <input type="file"/>
                                        </label>
                                    </li>
                                    <li>
                                        <i class="fa fa-image"/>
                                        <label class="fileContainer">
                                            <input type="file"/>
                                        </label>
                                    </li>
                                    <li>
                                        <i class="fa fa-video-camera"/>
                                        <label class="fileContainer">
                                            <input type="file"/>
                                        </label>
                                    </li>
                                    <li>
                                        <i class="fa fa-camera"/>
                                        <label class="fileContainer">
                                            <input type="file"/>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {postList()}
        </div>
    );
}
export default MyPosts;

type loginOwnPropsType = {}
type logonFormValuesType = {
    newPostText: string
}

const maxLengthCreator10 = maxLengthCreator(10);
const AddTextForm: React.FC<InjectedFormProps<logonFormValuesType, loginOwnPropsType> & loginOwnPropsType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field style={{display: "block", height: "100%", width: "100%", paddingBottom: "35px"}}
                   component={Textarea} name={"newPostText"} placeholder={"Write something"}
                   validate={[requireField, maxLengthCreator10]}/>
            <button style={{float: "right"}} class="btn-input" type="submit">Publish</button>
        </form>
    );
}
const AddTextFormRedux = reduxForm<logonFormValuesType, loginOwnPropsType>({
    form: "AddTextForm",
    onSubmit: handleSubmit => console.log(handleSubmit)
})(AddTextForm);

