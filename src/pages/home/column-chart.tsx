import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {ApexOptions} from "apexcharts";

const getChartDate = (dateString: string) => {
    const date = new Date(dateString);

    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    return monthNames[date.getMonth()];
}

export const ColumnChart = () => {
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

    const chartOptions: ApexOptions = {
        chart: {
            type: 'bar',
        },
        xaxis: {
            categories: purchases.map(item => getChartDate(item.date)),
        },
    };

    const chartSeries = [
        {
            name: 'Series 1',
            data: purchases.map(item => item.amount),
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