//@ts-nocheck
import React, { useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Incident, MapCoordinates } from "../types";
const containerStyle = {
  width: "100%",
  height: "100%",
};

// const center: MapCoordinates = {
//   lat: 18.7883,
//   lng: 98.9853,
// };
interface MapProps {
  mapMarkerCords: MapCoordinates | undefined;
}

function Map({ mapMarkerCords }: MapProps) {
  useEffect(() => {
    console.log("Cords", mapMarkerCords);
  }, [mapMarkerCords]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${import.meta.env.VITE_GOOGLEMAPS_API_KEY}`,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(mapMarkerCords);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapMarkerCords}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={mapMarkerCords} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
