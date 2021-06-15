import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import {withRouter} from 'react-router-dom';


const AsideMatches = ({matches, history}) => {

const goToAboutMe = () => {
  history.push('/myProfile');
}

const goToLogout = () => {
  window.location.href = 'http://localhost:8080/logout';
}



    return (
        <div className="AsideMatches">
        
        <header className="AsideMatches AsideMatches-header">
          <FontAwesomeIcon className="Icon" icon={faSignOutAlt} onClick={goToLogout} />
          <span className="Icon" onClick={goToAboutMe}>Mój profil</span>
        <a href="https://bossa.pl/sites/b30/files/public_files/d37ca6b170e82388f485170d45c292c7/wykresy%20kontynuacyjne.png"><FontAwesomeIcon className="Icon" icon={faBriefcase} /></a>
        </header>
        <div className="AsideMatches AsideMatches-matchesContainer">
            <h2>Podgląd dopasowań</h2>
            {matches && matches.map(match => <img src={match.image1} className={classNames("Suggestions-liked-image")} />)}
        </div>
         
      </div>
    );
  }
  
  export default withRouter(AsideMatches);
  