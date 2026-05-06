import React, {useEffect, useRef, useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import st from '../../Asset/satellitLayers.jpg'
import geo from '../../Asset/geoLayers.jpg'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Localisation = () => {
    const position = [-19.01036080334145, 47.53855191582423]
    const markerRef = useRef(null);
    const [active,setActive]=useState(1)
    useEffect(() => {
        if (markerRef.current) {
            markerRef.current.openPopup();
        }
    }, []);
    const toggleTileLayer = () => {
        setActive(prevState => prevState===1 ? 2 : 1)
    };

    return (
        <MapContainer center={position} zoom={16} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
            {active===1 ? (
                <TileLayer
                    scrollWheelZoom={false}
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Esri, USGS, NOAA'
                />
            ): (
                <TileLayer
                    scrollWheelZoom={false}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            )}
            <Marker position={position} ref={markerRef} eventHandlers={{
                add: (e) => {
                    e.target.openPopup();
                }
            }}>
                <Popup>
                    <div className="d-inline-flex justify-content-center w-100">
                        <strong className="text-aris me-2" style={{letterSpacing: '0.07rem'}}>Aris</strong><strong style={{letterSpacing: '0.07rem'}} className="text-concept">Concept</strong>
                    </div>
                    <div className="m-0">
                        <p className="mb-0 p-0">Iavoloha, Antananarivo 102</p>
                    </div>
                </Popup>
            </Marker>
            <ChangeTileLayerButton active={active} changeImage={toggleTileLayer} />
        </MapContainer>
    );
}
const ChangeTileLayerButton = ({ changeImage, active }) => {
    return (
        <>
            <div onClick={()=>changeImage()} className="position-absolute bottom-0 mb-2 start-0 ms-2 rounded-3 shadow-lg cursor-pointer" style={{zIndex: '1000',width: '50px', height: '50px'}}>
                <img src={active===1 ? geo : st} decoding={"async"} className="w-100 h-100 rounded-3" alt=""/>
            </div>
        </>
    );
};

export default Localisation;