import React from 'react';

const Login = ({ googleSignin }) => {
  const handleLogin = (event) => {
    googleSignin.login();
  };

  return <button onClick={handleLogin}>Google Login</button>;
};

export default Login;
