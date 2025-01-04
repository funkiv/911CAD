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
import { useEffect, useState } from "react";
import { CallData } from "../types";

export function UnitBoard() {
  const [data, setData] = useState<[CallData]>();

  useEffect(() => {
    fetch("http://localhost:3000/callData")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
      });
  }, [data]);

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
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
