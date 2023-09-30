import React from "react";
import "./styles.css";
import MusicPlayer from "../components/MusicPlayer";

function HomePage() {
  const songs = [
    { value: "Cancion 1", id: 1 },
    { value: "Cancion 2", id: 2 },
    { value: "Cancion 3", id: 3 },
    { value: "Cancion 4", id: 4 },
    { value: "Cancion 5", id: 5 },
    { value: "Cancion 6", id: 6 },
    { value: "Cancion 1", id: 1 },
    { value: "Cancion 2", id: 2 },
    { value: "Cancion 3", id: 3 },
    { value: "Cancion 4", id: 4 },
    { value: "Cancion 5", id: 5 },
    { value: "Cancion 6", id: 6 },
    { value: "Cancion 1", id: 1 },
    { value: "Cancion 2", id: 2 },
    { value: "Cancion 3", id: 3 },
    { value: "Cancion 4", id: 4 },
    { value: "Cancion 5", id: 5 },
    { value: "Cancion 6", id: 6 },
    { value: "Cancion 1", id: 1 },
    { value: "Cancion 2", id: 2 },
    { value: "Cancion 3", id: 3 },
    { value: "Cancion 4", id: 4 },
    { value: "Cancion 5", id: 5 },
    { value: "Cancion 6", id: 6 },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ position: "sticky", top: 0 }}>
        <div>PAGINA PRINCIPAL</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {songs.map((song) => (
          <div
            style={{
              height: 200,
              aspectRatio: 1,
              backgroundColor: "red",
              margin: 10,
            }}
          >
            {song.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
