import React from "react";

const MapContact = () => {
  return (
    <>
      <div className="mapas">
        <div className="mapas-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6638.701139696851!2d-77.11131453090746!3d-11.844090738344347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d43d43ef2311%3A0x46abaa182ee0ad46!2sPoliclinico%20Emmanuel%20Ventanilla!5e0!3m2!1ses-419!2spe!4v1620196451542!5m2!1ses-419!2spe"
            width="100%"
            height="600"
            // style="border:0;"
            allowfullscreen="true"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapContact;
