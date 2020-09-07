import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import MyPosts from './components/MyPosts/MyPosts';
import Header from './components/Header/Header';
import YourPage from './components/YourPage/YourPage';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';




const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div class="row">
          <Navbar />
          <Route path="/Dialogs" render={()=><Dialogs  dialogsData={props.dialogsData} messagesDataYou={props.messagesDataYou} messagesDataMe={props.messagesDataMe}/>} />
          <Route path="/MyPosts" render={()=><MyPosts postData={props.postData}/>} />
          <YourPage />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
