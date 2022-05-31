import React from 'react';
import styled from 'styled-components';
import ImgComponent from '../components/common/ImgComponent';
import MenuData from '../data/MenuData';

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 1100px;
  padding: 64px 0;
  margin: 0 auto;

  .menuText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    padding: 12px 24px;

    .menuTitle {
      font-family: sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 5px;
      margin: 10px 0;
    }

    .menuDesc {
      color: #757575;
      font-size: 15px;
      line-height: 22.5px;
      margin: 15px 0;
    }
  }
`;

const MenuContent = ({ menuTitle, menuDesc }) => {
  return (
    <div>
      <h4 className="menuTitle">{menuTitle}</h4>
      <p className="menuDesc">{menuDesc}</p>
      <br />
    </div>
  );
};

const Menu = ({ title }) => {
  const menuSrc = 'https://www.w3schools.com/w3images/tablesetting.jpg';

  return (
    <MenuContainer>
      {/* 텍스트영역 */}
      <div className="menuText">
        <h1 className="title">{title}</h1>
        <br />

        {/* 데이터를 받아와서 컴포넌트 생성 */}
        {MenuData.map((v, i) => {
          return <MenuContent key={i} menuTitle={v.title} menuDesc={v.desc} />;
        })}
      </div>

      {/* 이미지영역 */}
      <ImgComponent src={menuSrc} alt="menuImage" />
    </MenuContainer>
  );
};

export default Menu;
