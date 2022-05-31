import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 32px 0;
  background-color: #f1f1f1;
  color: #000;
  text-align: center;

  p {
    margin: 15px 0;
    line-height: 22.5px;

    a {
      text-decoration: underline;
      color: inherit;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Powered by&nbsp;
        <Link to="/">w3.css</Link>
      </p>
    </FooterContainer>
  );
};

export default Footer;
