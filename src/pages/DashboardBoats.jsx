import React, { useEffect, useState } from 'react'
import "../assets/styles/DashboardBoats.css";
import Map from '../components/Map';
import AddTrash from '../components/AddTrash';
import TrashCard from '../components/TrashCard';
import AxiosClient from '../config/http-client/axiosClient';

const DashboardBoats = () => {
    const [trashcans, setTrashcans] = useState([]);
    const getTrashcans = async () => {
        console.log('getTrshcand request executed');
        try {
            const response = await AxiosClient({
                method: 'GET',
                url: '/trashcan/',
            });

            if (response.data) {
                setTrashcans(response.data)
                console.log(response.data);

            }

        } catch (error) {
            console.log(error);
        }
    }
    getTrashcans();

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
