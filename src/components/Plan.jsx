import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bounce from '../static/style/bounce';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 720px;
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
    height: 1000px;
  }
  @media screen and (max-width: 580px) {
    height: 750px;
  }
`;

const PlanUl = styled.ul`
  list-style: none;
  padding: 130px 180px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  gap: 0px 30px;
  width: 1440px;
  background-color: white;
  justify-items: center;
  @media screen and (max-width: 1600px) {
    padding: 130px 100px 90px;
    width: 1300px;
  }
  @media screen and (max-width: 1280px) {
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
    width: 90%;
    height: 600px;
    padding-bottom: 10px;
  }
`;

const PlanLi = styled.li`
  text-align: left;
  width: 340px;
  div {
    font-size: 22px;
  }
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
  img {
    height: 22px;
  }
  .number {
    margin: 0;
  }
  @media screen and (max-width: 1280px) {
    width: 260px;
    div {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 935px) {
    a {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 680px) {
    width: 200px;
    div {
      font-size: 16px;
    }
    .number {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 580px) {
    width: 158px;
    div {
      font-size: 15px;
    }
    .number {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 420px) {
    width: 130px;
    div {
      font-size: 12px;
    }
    .text {
      margin-top: 10px;
    }
    a {
      font-size: 10px;
      img {
        height: 12px;
      }
    }
    div {
      margin-top: 5px;
    }
  }
`;

const TitleLi = styled.li`
  text-align: left;
  .plan_title {
    font-family: SUIT-SemiBold;
    font-size: 45px;
    margin: 8px 0 0 0;
  }
  div {
    font-size: 18px;
    line-height: 30px;
    font-family: SUIT-Medium;
  }
  @media screen and (max-width: 1600px) {
    width: 350px;
  }
  @media screen and (max-width: 1280px) {
    width: 260px;
    div {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 935px) {
    width: 100%;
    grid-column: span 2;
    .plan_title {
      font-size: 40px;
      line-height: 70px;
    }
    div {
      font-size: 26px;
    }
  }
  @media screen and (max-width: 680px) {
    .plan_title {
      font-size: 32px;
    }
    div {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 580px) {
    .plan_title {
      font-size: 30px;
      line-height: 40px;
    }
    div {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 420px) {
    .plan_title {
      font-size: 25px;
    }
    div {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 420px) {
    height: 25px;
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
          <h1 className="plan_title title_font2">MASTER PLAN</h1>
          <div className="plan_subtitle">
            ????????? ????????? 10?????? ????????? ?????? ?????????
            <br />
            ???????????? ?????????????????????.
          </div>
        </TitleLi>
        <PlanLi>
          <h1 className="number">1</h1>
          <div className="text">
            ????????? ?????? ????????? ???????????????. (??????????????? ?????????, ???????????????,
            ??????????????? ???)
          </div>
          <a
            href="https://map.60hz.io/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <LinkDiv>
              ??????????????????{' '}
              <img src="/about/arrow_forward_orange.svg" alt="map_emoji" />
            </LinkDiv>
          </a>
        </PlanLi>
        <PlanLi>
          <h1 className="number">2</h1>
          <div className="text">
            ????????? ???????????? ???????????? ??????????????? ????????? ??? ?????? ??????. (?????????
            ??????, ?????? ?????? ???)
          </div>
          <Link to="/business#product">
            <LinkDiv>
              ?????????????????????
              <img src="/about/arrow_forward_orange.svg" alt="audio_emoji" />
            </LinkDiv>
          </Link>
        </PlanLi>
        <PlanLi>
          <h1 className="number">3</h1>
          <div className="text">
            ??????????????? ???????????? ???????????? ?????? ??????????????? ??????????????? 0???
            ???????????????.
          </div>
        </PlanLi>
        <PlanLi>
          <h1 className="number">4</h1>
          <div className="text">?????????????????? ????????? ???????????? ???????????????.</div>
        </PlanLi>
        <PlanLi>
          <h1 className="number">5</h1>
          <div className="text">1~4??? ???????????? ????????????.</div>
        </PlanLi>
      </PlanUl>
      <PaddingDiv />
    </Wrapper>
  );
};

export default Plan;
