import { useHistory } from 'react-router';
import styles from './login.module.css';

const Login = ({ googleSignin, kakaoSignin }) => {
  const googleLogin = useHistory();

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

  // useEffect(() => {
  //   googleSignin.onAuthChange((user) => {
  //     if (user) {
  //       gotoGoogleLogin(user.uid);
  //     }
  //   });
  // });

  const handleGoogleLogin = () => {
    googleSignin //
      .login()
      .then((data) => gotoGoogleLogin(data.user.uid));
  };

  const handleKakaoLogin = () => {
    gotoKakaoLogin();
  };

  return (
    <div className={styles.btns}>
      <button className={styles.googlebtn} onClick={handleGoogleLogin}>
        Google Login
      </button>
      <button className={styles.kakaobtn} onClick={handleKakaoLogin}>
        Kakao Login
      </button>
    </div>
  );
};

export default Login;
