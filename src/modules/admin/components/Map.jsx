import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import credentials from '../../../assets/credentials';

const Map = ({markers}) => {
    const mapContainerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {
        lat: 18.850380161977483,
        lng: -99.2007259267442
    };

    return (
        <LoadScript
            googleMapsApiKey={credentials.mapsKey}
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={17}
            >
                {markers.map(marker => (
                    <Marker 
                    key={marker.id} 
                    position={marker.position} />
                    ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
