import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #0082e6;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 952px) {
    padding-left: 50px;
  }
`;

const Logo = styled.label`
  color: white;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  margin: 0 5px;
`;

const NavLink = styled.a`
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background: #1b9bff;
  }

  &.active {
    background: #1b9bff;
  }
`;

const CheckBtn = styled.div`
  font-size: 30px;
  color: white;
  cursor: pointer;
  display: none;

  @media (max-width: 858px) {
    display: block;
  }
`;

const Navbar = () => {
    return (
      <Nav>
      <Logo>My home bank</Logo>
      <Ul>
        <Li><NavLink href="/home">Home</NavLink></Li>
        <Li><NavLink href="/log-in">Login</NavLink></Li>
        <Li><NavLink href="/sign-up">Sign up</NavLink></Li>
      </Ul>
      <CheckBtn>&#9776;</CheckBtn>
    </Nav>
    );
};

export default Navbar;