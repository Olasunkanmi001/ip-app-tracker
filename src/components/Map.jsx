/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { memo, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';

// Function to create a component that updates the map's center
const SetView = ({ center, zoom }) => {
  const map = useMap(); // useMap hook to access the map instance
  map.setView(center, zoom);
  return null;
};

const Map = memo(({ data }) => {
  const position = [data?.location?.lat || 51.505, data?.location?.lng || -0.09];
  const mapRef = useRef(null);

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} ref={mapRef} whenCreated={mapInstance => mapRef.current = mapInstance}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.location && (
        <>
          <Marker position={position}>
            <Popup>Here he is</Popup>
          </Marker>
          <SetView center={position} zoom={13} />
        </>
      )}
    </MapContainer>
  );
});

export default Map;
