import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  color: #000;
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  line-height: 23px;
  letter-spacing: 4px;

  .logo {
    a {
      padding: 8px 16px;
    }
  }

  .nav {
    margin-left: auto;

    a {
      display: inline-block;
      border: none;
      padding: 8px 16px;
    }
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <div className="logo">
        <Link to="/">Gourmet au Catering</Link>
      </div>

      <nav className="nav">
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </NavContainer>
  );
};

export default Nav;
