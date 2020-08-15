import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBC5Zx2F-al14I1S7RIWpbRGX-mdWkM7Z4",
    authDomain: "burgers-59b93.firebaseapp.com",
    databaseURL: "https://burgers-59b93.firebaseio.com",
    projectId: "burgers-59b93",
    storageBucket: "burgers-59b93.appspot.com",
    messagingSenderId: "347064994367",
    appId: "1:347064994367:web:1f0839034a5c3b777a068a"
};

export const DATABASE_URL = firebaseConfig.databaseURL;

firebase.initializeApp(firebaseConfig); 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
