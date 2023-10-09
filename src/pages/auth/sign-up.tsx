import React, { useState } from 'react';
import Navbar from "../../common/nav-bar";
import styled from 'styled-components';
import AuthService from "../../services/auth/auth-api-service";
import {useNavigate} from "react-router-dom";

const SignUpContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #f9f9f9;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SignUpInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SignUpButton = styled.button`
  padding: 12px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SignUp = () => {
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        AuthService
            .register(password, password2, email, firstName, lastName, dob)
            .finally(() => navigate("/home"));
    };

    return (
        <>
            <Navbar/>
            <SignUpContainer>
                <h2>Sign Up</h2>
                <SignUpForm onSubmit={handleSubmit}>
                    <SignUpInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <SignUpInput
                        type="password"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                    <SignUpInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <SignUpInput
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <SignUpInput
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <SignUpInput
                        type="date"
                        placeholder="Date of Birth"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <SignUpButton type="submit">Sign Up</SignUpButton>
                </SignUpForm>
            </SignUpContainer>
        </>
    );
};
