import React from 'react';
import styled from 'styled-components';
import AboutData from '../data/AboutData';
import ImgComponent from './common/ImgComponent';

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 1100px;
  padding: 64px 0;
  margin: 0 auto;

  .aboutText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 12px 24px;

    .aboutDesc {
      font-size: 18px;
      line-height: 27px;
      margin-top: 18px;

      .seasonal {
        color: #000;
        background-color: #f1f1f1;
        font-size: 18px;
        line-height: 1.5;
        padding: 0 8px;
      }
    }
  }
`;

/* 데이터를 받아와서 컴포넌트 생성 */
const AboutContent = ({ desc, index }) => {
  // 스크립팅 공격에 취약한 방법
  let codes = 'We only use <span class="seasonal">seasonal</span> ingredients.';

  return (
    <p className="aboutDesc">
      {desc}
      {index === 0 ? (
        <span dangerouslySetInnerHTML={{ __html: codes }}></span>
      ) : (
        ''
      )}
    </p>
  );
};

const About = ({ title, subTitle }) => {
  const aboutSrc = 'https://www.w3schools.com/w3images/tablesetting2.jpg';

  return (
    <AboutContainer>
      {/* 이미지 영역 */}
      <ImgComponent src={aboutSrc} alt="menuImage" />

      {/* 텍스트영역 */}
      <div className="aboutText">
        <h1 className="title">{title}</h1>
        <br />
        <h5 className="subTitle">{subTitle}</h5>

        {/* 데이터를 받아와서 컴포넌트 생성 */}
        {AboutData.map((v, i) => {
          return <AboutContent key={i} desc={v.desc} index={i} />;
        })}
      </div>
    </AboutContainer>
  );
};

export default About;
