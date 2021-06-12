import React from "react";

const Mixers = () => {
  return (
    <>
      <div className="mixers">
        <div className="mixers-container">
          <div className="row mixers--container-mixers">
            <div className="col-md mixers--container-mixers-contenido">
              <img
                src="https://i1.wp.com/fortemix.pe/wp-content/uploads/2020/08/lima-Alquiler-de-Mixers-lima-concreto-Premezclado-lima.jpg"
                alt=""
              />
            </div>
            <div className="col-md mixers--container-mixers-contenido">
              <h3>Alquiler de Mixers</h3>
              <p>
                <b>
                  <i>Forte Mix</i>
                </b>{" "}
                cuenta con una flota moderna de unidades de capacidad de 8 m3 a
                10m3 los cuales están a disposición de nuestros clientes los
                cuales les servirán de apoyo en la realización de sus proyectos.
                Nuestra flota es periódicamente evaluada a fin de mantener
                nuestro estándar de mantenimiento preventivo.
              </p>
              <button className="btn">Pedir Cotización →</button>
            </div>
          </div>
          <div className="row mixers--container-mixers">
            <div className="col-md mixers--container-mixers-contenido">
              <img
                src="https://i1.wp.com/fortemix.pe/wp-content/uploads/2020/01/lima-Alquiler-de-bombas-de-Concreto.jpg"
                alt=""
              />
            </div>
            <div className="col-md mixers--container-mixers-contenido">
              <h3>Alquiler de bombas de Concreto</h3>
              <p>
                Para apoyar el proceso de vaciado de concreto las zonas
                inaccesibles para el mixer, contamos con equipos los cuales son
                destinados de acuerdo al requerimiento del cliente y condiciones
                de obra.
              </p>
              <button className="btn">Pedir Cotización →</button>
            </div>
          </div>
          <div className="row mixers--container-mixers">
            <div className="col-md mixers--container-mixers-contenido">
              <img
                src="https://i2.wp.com/fortemix.pe/wp-content/uploads/2020/12/Alquiler-de-planta-de-Concreto-lima-FORTE-MIX.jpg"
                alt=""
              />
            </div>
            <div className="col-md mixers--container-mixers-contenido">
              <h3>Alquiler de planta de Concreto</h3>
              <p>
                Contamos con plantas móviles automatizadas de capacidad entre 40
                m3/hora y 60 m3/hora destinadas según el volumen de concreto a
                vaciar y dependiendo de la ubicación de la obra.
              </p>
              <button className="btn">Pedir Cotización →</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mixers;
