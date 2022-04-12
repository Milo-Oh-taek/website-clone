import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 5% 3px;
  background: #f4f5f7;

  a {
    text-decoration: none;
    color: black;
  }
  h3 {
    font-family: SUIT-Bold;
    font-size: 20px;
    text-align: left;
  }
  span {
    font-size: 20px;
  }
  @media screen and (max-width: 1400px) {
    justify-content: space-between;
    padding: 5% 30px;
  }
  @media screen and (max-width: 1150px) {
    display: block;
  }
  @media screen and (max-width: 770px) {
    h3,
    span {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 40px;
  }
`;

const LeftSection = styled.section`
  display: flex;
  gap: 100px;
  line-height: 30px;
  h3 {
    margin: 0;
  }

  @media screen and (max-width: 1150px) {
    justify-content: center;
  }
  @media screen and (max-width: 770px) {
    justify-content: space-between;
  }
`;

const RightSection = styled.section`
  line-height: 30px;
  text-align: left;
  @media screen and (max-width: 1150px) {
    text-align: center;
    margin-top: 30px;
  }
  @media screen and (max-width: 770px) {
    margin-top: 0;
    text-align: left;
  }
  @media screen and (max-width: 570px) {
    margin-top: 50px;
  }
`;

const AskArea = styled.div`
  display: flex;
  gap: 100px;
  h3 {
    text-area: left;
  }
  @media screen and (max-width: 570px) {
    display: block;
    .otherQnA {
      margin-top: 10px;
    }
  }
`;

const PageArea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media screen and (max-width: 770px) {
    margin-right: 50px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <LeftSection>
        <AskArea>
          <div>
            <h3>채용문의</h3>
            <a href="mailto:hr@60hz.io">
              <span>hr@60hz.io</span>
            </a>
          </div>
          <div className="otherQnA">
            <h3>기타문의</h3>
            <a href="mailto:hr@60hz.io">
              <span>hr@60hz.io</span>
            </a>
          </div>
        </AskArea>
        <div>
          <PageArea>
            <h3>식스티헤르츠</h3>
            <Link to="/about">
              <span>ABOUT</span>
            </Link>
            <Link to="/business">
              <span>BUSINESS</span>
            </Link>
            <Link to="/career">
              <span>CAREER</span>
            </Link>
          </PageArea>
        </div>
      </LeftSection>
      <RightSection>
        <div>
          <span style={{ fontFamily: 'SUIT-Bold' }}>식스티헤르츠 주식회사</span>
          <span>&nbsp;|&nbsp; 대표: 김종규</span>
        </div>
        <div>
          <span>사업자등록번호 : 878-88-01768</span>
        </div>
        <div>
          <span>전화번호: 02-6954-0068</span>
        </div>
        <div>
          <span>주소: (04538) 서울시 중구 명동길 73 6층 602호</span>
        </div>
      </RightSection>
    </Wrapper>
  );
};

export default Footer;
