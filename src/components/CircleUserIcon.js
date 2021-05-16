// import '../styles/AsideMatches.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBriefcase } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from 'react'; 

const CircleUserIcon = () => {
  // const suggestionsArray = mockedSuggestions.suggestions;
//   const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
//   const [noMorePeopleToShow, setShowNoMorePeopleToShow] = useState(false);

//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  // const [showPrevPhotoArrow, setShowPrevPhotoArrow] = useState(false);
  // const [showNextPhotoArrow, setShowNextPhotoArrow] = useState(true);

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

//   const showArrows = !noMorePeopleToShow;

//   const showPrevPhotoButton = currentPhotoIndex > 0;
//   const showNextPhotoButton = currentPhotoIndex < 2;

//   const currentPersonToShow = suggestionsArray && suggestionsArray[currentSuggestionIndex];
    return (
      <div className="AsideMatches">
        <FontAwesomeIcon icon={faUserCircle} />
        <FontAwesomeIcon icon={faBriefcase} />

      </div>
    );
  }
  
  export default CircleUserIcon;
  