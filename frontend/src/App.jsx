import React from "react";

import Footer from './Components/Footer'


import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";



const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default App;
