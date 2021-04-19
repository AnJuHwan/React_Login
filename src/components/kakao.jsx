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
    //kakaoSignin.logout(Kakao.Auth.getAccessToken()); //back-end 토큰이 없어서 에러남
    console.log('로그아웃 되었습니다');
  };
  return (
    <>
      <h1>Kakao Login 성공</h1>
      <button onClick={gotoKakaoLogOut}>Logout</button>
    </>
  );
};

export default Kakao;
