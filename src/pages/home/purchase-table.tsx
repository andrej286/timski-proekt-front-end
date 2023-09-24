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

export const PurchaseTable = (purchases: any) => {
    const table = purchases.purchases?.map((value: Purchase) => {
        return <tr>
            <Td>{value?.amount}</Td>
            <Td>{value?.description}</Td>
            <Td>{value?.date}</Td>
            <Td>{value?.expense_type.name}</Td>
        </tr>
    });

    return (
    <TableContainer>
        <Table>
            <thead>
            <tr>
                <Th>Amount</Th>
                <Th>Description</Th>
                <Th>Date</Th>
                <Th>Name</Th>
            </tr>
            </thead>
            <tbody>
            {table}
            </tbody>
        </Table>
    </TableContainer>
    );
};