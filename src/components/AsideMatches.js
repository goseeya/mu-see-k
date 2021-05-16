// import '../styles/AsideMatches.css';


import { useState, useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';

const AsideMatches = ({matches}) => {
  // const suggestionsArray = mockedSuggestions.suggestions;
//   const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
//   const [noMorePeopleToShow, setShowNoMorePeopleToShow] = useState(false);

//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
//   // const [showPrevPhotoArrow, setShowPrevPhotoArrow] = useState(false);
//   // const [showNextPhotoArrow, setShowNextPhotoArrow] = useState(true);

//   const swype = () => {
//     if (currentSuggestionIndex < 9) {
//       setCurrentSuggestionIndex(currentSuggestionIndex+1);
//     } else {
//       setShowNoMorePeopleToShow(true);
//     }

//     setCurrentPhotoIndex(0);
//   }

//   let [localhostSuggestions, setLocalhostSuggestions] = useState([]);
//   const suggestionsArray = localhostSuggestions;

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/muzyka/lista", {
//         headers: {
//           'Access-Control-Allow-Origin': true,
//         }
//       })
//       .then(response => {
//         console.log(response);
//         setLocalhostSuggestions(response.data)});
//   }, []);

//   const swypeNo = () => {
//     swype();
//   }

//   const swypeYes = () => {
//     swype();
//   }

//   const prevPhoto = () => {
//     if (currentPhotoIndex > 0) {
//       setCurrentPhotoIndex(currentPhotoIndex - 1);
//     }
//   }

//   const nextPhoto = () => {
//     if (currentPhotoIndex < 2) {
//       setCurrentPhotoIndex(currentPhotoIndex + 1);
//     }
//   }



    return (
        <div className="AsideMatches">
        
        <header className="AsideMatches AsideMatches-header">
          <FontAwesomeIcon className="Icon" icon={faUserCircle} />
          <span className="Icon">Mój profil</span>
        <FontAwesomeIcon className="Icon" icon={faBriefcase} />
        </header>
        <div className="AsideMatches AsideMatches-matchesContainer">
            <h2>Polubione</h2>
            {matches && matches.map(match => <img src={match.image[0]} className={classNames("Suggestions-liked-image", {"Suggestions-liked-image-match": match.likesMe})} />)}
        </div>
         
      </div>
    );
  }
  
  export default AsideMatches;
  