import React from 'react';
import Navbar from "../../common/nav-bar";
import {PurchaseTable} from "./purchase-table";
import {AdditionTable} from "./addition-table";
import {ColumnChart} from "./column-chart";
import FileUploadForm from "./file-upload-form";

export const Home = () => {
    console.log("this test");

    return (
        <>
            <Navbar/>
            <FileUploadForm/>
            <h2> Column Chart:</h2>
            <ColumnChart/>
            <h2> Purchases:</h2>
            <PurchaseTable/>
            <br/>
            <h2> Additions:</h2>
            <AdditionTable/>
        </>
    );
};