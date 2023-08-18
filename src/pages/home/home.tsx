import React from 'react';
import Navbar from "../../common/nav-bar";
import {PurchaseTable} from "./purchase-table";
import {AdditionTable} from "./addition-table";

export const Home = () => {
    console.log("this test");

    return (
        <>
            <Navbar/>
            <h1>
                This is a test for home
            </h1>
            <h2> Purchases:</h2>
            <PurchaseTable/>
            <br/>
            <h2> Additions:</h2>
            <AdditionTable/>
        </>
    );
};