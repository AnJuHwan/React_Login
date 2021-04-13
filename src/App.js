import './App.css';
import Login from './components/login';

function App({ googleSignin }) {
  return <Login googleSignin={googleSignin} />;
}
export default App;
