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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeated, setPasswordRepeated] = useState("");
  let history = useHistory();
  let registerSucceed = false;

  const passwordCorrect = password === passwordRepeated && password !== "";
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
      history.push('/registerSucceed');
    })
    .catch(function (error) {
      console.log(error);
      history.push('/registerFailed');
    });

    // alert(`Submitting with email ${email}`)
}

  const goBack = () => {
    history.goBack();
  }

    return (
      <div className="Register RegisterContainer">
        <header className="RegisterHeader">
        <FontAwesomeIcon className="Icon IconLeft" icon={faArrowLeft} onClick={goBack} />
        </header>
        {!registerSucceed && (<><h1 className="Register-header">
          Zarejestruj się w MuSeeK!
        </h1>
        <form onSubmit={handleSubmit} className="RegisterContainer">
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
      {(!emailCorrect || !passwordCorrect) && <div className="Validation">
        {!emailCorrect && <p>Niepoprawny e-mail.</p>}
        {!passwordCorrect && <p>Hasło ma być niepuste i ma się zgadzać z powtórzonym.</p>}
      </div>}
      {passwordCorrect && emailCorrect && <input type="submit" value="Rejestruj" className="RegisterButton" />}
        
    </form></>)}
    {registerSucceed && <Link to="/login">Zaloguj się</Link>}
      </div>
    );
  }
  
  export default Register;
  