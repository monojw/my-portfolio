/**
 * @filename: App.js
 * @description: 컴포넌트 정의
 * @author: JEON WOO YEOL
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

import Main from './page/Main';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1100px;
  margin: 0 auto;

  hr {
    width: 100%;
    border: 0;
    border-top: 1px solid #eee;
    margin: 20px 0;
  }
`;

const App = () => {
  return (
    <div>
      {/* NAV 컴포넌트 */}
      <Nav />

      <AppContainer>
        {/* Header 컴포넌트 */}
        <Header />

        <Routes>
          {/* Main 컴포넌트 */}
          <Route path="/" export={true} element={<Main />} />
        </Routes>
      </AppContainer>

      {/* Footer 컴포넌트 */}
      <Footer />
    </div>
  );
};

export default App;
