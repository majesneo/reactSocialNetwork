import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import MyPostsContainer from './components/MyPosts/MyPostsContainer';
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
        <Route path="/Dialogs" render={() => <Dialogs />} />
        <Route path="/MyPosts" render={() => <MyPostsContainer />} />
        <YourPage />
      </div>
    </div>

  );
}

export default App;
