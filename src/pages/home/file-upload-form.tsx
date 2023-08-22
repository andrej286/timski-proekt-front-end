import React, { useState } from 'react';
import styled from 'styled-components';

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
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setSelectedFile(file);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedFile) {
            // file upload logic here
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
