import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>Your Name</Logo>
        <NavLinks>
          <NavItem>
            <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="stack" smooth={true} duration={500}>Stack</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
