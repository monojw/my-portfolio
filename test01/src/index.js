/**
 * @filename: index.js
 * @description: 프로그램 시작점
 * @author: JEON WOO YEOL
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 라우팅 처리
import { BrowserRouter } from 'react-router-dom';

// 메타태그 설정
import Meta from './Meta';

// 글로벌 스타일 설정
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      {/* 글로벌 스타일 설정 */}
      <GlobalStyles />

      {/* 메타태그 설정 */}
      <Meta />

      {/* 라우팅 처리 */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </div>
  </React.StrictMode>,
);
