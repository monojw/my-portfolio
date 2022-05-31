import React from 'react';
import styled from 'styled-components';

const ImgComponentStyle = styled.div`
  padding: 12px 24px;

  img {
    display: block;
    width: 100%;
    opacity: 0.75;
  }
`;

const ImgComponent = ({ src, alt }) => {
  return (
    <ImgComponentStyle className="imgComponent">
      <img src={src} alt={alt} />
    </ImgComponentStyle>
  );
};

export default ImgComponent;
