import React from "react";
import Banner from "../components/Banner";
import FormContactGeneral from "../components/FormContactGeneral";
import Elegirnos from "../components/Premezclado/Elegirnos";
import Premezclado from "../components/Premezclado/Premezclado";

export const ConcretoPremezclado = () => {
  return (
    <>
      <Banner />
      <Premezclado />
      <Elegirnos />
      <FormContactGeneral />
    </>
  );
};
