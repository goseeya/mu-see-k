import '../styles/Header.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
let history = useHistory();

    const goBack = () => {
      history.goBack();
    }
  
      return (
        <header className="Header">
        <FontAwesomeIcon className="Icon IconLeft" icon={faArrowLeft} onClick={goBack} />
        </header>
      );
    }
    
    export default Header;
    