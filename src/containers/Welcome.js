// import logo from './logo.svg';
// import './App.css';

const Welcome = () => {
  return (
    <div className="Welcome">
      <header className="Welcome-header">
        Witaj w MuSeeK!
      </header>
        {/* <img src={logo} className="Welcome-logo" alt="logo" /> */}
        <div>
            mam już konto
            <a
          className="Welcome-has-account-link"
          href="https://google.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zaloguj się
        </a>
        </div>
        <div>
          nie mam jeszcze konta
            <a
          className="Welcome-has-not-account-link"
          href="https://google.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zarejestruj się
        </a>
        </div>
        
    </div>
  );
}

export default Welcome;
