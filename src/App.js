import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import MyPosts from './components/MyPosts/MyPosts';
import Header from './components/Header/Header';
import YourPage from './components/YourPage/YourPage';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div class="row">
          <Navbar />
          <Route path="/Dialogs" component={Dialogs} />
          <Route path="/MyPosts" component={MyPosts} />
          <YourPage />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
