import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegistrationSucceed from './containers/RegistrationSucceed';
import Register from './containers/Register';
import RegistrationFailed from './containers/RegistrationFailed';
import AboutMe from './containers/AboutMe';
import MainPage from './containers/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/suggestions">
            <MainPage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/registrationSucceed">
            <RegistrationSucceed />
          </Route>
          <Route path="/registrationFailed">
            <RegistrationFailed />
          </Route>
          <Route path="/me">
            <AboutMe />
          </Route>          
          <Route path="/myProfile">
            <AboutMe />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
