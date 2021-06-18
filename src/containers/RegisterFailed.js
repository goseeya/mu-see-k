import "../styles/RegisterFailed.css";
import { withRouter } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterFailed = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  const tryAgain = () => {
    history.push("/register");
  };
  return (
    <div className="RegisterFailed">
      <header className="RegisterFailedHeader">
        <FontAwesomeIcon
          className="Icon IconLeft"
          icon={faArrowLeft}
          onClick={goBack}
        />
      </header>
      <h1 className="Register-header">Rejestracja nieudana</h1>
      <button className="TryAgainButton" onClick={tryAgain}>
        Spróbuj ponownie
      </button>
    </div>
  );
};

export default withRouter(RegisterFailed);
