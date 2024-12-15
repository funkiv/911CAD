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

export function UnitBoard() {
  const data: Array<{
    unitNumber: string;
    status: string;
    runID: number;
    callType: string;
  }> = [
    {
      unitNumber: "Engine 1",
      status: "Dispatched",
      runID: 1,
      callType: "Sick Person",
    },
    {
      unitNumber: "Engine 2",
      status: "Enroute",
      runID: 2,
      callType: "Cardiac Arrest",
    },
    {
      unitNumber: "Rescue 1",
      status: "On Scene",
      runID: 3,
      callType: "Mental Health",
    },
    {
      unitNumber: "Rescue 2",
      status: "Hospital",
      runID: 4,
      callType: "Bleeding",
    },
    {
      unitNumber: "Engine 1",
      status: "Enroute",
      runID: 5,
      callType: "Cardiac Arrest",
    },
  ];

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Run ID</TableHeaderCell>
            <TableHeaderCell>Unit Number</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Call Type</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.unitNumber}>
              <TableCell>{item.runID}</TableCell>
              <TableCell>{item.unitNumber}</TableCell>
              <TableCell>
                <Badge
                // variant={item.status === "Inactive" ? "warning" : "default"}
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>{item.callType}</TableCell>
              <TableCell className="text-right">{item.costs}</TableCell>
              <TableCell className="text-right">{item.lastEdited}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
