import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const initialState = {
  messages: [
    {
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: [ 'general', 'react', 'paris', 'sofia' ],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'react'
};

const middlewares = applyMiddleware(logger, reduxPromise);

const store = createStore(rootReducer, initialState, middlewares);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
