import "../styles/Suggestions.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "react-notifications/lib/notifications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Matches = ({
  localhostMatches,
  matchesArray,
  currentMatchToShow,
  currentMatchIndex,
  currentPhotoIndex,
  RightArrowClick,
  LeftArrowClick,
  toggleSuggestions,
  onPhotoChange
}) => {
  return (
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

      <button className="showSuggestionsButton" onClick={toggleSuggestions}>
        Pokaż sugestie
      </button>
    </>
  );
};

export default Matches;
