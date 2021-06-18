import "../styles/Suggestions.css";
import axios from "axios";
import {
  faArrowLeft,
  faArrowRight,
  faCheckCircle,
  faTimesCircle,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

import { useState, useEffect } from "react";
import AsideMatches from "../components/AsideMatches";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Suggestions = () => {
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  const [noMorePeopleToShow, setShowNoMorePeopleToShow] = useState(true);
  const [localhostSuggestions, setLocalhostSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const swype = () => {
    if (currentSuggestionIndex < localhostSuggestions?.suggestions.length - 1) {
      setCurrentSuggestionIndex(currentSuggestionIndex + 1);
    } else {
      setShowNoMorePeopleToShow(true);
    }
    setCurrentPhotoIndex(0);
  };

  const createNotification = () => {
    NotificationManager.success(
      "Bo w tym cały jest ambaras... Gratulujemy!",
      "Nowe dopasowanie!"
    );
  };

  const getSuggestions = () => {
    setCurrentSuggestionIndex(0);
    axios
      .post("http://localhost:8080/api/getsuggestions", {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((response) => {
        console.log(response);
        if (response?.data?.suggestions?.length > 0) {
          setShowNoMorePeopleToShow(false);
        }
        setLocalhostSuggestions(response.data);
      })
      .catch((err) => {
        console.log(localhostSuggestions?.suggestions);
        console.log(err);
      });
  };

  let [localhostMatches, setLocalhostMatches] = useState([]);
  const matchesArray = localhostMatches;
  let suggestionsArray = showSuggestions
    ? localhostSuggestions?.suggestions
    : localhostMatches;

  useEffect(() => {
    getSuggestions();
  }, []);

  const swypeNo = () => {
    axios
      .post(
        "http://localhost:8080/api/putdecission",
        {
          suggestionId:
            localhostSuggestions?.suggestions[currentSuggestionIndex]?.userId,
          decission: false,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
          },
        }
      )

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    swype();
  };

  const swypeYes = () => {
    axios
      .post(
        "http://localhost:8080/api/putdecission",
        {
          suggestionId:
            localhostSuggestions?.suggestions[currentSuggestionIndex]?.userId,
          decission: true,
        },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
          },
        }
      )

      .then(function (response) {
        console.log(response);

        if (
          localhostSuggestions?.suggestions[currentSuggestionIndex]?.likesMe
        ) {
          console.log("match");
          createNotification();
          getMatches();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    swype();
  };

  const LeftArrowClick = () => {
    setCurrentPhotoIndex(0);
    if (currentMatchIndex >= 1) {
      setCurrentMatchIndex(currentMatchIndex - 1);
    }
  };

  const RightArrowClick = () => {
    setCurrentPhotoIndex(0);
    console.log("rightarrowclick");
    console.log(currentMatchIndex);
    setCurrentMatchIndex(currentMatchIndex + 1);
  };

  const onPhotoChange = (e) => {
    console.log(e.target.value);
    setCurrentPhotoIndex(e.target.value == "firstPhoto" ? 0 : 1);
  };

  const currentPersonToShow =
    localhostSuggestions?.suggestions &&
    localhostSuggestions?.suggestions[currentSuggestionIndex];
  const currentMatchToShow = matchesArray && matchesArray[currentMatchIndex];

  const getMatches = () => {
    axios
      .post("http://localhost:8080/api/getmatched", {
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      })
      .then((response) => {
        console.log(response);
        setLocalhostMatches(response.data.matched);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMatches();
  }, []);

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
    getMatches();
    getSuggestions();
  };

  suggestionsArray = showSuggestions ? suggestionsArray : matchesArray;

  return (
    <div className="Suggestions">
      <NotificationContainer />

      <AsideMatches matches={localhostMatches} refresh={getMatches} />
      <div className="Suggestions-container">
        {showSuggestions && (
          <>
            <h1 className="SuggestionsHeader">Sugestie</h1>

            {noMorePeopleToShow && (
              <>
                <h3 style={{ color: "white" }}>
                  Nie ma nikogo.
                  <FontAwesomeIcon
                    className="IconReloadSuggestions"
                    icon={faRedo}
                    onClick={getSuggestions}
                  />
                </h3>
              </>
            )}
            {suggestionsArray && suggestionsArray.length > 0 && (
              <div className="Suggestions-container-2">
                {!noMorePeopleToShow &&
                  localhostSuggestions?.suggestions.length > 0 && (
                    <h2 className="Suggestions-container-suggestionTitle">
                      {currentPersonToShow?.name} (
                      {currentPersonToShow?.instrument})
                    </h2>
                  )}
                {!noMorePeopleToShow &&
                  localhostSuggestions?.suggestions.length > 0 && (
                    <div className="Current-suggestion-common">
                      Gram {localhostSuggestions?.genre} w miejscowości{" "}
                      {localhostSuggestions.location}{" "}
                      {localhostSuggestions?.formoney
                        ? "zarobkowo"
                        : "niezarobkowo"}
                    </div>
                  )}
                {!noMorePeopleToShow && (
                  <img
                    className="Current-suggestion"
                    src={
                      currentPhotoIndex === 0
                        ? currentPersonToShow?.image1
                        : currentPersonToShow?.image2
                    }
                    alt="User photo"
                    width="375"
                    height="565"
                  />
                )}
                {!noMorePeopleToShow && (
                  <div
                    className="Current-suggestions-radio-buttons"
                    onChange={onPhotoChange}
                  >
                    <input
                      type="radio"
                      id="firstPhoto"
                      name="photoRadio"
                      value="firstPhoto"
                      defaultChecked
                    ></input>
                    <input
                      type="radio"
                      id="secondPhoto"
                      name="photoRadio"
                      value="secondPhoto"
                    ></input>
                  </div>
                )}
                {!noMorePeopleToShow &&
                  localhostSuggestions?.suggestions.length > 0 && (
                    <div className="Current-suggestions-swypeIcons">
                      <FontAwesomeIcon
                        className="Icon fa-3x Current-suggestions-swypeIcons-no"
                        icon={faTimesCircle}
                        onClick={swypeNo}
                      />
                      <FontAwesomeIcon
                        className="Icon fa-3x Current-suggestions-swypeIcons-yes"
                        icon={faCheckCircle}
                        onClick={swypeYes}
                      />
                    </div>
                  )}
                {localhostSuggestions?.suggestions.length == 0 && (
                  <h2 style={{ color: "white" }}>
                    Nie ma nikogo więcej :({" "}
                    <span className="IconReloadSuggestions">
                      <FontAwesomeIcon
                        className="IconReloadSuggestions"
                        icon={faRedo}
                        onClick={getSuggestions}
                      />
                    </span>
                  </h2>
                )}
                {!noMorePeopleToShow &&
                  localhostSuggestions?.suggestions.length > 0 && (
                    <div className="Current-suggestion-about">
                      {currentPersonToShow?.about}
                    </div>
                  )}
                {!noMorePeopleToShow &&
                  localhostSuggestions?.suggestions.length > 0 && (
                    <div className="Current-suggestion-inspirations">
                      Inspiracje: {currentPersonToShow?.inspirations}
                    </div>
                  )}
              </div>
            )}
          </>
        )}
        {!showSuggestions && (
          <>
            <h1 className="SuggestionsHeader">Dopasowania</h1>
            {!localhostMatches.length > 0 && (
              <h3 style={{ color: "white" }}>Nie ma nikogo.</h3>
            )}
            {matchesArray && matchesArray.length > 0 && (
              <div className="Suggestions-container-2">
                {localhostMatches && localhostMatches.length > 0 && (
                  <h2 className="Suggestions-container-suggestionTitle">
                    {currentMatchToShow.name} ({currentMatchToShow.instrument})
                  </h2>
                )}
                {localhostMatches && localhostMatches.length > 0 && (
                  <img
                    className="Current-suggestion"
                    src={
                      currentPhotoIndex === 0
                        ? currentMatchToShow.image1
                        : currentMatchToShow.image2
                    }
                    alt="User photo"
                    width="375"
                    height="565"
                  />
                )}
                {localhostMatches && localhostMatches.length > 0 && (
                  <div
                    className="Current-suggestions-radio-buttons"
                    onChange={onPhotoChange}
                  >
                    <input
                      type="radio"
                      id="firstPhoto"
                      name="photoRadio"
                      value="firstPhoto"
                      checked={currentPhotoIndex === 0}
                    ></input>
                    <input
                      type="radio"
                      id="secondPhoto"
                      name="photoRadio"
                      value="secondPhoto"
                      checked={currentPhotoIndex === 1}
                    ></input>
                  </div>
                )}
                <div className="Current-suggestions-swypeIcons">
                  {currentMatchIndex > 0 && (
                    <FontAwesomeIcon
                      className="Icon fa-3x Current-suggestions-swypeIcons-no"
                      icon={faArrowLeft}
                      onClick={LeftArrowClick}
                    />
                  )}
                  {currentMatchIndex < localhostMatches.length - 1 && (
                    <FontAwesomeIcon
                      className="Icon fa-3x Current-suggestions-swypeIcons-yes"
                      icon={faArrowRight}
                      onClick={RightArrowClick}
                    />
                  )}
                </div>
                {!localhostMatches ||
                  (!localhostMatches.length > 0 && (
                    <h2 style={{ color: "white" }}>Nie ma nikogo więcej :(</h2>
                  ))}
                {localhostMatches && localhostMatches.length > 0 && (
                  <div className="Current-suggestion-about">
                    {currentMatchToShow.about}
                  </div>
                )}
                {localhostMatches && localhostMatches.length > 0 && (
                  <div className="Current-suggestion-inspirations">
                    Inspiracje: {currentMatchToShow.inspirations}
                  </div>
                )}
                {localhostMatches && localhostMatches.length > 0 && (
                  <div className="Current-suggestion-inspirations">
                    Tel: {currentMatchToShow.phone}
                  </div>
                )}
              </div>
            )}
          </>
        )}

        <button className="showSuggestionsButton" onClick={toggleSuggestions}>
          {showSuggestions ? "Pokaż dopasowania" : "Pokaż sugestie"}
        </button>
      </div>
    </div>
  );
};

export default Suggestions;
