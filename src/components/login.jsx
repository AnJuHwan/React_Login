import React from 'react';
import { useHistory } from 'react-router';

const Login = ({ googleSignin }) => {
  const googleLogin = useHistory();

  const gotoGoogleLogin = (userId) => {
    googleLogin.push({
      pathname: '/google',
      state: { id: userId },
    });
  };

  const handleLogin = (event) => {
    googleSignin.login().then((data) => gotoGoogleLogin(data.user.uid));
  };

  return <button onClick={handleLogin}>Google Login</button>;
};

export default Login;
