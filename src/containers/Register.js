import '../styles/Register.css';
import React, { useState } from "react";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from "react-router-dom";


const Register = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeated, setPasswordRepeated] = useState("");
  let history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting with Login ${login}`)
}

  const goBack = () => {
    history.goBack();
  }

    return (
      <div className="Register">
        <header className="RegisterHeader">
        <FontAwesomeIcon className="Icon IconLeft" icon={faArrowLeft} onClick={goBack} />
          {/* <FontAwesomeIcon className="Icon" icon={faUserCircle} /> */}
          {/* <span className="Icon" onClick={goToAboutMe}>Mój profil</span> */}
        {/* <FontAwesomeIcon className="Icon" icon={faBriefcase} /> */}
        </header>
        <h1 className="Register-header">
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
        Powrórz hasło:
        <input
          type="password"
          value={passwordRepeated}
          onChange={e => setPasswordRepeated(e.target.value)}
        />
      </label>
      <input type="submit" value="Rejestruj" />
    </form>
      </div>
    );
  }
  
  export default Register;
  