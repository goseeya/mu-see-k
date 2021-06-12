import '../styles/Register.css';
import React, { useState } from "react";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Register = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeated, setPasswordRepeated] = useState("");
  let history = useHistory();
  const registerSucceed = false;

  const passwordCorrect = password === passwordRepeated;
  const emailCorrect = email.includes('@');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios.post('http://localhost:8080/api/registration', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
      registerSucceed = true;
    })
    .catch(function (error) {
      console.log(error);
    });

    alert(`Submitting with Login ${login}`)
}

  const goBack = () => {
    history.goBack();
  }

    return (
      <div className="Register">
        <header className="RegisterHeader">
        <FontAwesomeIcon className="Icon IconLeft" icon={faArrowLeft} onClick={goBack} />
        </header>
        {!registerSucceed && (<><h1 className="Register-header">
          Zarejestruj się w MuSeeK!
        </h1>
        <form onSubmit={handleSubmit} className="Login-form">
      <label>
        Login:
        <input
          type="text"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
      </label>
      <label>
        E-mail:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Hasło:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <label>
        Powtórz hasło:
        <input
          type="password"
          value={passwordRepeated}
          onChange={e => setPasswordRepeated(e.target.value)}
        />
      </label>
      {passwordCorrect && emailCorrect && <input type="submit" value="Rejestruj" />}
        
    </form></>)}
    {registerSucceed && <Link to="/login">Zaloguj się</Link>}
      </div>
    );
  }
  
  export default Register;
  