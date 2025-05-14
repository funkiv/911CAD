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
        <main className="lg:h-screen bg-gray-800">
          <div className="border-solid border-2 border-gray-600 flex-row lg:grid lg:grid-cols-6 lg:grid-rows-6">
            <div className="p-3 m-3 h-64 lg:h-auto lg:row-span-6 lg:col-span-3 border-2 border-gray-600 rounded-xl">
              <IncidentBoard
                incidents={incidents}
                setMapMarkerCords={setMapMarkerCords}
                handleToggleNewCallDialogue={handleToggleNewCallDialogue}
              />
            </div>
            <div className="p-3 m-3 h-96 lg:row-span-6 lg:col-span-3 border-2 border-gray-600 rounded-xl">
              <CallMap mapMarkerCords={mapMarkerCords} />
            </div>
            <div className="p-3 m-3 h-32 lg:h-auto lg:row-span-3 lg:col-span-2 border-2 border-gray-600 rounded-xl">
              <div>void</div>
            </div>
            <div className="p-3 m-3 h-96 lg:row-span-3 lg:col-span-4 border-2 border-gray-600 rounded-xl">
              <UnitBoard units={units} />
            </div>
          </div>
        </main>
      ) : (
        <div>No Data Available.</div>
      )}
    </>
  );
}
