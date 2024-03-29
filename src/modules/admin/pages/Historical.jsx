import "../styles/Historical.css";
import React from "react";

const Historical = () => {
  return (
    <div id="generalContainer">
      <div id="Header">
        <h1 id="headerTitle">Histórico</h1>
      </div>
      <section id="sectionGeneral">
        <div id="carruselContainer">
          <h1 className="title">Selecciona un bote de basura</h1>
        </div>
        <div id="graphicContainer">
          <h1 className="title">Histórico del bote</h1>
        </div>
      </section>
    </div>
  );
};

export default Historical;
