import React from "react";
import { useState } from "react";
import { useContext } from "react";
import "../styles/Imagen.sass";
import { designsGame } from "../helpers/data";
import btnLeft from "../assets/icons/left.png";
import btnRight from "../assets/icons/right.png";
const Imagen = () => {
  const cantidad = designsGame.mario?.length;
  const [imagenActual, setImagenActual] = useState(0);
  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };
  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };
  console.log(cantidad);
  if (!Array.isArray(designsGame.mario) || cantidad === 0) return;
  return designsGame.mario.map((image, index) => {
    return (
      imagenActual === index && (
        <div key={index} className="Imagen">
          <div className="ImagenContainer">
            <div className="ImagenContainerL">
              <button className="ImagenBtnL" onClick={siguienteImagen}>
                <img
                  className="ImagenBtn"
                  width="20"
                  height="20"
                  src={btnLeft}
                  alt="siguiente"
                ></img>
              </button>
            </div>
            <img className="ImagenDesing" src={image.src}></img>
            <div className="ImagenContainerR">
              <button className="ImagenBtnR" onClick={anteriorImagen}>
                <img
                  className="ImagenBtn"
                  src={btnRight}
                  alt="anterior"
                  width="20"
                  height="20"
                ></img>
              </button>
            </div>
          </div>
          <div className="ImagenComprar">Pedir</div>
        </div>
      )
    );
  });
};

export default Imagen;
