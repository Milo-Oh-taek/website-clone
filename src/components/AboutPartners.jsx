import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 650px;
  margin-top: 150px;
  margin-bottom: 100px;
  .title.title_font2 {
    margin-bottom: 22px;
  }
  .subtitle {
    color: #848484;
    font-size: 22px;
    margin-top: 20px;
  }
  @media screen and (max-width: 1280px) {
    margin-bottom: 100px;
    .subtitle {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 1080px) {
    margin-top: 250px;
  }
  @media screen and (max-width: 770px) {
    margin-top: 350px;
    margin-bottom: 0px;
    .title.title_font2 {
      margin-bottom: 10px;
    }
    .subtitle {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 500px) {
    height: 720px;
    h5 {
      font-size: 18px;
      margin-top: 15px;
    }
    .subtitle {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 370px) {
    height: 600px;
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
    // margin-right: 25px;
    // width: 100%;
    height: 90px;
  }
  @media screen and (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    width: 800px;
    height: 120px;
    img {
      height: 60px;
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
      height: 50px;
    }
  }
  // @media screen and (max-width: 550px) {
  //   width: 95%;
  //   img {
  //     height: 55px;
  //   }
  // }
  @media screen and (max-width: 500px) {
    width: 100%;
    img {
      height: 45px;
    }
  }
  @media screen and (max-width: 370px) {
    width: 100%;
    img {
      height: 40px;
    }
    height: 80px;
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
      height: 18px;
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
        <h1 className="title title_font2">함께하는 기업들</h1>
        <div className="subtitle">2021년 9월 28일 기준</div>
        <ContentWrapper>
          <Row>
            <RowTitle>엑셀러레이팅</RowTitle>
            <div>
              <img src="/about/logo/sk_box.png"></img>
            </div>
            <div>
              <img src="/about/logo/lg_box.png"></img>
            </div>
            <div>
              <img src="/about/logo/온드림_box.png"></img>
            </div>
            <div>
              <img src="/about/logo/신한_box.png"></img>
            </div>
            <div>
              <img src="/about/logo/kwater_box.png"></img>
            </div>
          </Row>
          <Row>
            <RowTitle>투자사</RowTitle>
            <div>
              <img src="/about/logo/소풍_box.png"></img>
            </div>
            <div>
              <img src="/about/logo/mysc_box.png"></img>
            </div>
            <div>
              <img src="/about/logo/제로원_box.png"></img>
            </div>
          </Row>
          <Row>
            <RowTitle>파트너</RowTitle>
            <div>
              <img src="/about/logo/굿네이버스_box.png"></img>
            </div>
            <div>
              <img src="/about/logo/그리드위즈_box.png"></img>
            </div>
            <div>
              <img src="/about/logo/인업스_box.png"></img>
            </div>
          </Row>
          <Row style={{ borderBottom: 'none' }}>
            <RowTitle>소셜 임팩트</RowTitle>
            <div>
              <img src="/about/logo/임팩트_box.png"></img>
            </div>
            <div>
              <img src="/about/logo/소셜혁신연구소_box.png"></img>
            </div>
            <div>
              <img src="/about/logo/유쾌한반란_box.png"></img>
            </div>
          </Row>
        </ContentWrapper>
      </div>
    </Wrapper>
  );
};

export default AboutPartners;
