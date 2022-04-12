import React from 'react';
import styled, { keyframes } from 'styled-components';
import Together from '../components/Together';
import bounce from '../static/style/bounce';

const Section = styled.section`
  padding-top: 200px;
  @media screen and (max-width: 420px) {
    padding-top: 125px;
  }
`;

const moveSlideShow = keyframes`
  100% {
    transform: translateY(-47%);
  }
`;

const MonitoringDiv = styled.div`
  // height: 950px;
  padding: 200px 0;
  background-color: #f5f8fa;
  display: flex;
  justify-content: center;
  .slide_image {
    background-image: url(/통합관제시스템.avif);
    animation: ${moveSlideShow} 30s linear infinite;
    width: 800px;
    height: 3800px;
    background-size: 800px;
  }
  @media screen and (max-width: 1550px) {
    align-items: center;
    flex-direction: column-reverse;
    padding: 100px 0;
  }
  // @media screen and (max-width: 500px) {
  //   padding: 50px 0;
  // }
  // @media screen and (max-width: 375px) {
  //   width: 300px;
  //   height: 165px;
  // }
`;

const LinkEffect = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 20px;
  }
  &:hover {
    img {
      animation: ${bounce};
      animation-direction: alternate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
  color: #15346e;
  text-decoration: none;
  font-family: SUIT-Bold;
  font-size: 25px;
  margin-top: 30px;
  @media screen and (max-width: 900px) {
    font-size: 20px;
    img {
      height: 15px;
    }
  }
  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
  @media screen and (max-width: 420px) {
    font-size: 15px;
    img {
      height: 12px;
    }
  }
  @media screen and (max-width: 375px) {
    margin-top: 15px;
    font-size: 13px;
    img {
      height: 10px;
    }
  }
`;

const SunmapBox = styled.div`
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1550px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 50px;
  }
`;

const YoutubeBox = styled.aside`
  border-radius: 25px;
  box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
  width: 800px;
  height: 450px;
  overflow: hidden;
  padding: 25px;
  // width: 85%;
  // max-width: 50%;
  // display: inline-block;
  // border: 40px solid rgb(255, 255, 255);

  @media screen and (max-width: 900px) {
    width: 550px;
    height: 310px;
  }
  @media screen and (max-width: 650px) {
    // max-width: 90%;
    // border: 30px;
    // padding: 20px;
    width: 400px;
    height: 225px;
  }
  @media screen and (max-width: 420px) {
    // max-width: 95%;
    width: 340px;
    height: 190px;
    border-radius: 15px;
    box-shadow: 10px 13px 20px rgb(0 0 0 / 15%);
    padding: 15px;
  }
  @media screen and (max-width: 375px) {
    height: 165px;
    width: 300px;
  }
  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Iframe = styled.iframe`
  position: aboslute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 15px;
  border: 0;
  @media screen and (max-width: 420px) {
    border-radius: 10px;
  }
`;
const SunmapArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
  text-align: left;
  @media screen and (max-width: 1550px) {
    margin: 30px 0 0 0;
  }
  @media screen and (max-width: 900px) {
    margin-right: 0;
  }
  @media screen and (max-width: 900px) {
    margin-right: 0;
  }
`;

const ArticleTitle = styled.div`
  img {
    height: 47px;
  }
  h1 {
    font-family: SUIT-SemiBold;
    margin: 1rem 0;
  }
  .monitoring_title_div .title_font2 {
    line-height: 70px;
  }
  .sunmap.title_font2 {
    line-height: 70px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1550px) {
    img {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 1280px) {
    .monitoring_title_div .title_font2 {
      line-height: 50px;
    }
    .sunmap.title_font2 {
      line-height: 40px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 900px) {
    img {
      height: 40px;
    }
    h1 {
      font-size: 30px;
      line-height: 30px;
    }
  }

  @media screen and (max-width: 770px) {
    .monitoring_title_div .title_font2 {
      line-height: 40px;
    }
    .sunmap.title_font2 {
      line-height: 40px;
    }
  }
  @media screen and (max-width: 650px) {
    img {
      margin-bottom: 4px;
    }
    .monitoring_title_div .title_font2 {
      font-size: 25px;
      line-height: 25px;
      margin-bottom: 12px;
    }
    .sunmap.title_font2 {
      font-size: 25px;
      line-height: 20px;
    }
  }
  @media screen and (max-width: 420px) {
    img {
      height: 30px;
    }
    h1 {
      margin-top: 8px;
      margin-bottom: 15px;
      font-size: 20px;
      line-height: 20px;
    }
  }
  @media screen and (max-width: 375px) {
    img {
      height: 25px;
    }
    .title_font2 {
      font-size: 17px;
      margin: 0;
      line-height: 0px;
    }
  }
`;

const SunmapDiv = styled.div`
  font-size: 25px;
  font-family: SUIT-Medium;
  line-height: 45px;
  @media screen and (max-width: 900px) {
    font-size: 20px;
    line-height: 40px;
  }
  @media screen and (max-width: 650px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media screen and (max-width: 420px) {
    font-size: 15px;
    line-height: 30px;
  }
  @media screen and (max-width: 375px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

const LinkArea = styled.div`
  margin-top: 40px;
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 650px) {
    margin-top: 0px;
  }
`;

const MonitorArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 80px;
  text-align: left;
  @media screen and (max-width: 1550px) {
    margin: 50px 0 0 0;
  }
  @media screen and (max-width: 900px) {
    margin-right: 0px;
  }
`;

const MonitoringH2 = styled.h2`
  font-size: 25px;
  line-height: 45px;
  font-weight: 100;
  font-family: SUIT-Medium;
  @media screen and (max-width: 900px) {
    font-size: 20px;
    line-height: 40px;
  }
  @media screen and (max-width: 650px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media screen and (max-width: 420px) {
    font-size: 15px;
    line-height: 30px;
  }
  @media screen and (max-width: 375px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

const MonitoringImgArea = styled.div`
  border-radius: 25px;
  box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
  padding: 25px 0;
  width: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media screen and (max-width: 900px) {
    // padding: 25px 0;
    width: 600px;
  }
  @media screen and (max-width: 650px) {
    width: 450px;
  }
  @media screen and (max-width: 420px) {
    border-radius: 15px;
    box-shadow: 10px 13px 20px rgb(0 0 0 / 15%);
    height: 200px;
    padding: 15px;
    width: 350px;
  }
  @media screen and (max-width: 375px) {
    height: 165px;
    width: 300px;
  }
`;

const MonitoringImgWrapper = styled.div`
  border-radius: 15px;
  height: 500px;
  overflow: hidden;
  width: 800px;
  @media screen and (max-width: 900px) {
    height: 360px;
    width: 550px;
    .slide_image {
      background-size: 550px;
      height: 2615px;
      width: 550px;
    }
  }
  @media screen and (max-width: 650px) {
    height: 275px;
    width: 400px;
    .slide_image {
      background-size: 400px;
      height: 1900px;
      width: 400px;
    }
  }
  @media screen and (max-width: 420px) {
    border-radius: 10px;
    height: 200px;
    width: 380px;
    .slide_image {
      background-size: 345px;
      height: 1639px;
    }
  }
  @media screen and (max-width: 375px) {
    height: 165px;
    width: 300px;
    .slide_image {
      background-size: 300px;
      height: 1425px;
    }
  }
`;

const MonitoringAside = styled.aside``;

const EmbedContainer = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  max-width: 100%;
`;

const Biz = () => {
  return (
    <>
      <Section>
        <SunmapBox>
          <YoutubeBox>
            <EmbedContainer className="embed-container">
              <Iframe
                allowFullScreen
                title="햇빛바람지도_미리보기"
                src="https://www.youtube.com/embed/yGeiyZLHnlI?autoplay=1&mute=1&playlist=yGeiyZLHnlI&loop=1&modestbranding=1&controls=0"
              />
            </EmbedContainer>
          </YoutubeBox>
          <SunmapArticle>
            <ArticleTitle>
              <img src="/biz/map.svg" alt="map_emoji" />
              <div className="title_font2 sunmap">햇빛바람지도</div>
            </ArticleTitle>
            <SunmapDiv>
              약 8만여 개의 태양광, 풍력 발전소를 한눈에 확인해보세요.
              <br />
              AI기술로 미래 발전량을 예측하고, 기상 정보를
              <br />
              다양한 방식으로 시각화하였습니다.
              <br />
              공공데이터 활용 우수사례로 대통령상을 수상하였습니다.
            </SunmapDiv>
            <LinkArea>
              <a
                href="https://map.60hz.io/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <LinkEffect>
                  <span>햇빛바람지도 바로가기</span>&nbsp;
                  <img src="/biz/arrow_forward_blue.svg" alt="arrow" />
                </LinkEffect>
              </a>
            </LinkArea>
          </SunmapArticle>
        </SunmapBox>
        <MonitoringDiv id="product">
          <MonitorArticle>
            <ArticleTitle>
              <img src="/biz/audio.svg" height="47px" alt="audio_emoji" />
              <div className="monitoring_title_div">
                <div className="title_font2">재생에너지</div>
                <div
                  className="title_font2"
                  style={{ fontFamily: 'Spoqa-Han-Sans-Neo-Bold' }}
                >
                  통합관제시스템
                </div>
              </div>
            </ArticleTitle>

            <MonitoringH2>
              보유하고 계신 다양한 분산 자원을 효율적으로
              <br />
              관리하고 싶으신가요? 전력 중개 사업, 발전량 예측과 같은
              <br />
              에너지 신사업에 참여하고 싶으신가요?
              <br />
              식스티헤르츠가 도와드리겠습니다.
            </MonitoringH2>
            <LinkArea>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSer94Hec0tHCNQ3FkYYtTA8S7DGU48LYX6GNvqTw8uDFIeWgA/viewform"
                target="_blank"
                style={{
                  color: '#1D336A',
                  textDecoration: 'none',
                  fontFamily: 'SUIT-Bold',
                  fontSize: '25px',
                  marginTop: '30px',
                }}
                rel="noreferrer"
              >
                <LinkEffect>
                  <span>솔루션 문의하기</span>&nbsp;
                  <img src="/biz/arrow_forward_blue.svg" alt="arrow" />
                </LinkEffect>
              </a>
            </LinkArea>
          </MonitorArticle>
          <MonitoringAside>
            <MonitoringImgArea>
              <MonitoringImgWrapper>
                <div className="slide_image"></div>
              </MonitoringImgWrapper>
            </MonitoringImgArea>
          </MonitoringAside>
        </MonitoringDiv>
      </Section>
      <Together />
    </>
  );
};

export default Biz;
