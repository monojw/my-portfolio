import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: relative;

  .headerImg {
    width: 1600px;
    height: 800px;

    img {
      display: block;
      width: 100%;
    }
  }

  .headerTitle {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 12px 24px;
    opacity: 0.6;

    h1 {
      font-family: sans-serif;
      font-weight: 400;
      margin: 10px auto 10px;
      font-size: 36px;
      font-weight: 400;
      line-height: 54px;
      letter-spacing: 5px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="headerImg">
        <img
          src="https://www.w3schools.com/w3images/hamburger.jpg"
          alt="hamburger"
        />
      </div>

      <div className="headerTitle">
        <h1>Le Catering</h1>
      </div>
    </HeaderContainer>
  );
};

export default Header;
