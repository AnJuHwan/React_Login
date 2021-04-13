import React from 'react';
import { useHistory } from 'react-router';

const Google = (props) => {
  const logOut = useHistory();

  const LogOut = () => {
    logOut.push('/');
  };

  return (
    <>
      <h1>Google Login 성공</h1>
      <button onClick={LogOut}> LogOut</button>
    </>
  );
};

export default Google;
