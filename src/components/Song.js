import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img alt={currentSong.name} src={currentSong.cover} />
      <h1>{currentSong.name}</h1>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
