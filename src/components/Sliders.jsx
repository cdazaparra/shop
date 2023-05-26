import React from "react";
import { nameSliders } from "../helpers/data";
import { camisetas } from "../helpers/data";
import { useCamisetasContext } from "../context/CamisetasContext";
import "../styles/Sliders.sass";
import Imagen from "./Imagen";
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
      {nameSliders.map((slider) => {
        return (
          <div className="Sliders" key={number()}>
            <h2 className="SlidersTitle">{slider.name}</h2>
            <div className="SlidersColors">
              <div
                className="SlidersColorsAmarillo"
                onClick={() => handleCamiseta("Amarillo")}
              ></div>
              <div
                className="SlidersColorsAzul"
                onClick={() => handleCamiseta("Azul")}
              ></div>
              <div
                className="SlidersColorsNegro"
                onClick={() => handleCamiseta("Negro")}
              ></div>
              <div
                className="SlidersColorsRojo"
                onClick={() => handleCamiseta("Rojo")}
              ></div>
              <div
                className="SlidersColorsBlanco"
                onClick={() => handleCamiseta("Blanco")}
              ></div>
              <div
                className="SlidersColorsMorado"
                onClick={() => handleCamiseta("Morado")}
              ></div>
            </div>
            {camisetas.map((slider, index) => {
              return (
                camiseta === slider.name && (
                  <div key={index} className="SlidersContainer">
                    <img
                      src={slider.src}
                      alt={slider.name}
                      className="SlidersContainerImg"
                    ></img>
                    <Imagen></Imagen>
                  </div>
                )
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Sliders;
