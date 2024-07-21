import { useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />

      <Navbar />
    </div>
  );
}

export default App;
