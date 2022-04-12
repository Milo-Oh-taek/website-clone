import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 650px;
  margin-top: 150px;
  margin-bottom: 100px;
  h5 {
    margin-top: 20px;
  }
  @media screen and (max-width: 1280px) {
    margin-bottom: 100px;
  }
  @media screen and (max-width: 1080px) {
    margin-top: 250px;
  }
  @media screen and (max-width: 770px) {
    margin-top: 350px;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 500px) {
    height: 600px;
    h5 {
      font-size: 18px;
      margin-top: 15px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 50px;
`;

const Row = styled.div`
  border-bottom: 0.5px solid #b0afaf;
  width: 1250px;
  height: 95px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  img {
    margin-right: 25px;
  }
  @media screen and (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    width: 800px;
    img {
      height: 24px;
      margin-right: 0;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 770px) {
    width: 90%;
    img {
      height: 18px;
    }
  }
  @media screen and (max-width: 550px) {
    width: 95%;
    img {
      height: 12px;
    }
  }
  @media screen and (max-width: 500px) {
    width: 95%;
    img {
      height: 12px;
    }
  }
`;

const RowTitle = styled.div`
  display: inline-block;
  width: 200px;
  font-family: SUIT-Bold;
  font-size: 20px;
  @media screen and (max-width: 1280px) {
    bottom: 0;
    text-align: center;
  }
  @media screen and (max-width: 770px) {
    font-size: 15px;
  }
  @media screen and (max-width: 420px) {
    font-size: 13px;
    width: 140px;
  }
`;

const Col = styled.div`
  height: 95px;
  display: flex;
  justify-content: center;
  img {
    height: 25%;
  }
  @media screen and (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    width: 740px;
    img {
      height: 20px;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 770px) {
    width: 630px;
    img {
      height: 12px;
    }
  }
  @media screen and (max-width: 550px) {
    width: 450px;
    img {
      height: 10px;
    }
  }
  @media screen and (max-width: 420px) {
    width: 95%;
    img {
      height: 9px;
    }
  }
`;

const AboutPartners = () => {
  return (
    <Wrapper id="partnersection">
      <div>
        <h1 className="title_font2">함께하는 기업들</h1>
        <h5>2021년 9월 28일 기준</h5>
        <ContentWrapper>
          <Row>
            <RowTitle>엑셀러레이팅</RowTitle>
            <div>
              <img src="/about/logo/skt.png"></img>
            </div>
            <div>
              <img src="/about/logo/lg.png"></img>
            </div>
            <div>
              <img src="/about/logo/ondream.png"></img>
            </div>
            <div>
              <img src="/about/logo/shinhan.png"></img>
            </div>
            <div>
              <img src="/about/logo/kwater.png"></img>
            </div>
          </Row>
          <Row>
            <RowTitle>투자사</RowTitle>
            <div>
              <img src="/about/logo/소풍.png"></img>
            </div>
            <div>
              <img src="/about/logo/mysc.png"></img>
            </div>
            <div>
              <img src="/about/logo/zeroone.png"></img>
            </div>
          </Row>
          <Row>
            <RowTitle>파트너</RowTitle>
            <div>
              <img src="/about/logo/BNZ.png"></img>
            </div>
            <div>
              <img src="/about/logo/굿네이버스.png"></img>
            </div>
            <div>
              <img src="/about/logo/GW.png"></img>
            </div>
            <div>
              <img src="/about/logo/인업스.png"></img>
            </div>
          </Row>
          <Row style={{ borderBottom: 'none' }}>
            <RowTitle>소셜 임팩트</RowTitle>
            <div>
              <img src="/about/logo/impact.png"></img>
            </div>
            <div>
              <img src="/about/logo/소셜혁신연구소.png"></img>
            </div>
            <div>
              <img src="/about/logo/유쾌한반란.png"></img>
            </div>
          </Row>
        </ContentWrapper>
      </div>
    </Wrapper>
  );
};

export default AboutPartners;
