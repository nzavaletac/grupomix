import React from "react";

const Elegirnos = () => {
  return (
    <>
      <div className="elegirnos--principal">
        <div className="elegirnos--principal-container">
          <div className="elegirnos--principal-titulo">
            <h3>Por Qué Elegirnos</h3>
          </div>
          <div className="row elegirnos--principal-elegirnos">
            <div className="col elegirnos--principal-elegirnos-contenido ">
              <img
                src="https://i2.wp.com/fortemix.pe/wp-content/uploads/2020/01/CEMENTO-PREMEZCLADO-02-85x92.png"
                alt=""
              />
              <h2>EXPERIENCIA</h2>
              <p>
                El compromiso para cada proyecto es total, y se basa en la
                transparencia y una comunicación constante y horizontal con el
                cliente.
              </p>
            </div>
            <div className="col elegirnos--principal-elegirnos-contenido">
              <img
                src="https://i0.wp.com/fortemix.pe/wp-content/uploads/2020/01/CEMENTO-PREMEZCLADO-03-85x92.png"
                alt=""
              />
              <h2>INNOVACIÓN</h2>
              <p>
                Cumplimos con los más altos estándares de calidad,
                especificaciones técnicas y alcances particulares para cada
                proyecto.
              </p>
            </div>
            <div className="col elegirnos--principal-elegirnos-contenido">
              <img
                src="https://i2.wp.com/fortemix.pe/wp-content/uploads/2020/01/CEMENTO-PREMEZCLADO-04-85x92.png"
                alt=""
              />
              <h2>GARANTÍA</h2>
              <p>
                El material es previamente revisado por nuestra área de
                ingeniería, con el propósito de identificar y corregir las
                deficiencias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Elegirnos;
