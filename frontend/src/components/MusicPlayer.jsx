import React from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";

function MusicPlayer() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ backgroundColor: "red" }}>CARATULA</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "10%",
        }}
      >
        <div>Artista</div>
        <div>Cancion</div>
      </div>
      <H5AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" />
    </div>
  );
}

export default MusicPlayer;
