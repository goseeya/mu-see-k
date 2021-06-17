import '../styles/Suggestions.css';
import * as mockedSuggestions from '../mocks/suggestions.json';
import axios from 'axios';
import { faArrowLeft, faArrowRight, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'



import { useState, useEffect } from 'react'; 
import CircleUserIcon from '../components/CircleUserIcon';
import AsideMatches from '../components/AsideMatches';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Suggestions = () => {
  // const suggestionsArray = mockedSuggestions.suggestions;
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  const [noMorePeopleToShow, setShowNoMorePeopleToShow] = useState(false);
  const [noMoreMatchesToShow, setShowNoMoreMatchesToShow] = useState(false);

  const [showSuggestions, setShowSuggestions] = useState(true);

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

  const getSuggestions = () => {
    
  }

  let [localhostSuggestions, setLocalhostSuggestions] = useState([]);
  let [localhostMatches, setLocalhostMatches] = useState([]);
  const matchesArray = localhostMatches;
  let suggestionsArray = showSuggestions ? localhostSuggestions : localhostMatches;

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/getsuggestions", {
        headers: {
          'Access-Control-Allow-Origin': true,
        }
      })
      .then(response => {
        console.log(response);
        setLocalhostSuggestions(response.data.suggestions)}).catch(err => {
          setLocalhostSuggestions([
            {
                "userId": 3,
                "name": "Lars Ulrich",
                "sex": "M",
                "instrument": "perkusja",
                "about": "For whom the bell tolls?",
                "mp3": "fwtbt.m4a",
                "inspirations": "Judas Priest",
                "image1": "cliff1.jpg",
                "image2": "cliff2.jpg",
                "image3": null,
                "likesMe": false
            },
           {
                "userId": 4,
                "name": "Kirk Hammet",
                "sex": "M",
                "instrument": "gitara",
                "about": "For whom the bell tolls?",
                "mp3": "fwtbt.m4a",
                "inspirations": "Judas Priest",
                "image1": "cliff1.jpg",
                "image2": "cliff2.jpg",
                "image3": null,
                "likesMe": false
            }
        ])
        });
  }, []);

  const swypeNo = () => {
    axios.post('localhost:8080/api/putdecission', {"suggestionId":currentSuggestionIndex,"decission":false})
    swype();
  }

  const swypeYes = () => {
    axios.post('localhost:8080/api/putdecission', {"suggestionId":currentSuggestionIndex,"decission":true})
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

  const onPhotoChange = (e) => {
    console.log(e.target.value);
    setCurrentPhotoIndex(e.target.value == 'firstPhoto' ? 0 : 1)
  }

  const showArrows = !noMorePeopleToShow;

  const showPrevPhotoButton = currentPhotoIndex > 0;
  const showNextPhotoButton = currentPhotoIndex < 2;
  const mockedMatches = [{
    "id": 1,
    "name": "Marlena Wytrych",
    "sex": "K",
    "about": "Urodziłam się po to, aby grać. Mówisz wiesz że będziesz cierpiała i przeklinała cały świat - urodziłam się po to aby grać.",
    "mp3": "src/FG654DE08GF48FG.mp3",
    "inspirations": [
        "Starchursky",
        "Elvis",
        "Sedaka",
        "Speedy Gonzales",
        "albo Diana"
    ],
    "image": [
        "https://cdn.stocksnap.io/img-thumbs/280h/V2TT0P34KE.jpg",
        "https://cdn.stocksnap.io/img-thumbs/280h/QON4ARVTSC.jpg",
        "https://cdn.stocksnap.io/img-thumbs/280h/Q0LOIKU7GM.jpg"
    ],
    "instrument": "wokal"
},
{
  "id": 3,
  "name": "Czadomen",
  "sex": "M",
  "about": "Time to say goodbye, paesi que non lo mai",
  "mp3": "src/FG654DE08GF8686463.mp3",
  "inspirations": [
      "Pavarotti",
      "Boys",
      "Zygmunt Solorz-Żak",
      "Małgorzata Walewska"
  ],
  "image": [
      "https://cdn.stocksnap.io/img-thumbs/280h/people-man_NSV3ZCAJXT.jpg",
      "https://cdn.stocksnap.io/img-thumbs/280h/working-home_O8EAEFRYBP.jpg",
      "https://cdn.stocksnap.io/img-thumbs/280h/photographer-picture_ZZGCZRV208.jpg"
  ],
  "instrument": "wokal"
}
];
  const currentPersonToShow = suggestionsArray && suggestionsArray[currentSuggestionIndex];
  const currentMatchToShow = matchesArray && matchesArray[currentMatchIndex];

  const changeMatchIndex = () => {
    setCurrentMatchIndex(currentMatchIndex == 0 ? 1 : 0);
  }
  useEffect(() => {
    axios
      .post("http://localhost:8080/api/getmatched", {
        headers: {
          'Access-Control-Allow-Origin': true,
        }
      })
      .then(response => {
        console.log(response);
        setLocalhostMatches(response.data.matched)})
        .catch(err => {
          setLocalhostMatches(
  
            [{
                "id": 1,
                "name": "Cliff Burton",
                "phone": "804665422",
                "sex": "M",
                "instrument": "bas",
                "genre": "rock",
                "location": "Warszawa",
                "formoney": true,
                "about": "For whom the bell tolls?",
                "inspirations": "Judas Priest",
                "mp3": "fwtbt.m4a",
                "image1": "https://image.shutterstock.com/image-photo/skeptic-sad-border-collie-dog-260nw-1775324372.jpg",
                "image2": "https://image.shutterstock.com/image-photo/skeptic-sad-border-collie-dog-260nw-1775324372.jpg",
                "image3": null
            }]
        
      );
        });
  }, []);

  const toggleSuggestions = () => setShowSuggestions(!showSuggestions);

 suggestionsArray = showSuggestions ? suggestionsArray : matchesArray;


    return (
      <div className="Suggestions">
        <AsideMatches matches={localhostMatches} />
        <div className="Suggestions-container">
        {/* <header className="Suggestions-header">
          Propozycje dla Ciebie
          iiiii<CircleUserIcon/>
        </header> */}
        {showSuggestions && <>
          <h1 className="SuggestionsHeader">Sugestie</h1>
          {suggestionsArray && suggestionsArray.length > 0 && <div className="Suggestions-container-2">
            {!noMorePeopleToShow && <h2 className="Suggestions-container-suggestionTitle">{currentPersonToShow.name} ({currentPersonToShow.instrument})</h2>}
            {/* <ul>
              <li>{currentPersonToShow.name}</li>
              <li>{currentPersonToShow.sex === "K" ? "Kobieta" : "Męzyzna"}</li>
              <li>Instrument: {currentPersonToShow.instrument}</li>
            </ul> */}
            {!noMorePeopleToShow && <img className="Current-suggestion" src={currentPersonToShow.image1} alt="User photo" width="375" height="565"/>}
            {!noMorePeopleToShow && <div className="Current-suggestions-radio-buttons" onChange={onPhotoChange}>
              <input type="radio" id="firstPhoto" name="photoRadio" value="firstPhoto"
                defaultChecked></input>
              <input type="radio" id="secondPhoto" name="photoRadio" value="secondPhoto"
                ></input>
              {/* {showPrevPhotoButton && <button onClick={prevPhoto}>poprzednie zdj</button>} */}
              {/* {showNextPhotoButton && <button onClick={nextPhoto}>następne zdj</button>} */}
            </div>}
            {!noMorePeopleToShow && <div className="Current-suggestions-swypeIcons" >
              <FontAwesomeIcon className="Icon fa-3x Current-suggestions-swypeIcons-no" icon={faTimesCircle} onClick={swypeNo} />
              <FontAwesomeIcon className="Icon fa-3x Current-suggestions-swypeIcons-yes" icon={faCheckCircle} onClick={swypeYes} />
            </div>}
            {noMorePeopleToShow && <h2 style={{color: 'white'}}>Nie ma nikogo więcej :( <button onClick={getSuggestions}>Odswiez</button></h2>}
            {!noMorePeopleToShow && <div className="Current-suggestion-about">
              {currentPersonToShow.about}
            </div>}
            {!noMorePeopleToShow && <div className="Current-suggestion-inspirations">
            Inspiracje: {currentPersonToShow.inspirations}
            </div>}
          </div>}
        </>}
        {!showSuggestions && <>
          <h1 className="SuggestionsHeader">Dopasowania</h1>
          {matchesArray && matchesArray.length > 0 && <div className="Suggestions-container-2">
            {!noMoreMatchesToShow && <h2 className="Suggestions-container-suggestionTitle">{currentMatchToShow.name} ({currentMatchToShow.instrument})</h2>}
            {/* <ul>
              <li>{currentPersonToShow.name}</li>
              <li>{currentPersonToShow.sex === "K" ? "Kobieta" : "Męzyzna"}</li>
              <li>Instrument: {currentPersonToShow.instrument}</li>
            </ul> */}
            {!noMoreMatchesToShow && <img className="Current-suggestion" src={currentMatchToShow.image1} alt="User photo" width="375" height="565"/>}
            {!noMoreMatchesToShow && <div className="Current-suggestions-radio-buttons" onChange={onPhotoChange}>
              <input type="radio" id="firstPhoto" name="photoRadio" value="firstPhoto"
                defaultChecked></input>
              <input type="radio" id="secondPhoto" name="photoRadio" value="secondPhoto"
                ></input>
              {/* {showPrevPhotoButton && <button onClick={prevPhoto}>poprzednie zdj</button>} */}
              {/* {showNextPhotoButton && <button onClick={nextPhoto}>następne zdj</button>} */}
            </div>}
            <div className="Current-suggestions-swypeIcons" >
              <FontAwesomeIcon className="Icon fa-3x Current-suggestions-swypeIcons-no" icon={faArrowLeft} onClick={changeMatchIndex} />
              <FontAwesomeIcon className="Icon fa-3x Current-suggestions-swypeIcons-yes" icon={faArrowRight} onClick={changeMatchIndex} />
            </div>
            {noMorePeopleToShow && <h2 style={{color: 'white'}}>Nie ma nikogo więcej :(</h2>}
            {!noMorePeopleToShow && <div className="Current-suggestion-about">
              {currentPersonToShow.about}
            </div>}
            {!noMorePeopleToShow && <div className="Current-suggestion-inspirations">
            Inspiracje: {currentPersonToShow.inspirations}
            </div>}
          </div>}
        </>}



          <button onClick={toggleSuggestions}>{showSuggestions ? "Pokaz dopasowania" : "Pokaz sugestie"}</button>
        </div>
      </div>
    );
  }
  
  export default Suggestions;
  