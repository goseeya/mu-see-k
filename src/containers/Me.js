import '../styles/Me.css';
import Header from './Header';
import axios from 'axios';
import { useState, useEffect } from 'react'; 

// const aboutMeMock = {

// "name": "Marlena Wytrych",
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
//     "image1": "https://cdn.stocksnap.io/img-thumbs/280h/V2TT0P34KE.jpg",
//     "image2": "https://cdn.stocksnap.io/img-thumbs/280h/QON4ARVTSC.jpg",
//     "instrument": "wokal"
//   };




const Me = () => {

  const [aboutMeData, setAboutMeData] = useState();
  const [showTheForm, setShowTheForm] = useState(false);

  const [imie, setImie] = useState(aboutMeData?.name || "");
  const [telefon, setTelefon] = useState(aboutMeData?.phoneNumber || "");
  const [lokalizacja, setLokalizacja] = useState(aboutMeData?.location || "");
  const [plec, setPlec] = useState(aboutMeData?.sex || "");
  const [gatunek, setGatunek] = useState(aboutMeData?.genre || "");
  const [instrument, setInstrument] = useState(aboutMeData?.instrument || "");
  const [zaPieniadze, setZapieniadze] = useState(aboutMeData?.forMoney || false);
  const [opis, setOpis] = useState(aboutMeData?.description || "");
  const [inspiracje, setInspiracje] = useState(aboutMeData?.inspirations || "");
  const [adresObrazka, setAdresobrazka] = useState(aboutMeData?.image1 || "");
  const [adres2Obrazka, setAdres2obrazka] = useState(aboutMeData?.image2 || "");

  const [wyborInstrument, setWyborinstrument] = useState(aboutMeData?.searchFor[0].instrument || "");
  const [wyborPlec, setWyborplec] = useState(aboutMeData?.searchFor[0].sex || "");

  const [secondPlayerAdded, setSecondPlayerAdded] = useState(aboutMeData?.phoneNumber || false);

  const [wybor2Instrument, setWybor2instrument] = useState(aboutMeData?.searchFor[1].instrument || "");
  const [wybor2Plec, setWybor2plec] = useState(aboutMeData?.searchFor[1].sex || "");

  const [thirdPlayerAdded, setThirdPlayerAdded] = useState(aboutMeData?.phoneNumber || false);

  const [wybor3Instrument, setWybor3instrument] = useState(aboutMeData?.searchFor[2].instrument || "");
  const [wybor3Plec, setWybor3plec] = useState(aboutMeData?.searchFor[2].sex || "");



  const getAboutMe = () => {
    axios
    .post("http://localhost:8080/api/getaboutme", {
      headers: {
        'Access-Control-Allow-Origin': true,
      }
    })
    .then(response => {
      console.log(response);
      if (response.data === null || !response.data.name) {
        setShowTheForm(true);
        setAboutMeData({
          name: "Lars Ulrich",
phoneNumber: "802222422",
location: "Warszawa",
sex: "M",
genre: "rock",
instrument: "perkusja",
forMoney: true,
description: "For whom the bell tolls?",
inspirations: "Judas Priest",
image1: "https://image.shutterstock.com/image-photo/stock-photo-blue-balloon-on-260nw-1600368805.jpg",
image2: "https://image.shutterstock.com/image-photo/stock-photo-blue-balloon-on-260nw-1600368805.jpg",
image3: null,
mp3: "fwtbt.m4a",
searchFor: [
    {"instrument": "gitara", "sex": "M"},
    {"instrument": "wokal", "sex": "M"},
    {"instrument": "bas", "sex": "M"}
],
}
);
      } else {
        setShowTheForm(false);
        setAboutMeData(response.data);
      }
      
    })
    .catch(function (error) {
      console.log(error);
      setAboutMeData({
                  name: "Lars Ulrich",
        phoneNumber: "802222422",
        location: "Warszawa",
        sex: "M",
        genre: "rock",
        instrument: "perkusja",
        forMoney: true,
        description: "For whom the bell tolls?",
        inspirations: "Judas Priest",
        image1: "https://image.shutterstock.com/image-photo/stock-photo-blue-balloon-on-260nw-1600368805.jpg",
        image2: "https://image.shutterstock.com/image-photo/stock-photo-blue-balloon-on-260nw-1600368805.jpg",
        image3: null,
        mp3: "fwtbt.m4a",
        searchFor: [
            {"instrument": "gitara", "sex": "M"},
            {"instrument": "wokal", "sex": "M"},
            {"instrument": "bas", "sex": "M"}
        ],
        }
        );
      setShowTheForm(true);
      console.log(showTheForm);
    });
  }

  useEffect(() => {

   getAboutMe();
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
  //   const moczek = {
  //     "name": "Lars Ulrich",
  //     "phoneNumber": "802222422",
  //     "location": "Warszawa",
  //     "sex": "M",
  //     "genre": "rock",
  //     "instrument": "perkusja",
  //     "forMoney": true,
  //     "description": "For whom the bell tolls?",
  //     "inspirations": "Judas Priest",
  //     "image1": "cliff1.jpg",
  //     "image2": "cliff2.jpg",
  //     "image3": null,
  //     "mp3": "fwtbt.m4a",
  //     "searchFor": [
  //         {"instrument": "gitara", "sex": "M"},
  //         {"instrument": "wokal", "sex": "M"},
  //         {"instrument": "bas", "sex": "M"}
  //     ]
  // };

    // axios.post('/api/putAboutMe', moczek)

    const objectToSend = {

          name: imie,
          phoneNumber: telefon,
          location: lokalizacja,
          sex: plec,
          genre: gatunek,
          instrument: instrument,
          forMoney: zaPieniadze,
          description: opis,
          inspirations: inspiracje,
          image1: adresObrazka,
          image2: adres2Obrazka,
          "image3": null,
          "mp3": "fwtbt.m4a",
          searchFor: [
              {instrument: wyborInstrument, sex: wyborPlec},
              {instrument: wybor2Instrument, sex: wybor2Plec},
              {instrument: wybor3Instrument, sex: wybor3Plec}
          ]
      };


    

    axios.post('http://localhost:8080/api/putaboutme', 
    // moczek

    objectToSend
    
    
    
    
    , {headers: { 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" }})

      


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

    .then(function (response) {
      console.log(response);
      // showTheForm = false;
      getAboutMe();
    })
    .catch(function (error) {
      console.log(error);
      setShowTheForm(true);
    });
  }
  console.log(aboutMeData);

  const uploadPicture = (e) => {
    const objectToSend = {

      name: imie,
      phoneNumber: telefon,
      location: lokalizacja,
      sex: plec,
      genre: gatunek,
      instrument: instrument,
      forMoney: zaPieniadze,
      description: opis,
      inspirations: inspiracje,
      image1: e.target.files[0],
      image2: adres2Obrazka,
      "image3": null,
      "mp3": "fwtbt.m4a",
      searchFor: [
          {instrument: wyborInstrument, sex: wyborPlec},
          {instrument: wybor2Instrument, sex: wybor2Plec},
          {instrument: wybor3Instrument, sex: wybor3Plec}
      ]
  };




axios.post('http://localhost:8080/api/putaboutme', 
// moczek

objectToSend




)

    // this.setState({
    //     /* contains the preview, if you want to show the picture to the user
    //        you can access it with this.state.currentPicture
    //    */
    //     picturePreview : URL.createObjectURL(e.target.files[0]),
    //     /* this contains the file we want to send */
    //     pictureAsFile : e.target.files[0]
    // })
};
    return (
      <div className="Me">
        <Header className="MeHeader" />
        <header className="Me-header">
          Mój profil
        </header>
        <> {aboutMeData && (<><div className ="myPictures">
          <img src={aboutMeData.image1} className="myPicture" />
          <img src={aboutMeData.image2} className="myPicture" />
        </div></>)}</>

{/* GG{JSON.stringify(showTheForm)}GG */}

          { <>
          <p>{aboutMeData ? "Edytuj" : "Wypełnij"} formularz "O mnie"</p>
          <form onSubmit={submitAboutMe} className="Login-form-me">
      <label>
        Login:
        <input
          type="text"
          defaultValue={aboutMeData?.name || ""}
          onChange={e => setImie(e.target.value)}
        />
      </label>
      <label>
        Numer telefonu:
        <input
          type="text"
          defaultValue={aboutMeData?.phoneNumber || telefon}
          onChange={e => setTelefon(e.target.value)}
        />
      </label>

      <label>
       Miejsce prób:
          <select defaultValue={aboutMeData?.location || lokalizacja} onChange={e => setLokalizacja(e.target.value)}>
            <option value="warszawa">Warszawa</option>
            <option value="piaseczno">Piaseczno</option>
            <option value="lublin">Lublin</option>
            <option value="kielce">Kielce</option>
            <option value="radom">Radom</option>
            <option value="olsztyn">Olsztyn</option>
          </select>
        </label>





            Moja płeć
      <div defaultValue={aboutMeData?.sex || plec} onChange={e => setPlec(e.target.value)}>
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
          defaultValue={aboutMeData?.description || opis}
          onChange={e => setOpis(e.target.value)}
        />
      </label>


      <label>
          Gatunek muzyczny, jaki chcę uprawiać:
          <select defaultValue={aboutMeData?.genre || gatunek} onChange={e => setGatunek(e.target.value)}>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="hipHip">Hip-hop</option>
            <option value="poezjaSpiewana">Poezja śpiewana</option>
          </select>
        </label>

        <label>
          Mój instrument to:
          <select defaultValue={aboutMeData?.instrument || instrument} onChange={e => setInstrument(e.target.value)}>
            <option value="gitara">Gitara</option>
            <option value="bas">Bas</option>
            <option value="wokal">Wokal</option>
            <option value="perkusja">Perkusja</option>
          </select>
        </label>



        Chcę grać dla
      <div defaultValue={aboutMeData?.forMoney || zaPieniadze} onChange={e => setZapieniadze(e.target.value)}>
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
          defaultValue={aboutMeData?.inspiracje || inspiracje}
          onChange={e => setInspiracje(e.target.value)}
        />
      </label>
      <label>
        Adres pierwszego obrazka:
        <input
          type="text"
          defaultValue={aboutMeData?.image1 || adresObrazka}
          onChange={e => setAdresobrazka(e.target.value)}
        />
      </label>
      <label>
        Adres drugiego obrazka:
        <input
          type="text"
          defaultValue={aboutMeData?.image2 || adres2Obrazka}
          onChange={e => setAdres2obrazka(e.target.value)}
        />
      </label>
      <label>
        Wklej obrazek:
        <input type="file" name="image" onChange={uploadPicture}/>

      </label>
      {/* <label>
        Nagranie:
        <input
          type="text"
          value={nagranie}
          onChange={e => setNagranie(e.target.value)}
        />
      </label> */}
      <h2>Kogo szukam?</h2>

        Pierwszy zawodnik:
        Płeć:
        <div defaultValue={aboutMeData?.searchFor[0].sex || wyborPlec} onChange={e => setWyborplec(e.target.value)}>
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
          <select defaultValue={aboutMeData?.searchFor[0].instrument || wyborInstrument} onChange={e => setWyborinstrument(e.target.value)}>
            <option value="gitara">Gitara</option>
            <option value="bas">Bas</option>
            <option value="wokal">Wokal</option>
            <option value="perkusja">Perkusja</option>
          </select>
        </label>

        {!secondPlayerAdded && <p>Dodaj drugiego zawodnika <button onClick={() => setSecondPlayerAdded(true)}>+</button></p>}
        {secondPlayerAdded && <>
          Drugi zawodnik:
        Płeć:
        <div defaultValue={aboutMeData?.searchFor[1].plec || wybor2Plec} onChange={e => setWybor2plec(e.target.value)}>
            <input
              type="radio"
              value="K"
              name="wybor2Plec"
            />
            Kobieta
            <input
              type="radio"
              value="M"
              name="wybor2Plec"
            />
            Męczyzna
            <input
              type="radio"
              value="N"
              name="wybor2Plec"
            />
            Niebinarna
        </div>
        <label>
          Instrument:
          <select defaultValue={aboutMeData?.searchFor[1].instrument || wybor2Instrument} onChange={e => setWybor2instrument(e.target.value)}>
            <option value="gitara">Gitara</option>
            <option value="bas">Bas</option>
            <option value="wokal">Wokal</option>
            <option value="perkusja">Perkusja</option>
          </select>
        </label>
        </>}
        {secondPlayerAdded && !thirdPlayerAdded && <p>Dodaj trzeciego zawodnika (max. liczba) <button onClick={() => setThirdPlayerAdded(true)}>+</button></p>}
        {thirdPlayerAdded && <>
          Trzeci zawodnik:
        Płeć:
        <div defaultValue={aboutMeData?.searchFor[2].sex || wybor3Plec} onChange={e => setWybor3plec(e.target.value)}>
            <input
              type="radio"
              value="K"
              name="wybor3Plec"
            />
            Kobieta
            <input
              type="radio"
              value="M"
              name="wybor3Plec"
            />
            Męczyzna
            <input
              type="radio"
              value="N"
              name="wybor3Plec"
            />
            Niebinarna
        </div>
        <label>
          Instrument:
          <select defaultValue={aboutMeData?.searchFor[2].instrument || wybor3Instrument} onChange={e => setWybor3instrument(e.target.value)}>
            <option value="gitara">Gitara</option>
            <option value="bas">Bas</option>
            <option value="wokal">Wokal</option>
            <option value="perkusja">Perkusja</option>
          </select>
        </label>
        </>}

      {<input type="submit" value="Zapisz moje ustawienia" />}
        
    </form>
          </>}
      </div>
    );
  }
  
  export default Me;
  