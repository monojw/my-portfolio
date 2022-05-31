/**
 * @filename: Meta.js
 * @description: SEO 처리, 웹폰트 적용
 * @author: JEON WOO YEOL
 */

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* SEO */}
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />

        {/* 웹폰트 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
    </HelmetProvider>
  );
};

/* 기본값 */
Meta.defaultProps = {
  title: 'Gourmet Catering Template Clone (react)',
  description: 'React.js로 구현한 W3School 클론코딩 페이지 입니다.',
  keywords: 'React,layout,demo',
  author: 'JEON WOO YEOL',
  url: window.location.href,
};

export default Meta;
