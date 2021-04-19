import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Login = ({ googleSignin, naverSignin, kakaoSignin }) => {
  const googleLogin = useHistory();
  const KaKaoLogin = useHistory();
  const NaverLogin = useHistory();

  const gotoGoogleLogin = (userId) => {
    googleLogin.push({
      pathname: '/google',
      state: { id: userId },
    });
  };

  const gotoKakaoLogin = () => {
    googleLogin.push({
      pathname: '/kakao',
    });
    kakaoSignin.login();
  };

  const gotoNaverLogin = () => {
    googleLogin.push({
      pathname: '/Naver',
    });
    naverSignin.login();
  };

  useEffect(() => {
    googleSignin.onAuthChange((user) => {
      if (user) {
        gotoGoogleLogin(user.uid);
      }
    });
  });

  const handleGoogleLogin = () => {
    googleSignin //
      .login()
      .then((data) => gotoGoogleLogin(data.user.uid));
  };

  const handleKakaoLogin = () => {
    gotoKakaoLogin();
  };

  const handleNaverLogin = () => {
    gotoNaverLogin();
  };

  return (
    <>
      <button onClick={handleGoogleLogin}>Google Login</button>
      <button onClick={handleKakaoLogin}>Kakao Login</button>
      <button onClick={handleNaverLogin}>Naver Login</button>
    </>
  );
};

export default Login;
