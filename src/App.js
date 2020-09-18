import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import MyPostsContainer from './components/MyPosts/MyPostsContainer';
import Header from './components/Header/Header';
import YourPage from './components/YourPage/YourPage';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import PeoplesContainer from './components/Peoples/PeoplesContainer';



 

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <div class="row">
        <Navbar />
        <Route path="/Dialogs" render={() => <DialogsContainer />} />
        <Route path="/MyPosts" render={() => <MyPostsContainer />} />
        <Route path="/Peoples" render={() => <PeoplesContainer/>} />
        <YourPage />
      </div>
    </div>
  );
}

export default App;
