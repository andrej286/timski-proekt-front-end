import React, { useState } from 'react';
import styled from 'styled-components';
import {fileApi} from "../../services/api";
import TokenService from "../../services/auth/token-service";

const FormContainer = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const FileInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  font-size: 14px;
`;

const UploadButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
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
