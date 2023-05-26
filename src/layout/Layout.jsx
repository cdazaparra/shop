import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import MenuMobile from "../components/MenuMobile";
import Footer from "../components/Footer";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <>
      <MenuMobile></MenuMobile>
      <main>
        {navigation.state === "loading" && <div>Loading...</div>}
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
