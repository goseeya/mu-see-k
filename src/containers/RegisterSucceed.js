import '../styles/RegisterSucceed.css';
import Header from './Header';
import {withRouter} from 'react-router-dom';
import React, { useState } from "react";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from "react-router-dom";

const RegisterSucceed = ({history}) => {


  const goBack = () => {
    history.goBack();
  }

  const logIn = () => {
    // history.push('/login');
    window.location.href = 'http://localhost:8080/login';

  }
    return (
      <div className="RegisterSucceed">
        <header className="RegisterSucceedHeader">
        <FontAwesomeIcon className="Icon IconLeft" icon={faArrowLeft} onClick={goBack} />
        </header>
        <h1 className="RegisterSucceed-header">
          Rejestracja udana
        </h1>
          <button onClick={logIn} className="RegisterSucceedButton">Zaloguj się</button>
      </div>
       
    );
  }
  
  export default withRouter(RegisterSucceed);
  