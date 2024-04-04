import React, {useState} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import credentials from '../../../assets/credentials';

const Map = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
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
            onLoad={() => setScriptLoaded(true)}
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={18}
            />
        </LoadScript>
    );
};

export default Map;
