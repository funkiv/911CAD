import { Unit } from "../types";

export function UnitBoard({ units }: { units: Unit[] }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Unit Name</th>
            <th>Unit Status</th>
          </tr>
        </thead>
        <tbody>
          {units &&
            units.map((unit) => (
              <tr>
                <td>{unit.name}</td>
                <td>{unit.unitStatus}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
