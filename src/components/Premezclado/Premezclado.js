import React from "react";

const Premezclado = () => {
  return (
    <>
      <div className="premezclado--principal">
        <div className="row premezclado--principal-container">
          <div className="col-md premezclado--principal-contenido">
            <h2>Concreto Premezclado</h2>
            <p>
              <i>
                <b> Forte Mix C</b>
              </i>
              uenta con maquinarias y equipos modernos para suministrar concreto
              premezclado en obra, nuestro producto cumple con las normas
              nacionales e internacionales los cuales garantizaran que el
              producto tenga un gran performance de calidad. Además, nuestros
              clientes cuentan con servicio personalizado y asesoramiento
              permanente durante la ejecución de obra.
            </p>
            <button className="btn">Pedir Cotización →</button>
          </div>
          <div className="col-md premezclado--principal-contenido">
            <img
              src="https://i0.wp.com/fortemix.pe/wp-content/uploads/2020/12/cemento-premezclado-lima-norte-nosotros-empresa-forte-mix.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Premezclado;
