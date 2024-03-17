import React from 'react'
import "../assets/styles/DashboardBoats.css";
import Map from '../components/Map';

const DashboardBoats = () => {
    return (
        <div id="generalContainerB">
            <div id="HeaderB">
                <h1 id="headerTitleB">Ubicación de los botes de basura</h1>
            </div>
            <section id="sectionGeneralB">
                <div id="mapContainerB">
                    <Map />
                </div>
                <div id="graphicContainerB">
                    <h1 className="titleB">Botes de Basura Disponibles</h1>
                </div>
            </section>
        </div>
    )
}

export default DashboardBoats
