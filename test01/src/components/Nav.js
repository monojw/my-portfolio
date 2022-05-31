import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavContainer = styled.div`
  position: sticky;
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
      display: inline-block;
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

  @media screen and (max-width: 768px) {
    .nav {
      display: none;
    }
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <div className="logo">
        <Link to="header" spy={true} smooth={true}>
          Gourmet au Catering
        </Link>
      </div>

      <nav className="nav">
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
        <Link to="menu" spy={true} smooth={true}>
          Menu
        </Link>
        <Link to="contact" spy={true} smooth={true}>
          Contact
        </Link>
      </nav>
    </NavContainer>
  );
};

export default Nav;
