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

export const enum UploadType {
    PURCHASES = 'purchases',
    ADDITIONS = 'additions',
}

export const URLs = {
    uploadPurchases: "/purchase/upload",
    uploadAdditions: "/addition/upload"
}

const FileUploadForm = (props: { onFileUpload: () => void, uploadType: UploadType }) => {
    const [selectedFile, setSelectedFile] = useState<any>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setSelectedFile(file);
    };

    const handleFormSubmit = (e: React.FormEvent) => {

        const formData = new FormData();

        e.preventDefault();
        if (selectedFile) {
            const url = props.uploadType == UploadType.PURCHASES ? URLs.uploadPurchases : URLs.uploadAdditions

            formData.append(props.uploadType, selectedFile);
            fileApi.post(url, formData, { withCredentials: true, headers: {
                    "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
                }})
                .catch(err => console.log('error is here : ', err))
                .finally(() => props.onFileUpload());
        }
    };

    return (
        <FormContainer onSubmit={handleFormSubmit} encType="multipart/form-data">
            <FileInput type="file" name={props.uploadType} onChange={handleFileChange} />
            <UploadButton type="submit">Upload File</UploadButton>
        </FormContainer>
    );
};

export default FileUploadForm;
