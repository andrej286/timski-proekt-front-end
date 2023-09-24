import React, { useState } from 'react';
import styled from 'styled-components';
import {fileApi} from "../../services/api";
import TokenService from "../../services/auth/token-service";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const FileInput = styled.input`
  margin-bottom: 10px;
`;

const UploadButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 60px;
`;

const FileUploadForm = () => {
    const [purchases, setSelectedFile] = useState<any>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setSelectedFile(file);
    };

    const handleFormSubmit = (e: React.FormEvent) => {

        const formData = new FormData();
        formData.append('purchases', purchases);

        e.preventDefault();
        if (purchases) {
            fileApi.post("/purchase/upload", formData, { withCredentials: true, headers: {
                    "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
                }}).catch(err => console.log('error is here : ', err));
        }
    };

    return (
        <FormContainer onSubmit={handleFormSubmit} encType="multipart/form-data">
            <FileInput type="file" name="additions" onChange={handleFileChange} />
            <UploadButton type="submit">Upload File</UploadButton>
        </FormContainer>
    );
};

export default FileUploadForm;
