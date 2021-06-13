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
    .post("http://localhost:8080/api/getaboutme", {
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

  //  getAboutMe();
  }, []);

  const submitAboutMe = (e) => {
    e.preventDefault();
    console.log("submitAboutMe");

    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8080/api/putAboutMe',
      // headers: {'Access-Control-Allow-Origin': true,},
      // crossdomain: true, 
      // data: {
      //   name: "sfdfsdf",
      // phoneNumber: "sfdfsdf",
      // location: "sfdfsdf",
      // sex: "sfdfsdf",
      // genre: "sfdfsdf",
      // instrument: "sfdfsdf",
      // forMoney: "sfdfsdf",
      // description: "sfdfsdf",
      // inspirations: "sfdfsdf",
      // image1: "sfdfsdf",
      // image2: "sfdfsdf",
      // image3: "sfdfsdf",
      // mp3: "",
      // searchFor: [
      //     {
      //         "instrument": "sfdfsdf",
      //         "sex": "sfdfsdf"
      //     },
      // ],
      // {
        // name: "Lars Ulrich",
        // phoneNumber: "802222422",
        // location: "Warszawa",
        // sex: "M",
        // genre: "rock",
        // instrument: "perkusja",
        // forMoney: true,
        // description: "For whom the bell tolls?",
        // inspirations: "Judas Priest",
        // image1: "cliff1.jpg",
        // image2: "cliff2.jpg",
        // image3: null,
        // mp3: "fwtbt.m4a",
        // searchFor: [
        //     {"instrument": "gitara", "sex": "M"},
        //     {"instrument": "wokal", "sex": "M"},
        //     {"instrument": "bas", "sex": "M"}
        // ]
    // }
    
      // }
      // data: {
      //   name: imie,
      // phoneNumber: telefon,
      // location: lokalizacja,
      // sex: plec,
      // genre: gatunek,
      // instrument: instrument,
      // forMoney: zaPieniadze,
      // description: opis,
      // inspirations: inspiracje,
      // image1: adresObrazka,
      // image2: adresObrazka,
      // image3: adresObrazka,
      // mp3: "",
      // searchFor: [
      //     {
      //         "instrument": wyborInstrument,
      //         "sex": wyborPlec
      //     },
      // ],
      // }
    // })
    

    axios.post('http://localhost:8080/api/putAboutMe', {

      
        headers: {
          'Access-Control-Allow-Origin': true,
        },
        body: {
      

      "name": "Jayms",
      "phoneNumber": "0700887000",
      "location": "Warszawa",
      "sex": "M",
      "genre": "rock",
      "instrument": "gitara",
      "forMoney": true,
      "description": "Nothing else matters",
      "inspirations": "Black Sabbath",
      "image1": "PLICZEK",
      "image2": "PLICZEK",
      "image3": "PLICZEK",
      "mp3": "PLICZEK",
      "searchFor": [
          {
              "instrument": "perkusja",
              "sex": "M"
          },
          {
              "instrument": "gitara",
              "sex": "M"
          },
          {
              "instrument": "wokal",
              "sex": "M"
          },
          {
              "instrument": "bas",
              "sex": "M"
          }
      ],

      


  //     "name": imie,
  //     "phoneNumber": telefon,
  //     "location": lokalizacja,
  //     "sex": plec,
  //     "genre": gatunek,
  //     "instrument": instrument,
  //     "forMoney": zaPieniadze,
  //     "description": opis,
  //     "inspirations": inspiracje,
  //     "image1": adresObrazka,
  //     "image2": adresObrazka,
  //     "image3": adresObrazka,
  //     "mp3": "",
  //     "searchFor": [
  //         {
  //             "instrument": wyborInstrument,
  //             "sex": wyborPlec
  //         },
  //     ],
  }})
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

          {showTheForm && <>
          <p>Wypełnij formularz "O mnie"</p>
          <form onSubmit={submitAboutMe} className="Login-form">
      <label>
        Login:
        <input
          type="text"
          value={imie}
          onChange={e => setImie(e.target.value)}
        />
      </label>
      <label>
        Numer telefonu:
        <input
          type="text"
          value={telefon}
          onChange={e => setTelefon(e.target.value)}
        />
      </label>
      <label>
        Miejsce prób:
        <input
          type="text"
          value={lokalizacja}
          onChange={e => setLokalizacja(e.target.value)}
        />
      </label>
            Moja płeć
      <div onChange={e => setPlec(e.target.value)}>
            <input
              type="radio"
              value="K"
              name="plec"
            />
            Kobieta
            <input
              type="radio"
              value="M"
              name="plec"
            />
            Męczyzna
            <input
              type="radio"
              value="N"
              name="plec"
            />
            Niebinarna
        </div>

        <label>
        Opis:
        <textarea
          placeholder="Kilka słów o mnie"
          value={opis}
          onChange={e => setOpis(e.target.value)}
        />
      </label>


      <label>
          Gatunek muzyczny, jaki chcę uprawiać:
          <select value={gatunek} onChange={e => setGatunek(e.target.value)}>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="hipHip">Hip-hop</option>
            <option value="poezjaSpiewana">Poezja śpiewana</option>
          </select>
        </label>

        <label>
          Mój instrument to:
          <select value={instrument} onChange={e => setInstrument(e.target.value)}>
            <option value="gitara">Gitara</option>
            <option value="bas">Bas</option>
            <option value="wokal">Wokal</option>
            <option value="perkusja">Perkusja</option>
          </select>
        </label>



        Chcę grać dla
      <div onChange={e => setZapieniadze(e.target.value)}>
            <input
              type="radio"
              value="true"
              name="zaPieniadze"
            />
            Dla kasy
            <input
              type="radio"
              value="false"
              name="zaPieniadza"
            />
            Dla fun-u!
        </div>

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

      <h2>Kogo szukam?</h2>

        Pierwszy zawodnik:
        Płeć:
        <div onChange={e => setWyborplec(e.target.value)}>
            <input
              type="radio"
              value="K"
              name="wyborPlec"
            />
            Kobieta
            <input
              type="radio"
              value="M"
              name="wyborPlec"
            />
            Męczyzna
            <input
              type="radio"
              value="N"
              name="wyborPlec"
            />
            Niebinarna
        </div>
        <label>
          Instrument:
          <select value={wyborPlec} onChange={e => setWyborinstrument(e.target.value)}>
            <option value="gitara">Gitara</option>
            <option value="bas">Bas</option>
            <option value="wokal">Wokal</option>
            <option value="perkusja">Perkusja</option>
          </select>
        </label>

      {<input type="submit" value="Zapisz moje ustawienia" />}
        
    </form>
          </>}
      </div>
    );
  }
  
  export default Me;
  