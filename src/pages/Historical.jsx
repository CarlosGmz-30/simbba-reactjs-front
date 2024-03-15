import "../assets/styles/Historical.css";
import React from "react";

const Historical = () => {
  return (
    <div id="generalContainer">
      <div id="Header">
        <h1 id="headerTitle">Histórico</h1>
      </div>
      <section style={{ width: "100%", height: "100%" }}>
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
