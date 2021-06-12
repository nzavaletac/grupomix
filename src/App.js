import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Alquiler from "./pages/Alquiler";
import {ConcretoPremezclado} from "./pages/ConcretoPremezclado";
import Contacto from "./pages/Contacto";
import Empresa from "./pages/Empresa";
import Proyectos from "./pages/Proyectos";

import "./sass/front-grupomix.css";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Empresa />
        {/* <Contacto /> */}
        {/* <ConcretoPremezclado /> */}
        {/* <Alquiler /> */}
        {/* <Proyectos /> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
