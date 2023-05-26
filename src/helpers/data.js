let id = 0;
const number = () => {
  id = id + 1;
  return id;
};
import Amarillo from "../assets/images/tshirt/Amarillo.png";
import Azul from "../assets/images/tshirt/Azul.png";
import Negro from "../assets/images/tshirt/Negro.png";
import Rojo from "../assets/images/tshirt/Rojo.png";
import Morado from "../assets/images/tshirt/Morado.png";
import Blanco from "../assets/images/tshirt/Blanco.png";
import mario1 from "../assets/images/desings/mario1.png";
import mario2 from "../assets/images/desings/mario2.png";
import mario3 from "../assets/images/desings/mario3.png";
import mario4 from "../assets/images/desings/mario4.png";
import mario5 from "../assets/images/desings/mario5.png";
import mario6 from "../assets/images/desings/mario6.png";
import mario7 from "../assets/images/desings/mario7.png";

export const camisetas = [
  {
    id: number(),
    src: Amarillo,
    name: "Amarillo"
  },
  {
    id: number(),
    src: Azul,
    name: "Azul"
  },
  {
    id: number(),
    src: Negro,
    name: "Negro"
  },
  {
    id: number(),
    src: Rojo,
    name: "Rojo"
  },
  {
    id: number(),
    src: Morado,
    name: "Morado"
  },
  {
    id: number(),
    src: Blanco,
    name: "Blanco"
  }
];
export const nameSliders = [
  {
    id: number(),
    name: "Mario"
  },
  {
    id: number(),
    name: "Anime"
  },
  {
    id: number(),
    name: "Fe"
  }
];
export const designsGame = {
  cart: [],
  buyer: [],
  mario: [
    {
      id: number(),
      src: mario1,
      name: "mario1"
    },
    {
      id: number(),
      src: mario2,
      name: "mario2"
    },
    {
      id: number(),
      src: mario3,
      name: "mario3"
    },
    {
      id: number(),
      src: mario4,
      name: "mario4"
    },
    {
      id: number(),
      src: mario5,
      name: "mario5"
    },
    {
      id: number(),
      src: mario6,
      name: "mario6"
    },
    {
      id: number(),
      src: mario6,
      name: "mario6"
    },
    {
      id: number(),
      src: mario7,
      name: "mario7"
    }
  ]
};
