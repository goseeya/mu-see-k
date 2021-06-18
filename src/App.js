import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RegisterSucceed from './containers/RegisterSucceed';
import Suggestions from './containers/Suggestions';
import Register from './containers/Register';
import RegisterFailed from './containers/RegisterFailed';
import Me from './containers/Me';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/suggestions">
            <Suggestions />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/registerSucceed">
            <RegisterSucceed />
          </Route>
          <Route path="/registerFailed">
            <RegisterFailed />
          </Route>
          <Route path="/me">
            <Me />
          </Route>          
          <Route path="/myProfile">
            <Me />
          </Route>
          <Route path="/">
            <Suggestions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
