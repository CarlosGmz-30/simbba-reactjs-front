import "../assets/styles/DashboardBoats.css";
import Map from '../components/Map';
import AddTrash from '../components/AddTrash';
import TrashCard from '../components/TrashCard';
import AxiosClient from '../config/http-client/axios-client';
import React, { useState, useEffect } from 'react';


const DashboardBoats = () => {

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

            // DATA.forEach(trashcan => { 
            //     console.log(`ID: ${trashcan.id}`);
            //     console.log(`Serial Number: ${trashcan.serialNumber}`);
            //     console.log(`Trashcan Name: ${trashcan.trashcanName}`);
            //     console.log(`Level: ${trashcan.level}`);
            // });

     
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    useEffect(() => {
        getAllTrashcans();
    },[]);

    //getAllTrashcans();

    return (
        <div id="generalContainerB">
            <div id="HeaderB">
                <h1 id="headerTitleB">Ubicación de los botes de basura</h1>
            </div>
            <section id="sectionGeneralB">
                <div id="mapContainerB">
                    <Map />
                </div>
                <div id="cardsContainerB">
                    <h1 className="titleB">Botes de Basura Disponibles</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', height: '240px' }}>
                        <AddTrash />
                        {trashcans && trashcans.map((trashcan, index) => (
                            <TrashCard 
                                key={index}
                                name={trashcan.trashcanName}
                                level={trashcan.level}
                            />
                        ))} 
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DashboardBoats
