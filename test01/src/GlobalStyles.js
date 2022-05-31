/**
 * @filename: GlobalStyles.js
 * @description: 전역 스타일 시트
 * @author: JEON WOO YEOL
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "Times New Roman", Georgia, serif;
      font-size: 15px;  
      line-height: 1.5;
    }

    .title {
      font-family: sans-serif;
      font-weight: 400;
      font-size: 36px;
      line-height: 54px;
      letter-spacing: 5px;
      margin: 10px auto 10px;
    }

    .subTitle {
      font-family: sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height:27px;
      letter-spacing: 5px;
      margin: 10px 0;
    }

    a {
      color:#000;
      text-decoration: none;
      outline: none;
  
      &:hover, &:active {
        text-decoration: none; color:#000;
      }
    }
`;

export default GlobalStyles;
