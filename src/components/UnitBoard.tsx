// 'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Badge,
} from "@tremor/react";
import { IncidentData } from "../types";

export function UnitBoard({ data }: { data: IncidentData[] }) {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Run ID</TableHeaderCell>
            <TableHeaderCell>Dispatched Units</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Call Type</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.incidentNumber}</TableCell>
                <TableCell>{item.dispatchedUnits || "None"}</TableCell>
                <TableCell>
                  <Badge
                  // variant={item.status === "Inactive" ? "warning" : "default"}
                  >
                    {item.dispatchStatus}
                  </Badge>
                </TableCell>
                <TableCell>{item.dispatchType}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
