import React from 'react';
import styled from 'styled-components';

const ImgComponentStyle = styled.div`
  width: 50%;
  padding: 12px 24px;

  img {
    display: block;
    width: 100%;
    opacity: 0.75;
  }
`;

const ImgComponent = ({ src, alt }) => {
  return (
    <ImgComponentStyle>
      <img src={src} alt={alt} />
    </ImgComponentStyle>
  );
};

export default ImgComponent;
