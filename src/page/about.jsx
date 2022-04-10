import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Together from '../components/Together';
import AboutPartners from '../components/AboutPartners';
import AboutAwards from '../components/AboutAwards';

import { Link } from 'react-router-dom';
import Members from '../components/Members';
import Plan from '../components/Plan';

const Main = styled.main`
  padding-top: 250px;
  background-color: #f5f8fa;
  font-family: SUIT-Regular;
  test-align: center;
  .main_title {
    font-size: 52px;
    font-family: SUIT-Bold;
    line-height: 85px;
    padding-bottom: 15px;
    margin-bottom: 0;
    @media screen and (max-width: 1280px) {
      font-size: 37px;
    }

    @media screen and (max-width: 770px) {
      line-height: 50px;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 500px) {
      font-size: 25px;
      line-height: 40px;
    }
  }
  .main_subTitle {
    font-size: 30px;
    line-height: 50px;
    font-family: SUIT-Medium;
    @media screen and (max-width: 1280px) {
      font-size: 15px;
      line-height: 0px;
    }
    @media screen and (max-width: 580px) {
      font-size: 12px;
    }
  }
  .main_imgDiv {
    display: flex;
    justify-content: center;
  }
  .about_br {
    display: none;
  }

  @media screen and (max-width: 770px) {
    padding-top: 150px;
    .about_br {
      display: block;
    }
  }
`;

export const bounce = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(15px);
  }
`;

const LinkEffect = styled.a`
  &:hover {
    img {
      animation: ${bounce};
      animation-direction: alternate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
`;

const PlanDiv = styled.div`
  display: flex;
  justify-content: center;
  // text-align: left;
  .number {
    border-bottom: 1px solid #000;
    font-family: SUIT-Regular;
    font-size: 35px;
    padding-bottom: 8px;
  }
  .text {
    margin-top: 22px;
  }
  a {
    text-decoration: none;
    color: rgb(236, 91, 68);
    font-size: 20px;
  }
  h6 {
    font-size: 20px;
    line-height: 20px;
  }
`;

const PlanUl = styled.ul`
  list-style: none;
  padding: 130px 175px 130px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px 30px;
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
    gap: 20px 30px;
    width: 400px;
  }
`;

const PlanLi = styled.li`
  .plan_title {
    font-family: SUIT-SemiBold;
    font-size: 45px;
  }
  .plan_subtitle {
    font-size: 18px;
    line-height: 30px;
    font-family: SUIT-Medium;
  }
  @media screen and (max-width: 1600px) {
    width: 350px;
  }
  @media screen and (max-width: 1280px) {
    width: 260px;
  }
  @media screen and (max-width: 935px) {
    grid-column: span 2;
  }
  @media screen and (max-width: 580px) {
    .number {
      font-size: 18px;
    }
    .plan_title {
      font-size: 30px;
    }
  }
`;

const MainImgDiv = styled.div`
  display: flex;
  justify-content: center;
  .tablet_img {
    display: none;
  }
  @media screen and (max-width: 1280px) {
    .pc_img {
      height: 450px;
    }
  }
  @media screen and (max-width: 980px) {
    .pc_img {
      display: none;
    }
    .tablet_img {
      display: block;
      width: 650px;
    }
  }
  @media screen and (max-width: 770px) {
    .tablet_img {
      height: 420px;
      width: 470px;
    }
  }
  @media screen and (max-width: 420px) {
    .tablet_img {
      height: 310px;
      width: 340px;
    }
  }
`;

const MainSubTitleSpan = styled.span`
  font-size: 30px;
  line-height: 50px;
  font-family: SUIT-Medium;
  .subTitle_mo_br {
    display: none;
  }
  @media screen and (max-width: 1280px) {
    font-size: 25px;
    line-height: 35px;
  }
  @media screen and (max-width: 965px) {
    font-size: 20px;
    line-height: 35px;
  }
  @media screen and (max-width: 770px) {
    .subTitle_pc_br {
      display: none;
    }
    .subTitle_mo_br {
      display: block;
    }
  }
  @media screen and (max-width: 580px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const About = () => {
  return (
    <>
      <section style={{ fontFamily: 'SUIT-Regular' }}>
        <Main>
          <h1 className="main_title">
            재생 에너지로
            <br className="about_br" /> 지구를 지키는 방법을
            <br className="about_br" /> 연구합니다.
          </h1>
          <MainSubTitleSpan>
            전세계 기후 변화를 막기 위해
            <br className="subTitle_mo_br" /> 재생에너지를 늘리는 방안으로
            <br className="subTitle_pc_br" /> 다양한 종류의 분산자원을
            <br className="subTitle_mo_br" /> IT기술로 연결하고, 예측 및 관리
            가능하도록
            <br className="subTitle_mo_br" /> 가상발전소를 구축합니다.
          </MainSubTitleSpan>
          <MainImgDiv>
            <img
              src="/about_main.png"
              alt="main_img"
              height="563px"
              className="pc_img"
              style={{ margin: '6rem 0' }}
            />
            <img
              src="/about_main_tablet.png"
              alt="main_img"
              className="tablet_img"
            />
          </MainImgDiv>
          <Plan />
        </Main>
        <AboutAwards />
        <AboutPartners />
        <Members />
      </section>
      <Together />
    </>
  );
};

export default About;
