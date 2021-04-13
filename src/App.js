import { Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Google from './components/google';
import Login from './components/login';

function App({ googleSignin }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login googleSignin={googleSignin} />
        </Route>

        <Route path='/google'>
          <Google />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
