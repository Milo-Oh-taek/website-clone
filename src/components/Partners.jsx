import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bounce from '../static/style/bounce';

const Wrapper = styled.section`
  width: 100%;
  max-width: 100%;
  padding-bottom: 200px;
  // margin: 0 auto;
  // clear: both;
  // height: auto;
  background-color: rgb(245, 248, 250);
  // display: inline-block;
  .col {
    padding: 1.5rem 0;
  }
`;

const BorderLine = styled.div`
  display: flex;
  justify-content: center;
  div {
    border-top: 0.5px solid rgb(37, 37, 37);
    width: 85%;
    height: 0px;
    padding-bottom: 200px;
    @media screen and (max-width: 420px) {
      padding-bottom: 120px;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentUl = styled.ul`
  grid-gap: 50px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 100px;
  mix-blend-mode: multiply;
  padding-left: 0;
  @media screen and (max-width: 1280px) {
    gap: 30px;
  }
  @media screen and (max-width: 770px) {
    gap: 30px 3px;
  }
  @media screen and (max-width: 550px) {
    width: 90vw;
    grid-gap: 0px;
    gap: 1px;
    margin-top: 60px;
    margin-bottom: 0;
    // grid-template-columns: repeat(2, 1fr);
  }
`;

const ContentLi = styled.li`
  display: flex;
  flex-direction: column;
  img {
    @media screen and (max-width: 1280px) {
      height: 50px;
      width: 227px;
    }
    @media screen and (max-width: 770px) {
      height: 40px;
      width: 180px;
    }
    @media screen and (max-width: 550px) {
      height: 100%;
      width: 100%;
      margin-bottom: 15px;
    }
  }
`;

const TitleH1 = styled.h1`
  margin-bottom: 22px;
  // @media screen and (max-width: 770px) {
  //   font-size: 35px;
  // }
  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const MoreLinkArea = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  width: 100%;
  &:hover {
    img {
      animation: ${bounce};
      animation-direction: alternate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
  @media screen and (max-width: 550px) {
    margin-top: 60px;
  }
`;

const MoreLink = styled.div`
  color: black;
  font-family: SUIT-Bold;
  font-size: 28px;
  border-bottom: 2px solid;
  padding-bottom: 5px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 28px;
  }
  @media screen and (max-width: 770px) {
    font-size: 22px;
    img {
      height: 22px;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
    img {
      height: 16px;
    }
  }
`;

const Partners = () => {
  return (
    <Wrapper>
      <BorderLine>
        <div></div>
      </BorderLine>
      <div>
        <TitleH1 className="title_font2">함께하는 기업들</TitleH1>
        <div>2021년 9월 28일 기준</div>
        <ContentContainer>
          <ContentUl>
            <ContentLi>
              <img src="/home/logo/skt.png" alt="ESG_Logo" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/LG2.png" alt="LG_Logo" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/ondream.png" alt="H온드림_Logo" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/shinhan.png" alt="신한_Logo" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/kwater.png" alt="Kwater_Logo" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/sopoong.png" alt="소풍_Logo" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/mysc.png" alt="mysc_Logo" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/zeroone.png" alt="제로원_Logo" />
            </ContentLi>
            <ContentLi>
              <img src="/home/logo/BNZ.png" alt="BNZ_Logo" />
            </ContentLi>
          </ContentUl>
        </ContentContainer>

        <MoreLinkArea>
          <Link to="about#partnersection">
            <MoreLink>
              더 많은 파트너 보기
              <img src="/home/arrow_forward.svg" alt="icon" />
            </MoreLink>
          </Link>
        </MoreLinkArea>
      </div>
    </Wrapper>
  );
};

export default Partners;
