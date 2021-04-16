import { useHistory } from 'react-router';

const Google = ({ googleSignin }) => {
  const logOut = useHistory();

  const gotoGoogleLogOut = () => {
    logOut.push('/');
    handleLogout();
  };

  const handleLogout = () => {
    googleSignin.logout();
  };

  return (
    <>
      <h1>Google Login 성공</h1>
      <button onClick={gotoGoogleLogOut}> LogOut</button>
    </>
  );
};

export default Google;
