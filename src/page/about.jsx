import React from 'react';
import styled from 'styled-components';
import Together from '../components/Together';
import AboutPartners from '../components/AboutPartners';
import AboutAwards from '../components/AboutAwards';

import Members from '../components/Members';
import Plan from '../components/Plan';

const Main = styled.main`
  padding-top: 250px;
  background-color: #f5f8fa;
  font-family: SUIT-Regular;
  test-align: center;
  .main_title {
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
          <h1 className="main_title title_font1">
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
