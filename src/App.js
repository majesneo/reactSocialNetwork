import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import MyPosts from './components/MyPosts/MyPosts';
import Header from './components/Header/Header';
import YourPage from './components/YourPage/YourPage';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

// MyPhoto={props.state.MyPhoto}
 

const App = (props) => {

  return (

    <div className='app-wrapper'>
      <Header />
      <div class="row">
        <Navbar />
        <Route path="/Dialogs" render={() => <Dialogs dispatch={props.dispatch} newMessageText={props.state.newMessageText} dialogsData={props.state.dialogsData} messagesDataYou={props.state.messagesDataYou} messagesDataMe={props.state.messagesDataMe} />} />
        <Route path="/MyPosts" render={() => <MyPosts dispatch={props.dispatch} postData={props.state.postData} newPostText={props.state.newPostText} />} />
        <YourPage />
      </div>
    </div>

  );
}

export default App;
