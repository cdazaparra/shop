import React from "react";
import "../styles/Home.sass";
import Sliders from "../components/Sliders";
import { useThemeContext } from "../context/ThemeContext";
const Home = () => {
  const { BGcolor } = useThemeContext();
  return (
    <div className={BGcolor}>
      <Sliders></Sliders>
    </div>
  );
};

export default Home;
