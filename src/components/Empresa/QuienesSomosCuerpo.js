import React from "react";
import ImgEmpresa from "../../images/img_empresa.jpg";

export const QuienesSomosCuerpo = () => {
  return (
    <>
      <div className="quienesSomos--principal">
        <div className="row quienesSomos--principal-container">
          <div className="col quienesSomos--principal-contenido">
            <div>
              <img src={ImgEmpresa} alt="" />
            </div>
          </div>
          <div className="col quienesSomos--principal-contenido">
            <h2>Misión</h2>
            <p>
              Brindar a nuestros clientes soluciones integrales y de alta
              calidad en concreto premezclado, mediante un servicio
              personalizado, creando valor para nuestros accionistas,
              trabajadores y la sociedad.
            </p>

            <h2>Visión</h2>
            <p>
              Ser reconocidos como la mejor opción para el suministro de
              concreto premezclado, generando vínculos estrechos con nuestros
              clientes a través de la permanente asesoría técnica brindada
              durante la ejecución de sus proyectos, promoviendo la seguridad de
              las edificaciones y contribuyendo al desarrollo del país.
            </p>

            <h2>Principios</h2>
            <p>
              Considera que existe la necesidad de demanda insatisfecha del
              servicio por lo que proponemos gestionar de forma sincera,
              transparente, eficiente y eficaz para con nuestros clientes para
              demostrarles el grado de profesionalismo de nuestra empresa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
