import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.button`
  display: inline-block;
  border: none;
  padding: 8px 16px;
  margin: 16px 0;
  font-size: 15px;
  line-height: 22.5px;
  text-align: center;
  font-family: 'Times New Roman', Georgia, serif;
  cursor: pointer;
`;

const BtnComponent = ({ name }) => {
  return <BtnContainer>{name}</BtnContainer>;
};

export default BtnComponent;
