import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  height: 379px;
  display: flex;
  align-items: center;
  background-color: #f4f5f7;
  margin-bottom: 0;
  justify-content: space-between;
  padding: 0 24px;
  margin: auto;
  line-height: 30px;
  font-family: SUIT-Regular;
  @media screen and (max-width: 1150px) {
    display: block;
  }
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const BoldP = styled.p`
  font-family: SUIT-Bold;
  margin: 0;
`;

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
            <Link to="/">
              <span>hr@60hz.io</span>
            </Link>
          </div>
          <div className="otherQnA">
            <h3>기타문의</h3>
            <Link to="/">
              <span>hr@60hz.io</span>
            </Link>
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
    // <footer
    //   style={{
    //     mimHeight: '379px',
    //     backgroundColor: '#F4F5F7',
    //     bottom: '0',
    //     position: 'relative',
    //   }}
    // >
    //   <div
    //     style={{
    //       maxWidth: '1190px',
    //       margin: '0px auto',
    //       padding: '0 24px',
    //       height: '100%',
    //     }}
    //   >
    //     <div
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //         textAlign: 'left',
    //         lineHeight: '30px',
    //         fontSize: '16px',
    //         padding: '120px 0',
    //         color: 'rgb(108, 108, 108)',
    //       }}
    //     >
    //       <div
    //         style={{
    //           display: 'flex',
    //           justifyContent: 'start',
    //         }}
    //       >
    //         <div style={{ display: 'flex', justifyContent: 'start' }}>
    //           <div style={{ marginRight: '70px' }}>
    //             <BoldP>채용문의</BoldP>
    //             <div>hr@60hz.io</div>
    //           </div>
    //           <div style={{ marginRight: '70px' }}>
    //             <BoldP>기타문의</BoldP>
    //             <div>hello@60hz.io</div>
    //           </div>
    //         </div>
    //         <div>
    //           <BoldP>식스티헤르츠</BoldP>
    //           <div>ABOUT</div>
    //           <div>BUSINESS</div>
    //           <div>CAREER</div>
    //         </div>
    //       </div>
    //       <div>
    //         <div>
    //           <span style={{ fontFamily: 'SUIT-Bold' }}>
    //             식스티헤르츠 주식회사
    //           </span>{' '}
    //           | 대표 : 김종규{' '}
    //         </div>
    //         <div>사업자등록번호 : 878-88-01768</div>
    //         <div>서울시 중구 명동길 73 6층 602호</div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
