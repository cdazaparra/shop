// LIBRERIAS DE REACT
import React from "react";
import { createBrowserRouter } from "react-router-dom";
// PÁGINAS
import Home from "../pages/Home";
// import Study from "../pages/Study";
// import Works from "../pages/Works";
import NotFound from "../pages/NotFound";
// import Projects from "../pages/Projects";
// COMPONENTE BASE
import Layout from "../layout/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        errorElement: <NotFound></NotFound>,
        children: [
          {
            path: "/shop",
            element: <Home></Home>
          }
        ]
      }
    ]
  }
]);

export default router;
