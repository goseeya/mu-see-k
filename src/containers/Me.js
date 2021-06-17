import "../styles/Me.css";
import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const Me = () => {
  let history = useHistory();

  const [aboutMeData, setAboutMeData] = useState();

  const [imie, setImie] = useState(aboutMeData?.name || "");
  const [telefon, setTelefon] = useState(aboutMeData?.phoneNumber || "");
  const [lokalizacja, setLokalizacja] = useState(
    aboutMeData?.location || "warszawa"
  );
  const [plec, setPlec] = useState(aboutMeData?.sex || "");
  const [gatunek, setGatunek] = useState(aboutMeData?.genre || "rock");
  const [instrument, setInstrument] = useState(
    aboutMeData?.instrument || "gitara"
  );
  const [zaPieniadze, setZapieniadze] = useState(
    aboutMeData?.forMoney || false
  );
  const [opis, setOpis] = useState(aboutMeData?.description || "");
  const [inspiracje, setInspiracje] = useState(aboutMeData?.inspirations || "");
  const [adresObrazka, setAdresobrazka] = useState(aboutMeData?.image1 || "");
  const [adres2Obrazka, setAdres2obrazka] = useState(aboutMeData?.image2 || "");

  const [wyborInstrument, setWyborinstrument] = useState(
    aboutMeData?.searchFor[0]?.instrument || "gitara"
  );
  const [wyborPlec, setWyborplec] = useState(
    aboutMeData?.searchFor[0]?.sex || ""
  );

  const [secondPlayerAdded, setSecondPlayerAdded] = useState(
    aboutMeData?.phoneNumber || false
  );

  const [wybor2Instrument, setWybor2instrument] = useState(
    aboutMeData?.searchFor[1]?.instrument || "gitara"
  );
  const [wybor2Plec, setWybor2plec] = useState(
    aboutMeData?.searchFor[1]?.sex || ""
  );

  const [thirdPlayerAdded, setThirdPlayerAdded] = useState(
    aboutMeData?.phoneNumber || false
  );

  const [wybor3Instrument, setWybor3instrument] = useState(
    aboutMeData?.searchFor[2]?.instrument || "gitara"
  );
  const [wybor3Plec, setWybor3plec] = useState(
    aboutMeData?.searchFor[2]?.sex || ""
  );

  const getAboutMe = () => {
    axios
      .post("http://localhost:8080/api/getaboutme", {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((response) => {
        setAboutMeData(response.data);
        setImie(response.data.name);
        setTelefon(response.data.phoneNumber);
        // setLokalizacja(response.data.location);
        setPlec(response.data.sex);
        // setGatunek(response.data.genre);
        setOpis(response.data.description);
        setZapieniadze(response.data.forMoney);
        setAdresobrazka(response.data.image1);
        setAdres2obrazka(response.data.image2);
        setInspiracje(response.data.inspirations);
        // setInstrument(response.data.instrument);
        // setLokalizacja(response.data.location);
        setWyborinstrument(response.data.searchFor[0].instrument);
        setWyborplec(response.data.searchFor[0].sex);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAboutMe();
  }, []);

  const submitAboutMe = (e) => {
    e.preventDefault();
    console.log("submitAboutMe");

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
      image3: null,
      mp3: "fwtbt.m4a",
      searchFor: [
        { instrument: wyborInstrument, sex: wyborPlec },
        { instrument: wybor2Instrument, sex: wybor2Plec },
        { instrument: wybor3Instrument, sex: wybor3Plec },
      ],
    };

    axios
      .post("http://localhost:8080/api/putaboutme", objectToSend, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
      })

      .then(function (response) {
        console.log(response);
        getAboutMe();
        history.push('/');
      })
      .catch(function (error) {
        console.log(error);

      });
  };
  console.log(aboutMeData);

  const formValid = imie?.length <= 20 && telefon?.length <= 12 && opis?.length <= 600 && inspiracje?.length <= 100 && imie && telefon && lokalizacja && plec && opis && gatunek && instrument && zaPieniadze && inspiracje && adresObrazka && adres2Obrazka && wyborInstrument && wyborPlec;
  console.log(formValid);
  console.log(imie?.length <= 20);
  console.log(telefon?.length <= 12);
  console.log(inspiracje?.length <= 100);
  console.log(imie); //
  console.log(telefon); //
  console.log(lokalizacja);
  console.log(plec);
  console.log(opis); //
  console.log(gatunek);
  console.log(instrument);
  console.log(zaPieniadze);
  console.log(inspiracje);
  console.log(adresObrazka); //
  console.log(adres2Obrazka); //
  console.log(wyborPlec);
  console.log(wyborInstrument);

  return (
    <div className="Me">
      <Header className="MeHeader" />
      <header className="Me-header">Mój profil</header>
      <>
        {(aboutMeData && aboutMeData?.name ) && (
          <>
            <div className="myPictures">
              <img src={aboutMeData.image1} className="myPicture" />
              <img src={aboutMeData.image2} className="myPicture" />
            </div>
          </>
        )}
      </>

      {
        <>
          <p>{(aboutMeData && aboutMeData?.name ) ? "Edytuj" : "Wypełnij"} formularz "O mnie"</p>
          <form onSubmit={submitAboutMe} className="Login-form-me">
            <label>
              Login:
              <input
                type="text"
                defaultValue={aboutMeData?.name || imie}
                onChange={(e) => setImie(e.target.value)}
              />
              {imie?.length > 20 && <div className="Validation">Maksymalna liczba znaków to 20.</div>}
            </label>
            <label>
              Numer telefonu:
              <input
                type="text"
                defaultValue={aboutMeData?.phoneNumber || telefon}
                onChange={(e) => setTelefon(e.target.value)}
              />
              {telefon?.length > 12 && <div className="Validation">Maksymalna liczba znaków to 12.</div>}
            </label>
            <label>
              Miejsce prób:
              <select
                onChange={(e) => setLokalizacja(e.target.value)}
              >
                <option value="warszawa" selected>
                  Warszawa
                </option>
                <option value="piaseczno">Piaseczno</option>
                <option value="lublin">Lublin</option>
                <option value="kielce">Kielce</option>
                <option value="radom">Radom</option>
                <option value="olsztyn">Olsztyn</option>
              </select>
            </label>
            <span className="label">
              Moja płeć
              <div
                onChange={(e) => setPlec(e.target.value)}
              >
                <input type="radio" value="K" name="plec" selected={aboutMeData?.sex && aboutMeData?.sex == "K"} />
                Kobieta
                <input type="radio" value="M" name="plec" selected={aboutMeData?.sex && aboutMeData?.sex == "M"} />
                Męczyzna
                <input type="radio" value="N" name="plec" selected={aboutMeData?.sex && aboutMeData?.sex == "N"} />
                Niebinarna
              </div>
            </span>
            <label>
              Opis:
              <textarea
                placeholder="Kilka słów o mnie"
                defaultValue={aboutMeData?.description || opis}
                onChange={(e) => setOpis(e.target.value)}
              />
              {opis?.length > 600 && <div className="Validation">Maksymalna liczba znaków to 600.</div>}

            </label>
            <label>
              Gatunek muzyczny, jaki chcę uprawiać:
              <select
                onChange={(e) => setGatunek(e.target.value)}
              >
                <option value="rock" selected>
                  Rock
                </option>
                <option value="pop">Pop</option>
                <option value="hipHip">Hip-hop</option>
                <option value="poezjaSpiewana">Poezja śpiewana</option>
              </select>
            </label>
            <label>
              Mój instrument to:
              <select
                onChange={(e) => setInstrument(e.target.value)}
              >
                <option value="gitara" selected>
                  Gitara
                </option>
                <option value="bas">Bas</option>
                <option value="wokal">Wokal</option>
                <option value="perkusja">Perkusja</option>
              </select>
            </label>
            <span className="label">
              Chcę grać dla
              <div
                onChange={(e) => setZapieniadze(e.target.value)}
              >
                <input type="radio" value="true" name="zaPieniadze" selected={aboutMeData?.forMoney} />
                Dla kasy
                <input type="radio" value="false" name="zaPieniadza" selected={!aboutMeData?.forMoney} />
                Dla fun-u!
              </div>
            </span>
            <label>
              Inspiracje:
              <input
                type="text"
                defaultValue={aboutMeData?.inspirations || inspiracje}
                onChange={(e) => setInspiracje(e.target.value)}
              />
              {inspiracje?.length > 100 && <div className="Validation">Maksymalna liczba znaków to 100.</div>}

            </label>
            <label>
              Adres pierwszego obrazka:
              <input
                type="text"
                defaultValue={aboutMeData?.image1 || adresObrazka}
                onChange={(e) => setAdresobrazka(e.target.value)}
              />
            </label>
            <label>
              Adres drugiego obrazka:
              <input
                type="text"
                defaultValue={aboutMeData?.image2 || adres2Obrazka}
                onChange={(e) => setAdres2obrazka(e.target.value)}
              />
            </label>
            <h2 style={{ color: "darkBlue" }}>Kogo szukam?</h2>
            <span className="label">
              Pierwszy zawodnik:
              <div style={{ height: "10px" }}></div>
              <div
                onChange={(e) => setWyborplec(e.target.value)}
              >
                Płeć:
                <input type="radio" value="K" name="wyborPlec" selected={aboutMeData?.searchFor[0]?.sex && aboutMeData?.searchFor[0]?.sex === "K"} />
                Kobieta
                <input type="radio" value="M" name="wyborPlec" selected={aboutMeData?.searchFor[0]?.sex && aboutMeData?.searchFor[0]?.sex === "M"} />
                Męczyzna
                <input type="radio" value="N" name="wyborPlec" selected={aboutMeData?.searchFor[0]?.sex && aboutMeData?.searchFor[0]?.sex === "N"} />
                Niebinarna
              </div>
            </span>

            <label>
              Instrument:
              <select
                onChange={(e) => setWyborinstrument(e.target.value)}
              >
                <option value="gitara" selected>
                  Gitara
                </option>
                <option value="bas">Bas</option>
                <option value="wokal">Wokal</option>
                <option value="perkusja">Perkusja</option>
              </select>
            </label>
            {!secondPlayerAdded && (
              <p>
                Dodaj drugiego zawodnika{" "}
                <button onClick={() => setSecondPlayerAdded(true)}>+</button>
              </p>
            )}
            {secondPlayerAdded && (
              <>
                <span className="label">
                  <div style={{ height: "10px" }}></div> Drugi zawodnik:
                  <div style={{ height: "10px" }}></div>
                  <div
                    defaultValue={aboutMeData?.searchFor[1]?.plec || wybor2Plec}
                    onChange={(e) => setWybor2plec(e.target.value)}
                  >
                    Płeć:
                    <input type="radio" value="K" name="wybor2Plec" selected />
                    Kobieta
                    <input type="radio" value="M" name="wybor2Plec" />
                    Męczyzna
                    <input type="radio" value="N" name="wybor2Plec" />
                    Niebinarna
                  </div>
                </span>

                <label>
                  Instrument:
                  <select
                    onChange={(e) => setWybor2instrument(e.target.value)}
                  >
                    <option value="gitara" selected>
                      Gitara
                    </option>
                    <option value="bas">Bas</option>
                    <option value="wokal">Wokal</option>
                    <option value="perkusja">Perkusja</option>
                  </select>
                </label>
              </>
            )}
            {secondPlayerAdded && !thirdPlayerAdded && (
              <p>
                Dodaj trzeciego zawodnika (max. liczba){" "}
                <button onClick={() => setThirdPlayerAdded(true)}>+</button>
              </p>
            )}
            {thirdPlayerAdded && (
              <>
                <span className="label">
                  Trzeci zawodnik:
                  <div style={{ height: "10px" }}></div>
                  <div
                    defaultValue={aboutMeData?.searchFor[2]?.sex || wybor3Plec}
                    onChange={(e) => setWybor3plec(e.target.value)}
                  >
                    Płeć:
                    <input type="radio" value="K" selected name="wybor3Plec" />
                    Kobieta
                    <input type="radio" value="M" name="wybor3Plec" />
                    Męczyzna
                    <input type="radio" value="N" name="wybor3Plec" />
                    Niebinarna
                  </div>
                </span>

                <label>
                  Instrument:
                  <select
                    onChange={(e) => setWybor3instrument(e.target.value)}
                  >
                    <option value="gitara" selected>
                      Gitara
                    </option>
                    <option value="bas">Bas</option>
                    <option value="wokal">Wokal</option>
                    <option value="perkusja">Perkusja</option>
                  </select>
                </label>
              </>
            )}
            {!formValid && <div className="Validation">Formularz pusty lub niepoprawnie wypełniony.</div>}

            {
              <input
                type="submit"
                className="SaveButton"
                disabled={!formValid}
                value="Zapisz moje ustawienia"
              />
            }
          </form>
        </>
      }
    </div>
  );
};

export default Me;
