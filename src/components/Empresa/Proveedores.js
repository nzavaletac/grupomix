import React from "react";
import Carousel from "./Carousel";

const Proveedores = () => {
  return (
    <>
      <div className="row proveedores--principal">
        <div className=" col proveedores--principal-container">
          <h2>Proveedores</h2>
          <div className="m-4 p-4">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Proveedores;
