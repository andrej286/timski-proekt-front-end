import React from 'react';
import styled from 'styled-components';
import {Purchase} from "./home";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid #ddd;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 14px;
  text-align: left;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StyledTableHeader = styled.th`
  background-color: #ff9800;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #ccc;
`;

const StyledTableRow = styled.tr`
  &:nth-child(even) td {
    background-color: #f2f2f2;
  }
  &:hover td {
    background-color: #ffedcc;
  }
`;

const StyledTableCell = styled.td`
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
`;
export const PurchaseTable = (purchases: any) => {
    const table = purchases.purchases?.map((value: Purchase) => {
        return <StyledTableRow>
            <StyledTableCell>{value?.amount}</StyledTableCell>
            <StyledTableCell>{value?.description}</StyledTableCell>
            <StyledTableCell>{value?.date}</StyledTableCell>
            <StyledTableCell>{value?.expense_type.name}</StyledTableCell>
        </StyledTableRow>
    });

    return (
      <StyledTable>
            <thead>
            <StyledTableRow>
          <StyledTableHeader>Amount</StyledTableHeader>
          <StyledTableHeader>Description</StyledTableHeader>
          <StyledTableHeader>Date</StyledTableHeader>
          <StyledTableHeader>Name</StyledTableHeader>
        </StyledTableRow>
            </thead>
            <tbody>
            {table}
            </tbody>
        </StyledTable>
    );
};