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
    margin: 50px 0 100px 0;
    .subtitle {
      font-size: 20px;
      margin-top: 0px;
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
    .subtitle {
      margin: 0;
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
  align-items: center;
  img {
    height: 90px;
  }
  div {
    margin-right: 3%;
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
  font-size: 22px;
  @media screen and (max-width: 1280px) {
    font-size: 20px;
    bottom: 0;
    text-align: center;
  }
  @media screen and (max-width: 770px) {
    font-size: 18px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const AboutPartners = () => {
  return (
    <Wrapper id="partnersection">
      <div>
        <h1 className="title title_font2">???????????? ?????????</h1>
        <div className="subtitle">2021??? 9??? 28??? ??????</div>
        <ContentWrapper>
          <Row>
            <RowTitle>??????????????????</RowTitle>
            <div>
              <img src="/about/logo/sk_box2.png" alt="sk_logo"></img>
            </div>
            <div>
              <img src="/about/logo/lg_box2.png" alt="lg_logo"></img>
            </div>
            <div>
              <img src="/about/logo/?????????_box2.png" alt="?????????_logo"></img>
            </div>
            <div>
              <img src="/about/logo/??????_box2.png" alt="??????_logo"></img>
            </div>
            <div>
              <img src="/about/logo/kwater_box.png" alt="kwater_logo"></img>
            </div>
          </Row>
          <Row>
            <RowTitle>?????????</RowTitle>
            <div>
              <img src="/about/logo/??????_box2.png" alt="??????_logo"></img>
            </div>
            <div>
              <img src="/about/logo/mysc_box2.png" alt="mysc_logo"></img>
            </div>
            <div>
              <img src="/about/logo/?????????_box.png" alt="?????????_logo"></img>
            </div>
          </Row>
          <Row>
            <RowTitle>?????????</RowTitle>
            <div>
              <img
                src="/about/logo/???????????????_box2.png"
                alt="???????????????_logo"
              ></img>
            </div>
            <div>
              <img
                src="/about/logo/???????????????_box2.png"
                alt="???????????????_logo"
              ></img>
            </div>
            <div>
              <img src="/about/logo/?????????_box2.png" alt="?????????_logo"></img>
            </div>
          </Row>
          <Row style={{ borderBottom: 'none' }}>
            <RowTitle>?????? ?????????</RowTitle>
            <div>
              <img src="/about/logo/?????????_box2.png" alt="?????????_logo"></img>
            </div>
            <div>
              <img
                src="/about/logo/?????????????????????_box2.png"
                alt="?????????????????????_logo"
              ></img>
            </div>
            <div>
              <img
                src="/about/logo/???????????????_box2.png"
                alt="???????????????_logo"
              ></img>
            </div>
          </Row>
        </ContentWrapper>
      </div>
    </Wrapper>
  );
};

export default AboutPartners;
