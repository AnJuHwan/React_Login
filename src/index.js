import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GoogleAuth from './service/google_signin';

const googleAuth = new GoogleAuth();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
