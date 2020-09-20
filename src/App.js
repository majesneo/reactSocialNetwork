import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import MyPostsContainer from './components/MyPosts/MyPostsContainer';
import Header from './components/Header/Header';
import YourPageContainer from './components/YourPage/YourPageContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import PeoplesContainer from './components/Peoples/PeoplesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';






const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <div class="row">
      
        <Navbar />
        <Route path="/Login" render={() => <Login />} />
        <Route path="/Dialogs" render={() => <DialogsContainer />} />
        <Route path="/MyPosts" render={() => <MyPostsContainer />} />
        <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/Peoples" render={() => <PeoplesContainer />} />
        <Route path="/Logout" render={() => <Logout />} />
        <Route path="/Profile/Logout" render={() => <Logout />} />
        <YourPageContainer />
        
      </div>
      
    </div>
  );
}

export default App;
