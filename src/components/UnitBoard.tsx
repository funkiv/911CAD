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
import { CallData } from "../types";

export function UnitBoard({ data }: { data: CallData[] }) {
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
          {data &&
            data.map((item) => (
              <TableRow key={item.runID}>
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
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
