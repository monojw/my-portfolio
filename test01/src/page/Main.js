import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import Menu from '../components/Menu';
import Contact from '../components/Contact';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1100px;
  margin: 0 auto;

  hr {
    width: 100%;
    border: 0;
    border-top: 1px solid #eee;
    margin: 20px 0;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      {/* About 컴포넌트 */}
      <About title="About Catering" subTitle="Tradition since 1889" />
      <hr />

      {/* Menu 컴포넌트 */}
      <Menu title="Our Menu" />
      <hr />

      {/* Contact 컴포넌트 */}
      <Contact title="Contact" />
    </MainContainer>
  );
};

export default Main;
