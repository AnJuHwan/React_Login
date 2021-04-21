import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Google from './components/google';
import Kakao from './components/kakao';
import Login from './components/login';
import styles from './App.module.css';

function App({ googleSignin, kakaoSignin }) {
  return (
    <div className={styles.wrap}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Login googleSignin={googleSignin} kakaoSignin={kakaoSignin} />
          </Route>

          <Route path='/google'>
            <Google googleSignin={googleSignin} />
          </Route>

          <Route path='/kakao'>
            <Kakao kakaoSignin={kakaoSignin} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
