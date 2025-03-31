"use client";
import React, { memo } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface Props {
  posix: [number, number];
  setMarkers?: (location: [number, number]) => void;
  zoom?: number;
}

const defaults = {
  zoom: 19,
};

// Manage logic for adding markers
const LocationMarker = ({ posix, setMarkers }: Props) => {
  // Listen to map events
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setMarkers?.([lat, lng]);
    },
  });

  return (
    <>
      <Marker position={posix} draggable={false}>
        <Popup>
          Mi ubicación <br />
          Lat: {posix?.[0]}, Lng: {posix?.[1]}
        </Popup>
      </Marker>
    </>
  );
};

const ContactMap = (Map: Props) => {
  const { zoom = defaults.zoom, posix, setMarkers } = Map;

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Initial marker */}
      <Marker position={posix} draggable={false}>
        <Popup>
          Mi ubicación <br />
          Lat: {posix?.[0]}, Lng: {posix?.[1]}
        </Popup>
      </Marker>

      {/* Add marker dynamically */}
      <LocationMarker posix={posix} setMarkers={setMarkers} />
    </MapContainer>
  );
};

export default memo(ContactMap);
