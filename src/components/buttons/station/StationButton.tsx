"use client";
import { useState } from "react";
import "./StationButton.css";
import translation from "../../../locales/eu.json";

export function StationButton() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const updateIsButtonActiveState = () => {
    if (isButtonActive) setIsButtonActive(false);
    if (!isButtonActive) setIsButtonActive(true);
  };

  return (
    <div className="station-button">
      <div
        className="station-button-title"
        onClick={() => updateIsButtonActiveState()}
      >
        <h1>STATION</h1>
        {isButtonActive ? <StationInfo></StationInfo> : undefined}
      </div>
    </div>
  );
}

function StationInfo() {
  return (
    <div className="station-button-text">
      <p>{translation.station}</p>
    </div>
  );
}
