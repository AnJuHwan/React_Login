import React from 'react';
import { useHistory } from 'react-router';

const Naver = () => {
  const logOut = useHistory();
  const gotoNaverLogOut = () => {
    logOut.push('/');
  };

  const handleLogout = () => {
    //로그아웃 구현
  };
  return (
    <>
      <h1>Naver Login 성공</h1>
      <button onClick={gotoNaverLogOut}>Logout</button>
    </>
  );
};

export default Naver;
