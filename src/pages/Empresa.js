import React from "react";
import Banner from "../components/Banner";
import Proveedores from "../components/Empresa/Proveedores";
import QuienesSomos from "../components/Empresa/QuienesSomos";
import FormContactGeneral from "../components/FormContactGeneral";

const Empresa = () => {
  return (
    <>
      <Banner />
      <QuienesSomos />
      <Proveedores />
      <FormContactGeneral />
    </>
  );
};

export default Empresa;
