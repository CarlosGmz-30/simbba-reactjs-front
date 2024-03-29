import "../styles/Historical.css";
import React, { useState, useEffect } from 'react';

import AxiosClient from "../../../config/http-client/axios-client";
import TrashCard from "../components/TrashCard";

const Historical = () => {

  const [trashcans, setTrashcans] = useState([]);

  const getAllTrashcans = async () => {
    try {
      const response = await AxiosClient({
        url: "/v1/trashcan/",
        method: "GET"
      });
      //console.log(response);

      const DATA = response.data;
      setTrashcans(DATA);

      console.log(DATA);

      DATA.forEach(trashcan => {
        console.log(`ID: ${trashcan.id}`);
        console.log(`Serial Number: ${trashcan.serialNumber}`);
        console.log(`Trashcan Name: ${trashcan.trashcanName}`);
        console.log(`Level: ${trashcan.level}`);
      });


    } catch (error) {
      console.log('Error: ', error);
    }
  }


  useEffect(() => {
    getAllTrashcans();
  }, []);



  return (
    <div id="generalContainer">
      <div id="Header">
        <h1 id="headerTitle">Histórico</h1>
      </div>
      <section id="sectionGeneral">
        <div id="carruselContainer">
          <h1 className="title">Selecciona un bote de basura</h1>
          <div id="cardsContainer">
            
            {trashcans && trashcans.map((trashcan, index) => (
              <TrashCard
                key={index}
                name={trashcan.trashcanName}
                level={trashcan.level}
                serialNumber={trashcan.serialNumber}
              />
            ))}

          </div>

        </div>
        <div id="graphicContainer">
          <h1 className="title">Histórico del bote</h1>
        </div>
      </section>
    </div>
  );
};

export default Historical;
