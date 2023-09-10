import React, { useState } from 'react';
import Navbar from "../../common/nav-bar";
import styled from 'styled-components';
import AuthService from "../../services/auth/auth-api-service";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SignUpInput = styled.input`
  padding: 10px;
  width: 300px;
`;

const SignUpButton = styled.button`
  padding: 10px;
  background-color: #27ae60;
  color: white;
  border: none;
  cursor: pointer;
`;

export const SignUp = () => {
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const apiReturn = AuthService.register(password, password2, email, firstName, lastName, dob);
        console.log("apiReturn here: ", apiReturn);
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
