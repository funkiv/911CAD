import CallMap from "./components/Map";
import { IncidentBoard } from "./components/IncidentBoard";
import { useEffect, useState } from "react";
import { Incident, MapCoordinates, Unit } from "./types";
export default function App() {
  const [incidents, setIncidents] = useState<Incident[] | null>(null);
  const [units, setUnits] = useState<Unit[] | null>(null);
  const [mapMarkerCords, setMapMarkerCords] = useState<
    MapCoordinates | undefined
  >(undefined);
  useEffect(() => {
    try {
      fetch("http://localhost:3000/incidentData")
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setIncidents(result);
        });
      fetch("http://localhost:3000/units")
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setUnits(result);
        });
    } catch (e) {
      console.log(e);
    }
  }, [incidents]);
  return (
    <>
      {incidents && units ? (
        <div className="bg-gray-800 h-screen">
          <main>
            <div className="h-full border-solid border-2 border-gray-600">
              <div className="h-96 grid grid-flow-col grid-rows-3">
                <div className="p-3 m-3 h-5/6 row-span-3 border-2 border-gray-600 rounded-xl">
                  <IncidentBoard
                    incidents={incidents}
                    setMapMarkerCords={setMapMarkerCords}
                  />
                </div>
                <div className="p-3 m-3 h-5/6 row-span-3 col-span-3 border-2 border-gray-600 rounded-xl">
                  <CallMap mapMarkerCords={mapMarkerCords} />
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div>No Data Available.</div>
      )}
    </>
  );
}
