import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { SeeMore } from '../page/home';

const Wrapper = styled.section`
    background-color: rgb(245, 248, 250);
    max-width: 100%;
    margin-top: 2vh;
    height: auto;
    padding 1rem 0 200px 0;
    @media screen and (max-width: 420px) {
      padding-bottom: 120px;
    }
`;

const ContentContainer = styled(Container)`
  max-width: 1190px;
  width: 100%;
  margin: 0 auto;
  font-family: SUIT-Regular;
`;

const ContentRow = styled(Row)`
  width: 80%;
  position: relative;
  margin: 0 auto 20px;
  @media screen and (max-width: 1250px) {
    width: 90%;
  }
`;

const ContentCol = styled(Col)`
  display: flex;
  flex-direction: column;
  width: 33%;
  margin: 0;
`;
export const bounce = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(15px);
  }
`;

const ItemArea = styled.div`
  cursor: pointer;
  border-bottom: 1px solid rgb(37, 37, 37);
  background-color: transparent;
  text-align: left;
  margin: 0;
  font-family: SUIT-Regular;
  font-size: 25px;
  box-shadow: none;
  a {
    text-decoration: none;
  }
  &:hover {
    img {
      animation: ${bounce};
      animation-direction: alternate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
`;

const PressnameArea = styled.div`
  textalign: left;
  color: rgb(102, 102, 102);
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media screen and (max-width: 420px) {
    font-size: 10px;
  }
`;

const PressContentArea = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin-top: 15px;
  font-size: 18px;
  padding: 5px 0 0;
  text-align: left;
  width: 100%;

  @media screen and (max-width: 1250px) {
    font-size: 15px;
  }
`;

const ArticleWrapper = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const ArticleUl = styled.ul`
  display: grid;
  gap: 40px 0;
  grid-gap: 35px 0;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  list-style: none;
  padding: 0;
  @media screen and (max-width: 770px) {
    display: -webkit-inline-box;
    height: 170px;
    overflow-x: auto;
    overflow-y: hidden;
    width: 80%;
    ::-webkit-scrollbar {
      height: 4px;
      width: 100%;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #2f3542;
    }
    ::-webkit-scrollbar-track {
      background-color: #e3e3e3;
    }
  }
`;

const ArticleLi = styled.li`
  border-bottom: 1px solid black;
  width: 85%;
  a {
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 770px) {
    border-bottom: none;
    width: 45%;
  }
`;

const PressContentP = styled.p`
  height: 115px;
  line-height: 30px;
  text-align: left;
  margin-bottom: 0;
  font-size: 20px;
  @media screen and (max-width: 1280px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1250px) {
    font-size: 17px;
  }
  @media screen and (max-width: 770px) {
    font-size: 15px;
    line-height: 27px;
  }
  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

const TitleH4 = styled.h4`
  font-family: SUIT-SemiBold;
  padding: 180px 0 70px;
  font-size: 40px;
  line-height: 45px;
  @media screen and (max-width: 770px) {
    font-size: 35px;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px;
    padding-top: 80px;
  }
`;

const Press = () => {
  return (
    <Wrapper>
      <TitleH4>언론 속의 식스티헤르츠</TitleH4>
      <ArticleWrapper className="home_megazine">
        <ArticleUl>
          <ArticleLi>
            <a href="https://futurechosun.com/archives/56258" target="_blank">
              <PressnameArea>
                조선일보 더나은미래
                <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
              </PressnameArea>
              <PressContentP>
                "재생에너지 효율 높이는
                <br />
                '가상발전소' ...선택 아닌 필수"
              </PressContentP>
            </a>
          </ArticleLi>
          <ArticleLi>
            <a
              href="https://www.joongang.co.kr/article/25004739#home"
              target="_blank"
            >
              <PressnameArea>
                중앙일보
                <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
              </PressnameArea>

              <PressContentP>
                SKT, 현대차도 주목...
                <br />
                "재생에너지 가상발전소"
                <br />
                만든 이사람
              </PressContentP>
            </a>
          </ArticleLi>
          <ArticleLi>
            <a
              href="https://www.yna.co.kr/view/AKR20211119150100017?section=industry/technology-science"
              target="_blank"
            >
              <PressnameArea>
                연합뉴스
                <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
              </PressnameArea>

              <PressContentP>
                재생에너지 시대, 수십만개
                <br />
                작은 발전소 발전량 예측이 필수
              </PressContentP>
            </a>
          </ArticleLi>
          <ArticleLi>
            <a
              href="https://news.mt.co.kr/mtview.php?no=2021080615324868175"
              target="_blank"
            >
              <PressnameArea>
                머니투데이
                <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
              </PressnameArea>

              <PressContentP>
                '태양광 기여도' 논쟁 해결
                <br />
                AI 등장..'식스티헤르츠' 개발
              </PressContentP>
            </a>
          </ArticleLi>
          <ArticleLi>
            <a
              href="http://www.electimes.com/news/articleView.html?idxno=221745"
              target="_blank"
            >
              <PressnameArea>
                전기신문
                <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
              </PressnameArea>

              <PressContentP>
                식스티헤르츠,
                <br />
                임팩트 투자사와 대기업 펀드로부터 투자유치
              </PressContentP>
            </a>
          </ArticleLi>
          <ArticleLi>
            <a
              href="https://www.e2news.com/news/articleView.html?idxno=235448"
              target="_blank"
            >
              <PressnameArea>
                이투뉴스
                <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
              </PressnameArea>

              <PressContentP>
                식스티헤르츠,
                <br />
                임팩트투자사· 대기업 펀드
                <br />
                동시 투자유치
              </PressContentP>
            </a>
          </ArticleLi>
        </ArticleUl>
      </ArticleWrapper>
      {/* <ContentContainer>
        <ContentRow>
          <ContentCol>
            <ItemArea>
              <a href="https://futurechosun.com/archives/56258" target="_blank">
                <PressnameArea>
                  조선일보 더나은미래
                  <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
                </PressnameArea>
                <PressContentArea>
                  <p>
                    "재생에너지 효율 높이는
                    <br />
                    '가상발전소' ...선택 아닌 필수"
                  </p>
                </PressContentArea>
              </a>
            </ItemArea>
          </ContentCol>
          <ContentCol>
            <ItemArea>
              <a
                href="https://www.joongang.co.kr/article/25004739#home"
                target="_blank"
              >
                <PressnameArea>
                  중앙일보
                  <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
                </PressnameArea>
                <PressContentArea>
                  <p>
                    SKT, 현대차도 주목...
                    <br />
                    "재생에너지 가상발전소"
                    <br />
                    만든 이사람
                  </p>
                </PressContentArea>
              </a>
            </ItemArea>
          </ContentCol>
          <ContentCol>
            <ItemArea>
              <a
                href="https://www.yna.co.kr/view/AKR20211119150100017?section=industry/technology-science"
                target="_blank"
              >
                <PressnameArea>
                  연합뉴스
                  <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
                </PressnameArea>
                <PressContentArea>
                  <p>
                    재생에너지 시대, 수십만개
                    <br />
                    작은 발전소 발전량 예측이 필수
                  </p>
                </PressContentArea>
              </a>
            </ItemArea>
          </ContentCol>
        </ContentRow>
        <ContentRow>
          <ContentCol>
            <ItemArea>
              <a
                href="https://news.mt.co.kr/mtview.php?no=2021080615324868175"
                target="_blank"
              >
                <PressnameArea>
                  머니투데이
                  <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
                </PressnameArea>
                <PressContentArea>
                  <p>
                    '태양광 기여도' 논쟁 해결
                    <br />
                    AI 등장..'식스티헤르츠' 개발
                  </p>
                </PressContentArea>
              </a>
            </ItemArea>
          </ContentCol>
          <ContentCol>
            <ItemArea>
              <a
                href="http://www.electimes.com/news/articleView.html?idxno=221745"
                target="_blank"
              >
                <PressnameArea>
                  전기신문
                  <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
                </PressnameArea>
                <PressContentArea>
                  <p>
                    식스티헤르츠,
                    <br />
                    임팩트 투자사와 대기업 펀드로부터
                    <br />
                    투자유치
                  </p>
                </PressContentArea>
              </a>
            </ItemArea>
          </ContentCol>
          <ContentCol>
            <ItemArea>
              <a
                href="https://www.e2news.com/news/articleView.html?idxno=235448"
                target="_blank"
              >
                <PressnameArea>
                  이투뉴스
                  <img height="17px" src="/home/arrow_forward.svg" alt="icon" />
                </PressnameArea>
                <PressContentArea>
                  <p>
                    식스티헤르츠,
                    <br />
                    임팩트투자사· 대기업 펀드
                    <br />
                    동시 투자유치
                  </p>
                </PressContentArea>
              </a>
            </ItemArea>
          </ContentCol>
        </ContentRow>
      </ContentContainer> */}
      <div
        className="w-100"
        style={{
          height: 'auto',
          backgroundColor: 'rgb(245, 248, 250)',
          marginTop: '60px',
        }}
      >
        <a
          target="_blank"
          href="https://blue-ocarina-b66.notion.site/7521f6afa92c418080a84bfd148b74ea"
          style={{ textDecorationLine: 'none' }}
        >
          <SeeMore>더보기</SeeMore>
        </a>
      </div>
    </Wrapper>
  );
};

export default Press;
