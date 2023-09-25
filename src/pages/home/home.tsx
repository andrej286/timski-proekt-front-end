import React, {useCallback, useEffect, useState} from 'react';
import Navbar from "../../common/nav-bar";
import {PurchaseTable} from "./purchase-table";
import {AdditionTable} from "./addition-table";
import {ColumnChart} from "./column-chart";
import FileUploadForm from "./file-upload-form";
import TokenService from "../../services/auth/token-service";
import {api} from "../../services/api";

export type Purchase = {
    amount: number,
    description: string
    date: string,
    expense_type: any
}

export const Home = () => {
    const [purchases, setPurchases] = useState([]);
    const [additions, setAdditions] = useState([]);

    const fetchPurchases = useCallback(() => {
        api.get(`/purchase/`, { withCredentials: true, headers: {
                "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }
        }).then(response => {setPurchases(response.data)})
    }, []);

    const fetchAdditions = useCallback(() => {
        api.get(`/addition/`, { withCredentials: true, headers: {
                "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }
        }).then(response => {setAdditions(response.data)})
    }, []);

    useEffect(() => {
        fetchPurchases();
        fetchAdditions();
    }, []);

    return (
        <>
            <Navbar/>
            <FileUploadForm onFileUpload={fetchPurchases}/>
            <h2> Column Chart:</h2>
            <ColumnChart purchases={purchases}/>
            <h2> Purchases:</h2>
            <PurchaseTable purchases={purchases}/>
            <br/>
            <h2> Additions:</h2>
            <AdditionTable additions={additions}/>
        </>
    );
};