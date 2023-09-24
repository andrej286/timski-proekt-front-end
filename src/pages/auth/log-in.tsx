import React, { useState } from 'react';
import Navbar from "../../common/nav-bar";
import styled from 'styled-components';
import AuthService from "../../services/auth/auth-api-service";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LoginInput = styled.input`
  padding: 10px;
  width: 300px;
`;

const LoginButton = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
`;

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        AuthService.login(email, password).finally(() => navigate("/home"));
    };

    return (
        <>
            <Navbar/>
            <LoginContainer>
                <h2>Login</h2>
                <LoginForm onSubmit={handleSubmit}>
                    <LoginInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <LoginInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <LoginButton type="submit">Login</LoginButton>
                </LoginForm>
            </LoginContainer>
        </>
    );
};
