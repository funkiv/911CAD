import { Incident } from "../types";

export function IncidentBoard({ incidents }: { incidents: Incident[] }) {
  return (
    <>
      <table className="text-white">
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
              <tr key={incident.id}>
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
