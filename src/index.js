import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAT-DXXfD7qSL8Wrnj-C2khc8K8am74q2w",
  authDomain: "crudloginservice-4e3ed.firebaseapp.com",
  projectId: "crudloginservice-4e3ed",
  storageBucket: "crudloginservice-4e3ed.appspot.com",
  messagingSenderId: "699215254674",
  appId: "1:699215254674:web:a1c385d22139488e66c24b",
  measurementId: "G-HG4WKYRN9F",
};

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));