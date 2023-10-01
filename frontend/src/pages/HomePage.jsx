import React from "react";
import "./styles.css";
import MusicPlayer from "../components/MusicPlayer";
import { COLORS } from "../colors/colors";
import { useState } from "react";

function HomePage() {
  const [music, setMusic] = useState(null);
  function onHandleClick(music) {
    console.log(music);
    setMusic(music);
  }
  const songs = [
    {
      value: "Cancion 1",
      id: 1,
      artist: "test1",
      link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
      cover:
        "https://www.aimm.edu/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg",
    },
    {
      value: "Cancion 2",
      id: 2,
      artist: "test2",
      link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
      cover:
        "https://cdn.kingscross.co.uk/media/20191118225723/Tame-Impala.jpeg",
    },
    {
      value: "Cancion 3",
      id: 3,
      artist: "test3",
      link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
      cover:
        "https://www.aimm.edu/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg",
    },
    {
      value: "Cancion 4",
      id: 4,
      artist: "test4",
      link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
      cover:
        "https://cdn.kingscross.co.uk/media/20191118225723/Tame-Impala.jpeg",
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ position: "sticky", top: 0 }}>
        <div>PAGINA PRINCIPAL</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {songs.map((song) => (
          <div
            key={song.id}
            style={{
              height: 200,
              aspectRatio: 1,
              backgroundColor: COLORS.accentColor,
              margin: 10,
            }}
            onClick={() => onHandleClick(song)}
          >
            <img
              src={song.cover}
              style={{ height: "100%", aspectRatio: 1, paddingLeft: 5 }}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          left: 0,
        }}
      >
        <MusicPlayer song={music} />
      </div>
    </div>
  );
}

export default HomePage;
