import React, { useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import Together from '../components/Together';

import Partners from '../components/Partners';
import Press from '../components/Press';
import AwardCarousel from '../components/AwardCarousel';

export const SeeMore = styled.div`
  border: 2px solid rgb(37, 37, 37);
  font-family: SUIT-SemiBold;
  border-radius: 80px;
  color: rgb(37, 37, 37);
  height: 90px;
  display: table-cell;
  vertical-align: middle;
  font-size: 20px;
  width: 180px;
  height: 75px;
  margin-top: 40px;
  &:hover {
    background: black;
    color: white;
  }
  @media screen and (max-width: 770px) {
    font-size: 15px;
    height: 50px;
    width: 130px;
  }
`;

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
  @media screen and (max-width: 770px) {
    height: 600px;
    padding-top: 150px;
  }
  @media screen and (max-width: 500px) {
    height: 600px;
  }
  @media screen and (max-width: 420px) {
    height: 520px;
    padding-top: 125px;
  }
`;

const IntroMain = styled.div`
  padding: 0 24px;
  font-family: SUIT-SemiBold;
  font-style: normal;
  line-height: 65px;
  font-size: 40px;
  @media screen and (max-width: 1280px) {
    font-size: 30px;
  }
`;

const Wrapper = styled.section`
  text-align: center;
  display: block;
  margin: 0;
  padding: 0;
  .home_br {
    display: none;
  }
  @media screen and (max-width: 770px) {
    .home_br {
      display: block;
    }
  }
`;

const IntroP = styled.p`
  font-family: SUIT-Bold;
  line-height: 60px;
  padding-bottom: 20px;
  @media screen and (max-width: 1280px) {
    font-size: 37px;
  }
  @media screen and (max-width: 770px) {
    line-height: 50px;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px;
    line-height: 40px;
  }
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

const Home = () => {
  useEffect(() => {
    alert('Under construction! This is a Test Website');
  }, []);
  return (
    <>
      <Wrapper>
        <Main>
          <div>
            <h1>
              <IntroP>
                식스티헤르츠는 <br className="home_br" />
                재생에너지 발전량 예측 기술로 <br />
                지구 기후위기에 대응하는 <br className="home_br" />
                IT 소셜벤처입니다.
              </IntroP>
            </h1>
          </div>
          <div>
            <a href="/about" style={{ textDecorationLine: 'none' }}>
              <SeeMore>더 알아보기</SeeMore>
            </a>
          </div>
          <IframeAreaWrapper>
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: '0',
                overflow: 'hidden',
                margin: '0',
              }}
            >
              <iframe
                allowFullScreen
                title="햇빛바람지도_미리보기"
                src="https://www.youtube.com/embed/yGeiyZLHnlI?autoplay=1&mute=1&playlist=yGeiyZLHnlI&loop=1&modestbranding=1&controls=0"
                style={{
                  position: 'absolute',
                  left: '0px',
                  top: '0px',
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  borderRadius: '15px',
                }}
              ></iframe>
            </div>
          </IframeAreaWrapper>
        </Main>
        <AwardCarousel style={{ overflow: 'hidden', height: '120px' }} />
        <Press />
        <Partners />
      </Wrapper>
      <Together />
    </>
  );
};

export default Home;
