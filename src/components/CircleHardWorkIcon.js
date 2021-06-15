import '../styles/AsideMatches.css';


import { useState, useEffect } from 'react'; 

const CircleHardWorkIcon = () => {
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [noMorePeopleToShow, setShowNoMorePeopleToShow] = useState(false);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  // const [showPrevPhotoArrow, setShowPrevPhotoArrow] = useState(false);
  // const [showNextPhotoArrow, setShowNextPhotoArrow] = useState(true);

  const swype = () => {
    if (currentSuggestionIndex < 9) {
      setCurrentSuggestionIndex(currentSuggestionIndex+1);
    } else {
      setShowNoMorePeopleToShow(true);
    }

    setCurrentPhotoIndex(0);
  }

  let [localhostSuggestions, setLocalhostSuggestions] = useState([]);
  const suggestionsArray = localhostSuggestions;

  useEffect(() => {
    axios
      .get("http://localhost:8080/muzyka/lista", {
        headers: {
          'Access-Control-Allow-Origin': true,
        }
      })
      .then(response => {
        console.log(response);
        setLocalhostSuggestions(response.data)});
  }, []);

  const swypeNo = () => {
    swype();
  }

  const swypeYes = () => {
    swype();
  }

  const prevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  }

  const nextPhoto = () => {
    if (currentPhotoIndex < 2) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  }

  const showArrows = !noMorePeopleToShow;

  const showPrevPhotoButton = currentPhotoIndex > 0;
  const showNextPhotoButton = currentPhotoIndex < 2;

  const currentPersonToShow = suggestionsArray && suggestionsArray[currentSuggestionIndex];
    return (
      <div className="AsideMatches">
        
        <header className="AsideMatches AsideMatches-header">
          <CircleUserIcon />
          Mój profil
          <FontAwesomeIcon icon={faBriefcase} />

        </header>
          {suggestionsArray && suggestionsArray.length > 0 && <div>
            <ul>
              <li>{currentPersonToShow.name}</li>
              <li>{currentPersonToShow.sex === "K" ? "Kobieta" : "Męzyzna"}</li>
              <li>Instrument: {currentPersonToShow.instrument}</li>
            </ul>
            {!noMorePeopleToShow && <img src={currentPersonToShow.image[currentPhotoIndex]} alt="User photo" width="500" height="600"/>}
            {!noMorePeopleToShow && <div>
              {showPrevPhotoButton && <button onClick={prevPhoto}>poprzednie zdj</button>}
              {showNextPhotoButton && <button onClick={nextPhoto}>następne zdj</button>}
            </div>}
            {!noMorePeopleToShow && <div>
              <button onClick={swypeNo}>NIE</button>
              <button onClick={swypeYes}>TAK</button>
            </div>}
            {noMorePeopleToShow && <p>Nie ma nikogo więcej</p>}
            <div>
              {currentPersonToShow.about}
            </div>
            <p>Inspiracje: {currentPersonToShow.inspirations}</p>
          </div>}
      </div>
    );
  }
  
  export default CircleHardWorkIcon;
  