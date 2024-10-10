import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tab } from "@mui/material";

export default function CustomTable(prop: any) {
  let Heading = prop.Heading;
  let TableRows = prop.TableValues;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Heading.map((value: any, index: number) => {
              return (
                <TableCell key={index} align="justify" className="font-semibold text-l`">
                  {value.name}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {TableRows.map((value: any, index: number) => {
            return (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Heading.map((val: any, index: number) => {
                  return (
                    <TableCell key={index} align="justify">
                      {value[val.key]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
