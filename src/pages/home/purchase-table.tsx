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

export const PurchaseTable = () => {
    const purchases = [
        {
            amount: 1000,
            description: "description1",
            date: "2020-03-20:17:30:00",
            name: "Football",
        },
        {
            amount: 2000,
            description: "description2",
            date: "2020-05-20:11:20:00",
            name: "Football",
        },
        {
            amount: 1400,
            description: "description3",
            date: "2020-07-20:14:30:00",
            name: "Takeaway",
        },
        {
            amount: 1500,
            description: "description4",
            date: "2020-09-20:20:30:00",
            name: "Bill",
        },
    ]

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
            {purchases.map((item, index) => (
                <tr key={index}>
                    <Td>{item.amount}</Td>
                    <Td>{item.description}</Td>
                    <Td>{item.date}</Td>
                    <Td>{item.name}</Td>
                </tr>
            ))}
            </tbody>
        </Table>
    </TableContainer>
    );
};