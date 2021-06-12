import '../styles/Me.css';
import Header from './Header';
import axios from 'axios';
import { useState, useEffect } from 'react'; 

const aboutMeMock = {

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
    "image1": "https://cdn.stocksnap.io/img-thumbs/280h/V2TT0P34KE.jpg",
    "image2": "https://cdn.stocksnap.io/img-thumbs/280h/QON4ARVTSC.jpg",
    "instrument": "wokal"
  };




const Me = () => {

  const aboutMeData = null;
  let showTheForm = true;

  const [imie, setImie] = useState("");
  const [telefon, setTelefon] = useState("");
  const [lokalizacja, setLokalizacja] = useState("");
  const [plec, setPlec] = useState("");
  const [gatunek, setGatunek] = useState("");
  const [instrument, setInstrument] = useState("");
  const [zaPieniadze, setZapieniadze] = useState("");
  const [opis, setOpis] = useState("");
  const [inspiracje, setInspiracje] = useState("");
  const [adresObrazka, setAdresobrazka] = useState("");
  const [wyborInstrument, setWyborinstrument] = useState("");
  const [wyborPlec, setWyborplec] = useState("");
 


  const getAboutMe = () => {
    axios
    .get("http://localhost:8080/api/getaboutme", {
      headers: {
        'Access-Control-Allow-Origin': true,
      }
    })
    .then(response => {
      console.log(response);
      response.data === null ? showTheForm = true : aboutMeData = response.data

      if(response.data.name) {
        showTheForm = false;
      }
    })
    .catch(function (error) {
      console.log(error);
      showTheForm = true;
      console.log(showTheForm);
    });
  }

  useEffect(() => {

   getAboutMe();
  }, []);

  const submitAboutMe = () => {
    axios.post('http://localhost:8080/api/putAboutMe', {

      // "name": "Jayms",
      // "phoneNumber": "0700887000",
      // "location": "Warszawa",
      // "sex": "M",
      // "genre": "rock",
      // "instrument": "gitara",
      // "forMoney": true,
      // "description": "Nothing else matters",
      // "inspirations": "Black Sabbath",
      // "image1": PLICZEK,
      // "image2": PLICZEK,
      // "image3": PLICZEK,
      // "mp3": PLICZEK,
      // "searchFor": [
      //     {
      //         "instrument": "perkusja",
      //         "sex": "M"
      //     },
      //     {
      //         "instrument": "gitara",
      //         "sex": "M"
      //     },
      //     {
      //         "instrument": "wokal",
      //         "sex": "M"
      //     },
      //     {
      //         "instrument": "bas",
      //         "sex": "M"
      //     }
      // ],

      


      "name": imie,
      "phoneNumber": telefon,
      "location": lokalizacja,
      "sex": plec,
      "genre": gatunek,
      "instrument": instrument,
      "forMoney": zaPieniadze,
      "description": opis,
      "inspirations": inspiracje,
      "image1": adresObrazka,
      "image2": adresObrazka,
      "image3": adresObrazka,
      "mp3": "",
      "searchFor": [
          {
              "instrument": wyborInstrument,
              "sex": wyborPlec
          },
      ],
  })
    .then(function (response) {
      console.log(response);
      // showTheForm = false;
      getAboutMe();
    })
    .catch(function (error) {
      console.log(error);
      showTheForm = true;
    });
  }
    return (
      <div className="Me">
        <Header className="MeHeader" />
        <header className="Me-header">
          Mój profil
        </header>
        <> {aboutMeData && (<><div className ="myPictures">
          <img src={aboutMeMock.image1} className="myPicture" />
          <img src={aboutMeMock.image2} className="myPicture" />
        </div>
        <p>{aboutMeMock.name}</p>
          <div>
           {aboutMeMock.about}
          </div>
          <p>Inspiracje: </p>
          <ul>
            {aboutMeMock.inspirations.map(el => <li>{el}</li>)}
          </ul>
          <p>Instrument: {aboutMeMock.instrument}</p></>)}</>

{/* GG{JSON.stringify(showTheForm)}GG */}

          {showTheForm && <>HHH
          <p>Wypełnij formularz "O mnie"</p>
          <form onSubmit={submitAboutMe} className="Login-form">
      <label>
        Imię:
        <input
          type="text"
          value={imie}
          onChange={e => setImie(e.target.value)}
        />
      </label>
      <label>
        Telefon:
        <input
          type="text"
          value={telefon}
          onChange={e => setTelefon(e.target.value)}
        />
      </label>
      <label>
        Lokalizacja:
        <input
          type="text"
          value={lokalizacja}
          onChange={e => setLokalizacja(e.target.value)}
        />
      </label>
      <label>
        Płeć:
        <input
          type="text"
          value={plec}
          onChange={e => setPlec(e.target.value)}
        />
      </label>
      <label>
        Gatunek:
        <input
          type="text"
          value={gatunek}
          onChange={e => setGatunek(e.target.value)}
        />
      </label>
      <label>
        Instrument:
        <input
          type="text"
          value={instrument}
          onChange={e => setInstrument(e.target.value)}
        />
      </label>
      <label>
        Za pieniądze:
        <input
          type="checkbox"
          value={zaPieniadze}
          onChange={e => setZapieniadze(e.target.value)}
        />
      </label>
      <label>
        Opis:
        <input
          type="text"
          value={opis}
          onChange={e => setOpis(e.target.value)}
        />
      </label>
      <label>
        Inspiracje:
        <input
          type="text"
          value={inspiracje}
          onChange={e => setInspiracje(e.target.value)}
        />
      </label>
      <label>
        Adres obrazka:
        <input
          type="text"
          value={adresObrazka}
          onChange={e => setAdresobrazka(e.target.value)}
        />
      </label>
      <label>
        Pierwszy wybór (instrument):
        <input
          type="text"
          value={wyborInstrument}
          onChange={e => setWyborinstrument(e.target.value)}
        />
      </label>
      <label>
        Pierwszy wybór (płeć):
        <input
          type="text"
          value={wyborPlec}
          onChange={e => setWyborplec(e.target.value)}
        />
      </label>
      {<input type="submit" value="Zapisz" />}
        
    </form>
          </>}
      </div>
    );
  }
  
  export default Me;
  