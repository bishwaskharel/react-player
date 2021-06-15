import React, { useState, useRef } from "react";
// Adding Styles
import "./styles/app.scss";

// Adding Compoments
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

// Import Util
import data from "./util";

function App() {
  // Ref
  const audioRef = useRef(null);

  // Event Handler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  // State for SongsInfo
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // State
  const [song, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        audioRef={audioRef}
        song={song}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
