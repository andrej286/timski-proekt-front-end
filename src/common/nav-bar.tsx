import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;



const NavLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
const Navbarr = styled.div`
  background-color: #f8f9fa;
  color: #dc3545;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #343a40;
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
    return (
      <Navbarr>
      <div>
        <NavItem href="/home">Home</NavItem>
      </div>
      <div>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Services</NavItem>
        <NavItem href="#">Contact</NavItem>
      </div>
    </Navbarr>
    );
};

export default Navbar;