import React from "react";
import { Table } from "react-bootstrap";

export const CustomTable = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center">100 Transaction Found !!</h1>
      <Table className="mt-3" hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Title</th>
            <th>Expenses</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2022-06-05</td>
            <td>Shopping Bag</td>
            <td>-$500</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>2022-05-05</td>
            <td>Freelancing software</td>
            <td></td>
            <td>
              <span className="bg-success rounded p-1 fw-bold">$2000</span>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
