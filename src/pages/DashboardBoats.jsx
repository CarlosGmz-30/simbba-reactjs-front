import React from 'react'
import "../assets/styles/DashboardBoats.css";
import Map from '../components/Map';
import AddTrash from '../components/AddTrash';
import TrashCard from '../components/TrashCard';

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
                <div id="cardsContainerB">
                    <h1 className="titleB">Botes de Basura Disponibles</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', height: '240px' }}>
                        <AddTrash />
                        <TrashCard />
                        <TrashCard />
                        <TrashCard />
                        <TrashCard />
                        <TrashCard />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DashboardBoats
