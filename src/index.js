import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GoogleSignin from './service/google_signin';
import Kakao from './service/kakao_signin';

const googleSignin = new GoogleSignin();
const kakaoSignin = new Kakao();

ReactDOM.render(
  <React.StrictMode>
    <App googleSignin={googleSignin} kakaoSignin={kakaoSignin} />
  </React.StrictMode>,
  document.getElementById('root'),
);
