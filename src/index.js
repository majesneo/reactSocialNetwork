import React from 'react';
import * as serviceWorker from './serviceWorker';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Route, BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';





let renderEntireTree = () => {

  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider>
          <App store={store} />
        </Provider>
      </React.StrictMode>,
  </BrowserRouter>,
    document.getElementById('root')
  );
}
renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
