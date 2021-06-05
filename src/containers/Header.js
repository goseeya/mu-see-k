import '../styles/Header.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
//     const [login, setLogin] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordRepeated, setPasswordRepeated] = useState("");
//     let history = useHistory();
  
//     const handleSubmit = (evt) => {
//       evt.preventDefault();
//       alert(`Submitting with Name ${login}`)
//   }
let history = useHistory();

    const goBack = () => {
      history.goBack();
    }
  
      return (
        <header className="Header">
        <FontAwesomeIcon className="Icon IconLeft" icon={faArrowLeft} onClick={goBack} />
          {/* <FontAwesomeIcon className="Icon" icon={faUserCircle} /> */}
          {/* <span className="Icon" onClick={goToAboutMe}>Mój profil</span> */}
        {/* <FontAwesomeIcon className="Icon" icon={faBriefcase} /> */}
        </header>
      );
    }
    
    export default Header;
    