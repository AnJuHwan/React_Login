import React from 'react';
import { useHistory } from 'react-router';

const Kakao = ({ kakaoSignin }) => {
  const logOut = useHistory();

  const gotoKakaoLogOut = () => {
    logOut.push('/');
    handleLogout();
  };

  const handleLogout = () => {
    //로그아웃 구현
    kakaoSignin.logout();
  };
  return (
    <>
      <h1>Kakao Login 성공</h1>
      <button onClick={gotoKakaoLogOut}>Logout</button>
    </>
  );
};

export default Kakao;
