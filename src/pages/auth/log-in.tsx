import React, { useState } from 'react';
import Navbar from "../../common/nav-bar";
import styled from 'styled-components';
import AuthService from "../../services/auth/auth-api-service";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #f9f9f9;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LoginInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.button`
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
