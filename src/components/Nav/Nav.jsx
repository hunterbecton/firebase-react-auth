import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../../images/logo.svg';
import { useAuth } from '../../hooks/useAuth';

const Nav = () => {
  const auth = useAuth();

  return (
    <NavContainer>
      <Link to='/'>
        <img src={Logo} alt='Logo' />
      </Link>
      {auth.user && <button onClick={() => auth.logout()}>Logout</button>}
      {!auth.user && (
        <>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </>
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  grid-column: 2 / span 12;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 3.125rem;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a:first-child {
    margin-right: auto;
  }

  a,
  button {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white3};
    text-decoration: none;
    margin-left: 2rem;
    transition: ${(props) => props.theme.animations.link};
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    color: ${(props) => props.theme.colors.green1};
  }

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`;

export default Nav;
