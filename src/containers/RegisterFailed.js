import '../styles/RegisterFailed.css';
import Header from './Header';
import {withRouter} from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const RegisterFailed = ({history}) => {

  // let history = useHistory();



  const goBack = () => {
    history.goBack();
  }

  const tryAgain = () => {
    history.push('/register');
  }
    return (
      // <div className="RegisterFailed">
      //   <Header />
      //   <header className="RegisterFailed-header">
      //     Rejestracja nieudana
      //   </header>
      //     <button onClick={tryAgain}>Spróbuj ponownie</button>
      // </div>
      <div className="RegisterFailed">
        <header className="RegisterFailedHeader">
        <FontAwesomeIcon className="Icon IconLeft" icon={faArrowLeft} onClick={goBack} />
        </header>
        <h1 className="Register-header">
          Rejestracja nieudana
        </h1>
        <button className="TryAgainButton" onClick={tryAgain}>Spróbuj ponownie</button>
      </div>
    );
  }
  
  export default withRouter(RegisterFailed);
  