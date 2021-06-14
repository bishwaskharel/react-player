import React, { useState } from "react";
// Adding Styles
import "./styles/app.scss";

// Adding Compoments
import Player from "./components/Player";
import Song from "./components/Song";

// Import Util
import data from "./util";

function App() {
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
      />
    </div>
  );
}

export default App;
