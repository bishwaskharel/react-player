import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start</p>
        <input type="range" name="Audio" id="Audio" />
        <p>End</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="play" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="play" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
