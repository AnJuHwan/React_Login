import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Google from './components/google';
import Kakao from './components/kakao';
import Login from './components/login';
import Naver from './components/naver';

function App({ googleSignin, naverSignin, kakaoSignin }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login
            googleSignin={googleSignin}
            naverSignin={naverSignin}
            kakaoSignin={kakaoSignin}
          />
        </Route>

        <Route path='/google'>
          <Google googleSignin={googleSignin} />
        </Route>

        <Route path='/kakao'>
          <Kakao kakaoSignin={kakaoSignin} />
        </Route>

        <Route path='/naver'>
          <Naver naverSignin={naverSignin} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
