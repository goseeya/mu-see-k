import "../styles/Suggestions.css";
import {
  faCheckCircle,
  faTimesCircle,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "react-notifications/lib/notifications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Suggestions = ({
  noMorePeopleToShow,
  getSuggestions,
  suggestionsArray,
  localhostSuggestions,
  currentPersonToShow,
  currentPhotoIndex,
  swypeNo,
  swypeYes,
  toggleSuggestions,
  onPhotoChange
}) => {
  return (
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
          {!noMorePeopleToShow && localhostSuggestions?.suggestions.length > 0 && (
            <h2 className="Suggestions-container-suggestionTitle">
              {currentPersonToShow?.name} ({currentPersonToShow?.instrument})
            </h2>
          )}
          {!noMorePeopleToShow && localhostSuggestions?.suggestions.length > 0 && (
            <div className="Current-suggestion-common">
              Gram {localhostSuggestions?.genre} w miejscowości{" "}
              {localhostSuggestions.location}{" "}
              {localhostSuggestions?.formoney ? "zarobkowo" : "niezarobkowo"}
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
          {!noMorePeopleToShow && localhostSuggestions?.suggestions.length > 0 && (
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
      <button className="showSuggestionsButton" onClick={toggleSuggestions}>
        Pokaż dopasowania
      </button>
    </>
  );
};

export default Suggestions;
