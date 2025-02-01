//@ts-nocheck
import React, { useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Incident, MapCoordinates } from "../types";
const containerStyle = {
  width: "100%",
  height: "100%",
};

interface MapProps {
  mapMarkerCords: MapCoordinates | undefined;
}

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

function CallMap({ mapMarkerCords }: MapProps) {
  const position = { lat: 53.54992, lng: 10.00678 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLEMAPS_API_KEY}>
      <Map defaultCenter={mapMarkerCords} defaultZoom={15} mapId="DEMO_MAP_ID">
        <AdvancedMarker position={mapMarkerCords} />
      </Map>
    </APIProvider>
  );
}

export default CallMap;
