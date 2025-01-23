import ContentPlaceholder from "./assets/common/ContentPlaceholder";
import Map from "./components/Map";
import { IncidentBoard } from "./components/IncidentBoard";
import { useEffect, useState } from "react";
import { Incident, Unit } from "./types";
import { UnitBoard } from "./components/UnitBoard";
export default function App() {
  const [incidents, setIncidents] = useState<Incident[] | null>(null);
  const [units, setUnits] = useState<Unit[] | null>(null);
  const [showUnitModal, setShowUnitModal] = useState(false);
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
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-900 h-lvh">
          <header>
            <div className="sm:flex sm:items-center sm:justify-between">
              <h3 className="font-semibold text-white">Lorem, ipsum dolor.</h3>
              <div className="mt-4 sm:mt-0 sm:flex sm:items-center sm:space-x-2"></div>
            </div>
          </header>

          <main>
            <div className="border-solid border-2 border-gray-500 rounded-lg">
              <div className="grid-cols-12 grid-rows-3 divide-y md:grid md:divide-x md:divide-y-0">
                <div className="divide-y md:col-span-6">
                  <IncidentBoard incidents={incidents} />
                </div>
                <div className="h-full row-span-3 p-4 md:col-span-6">
                  <Map incidents={incidents} />
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className=" p-0">
                <div className="border-b px-4 py-2">
                  <h3 className="font-medium">Title</h3>
                </div>
                <div className="h-60 p-2">
                  <ContentPlaceholder />
                </div>
              </div>
              <div className="h-60 p-2">
                <UnitBoard units={units} />
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
