import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Google from './components/google';
import Kakao from './components/kakao';
import Login from './components/login';
import Naver from './components/naver';

function App({ googleSignin }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login googleSignin={googleSignin} />
        </Route>

        <Route path='/google'>
          <Google googleSignin={googleSignin} />
        </Route>

        <Route path='/kakao'>
          <Kakao />
        </Route>

        <Route path='/naver'>
          <Naver />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
