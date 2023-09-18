import React, {useCallback} from 'react';
import Navbar from "../../common/nav-bar";
import {PurchaseTable} from "./purchase-table";
import {AdditionTable} from "./addition-table";
import {ColumnChart} from "./column-chart";
import FileUploadForm from "./file-upload-form";
import DataApiService from "../../services/data/data-api-service";

export const Home = () => {
    console.log("this test");

    const handleGetPurchases = useCallback(() => {
        console.log("hit get purchases");

        const apiReturn = DataApiService.getPurchases();

        console.log("apiReturn get purchases here: ", apiReturn);
    }, []);

    return (
        <>
            <Navbar/>
            <button onClick={handleGetPurchases}> Test get purchases </button>
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