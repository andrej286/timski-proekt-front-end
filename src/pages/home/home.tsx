import React, {useCallback, useState} from 'react';
import Navbar from "../../common/nav-bar";
import {PurchaseTable} from "./purchase-table";
import {AdditionTable} from "./addition-table";
import {ColumnChart} from "./column-chart";
import FileUploadForm from "./file-upload-form";
import api from "../../services/api";
import TokenService from "../../services/auth/token-service";

export type Purchase = {
    amount: number,
    description: string
    date: string,
    expense_type: any
}

export const Home = () => {
    console.log("this test");

    const [purchases, setPurchases] = useState([]);
    const [additions, setAdditions] = useState([]);

    const handleGetPurchases = useCallback(() => {
        console.log("hit get purchases");

        api.get(`/purchase/`, { withCredentials: true, headers: {
                "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }
        }).then(response => {setPurchases(response.data)})
        api.get(`/addition/`, { withCredentials: true, headers: {
                "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }
        }).then(response => {setAdditions(response.data)})
    }, []);

    return (
        <>
            <Navbar/>
            <button onClick={handleGetPurchases}> Test get purchases </button>
            <FileUploadForm/>
            <h2> Column Chart:</h2>
            <ColumnChart/>
            <h2> Purchases:</h2>
            <PurchaseTable purchases={purchases}/>
            <br/>
            <h2> Additions:</h2>
            <AdditionTable additions={additions}/>
        </>
    );
};