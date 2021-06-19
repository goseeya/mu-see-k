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
import Suggestions from "./Suggestions";
import Matches from "./Matches";

const MainPage = () => {
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
          <Suggestions
            noMorePeopleToShow={noMorePeopleToShow}
            getSuggestions={getSuggestions}
            suggestionsArray={suggestionsArray}
            localhostSuggestions={localhostSuggestions}
            currentPersonToShow={currentPersonToShow}
            currentPhotoIndex={currentPhotoIndex}
            swypeNo={swypeNo}
            swypeYes={swypeYes}
            toggleSuggestions={toggleSuggestions}
            onPhotoChange={swypeYes}
          />
        )}
        {!showSuggestions && (
          <Matches
            localhostMatches={localhostMatches}
            matchesArray={matchesArray}
            currentMatchToShow={currentMatchToShow}
            currentMatchIndex={currentMatchIndex}
            currentPhotoIndex={currentPhotoIndex}
            RightArrowClick={RightArrowClick}
            LeftArrowClick={LeftArrowClick}
            toggleSuggestions={toggleSuggestions}
            onPhotoChange={onPhotoChange}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
