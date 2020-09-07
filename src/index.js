import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
  { id: 1, message: "hi, how are you?", like: 25 },
  { id: 1, message: "it's its my first post", like: 35 }
];

let messagesDataYou = [
  { id: 1, message: "what's liz short for? :)" },
  { id: 2, message: 'yes' },
  { id: 3, message: 'coooooooooool dude ;)' },
];

let messagesDataMe = [
  { id: 1, message: 'Elizabeth lol' },
  { id: 2, message: 'wanna know whats my second guess was?' },
  { id: 3, message: "Disney's the lizard king" },
  { id: 4, message: 'i know him 5 years ago' },
];

let dialogsData = [
  { id: 1, name: 'Molly cyrus' },
  { id: 2, name: 'Andrew' },
  { id: 3, name: 'Jason Bourne' },
  { id: 4, name: 'Sarah Grey' },
  { id: 5, name: 'Bill Doe' },
  { id: 6, name: 'Shen Cornery' },
  { id: 7, name: 'Kill Bill' },
  { id: 8, name: 'Jasmin Walia' },
  { id: 9, name: 'Neclos Cage' }
];



ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesDataYou={messagesDataYou} messagesDataMe={messagesDataMe} postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
