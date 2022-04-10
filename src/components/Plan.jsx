import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const bounce = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(15px);
  }
`;

const LinkEffect = styled.a`
  cursor: pointer;
  &:hover {
    img {
      animation: ${bounce};
      animation-direction: alternate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
  background-color: white;
  .number {
    border-bottom: 1px solid #000;
    font-family: SUIT-Regular;
    font-size: 35px;
    padding-bottom: 8px;
  }
  .text {
    margin-top: 22px;
  }
  h6 {
    font-size: 20px;
    line-height: 20px;
  }
  @media screen and (max-width: 935px) {
    height: 860px;
  }
  @media screen and (max-width: 580px) {
    height: 620px;
  }
`;

const PlanUl = styled.ul`
  list-style: none;
  padding: 130px 180px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-gap: 60px 30px; */
  margin: 0;
  gap: 40px 30px;
  width: 1440px;
  background-color: white;
  justify-items: center;
  @media screen and (max-width: 1600px) {
    gap: 60px 30px;
    padding: 130px 100px 90px;
    width: 1300px;
  }
  @media screen and (max-width: 1280px) {
    gap: 45px 30px;
    padding: 130px 100px 90px;
    width: 1000px;
  }
  @media screen and (max-width: 935px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 100px 50px 90px;
    width: 700px;
  }
  @media screen and (max-width: 680px) {
    padding: 70px 20px 50px;
    width: 550px;
  }
  @media screen and (max-width: 580px) {
    gap: 5px 10px;
    width: 400px;
    height: 600px;
    padding-bottom: 10px;
  }
`;

const PlanLi = styled.li`
  text-align: left;
  width: 340px;
  a {
    text-decoration: none;
    color: rgb(236, 91, 68);
    line-height: 50px;
    font-size: 20px;
    &:hover {
      img {
        animation: ${bounce};
        animation-direction: alternate;
        animation-duration: 1s;
        animation-iteration-count: infinite;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    width: 260px;
  }
  @media screen and (max-width: 935px) {
    a {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 680px) {
    width: 190px;
    h6 {
      font-size: 18px;
      line-height: 18px;
    }
    .number {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 580px) {
    width: 158px;
    h6 {
      font-size: 15px;
      line-height: 15px;
    }
    .number {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 420px) {
    width: 130px;
    height: 120px;
    h6 {
      font-size: 10px;
      line-height: 8px;
    }
    .text {
      margin-top: 10px;
    }
    a {
      font-size: 10px;
      img {
        width: 15px;
        height: 15px;
      }
    }
    div {
      margin-top: 5px;
    }
  }
`;

const TitleLi = styled.li`
  text-align: left;
  h1 {
    font-family: SUIT-SemiBold;
    font-size: 45px;
  }
  h6 {
    font-size: 18px;
    line-height: 30px;
    font-family: SUIT-Medium;
  }
  @media screen and (max-width: 1600px) {
    width: 350px;
  }
  @media screen and (max-width: 1280px) {
    width: 260px;
    h6 {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 935px) {
    width: 100%;
    grid-column: span 2;
    h1 {
      font-size: 40px;
      line-height: 70px;
    }
    h6 {
      font-size: 26px;
    }
  }
  @media screen and (max-width: 680px) {
    h1 {
      font-size: 32px;
    }
    h6 {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 580px) {
    h1 {
      font-size: 30px;
      line-height: 40px;
    }
    h6 {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 420px) {
    /* height: 60px; */
    h1 {
      font-size: 25px;
    }
    h6 {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const PaddingDiv = styled.div`
  width: 100%;
  height: 50%;
  background-color: #f5f8fa;
  @media screen and (max-width: 935px) {
    height: 20%;
  }
`;

const Plan = () => {
  return (
    <Wrapper>
      <PaddingDiv />
      <PlanUl>
        <TitleLi>
          <h1 className="plan_title">MASTER PLAN</h1>
          <h6 className="plan_subtitle">
            우리는 앞으로 10년간 다음과 같은 계획을
            <br />
            신속하게 실행하겠습니다.
          </h6>
        </TitleLi>
        <PlanLi>
          <h1 className="number">1</h1>
          <h6 className="text">다양한 분산 전원을 연결시킨다.</h6>
          <h6>(재생에너지 발전소, 전기자동차,</h6>
          <h6>스마트가전 등)</h6>
          <div>
            <a
              href="https://map.60hz.io/index.html"
              target="_blank"
              rel="noreferrer"
            >
              햇빛바람지도 <img src="/about/arrow_forward_orange.svg" />
            </a>
          </div>
        </PlanLi>
        <PlanLi>
          <h1 className="number">2</h1>
          <h6 className="text">연결된 자원들을 안전하고</h6>
          <h6>효율적으로 관리할 수 있게 한다.</h6>
          <h6>(발전량 예측, 통합 관제 등)</h6>
          <div>
            <Link to="/business#product">
              통합관제시스템
              <img src="/about/arrow_forward_orange.svg" />
            </Link>
          </div>
        </PlanLi>
        <PlanLi>
          <h1 className="number">3</h1>
          <h6 className="text">재생에너지 수요자와 공급자를</h6>
          <h6>직접 연결시키고 거래비용을</h6>
          <h6>0에 수렴시킨다.</h6>
        </PlanLi>
        <PlanLi>
          <h1 className="number">4</h1>
          <h6 className="text">재생에너지를 빠르고 안전하게</h6>
          <h6>확산시킨다.</h6>
        </PlanLi>
        <PlanLi>
          <h1 className="number">5</h1>
          <h6 className="text">1~4를 해외에서 반복한다.</h6>
        </PlanLi>
      </PlanUl>
      <PaddingDiv />
    </Wrapper>
  );
};

export default Plan;
