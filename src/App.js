import React from "react";
// Adding Styles
import "./styles/app.scss";

// Adding Compoments
import Player from "./components/Player";
import Song from "./components/Song";

// Import Util
import data from "./util"

function App() {
  return (
    <div className="app">
      <Song />
      <Player />
    </div>
  );
}

export default App;
