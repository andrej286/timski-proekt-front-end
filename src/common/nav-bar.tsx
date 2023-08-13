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

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
    return (
        <Nav>
            <NavList>
                <NavItem>
                    <NavLink to="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/sign-up">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/log-in">Log In</NavLink>
                </NavItem>
            </NavList>
        </Nav>
    );
};

export default Navbar;