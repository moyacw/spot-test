import React from "react";
import "./styles.css";
import MusicPlayer from "../components/MusicPlayer";

function HomePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>HomePage</div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          left: 0,
        }}
      >
        <MusicPlayer />
      </div>
    </div>
  );
}

export default HomePage;
