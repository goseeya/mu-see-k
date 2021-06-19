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
    aboutMeData?.location || "Warszawa"
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
    (aboutMeData?.phoneNumber && aboutMeData?.searchFor[1]?.sex) || false
  );

  const [wybor2Instrument, setWybor2instrument] = useState(
    (aboutMeData &&
      aboutMeData.searchFor[1] &&
      aboutMeData.searchFor[1].instrument) ||
      "gitara"
  );
  const [wybor2Plec, setWybor2plec] = useState(
    (aboutMeData && aboutMeData.searchFor[1] && aboutMeData.searchFor[1].sex) ||
      ""
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
        setPlec(response.data.sex);
        setOpis(response.data.description);
        setZapieniadze(response.data.forMoney);
        setAdresobrazka(response.data.image1);
        setAdres2obrazka(response.data.image2);
        setInspiracje(response.data.inspirations);
        setWyborinstrument(response.data.searchFor[0].instrument);
        setWyborplec(response.data.searchFor[0].sex);

        if (response.data.searchFor[1].sex) {
          setSecondPlayerAdded(true);
        }
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
        { instrument: "", sex: "" },
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

        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(aboutMeData);

  const formValid =
    imie?.length <= 20 &&
    telefon?.length <= 12 &&
    opis?.length <= 600 &&
    inspiracje?.length <= 100 &&
    imie &&
    telefon &&
    lokalizacja &&
    plec &&
    opis &&
    gatunek &&
    instrument &&
    inspiracje &&
    adresObrazka &&
    adres2Obrazka &&
    wyborInstrument &&
    wyborPlec;

  return (
    <div className="Me">
      <Header className="MeHeader" />
      <header className="Me-header">Mój profil</header>
      <>
        {aboutMeData && aboutMeData?.name && (
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
          <p>
            {aboutMeData && aboutMeData?.name ? "Edytuj" : "Wypełnij"} formularz
            "O mnie"
          </p>
          <form onSubmit={submitAboutMe} className="Login-form-me">
            <label>
              Login:
              <input
                type="text"
                defaultValue={aboutMeData?.name || imie}
                onChange={(e) => setImie(e.target.value)}
              />
              {imie?.length > 20 && (
                <div className="Validation">
                  Maksymalna liczba znaków to 20.
                </div>
              )}
            </label>
            <label>
              Numer telefonu:
              <input
                type="text"
                defaultValue={aboutMeData?.phoneNumber || telefon}
                onChange={(e) => setTelefon(e.target.value)}
              />
              {telefon?.length > 12 && (
                <div className="Validation">
                  Maksymalna liczba znaków to 12.
                </div>
              )}
            </label>
            <label>
              Miejsce prób:
              <select onChange={(e) => setLokalizacja(e.target.value)}>
                <option
                  value="Warszawa"
                  selected={
                    aboutMeData?.name && aboutMeData?.location == "Warszawa"
                  }
                >
                  Warszawa
                </option>
                <option
                  value="Piaseczno"
                  selected={
                    aboutMeData?.name && aboutMeData?.location == "Piaseczno"
                  }
                >
                  Piaseczno
                </option>
                <option
                  value="Lublin"
                  selected={
                    aboutMeData?.name && aboutMeData?.location == "Lublin"
                  }
                >
                  Lublin
                </option>
                <option
                  value="Kielce"
                  selected={
                    aboutMeData?.name && aboutMeData?.location == "Kielce"
                  }
                >
                  Kielce
                </option>
                <option
                  value="Radom"
                  selected={
                    aboutMeData?.name && aboutMeData?.location == "Radom"
                  }
                >
                  Radom
                </option>
                <option
                  value="Olsztyn"
                  selected={
                    aboutMeData?.name && aboutMeData?.location == "Olsztyn"
                  }
                >
                  Olsztyn
                </option>
              </select>
            </label>
            <span className="label">
              Moja płeć
              <div onChange={(e) => setPlec(e.target.value)}>
                <input
                  type="radio"
                  value="K"
                  name="plec"
                  defaultChecked={aboutMeData?.sex && aboutMeData?.sex == "K"}
                />
                Kobieta
                <input
                  type="radio"
                  value="M"
                  name="plec"
                  defaultChecked={aboutMeData?.sex && aboutMeData?.sex == "M"}
                />
                Męczyzna
                <input
                  type="radio"
                  value="N"
                  name="plec"
                  defaultChecked={aboutMeData?.sex && aboutMeData?.sex == "N"}
                />
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
              {opis?.length > 600 && (
                <div className="Validation">
                  Maksymalna liczba znaków to 600.
                </div>
              )}
            </label>
            <label>
              Gatunek muzyczny, jaki chcę uprawiać:
              <select onChange={(e) => setGatunek(e.target.value)}>
                <option
                  value="rock"
                  selected={aboutMeData?.name && aboutMeData?.genre == "rock"}
                >
                  Rock
                </option>
                <option
                  value="pop"
                  selected={aboutMeData?.name && aboutMeData?.genre == "pop"}
                >
                  Pop
                </option>
                <option
                  value="metal"
                  selected={aboutMeData?.name && aboutMeData?.genre == "metal"}
                >
                  Metal
                </option>
                <option
                  value="hip hop"
                  selected={
                    aboutMeData?.name && aboutMeData?.genre == "hip hop"
                  }
                >
                  Hip-hop
                </option>
              </select>
            </label>
            <label>
              Mój instrument to:
              <select onChange={(e) => setInstrument(e.target.value)}>
                <option
                  value="gitara"
                  selected={
                    aboutMeData?.name && aboutMeData?.instrument == "gitara"
                  }
                >
                  Gitara
                </option>
                <option
                  value="bas"
                  selected={
                    aboutMeData?.name && aboutMeData?.instrument == "bas"
                  }
                >
                  Bas
                </option>
                <option
                  value="wokal"
                  selected={
                    aboutMeData?.name && aboutMeData?.instrument == "wokal"
                  }
                >
                  Wokal
                </option>
                <option
                  value="perkusja"
                  selected={
                    aboutMeData?.name && aboutMeData?.genre == "perkusja"
                  }
                >
                  Perkusja
                </option>
              </select>
            </label>
            <span className="label">
              Chcę grać dla
              <div onChange={(e) => setZapieniadze(e.target.value)}>
                <input
                  type="radio"
                  value={true}
                  name="zaPieniadze"
                  defaultChecked={aboutMeData && aboutMeData?.forMoney == true}
                />
                Dla kasy
                <input
                  type="radio"
                  value={false}
                  name="zaPieniadze"
                  defaultChecked={
                    aboutMeData &&
                    aboutMeData?.name &&
                    aboutMeData?.forMoney == false
                  }
                />
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
              {inspiracje?.length > 100 && (
                <div className="Validation">
                  Maksymalna liczba znaków to 100.
                </div>
              )}
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
              <div onChange={(e) => setWyborplec(e.target.value)}>
                Płeć:
                <input
                  type="radio"
                  value="K"
                  name="wyborPlec"
                  defaultChecked={
                    aboutMeData?.searchFor[0]?.sex &&
                    aboutMeData?.searchFor[0]?.sex === "K"
                  }
                />
                Kobieta
                <input
                  type="radio"
                  value="M"
                  name="wyborPlec"
                  defaultChecked={
                    aboutMeData?.searchFor[0]?.sex &&
                    aboutMeData?.searchFor[0]?.sex === "M"
                  }
                />
                Męczyzna
                <input
                  type="radio"
                  value="N"
                  name="wyborPlec"
                  defaultChecked={
                    aboutMeData?.searchFor[0]?.sex &&
                    aboutMeData?.searchFor[0]?.sex === "N"
                  }
                />
                Niebinarna
              </div>
            </span>

            <label>
              Instrument:
              <select onChange={(e) => setWyborinstrument(e.target.value)}>
                <option
                  value="gitara"
                  selected={
                    aboutMeData?.searchFor[0]?.instrument &&
                    aboutMeData?.searchFor[0]?.instrument === "gitara"
                  }
                >
                  Gitara
                </option>
                <option
                  value="bas"
                  selected={
                    aboutMeData?.searchFor[0]?.instrument &&
                    aboutMeData?.searchFor[0]?.instrument === "bas"
                  }
                >
                  Bas
                </option>
                <option
                  value="wokal"
                  selected={
                    aboutMeData?.searchFor[0]?.instrument &&
                    aboutMeData?.searchFor[0]?.instrument === "wokal"
                  }
                >
                  Wokal
                </option>
                <option
                  value="perkusja"
                  selected={
                    aboutMeData?.searchFor[0]?.instrument &&
                    aboutMeData?.searchFor[0]?.instrument === "perkusja"
                  }
                >
                  Perkusja
                </option>
              </select>
            </label>
            {!secondPlayerAdded && (
              <p>
                Dodaj drugiego zawodnika (max. liczba){" "}
                <button onClick={() => setSecondPlayerAdded(true)}>+</button>
              </p>
            )}
            {secondPlayerAdded && (
              <>
                <span className="label">
                  <div style={{ height: "10px" }}></div> Drugi zawodnik:
                  <div style={{ height: "10px" }}></div>
                  <div
                    defaultValue={aboutMeData?.searchFor[1]?.sex || wybor2Plec}
                    onChange={(e) => setWybor2plec(e.target.value)}
                  >
                    Płeć:
                    <input
                      type="radio"
                      value="K"
                      name="wybor2Plec"
                      defaultChecked={
                        aboutMeData?.searchFor[1]?.sex &&
                        aboutMeData?.searchFor[1]?.sex === "K"
                      }
                    />
                    Kobieta
                    <input
                      type="radio"
                      value="M"
                      name="wybor2Plec"
                      defaultChecked={
                        aboutMeData?.searchFor[1]?.sex &&
                        aboutMeData?.searchFor[1]?.sex === "M"
                      }
                    />
                    Męczyzna
                    <input
                      type="radio"
                      value="N"
                      name="wybor2Plec"
                      defaultChecked={
                        aboutMeData?.searchFor[1]?.sex &&
                        aboutMeData?.searchFor[1]?.sex === "N"
                      }
                    />
                    Niebinarna
                  </div>
                </span>

                <label>
                  Instrument:
                  <select onChange={(e) => setWybor2instrument(e.target.value)}>
                    <option
                      value="gitara"
                      selected={
                        aboutMeData?.searchFor[1]?.instrument &&
                        aboutMeData?.searchFor[1]?.instrument === "gitara"
                      }
                    >
                      Gitara
                    </option>
                    <option
                      value="bas"
                      selected={
                        aboutMeData?.searchFor[1]?.instrument &&
                        aboutMeData?.searchFor[1]?.instrument === "bas"
                      }
                    >
                      Bas
                    </option>
                    <option
                      value="wokal"
                      selected={
                        aboutMeData?.searchFor[1]?.instrument &&
                        aboutMeData?.searchFor[1]?.instrument === "wokal"
                      }
                    >
                      Wokal
                    </option>
                    <option
                      value="perkusja"
                      selected={
                        aboutMeData?.searchFor[1]?.instrument &&
                        aboutMeData?.searchFor[1]?.instrument === "perkusja"
                      }
                    >
                      Perkusja
                    </option>
                  </select>
                </label>
              </>
            )}

            {!formValid && (
              <div className="Validation">
                Formularz pusty lub niepoprawnie wypełniony.
              </div>
            )}

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
