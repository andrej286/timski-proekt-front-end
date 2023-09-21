import React from 'react';
import styled from 'styled-components';

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

export const AdditionTable = (additions: any) => {

    const table = Object.values(additions).map((value: any, index) => {
        return <tr key={index}>
            <Td>{value[index]?.amount}</Td>
            <Td>{value[index]?.description}</Td>
            <Td>{value[index]?.date}</Td>
            <Td>{value[index]?.id}</Td>
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
                    <Th>Id</Th>
                </tr>
                </thead>
                <tbody>
                {table}
                </tbody>
            </Table>
        </TableContainer>
    );
};