"use client";
import { properties } from "@/data/properties";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

interface MapProps {
  latitude: number;
  longitude: number;
  title: string;
  address: string;
}

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function PropertyMap({
  latitude,
  longitude,
  title,
  address,
}: MapProps) {
  return (
    <div className="rounded-3xl overflow-hidden border shadow-lg">
      <div className="p-6 bg-white text-center border-b">
        <h2 className="text-2xl text-blue-600 font-bold">
          Property Location
        </h2>

        <p className="text-indigo-400 mt-2">
          Explore the property's exact location in the maps in terms of latitude  longitude
        </p>
      </div>

      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom
        className="h-[500px] w-full"
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[latitude, longitude]}
          icon={markerIcon}
        >
          <Popup>
            <h3 className="font-bold">{title}</h3>

            <p>{address}</p>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold"
            >
              Get Directions →
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}