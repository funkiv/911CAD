import { Incident } from "../types";
interface IncidentBoardProps {
  incidents: Incident[];
}
export function IncidentBoard({ incidents }: IncidentBoardProps) {
  return (
    <>
      <table className="text-white table-auto h-full w-full">
        <thead>
          <tr>
            <th>Run ID</th>
            <th>Dispatched Units</th>
            <th>Status</th>
            <th>Call Type</th>
          </tr>
        </thead>
        <tbody>
          {incidents &&
            incidents.map((incident) => (
              <tr className="hover:bg-slate-700" key={incident.id}>
                <td>{incident.id}</td>
                <td>{incident.dispatchStatus}</td>
                <td>{incident.dispatchedUnits || "None"}</td>
                <td>{incident.dispatchType}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
