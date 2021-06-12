import React from "react";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer--principal">
        <div className="row footer--principal-container">
          <div className="col logo--footer">
            <a href="/">
              <img src={Logo} alt="Logo Grupomix" />
            </a>
            <hr />
            <p>
              Brindamos a nuestros clientes soluciones integrales y de alta
              calidad en concreto premezclado.
            </p>
          </div>
          <div className="col secciones--footer">
            <h4>Secciones</h4>
            <hr />
            <ul>
              <li>
                <a href="/">Premezclado</a>
              </li>
              <li>
                <a href="/">Alquiler</a>
              </li>
              <li>
                <a href="/">Productos</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="col contacto--footer">
            <h4>Contacto</h4>
            <hr />
            <p>
              Teléfono Central: 01 492 7608 <br /> WhatsApp: 999 096 697 <br />
              Cel. 944 804 003 / Cel.992 286 340 <br />
              Cel. 992 120 595 <br />
              ventas@fortemix.pe
            </p>
          </div>
          <div className="col contacto--footer">
            <h4>Dirección</h4>
            <hr />
            <p>
              Av. Héroes del Alto Cenepa N°1501 (ex Av. Trapiche) Comas, Lima –
              Perú
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
