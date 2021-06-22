import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CartRow } from "./cart-row";

export default function CartTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead style={{ background: "black" }}>
          <TableRow>
            <TableCell style={{ color: "white" }}>Image</TableCell>
            <TableCell style={{ color: "white" }}>Title</TableCell>
            <TableCell style={{ color: "white" }}>Price&nbsp;(Rs)</TableCell>
            <TableCell style={{ color: "white" }}>Quantity</TableCell>
            <TableCell style={{ color: "white" }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <CartRow {...props} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
