import React from 'react';
import styled from 'styled-components';
import ContactData from '../data/ContactData';
import BtnComponent from './common/BtnComponent';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 64px 16px;

  .title {
    margin: 10px 0;
  }

  .contactDesc {
    font-size: 15px;
    line-height: 22.5px;
    margin-top: 15px;

    b {
      font-size: 18px;
      line-height: 27px;
      color: #607d8b;
    }
  }

  .contactForm {
    width: 100%;
    line-height: 22.5px;

    p {
      margin: 15px 0;
      font-family: Arial, sans-serif;
      font-size: 15px;

      input {
        display: block;
        width: 100%;
        padding: 16px 8px;
        border: none;
        border-bottom: 1px solid #ccc;
        line-height: 22.5px;
      }
    }
  }
`;

const Contact = ({ title }) => {
  const { desc, addr, email } = ContactData;

  return (
    <ContactContainer id="contact">
      <h1 className="title">{title}</h1>
      <br />

      <div>
        <p className="contactDesc">{desc}</p>
        <p className="contactDesc">
          <b>{addr}</b>
        </p>
        <p className="contactDesc">{email}</p>
      </div>

      {/* 폼영역 */}
      <form className="contactForm">
        <p>
          <input type="text" placeholder="Name" />
        </p>
        <p>
          <input type="number" placeholder="How many people" />
        </p>
        <p>
          <input type="datetime-local" placeholder="Date and time" />
        </p>
        <p>
          <input type="text" placeholder="Message \ Special requirements" />
        </p>
        <p>
          <BtnComponent name="SEND MESSAGE" />
        </p>
      </form>
    </ContactContainer>
  );
};

export default Contact;
