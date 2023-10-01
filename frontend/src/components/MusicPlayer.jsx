import React, { useState } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";
import { COLORS } from "../colors/colors";
import { useEffect } from "react";

function MusicPlayer(song) {
  const [music, setMusic] = useState(null);

  useEffect(() => {}, [song]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: COLORS.backgroundColor,
      }}
    >
      <div style={{ marginRight: 10 }}>
        <img
          src="https://www.aimm.edu/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg"
          style={{ height: 80, aspectRatio: 1, paddingLeft: 5 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          //alignItems: "center",
          width: "10%",
          maxWidth: "10%",
        }}
      >
        <div>Artista</div>
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "175px",
          }}
        >
          nombre de la cancion larga.
        </div>
      </div>
      <H5AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        showSkipControls
      />
    </div>
  );
}

export default MusicPlayer;
