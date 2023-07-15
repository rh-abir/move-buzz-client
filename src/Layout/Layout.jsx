import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <div className="bg-main text-white">
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Layout;
