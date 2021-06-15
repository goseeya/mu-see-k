// import '../styles/Matches.css';

// import axios from 'axios';

// import { useState, useEffect } from 'react'; 

// const Matches = () => {


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
//       .post("http://localhost:8080/api/getmatched", {
//         headers: {
//           'Access-Control-Allow-Origin': true,
//         }
//       })
//       .then(response => {
//         console.log(response);
//         setLocalhostSuggestions(response.data.suggestions)});
//   }, []);

//   const swypeNo = () => {
//     axios.post('localhost:8080/api/putdecission', {"suggestionId":currentSuggestionIndex,"decission":false})
//     swype();
//   }

//   const swypeYes = () => {
//     axios.post('localhost:8080/api/putdecission', {"suggestionId":currentSuggestionIndex,"decission":true})
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

//   const onPhotoChange = (e) => {
//     console.log(e.target.value);
//     setCurrentPhotoIndex(e.target.value == 'firstPhoto' ? 0 : 1)
//   }

//   const showArrows = !noMorePeopleToShow;

//   const showPrevPhotoButton = currentPhotoIndex > 0;
//   const showNextPhotoButton = currentPhotoIndex < 2;
//   const mockedMatches = [{
//     "id": 1,
//     "name": "Marlena Wytrych",
//     "sex": "K",
//     "about": "Urodziłam się po to, aby grać. Mówisz wiesz że będziesz cierpiała i przeklinała cały świat - urodziłam się po to aby grać.",
//     "mp3": "src/FG654DE08GF48FG.mp3",
//     "inspirations": [
//         "Starchursky",
//         "Elvis",
//         "Sedaka",
//         "Speedy Gonzales",
//         "albo Diana"
//     ],
//     "image": [
//         "https://cdn.stocksnap.io/img-thumbs/280h/V2TT0P34KE.jpg",
//         "https://cdn.stocksnap.io/img-thumbs/280h/QON4ARVTSC.jpg",
//         "https://cdn.stocksnap.io/img-thumbs/280h/Q0LOIKU7GM.jpg"
//     ],
//     "instrument": "wokal"
// },
// {
//   "id": 3,
//   "name": "Czadomen",
//   "sex": "M",
//   "about": "Time to say goodbye, paesi que non lo mai",
//   "mp3": "src/FG654DE08GF8686463.mp3",
//   "inspirations": [
//       "Pavarotti",
//       "Boys",
//       "Zygmunt Solorz-Żak",
//       "Małgorzata Walewska"
//   ],
//   "image": [
//       "https://cdn.stocksnap.io/img-thumbs/280h/people-man_NSV3ZCAJXT.jpg",
//       "https://cdn.stocksnap.io/img-thumbs/280h/working-home_O8EAEFRYBP.jpg",
//       "https://cdn.stocksnap.io/img-thumbs/280h/photographer-picture_ZZGCZRV208.jpg"
//   ],
//   "instrument": "wokal"
// }
// ];
//   const currentPersonToShow = suggestionsArray && suggestionsArray[currentSuggestionIndex];




//     return (
//       <div className="Matches">
//         <header className="Matches-header">
//           Pary
//         </header>
//           <div>
//            content here
//           </div>
//       </div>
//     );
//   }
  
//   export default Matches;
  