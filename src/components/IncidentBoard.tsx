import { Incident, MapCoordinates } from "../types";
interface IncidentBoardProps {
  incidents: Incident[];
  setMapMarkerCords: React.Dispatch<
    React.SetStateAction<MapCoordinates | undefined>
  >;
  handleToggleNewCallDialogue: () => void;
}
export default function IncidentBoard({
  incidents,
  setMapMarkerCords,
  handleToggleNewCallDialogue,
}: IncidentBoardProps) {
  return (
    <div className="h-full overflow-y-scroll">
      <button
        onClick={handleToggleNewCallDialogue}
        className="bg-red-600 w-full h-8 rounded-xl border-2 border-red-700 font-semibold text-white"
      >
        Add New Call
      </button>
      <table className="text-white text-center table-auto w-full">
        <thead>
          <tr>
            <th>Run ID</th>
            <th>Address</th>
            <th>Status</th>
            <th>Dispatched Units</th>
            <th>Call Type</th>
          </tr>
        </thead>
        <tbody>
          {incidents &&
            incidents.map((incident) => (
              <tr
                onClick={() =>
                  setMapMarkerCords({
                    lat: Number(incident.latitude),
                    lng: Number(incident.longitude),
                  })
                }
                className="hover:bg-slate-700 border border-gray-600"
                key={incident.id}
              >
                <td>{incident.id}</td>
                <td>{incident.address}</td>
                <td>{incident.dispatchStatus}</td>
                <td>{incident.dispatchedUnits || "None"}</td>
                <td>{incident.dispatchType}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
