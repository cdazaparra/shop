import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
//Provider
import LinkProvider from "./provider/LinkProvider";
import ThemeProvider from "./provider/ThemeProvider";
import BuyProvider from "./provider/BuyProvider";

//Estilos
import "./styles/Body.sass";
// creación del router
import router from "./routes/router.jsx";
import CamisetasProviders from "./provider/CamisetasProviders";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LinkProvider>
        <BuyProvider>
          <CamisetasProviders>
            <RouterProvider router={router}></RouterProvider>
          </CamisetasProviders>
        </BuyProvider>
      </LinkProvider>
    </ThemeProvider>
  </React.StrictMode>
);
