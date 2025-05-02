import { Unit } from "../types";

export function UnitBoard({ units }: { units: Unit[] }) {
  return (
    <>
      <table className="text-white text-center table-auto h-full w-full">
        <thead>
          <tr>
            <th>Unit Name</th>
            <th>Unit Status</th>
          </tr>
        </thead>
        <tbody>
          {units &&
            units.map((unit) => (
              <tr className="hover:bg-slate-700 border border-gray-600">
                <td>{unit.name}</td>
                <td>{unit.unitStatus}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
