import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #0082e6;
  height: 80px;
  width: 100%;
  max-width: device-width; /* Ensures the navbar doesn't exceed the viewport width */
  display: flex;
  align-items: center;
  justify-content: space-between;


`;

const Logo = styled.label`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const CenteredImage = styled.div`
display: flex;
align-items: center; /* Center the content vertically */
justify-content: center; /* Center the content horizontally */
width: 80px; /* Set the width of the centered image */
height: 80px; /* Set the height of the centered image */
background: url('free-bg.png') no-repeat center center/contain;
cursor: pointer;
background-color: transparent;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

const NavLink = styled.a`
  color: white;
  font-size: 1rem;
  border-radius: 3px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background: #1b9bff;
  }

  &.active {
    background: #1b9bff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CheckBtn = styled.div`
  font-size: 2rem;
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
      <CenteredImage />
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