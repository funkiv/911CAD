import { useEffect } from "react";
import { MapCoordinates } from "../types";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
interface MapProps {
  mapMarkerCords: MapCoordinates | undefined;
}

function CallMap({ mapMarkerCords }: MapProps) {
  useEffect(() => {
    console.log("Cords inside map updating", mapMarkerCords);
  }, [mapMarkerCords]);
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLEMAPS_API_KEY}>
      {mapMarkerCords === undefined ? (
        <Map
          colorScheme="DARK"
          center={{ lat: 30.1588, lng: -85.6602 }}
          zoom={11}
          mapId="DEMO_MAP_ID"
        >
          <AdvancedMarker position={mapMarkerCords} />
        </Map>
      ) : (
        <Map
          colorScheme="DARK"
          center={mapMarkerCords}
          zoom={15}
          mapId="DEMO_MAP_ID"
        >
          <AdvancedMarker position={mapMarkerCords} />
        </Map>
      )}
    </APIProvider>
  );
}

export default CallMap;
