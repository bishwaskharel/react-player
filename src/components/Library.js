import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ isPlaying, song, setCurrentSong, audioRef }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {song.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
