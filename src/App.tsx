import CallMap from "./components/Map";
import IncidentBoard from "./components/IncidentBoard";
import { useEffect, useState } from "react";
import { Incident, MapCoordinates, Unit } from "./types";
import NewCallDialogue from "./components/NewCallDialogue";
import unitService from "./hooks/unitService";
import incidentService from "./hooks/incidentService";
import { UnitBoard } from "./components/UnitBoard";
export default function App() {
  const [incidents, setIncidents] = useState<Incident[] | null>(null);
  const [units, setUnits] = useState<Unit[] | null>(null);
  const [mapMarkerCords, setMapMarkerCords] = useState<
    MapCoordinates | undefined
  >(undefined);
  const [toggleNewCallDialogue, setToggleNewCallDialogue] = useState(false);
  const emsCallTypes = [
    "Sick Person",
    "Water Rescue",
    "Chest Pain",
    "Difficulty Breathing",
    "Stroke",
    "Unconscious/Fainting",
    "Cardiac Arrest",
    "Seizure",
    "Motor Vehicle Accident",
    "Overdose/Poisoning",
  ];
  useEffect(() => {
    try {
      incidentService
        .getAll()
        .then((initialIncidents) => setIncidents(initialIncidents));
      unitService.getAll().then((initialUnits) => setUnits(initialUnits));
    } catch (e) {
      console.log(e);
    }
  }, [incidents, units]);

  const handleToggleNewCallDialogue = () => {
    setToggleNewCallDialogue(!toggleNewCallDialogue);
  };

  const handleSubmitIncidentInfo = async (newIncident: Incident) => {
    console.log("Submit New Call:", newIncident);
    await incidentService.create(newIncident);
  };
  return (
    <>
      <NewCallDialogue
        handleSubmitIncidentInfo={handleSubmitIncidentInfo}
        emsCallTypes={emsCallTypes}
        toggleNewCallDialogue={toggleNewCallDialogue}
        handleToggleNewCallDialogue={handleToggleNewCallDialogue}
      />
      {incidents && units ? (
        <div className="bg-gray-800 h-screen">
          <main>
            <div className="h-full border-solid border-2 border-gray-600">
              <div className="h-96 grid grid-flow-col grid-rows-3">
                <div className="p-3 m-3 h-5/6 row-span-3 border-2 border-gray-600 rounded-xl">
                  <IncidentBoard
                    incidents={incidents}
                    setMapMarkerCords={setMapMarkerCords}
                    handleToggleNewCallDialogue={handleToggleNewCallDialogue}
                  />
                </div>
                <div className="p-3 m-3 h-5/6 row-span-3 col-span-3 border-2 border-gray-600 rounded-xl">
                  <CallMap mapMarkerCords={mapMarkerCords} />
                </div>
              </div>
              <div className="h-96 grid grid-flow-col grid-rows-3">
                <div className="p-3 m-3 h-5/6 row-span-3 border-2 border-gray-600 rounded-xl">
                  <div>void</div>
                </div>
                <div className="p-3 m-3 h-5/6 row-span-3 col-span-1 border-2 border-gray-600 rounded-xl">
                 <UnitBoard units={units}/>
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
