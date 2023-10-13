import React, {useCallback, useEffect, useState} from 'react';
import Navbar from "../../common/nav-bar";
import {PurchaseTable} from "./purchase-table";
import {AdditionTable} from "./addition-table";
import {ColumnChart} from "./column-chart";
import FileUploadForm, {UploadType} from "./file-upload-form";
import TokenService from "../../services/auth/token-service";
import {api, refreshToken} from "../../services/api";
import styled from 'styled-components';

const Heading2 = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  padding: 1.5rem;
  color: black;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledHeading = styled.h2`
  margin-right: 1rem;
  font-size: 4.125rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const StyledSeparator = styled.hr`
  flex-grow: 1;
  border: 1px solid #ccc;
`;

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
        })
            .then(response => {setPurchases(response.data)})
            .catch(err => refreshToken(err.config))
    }, []);

    const fetchAdditions = useCallback(() => {
        api.get(`/addition/`, { withCredentials: true, headers: {
                "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }
        })
            .then(response => {setAdditions(response.data)})
            .catch(err => refreshToken(err.config))
    }, []);

    useEffect(() => {
        fetchPurchases();
        fetchAdditions();
    }, []);

    return (
        <>
            <Navbar/>
            <StyledContainer>
      <StyledHeading>Column Chart:</StyledHeading>
      <StyledSeparator />
    </StyledContainer>
            <ColumnChart purchases={purchases}/>
            <StyledContainer>
      <StyledHeading>Purchases:</StyledHeading>
      <StyledSeparator />
    </StyledContainer>
            <FileUploadForm onFileUpload={fetchPurchases} uploadType={UploadType.PURCHASES}/>
            <PurchaseTable purchases={purchases}/>
            <br/>
            <StyledContainer>
            <StyledHeading>Additions:</StyledHeading>
            <StyledSeparator />
            </StyledContainer>
            <FileUploadForm onFileUpload={fetchAdditions} uploadType={UploadType.ADDITIONS}/>
            <AdditionTable additions={additions}/>
        </>
    );
};