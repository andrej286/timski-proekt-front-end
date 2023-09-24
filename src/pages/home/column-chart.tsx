import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {ApexOptions} from "apexcharts";
import {Purchase} from "./home";

const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

export const ColumnChart = (purchases: any) => {

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
            data: purchases.purchases?.map((item: Purchase) => item?.amount),
        },
    ];

    return (
        <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
        />
    );
};