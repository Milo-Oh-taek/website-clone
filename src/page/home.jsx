import React from 'react';
import styled from 'styled-components';

import Together from '../components/Together';

import Partners from '../components/Partners';
import Press from '../components/Press';
import AwardCarousel from '../components/AwardCarousel';
import SeeMore from '../static/style/seemore';

const Main = styled.main`
  background: linear-gradient(
    109.39deg,
    #daffed 0%,
    rgba(254, 251, 193, 0.484375) 77.54%,
    rgba(198, 245, 255, 0.48) 100%
  );
  display: inline-block;
  width: 100%;
  height: 850px;
  margin: 0;
  padding: 250px 0 0 0;
  @media screen and (max-width: 1280px) {
    height: 700px;
  }
  @media screen and (max-width: 965px) {
    height: 600px;
  }
  @media screen and (max-width: 770px) {
    height: 600px;
    padding-top: 150px;
  }
  @media screen and (max-width: 500px) {
    height: 500px;
  }
  @media screen and (max-width: 420px) {
    height: 420px;
  }
`;

const Wrapper = styled.section`
  text-align: center;
  display: block;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
  }
  .home_br {
    display: none;
  }
  @media screen and (max-width: 770px) {
    .home_br {
      display: block;
    }
  }
`;

const Intro = styled.h1`
  padding-bottom: 20px;
`;

const IframeAreaWrapper = styled.div`
  max-width: 100%;
  display: inline-block;
  width: 85%;
  margin: 10vh 0 50px 0;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 20px;
  border: 40px solid rgb(255, 255, 255);
  @media screen and (max-width: 500px) {
    border: 20px solid rgb(255, 255, 255);
  }
  @media screen and (max-width: 420px) {
    border: 15px solid rgb(255, 255, 255);
    border-radius: 15px;
    box-shadow: rgb(0, 0, 0 / 13%) 10px 10px 20px;
    margin-top: 60px;
  }
`;

const IframeDiv = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin: 0;
`;

const Iframe = styled.iframe`
  border: 0;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 15px;
`;

const Home = () => {
  // useEffect(() => {
  //   alert('Under construction! This is a Test Website');
  // }, []);
  return (
    <>
      <Wrapper>
        <Main>
          <div>
            <Intro className="title_font1">
              식스티헤르츠는 <br className="home_br" />
              재생에너지 발전량 예측 기술로 <br />
              지구 기후위기에 대응하는 <br className="home_br" />
              IT 소셜벤처입니다.
            </Intro>
          </div>
          <div>
            <a href="/about">
              <SeeMore>더 알아보기</SeeMore>
            </a>
          </div>
          <IframeAreaWrapper>
            <IframeDiv>
              <Iframe
                allowFullScreen
                title="햇빛바람지도_미리보기"
                src="https://www.youtube.com/embed/yGeiyZLHnlI?autoplay=1&mute=1&playlist=yGeiyZLHnlI&loop=1&modestbranding=1&controls=0"
              />
            </IframeDiv>
          </IframeAreaWrapper>
        </Main>
        <AwardCarousel />
        <Press />
        <Partners />
      </Wrapper>
      <Together />
    </>
  );
};

export default Home;
