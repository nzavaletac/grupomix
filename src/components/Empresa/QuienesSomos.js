import React from "react";
import {QuienesSomosCuerpo} from "./QuienesSomosCuerpo";

const QuienesSomos = () => {
  return (
    <>
      <div className="somos--principal">
        <div className="somos--principal-container">
          <div className="somos--principal-titulo">
            <h3>Forte Mix Sac</h3>
          </div>
          <p>
            Somos una empresa dedicada a la producción de Concreto Premezclado,
            actualmente somos una empresa nueva en el mercado local (Lima), pero
            con experiencia en proyectos de provincias debido a que contamos con
            planta móviles, cumpliendo con los más altos estándares de calidad,
            seguridad y medio ambiente, indicados en las normas,
            especificaciones técnicas y alcances particulares para cada
            proyecto.
          </p>
        </div>
      </div>
      <QuienesSomosCuerpo />
    </>
  );
};

export default QuienesSomos;
