// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './containers/Welcome';
import RegisterSucceed from './containers/RegisterSucceed';
import Suggestions from './containers/Suggestions';
import Register from './containers/Register';
import RegisterFailed from './containers/RegisterFailed';
import Matches from './containers/Matches';
import Me from './containers/Me';
import Login from './containers/Login';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Witaj w MuSeeK</Link>
            </li>
            <li>
              <Link to="/suggestions">Propozycje dla Ciebie</Link>
            </li>
            <li>
              <Link to="/register">Zarejestruj się</Link>
            </li>
            <li>
              <Link to="/login">Zaloguj się</Link>
            </li>
            <li>
              <Link to="/register-succeed">Wspaniale</Link>
            </li>
            <li>
              <Link to="/register-failed">Niestety</Link>
            </li>
            <li>
              <Link to="/matches">Twoje pary</Link>
            </li>
            <li>
              <Link to="/me">O mnie</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/suggestions">
            <Suggestions />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register-succeed">
            <RegisterSucceed />
          </Route>
          <Route path="/register-failed">
            <RegisterFailed />
          </Route>
          <Route path="/matches">
            <Matches />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
