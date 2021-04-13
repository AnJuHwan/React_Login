import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GoogleSignin from './service/google_signin';

const googleSignin = new GoogleSignin();
ReactDOM.render(
  <React.StrictMode>
    <App googleSignin={googleSignin} />
  </React.StrictMode>,
  document.getElementById('root'),
);
