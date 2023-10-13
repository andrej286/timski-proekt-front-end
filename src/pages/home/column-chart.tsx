import React, {useMemo, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import {ApexOptions} from "apexcharts";
import {Purchase} from "./home";
import styled from 'styled-components';

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-color: #555;
  }

  &:focus {
    border-color: #007bff;
  }
`;
const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];
const previousYears = [
    "2023", "2022", "2021", "2020", "2019", "2018", "2017",
    "2016", "2015", "2014", "2013", "2012"
];

export const ColumnChart = (purchases: any) => {

    const [selectedYear, setSelectedYear] = useState('2023');

    const purchasesByMonth = useMemo(
        () => {
            const purchasesByMonth = new Array(12).fill(0);

            purchases.purchases?.filter(
                (purchase: Purchase) => {
                    return new Date(purchase.date).getFullYear().toString() == selectedYear
                }).forEach((purchase : Purchase) => {
                const month = new Date(purchase.date).getMonth();
                purchasesByMonth[month] += purchase.amount;
            });

           return purchasesByMonth;
        },
        [purchases, selectedYear]);

    const chartOptions: ApexOptions = {
        chart: {
            type: 'bar',
        },
        xaxis: {
            categories: monthNames,
        },
    };

    const chartSeries = [
        {
            name: 'Series 1',
            data: purchasesByMonth,
        },
    ];

    return (
        <>
            <StyledSelect value={selectedYear} onChange={(e) => {setSelectedYear(e.target.value)}}>
                <option value="">Select</option>
                {previousYears.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </StyledSelect>
            <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={350}
            />
        </>
    );
};