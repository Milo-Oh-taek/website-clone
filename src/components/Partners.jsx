import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
export const bounce = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(15px);
  }
`;
const Wrapper = styled.section`
  width: 100%;
  max-width: 100%;
  padding-bottom: 100px;
  // margin: 0 auto;
  // clear: both;
  // height: auto;
  background-color: rgb(245, 248, 250);
  // display: inline-block;
  .col {
    padding: 1.5rem 0;
  }
`;

const BorderLine = styled.div`
  display: flex;
  justify-content: center;
  div {
    border-top: 0.5px solid rgb(37, 37, 37);
    width: 85%;
    height: 0px;
    padding-bottom: 200px;
    @media screen and (max-width: 420px) {
      padding-bottom: 120px;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentUl = styled.ul`
  grid-gap: 50px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 100px;
  mix-blend-mode: multiply;
  padding-left: 0;
  @media screen and (max-width: 1280px) {
    gap: 30px;
  }
  @media screen and (max-width: 770px) {
    gap: 30px 3px;
  }
  @media screen and (max-width: 550px) {
    width: 95vw;
    grid-gap: 0px;
    gap: 10px;
    margin-top: 60px;
    margin-bottom: 0;
    // grid-template-columns: repeat(2, 1fr);
  }
`;

const ContentLi = styled.li`
  display: flex;
  flex-direction: column;
  img {
    @media screen and (max-width: 1280px) {
      height: 50px;
      width: 227px;
    }
    @media screen and (max-width: 770px) {
      height: 40px;
      width: 180px;
    }
    @media screen and (max-width: 550px) {
      height: 100%;
      width: 100%;
    }
  }
`;

const TitleH1 = styled.h1`
  font-size: 40px;
  font-family: SUIT-SemiBold;
  margin-bottom: 22px;
  @media screen and (max-width: 770px) {
    font-size: 35px;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const MoreLinkArea = styled.div`
  margin-top: 60px;

  &:hover {
    img {
      animation: ${bounce};
      animation-direction: alternate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
  @media screen and (max-width: 550px) {
    margin-top: 60px;
  }
`;

const MoreLink = styled.div`
  color: black;
  font-family: SUIT-Bold;
  font-size: 28px;
  border-bottom: 2px solid;
  padding-bottom: 5px;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Partners = () => {
  return (
    <Wrapper>
      <BorderLine>
        <div></div>
      </BorderLine>
      {/* <div style={{ maxWidth: '100%' }}> */}
      <div>
        <TitleH1>함께하는 기업들</TitleH1>
        <div>2021년 9월 28일 기준</div>
        <ContentContainer>
          <ContentUl>
            <ContentLi>
              <img src="/home/logo/skt.png" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/LG2.png" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/ondream.png" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/shinhan.png" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/kwater.png" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/sopoong.png" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/mysc.png" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/zeroone.png" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/BNZ.png" />
            </ContentLi>
          </ContentUl>
        </ContentContainer>

        <MoreLinkArea>
          <Link to="about#partnersection">
            <MoreLink>
              더 많은 파트너 보기
              <img src="/home/arrow_forward.svg" alt="icon" />
            </MoreLink>
          </Link>
        </MoreLinkArea>
      </div>
      {/* </div> */}
    </Wrapper>
  );
};

export default Partners;
