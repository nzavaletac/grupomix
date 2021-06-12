import React from "react";
import Mixers from "../components/Alquiler/Mixers";
import Banner from "../components/Banner";
import FormContactGeneral from "../components/FormContactGeneral";
import Elegirnos from "../components/Premezclado/Elegirnos";

const Alquiler = () => {
  return (
    <>
      <Banner />
      <Mixers />
      <Elegirnos />
      <FormContactGeneral />
    </>
  );
};

export default Alquiler;
