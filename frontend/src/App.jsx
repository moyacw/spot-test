import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import HomePage from "./pages/HomePage";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <>
      <HomePage />
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
    </>
  );
}

export default App;
