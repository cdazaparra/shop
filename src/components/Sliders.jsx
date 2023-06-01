import React from "react";
import { nameSliders } from "../helpers/data";
import { camisetas } from "../helpers/data";
import { useCamisetasContext } from "../context/CamisetasContext";
import "../styles/Sliders.sass";
import Mario from "./Mario";
import Wow from "./Wow";
import Lol from "./Lol";
import DragonBall from "./DragonBall";
import Avengers from "./Avengers";
import Musica from "./Musica";
const Sliders = () => {
  let id = 0;
  const number = () => {
    id = id + 1;
    return id;
  };
  const { camiseta } = useCamisetasContext();
  const { handleCamiseta } = useCamisetasContext();
  return (
    <>
      <div className="SlidersColors">
        <div
          className="SlidersColorsBlack1"
          onClick={() => handleCamiseta("black1")}
        ></div>
        <div
          className="SlidersColorsBlack2"
          onClick={() => handleCamiseta("black2")}
        ></div>
        <div
          className="SlidersColorsBlack3"
          onClick={() => handleCamiseta("black3")}
        ></div>
        <div
          className="SlidersColorsBlue1"
          onClick={() => handleCamiseta("blue1")}
        ></div>
        <div
          className="SlidersColorsBlue2"
          onClick={() => handleCamiseta("blue2")}
        ></div>
        <div
          className="SlidersColorsBlue3"
          onClick={() => handleCamiseta("blue3")}
        ></div>
        <div
          className="SlidersColorsGreen1"
          onClick={() => handleCamiseta("green1")}
        ></div>
        <div
          className="SlidersColorsGreen2"
          onClick={() => handleCamiseta("green2")}
        ></div>
        <div
          className="SlidersColorsYellow1"
          onClick={() => handleCamiseta("yellow1")}
        ></div>
        <div
          className="SlidersColorsYellow2"
          onClick={() => handleCamiseta("yellow2")}
        ></div>
        <div
          className="SlidersColorsYellow3"
          onClick={() => handleCamiseta("yellow3")}
        ></div>
        <div
          className="SlidersColorsYellow4"
          onClick={() => handleCamiseta("yellow4")}
        ></div>
        <div
          className="SlidersColorsYellow5"
          onClick={() => handleCamiseta("yellow5")}
        ></div>
        <div
          className="SlidersColorsRed1"
          onClick={() => handleCamiseta("red1")}
        ></div>
        <div
          className="SlidersColorsRed2"
          onClick={() => handleCamiseta("red2")}
        ></div>
        <div
          className="SlidersColorsRed3"
          onClick={() => handleCamiseta("red3")}
        ></div>
        <div
          className="SlidersColorsOrange1"
          onClick={() => handleCamiseta("orange1")}
        ></div>
        <div
          className="SlidersColorsOrange2"
          onClick={() => handleCamiseta("orange2")}
        ></div>
        <div
          className="SlidersColorsOrange3"
          onClick={() => handleCamiseta("orange3")}
        ></div>
        <div
          className="SlidersColorsOrange4"
          onClick={() => handleCamiseta("orange4")}
        ></div>
        <div
          className="SlidersColorsPurple1"
          onClick={() => handleCamiseta("purple1")}
        ></div>
        <div
          className="SlidersColorsPurple2"
          onClick={() => handleCamiseta("purple2")}
        ></div>
        <div
          className="SlidersColorsPurple3"
          onClick={() => handleCamiseta("purple3")}
        ></div>
        <div
          className="SlidersColorsPurple4"
          onClick={() => handleCamiseta("purple4")}
        ></div>
        <div
          className="SlidersColorsWhite1"
          onClick={() => handleCamiseta("white1")}
        ></div>
      </div>
      {nameSliders.map((slider) => {
        return (
          <section className="Sliders" id={slider.name} key={number()}>
            {slider.name === "Mario" && (
              <Mario camiseta={camiseta} slider={slider.name}></Mario>
            )}
            {slider.name === "Wow" && <Wow slider={slider.name}></Wow>}
            {slider.name === "Lol" && <Lol slider={slider.name}></Lol>}
            {slider.name === "Music" && <Musica slider={slider.name}></Musica>}
            {slider.name === "Avengers" && (
              <Avengers slider={slider.name}></Avengers>
            )}
            {slider.name === "Dragon Ball" && (
              <DragonBall slider={slider.name}></DragonBall>
            )}
            <div className="SlidersContainerData">
              <div></div>
              <h2 className="SlidersTitle">{slider.name}</h2>
              {camisetas.map((slider, index) => {
                return (
                  camiseta === slider.name && (
                    <div
                      id={slider.name}
                      key={index}
                      className="SlidersContainer"
                    >
                      <img
                        src={slider.src}
                        alt={slider.name}
                        className="SlidersContainerImg"
                      ></img>
                    </div>
                  )
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Sliders;
