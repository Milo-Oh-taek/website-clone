import React from 'react';
import styled from 'styled-components';
import bounce from '../static/style/bounce';
import SeeMore from '../static/style/seemore';

const Wrapper = styled.section`
  background-color: rgb(245, 248, 250);
  max-width: 100%;
  margin-top: 0px;
  height: auto;
  padding: 2rem 0 140px 0;
  @media screen and (max-width: 770px) {
    padding-bottom: 120px;
    padding-top: 1rem;
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 90px;
    padding-top: 0px;
  }
`;

const PressnameArea = styled.div`
  textalign: left;
  color: rgb(102, 102, 102);
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #444444;
  @media screen and (max-width: 420px) {
    font-size: 10px;
    img {
      height: 10px;
    }
    margin-bottom: 5px;
  }
`;

const ArticleWrapper = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;
  @media screen and (max-width: 770px) {
    margin-bottom: 30px;
  }
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
    height: 150px;
    overflow-x: auto;
    overflow-y: hidden;
    width: 90%;
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
  @media screen and (max-width: 500px) {
    width: 90%;
    height: 130px;
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
  @media screen and (max-width: 500px) {
    border-bottom: none;
    width: 40%;
    margin-right: 15px;
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
  @media screen and (max-width: 500px) {
    line-height: 20px;
  }
  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

const TitleH4 = styled.h4`
  margin: 120px 0 70px;
  @media screen and (max-width: 770px) {
    font-size: 35px;
    margin: 100px 0 50px;
  }
  @media screen and (max-width: 500px) {
    margin: 0;
    padding: 90px 0 40px;
    font-size: 25px;
  }
`;

const SeemoreArea = styled.div`
  margintop: 60px;
`;

const Press = () => {
  return (
    <Wrapper>
      <TitleH4 className="title_font2">?????? ?????? ??????????????????</TitleH4>
      <ArticleWrapper className="home_megazine">
        <ArticleUl>
          <ArticleLi>
            <a
              href="https://futurechosun.com/archives/56258"
              target="_blank"
              rel="noreferrer"
            >
              <PressnameArea>
                ???????????? ??????????????? &nbsp;
                <img
                  height="12px"
                  src="/home/forward_arrow_press.svg"
                  alt="icon"
                />
              </PressnameArea>
              <PressContentP>
                "??????????????? ?????? ?????????
                <br />
                '???????????????' ...?????? ?????? ??????"
              </PressContentP>
            </a>
          </ArticleLi>
          <ArticleLi>
            <a
              href="https://www.joongang.co.kr/article/25004739#home"
              target="_blank"
              rel="noreferrer"
            >
              <PressnameArea>
                ????????????&nbsp;
                <img
                  height="12px"
                  src="/home/forward_arrow_press.svg"
                  alt="icon"
                />
              </PressnameArea>

              <PressContentP>
                SKT, ???????????? ??????...
                <br />
                "??????????????? ???????????????"
                <br />
                ?????? ?????????
              </PressContentP>
            </a>
          </ArticleLi>
          <ArticleLi>
            <a
              href="https://www.yna.co.kr/view/AKR20211119150100017?section=industry/technology-science"
              target="_blank"
              rel="noreferrer"
            >
              <PressnameArea>
                ????????????&nbsp;
                <img
                  height="12px"
                  src="/home/forward_arrow_press.svg"
                  alt="icon"
                />
              </PressnameArea>

              <PressContentP>
                ??????????????? ??????, ????????????
                <br />
                ?????? ????????? ????????? ????????? ??????
              </PressContentP>
            </a>
          </ArticleLi>
          <ArticleLi>
            <a
              href="https://news.mt.co.kr/mtview.php?no=2021080615324868175"
              target="_blank"
              rel="noreferrer"
            >
              <PressnameArea>
                ???????????????&nbsp;
                <img
                  height="12px"
                  src="/home/forward_arrow_press.svg"
                  alt="icon"
                />
              </PressnameArea>

              <PressContentP>
                '????????? ?????????' ?????? ??????
                <br />
                AI ??????..'??????????????????' ??????
              </PressContentP>
            </a>
          </ArticleLi>
          <ArticleLi>
            <a
              href="http://www.electimes.com/news/articleView.html?idxno=221745"
              target="_blank"
              rel="noreferrer"
            >
              <PressnameArea>
                ????????????&nbsp;
                <img
                  height="12px"
                  src="/home/forward_arrow_press.svg"
                  alt="icon"
                />
              </PressnameArea>

              <PressContentP>
                ??????????????????,
                <br />
                ????????? ???????????? ????????? ??????????????? ????????????
              </PressContentP>
            </a>
          </ArticleLi>
          <ArticleLi>
            <a
              href="https://www.e2news.com/news/articleView.html?idxno=235448"
              target="_blank"
              rel="noreferrer"
            >
              <PressnameArea>
                ????????????&nbsp;
                <img
                  height="12px"
                  src="/home/forward_arrow_press.svg"
                  alt="icon"
                />
              </PressnameArea>

              <PressContentP>
                ??????????????????,
                <br />
                ???????????????????? ????????? ??????
                <br />
                ?????? ????????????
              </PressContentP>
            </a>
          </ArticleLi>
        </ArticleUl>
      </ArticleWrapper>

      <SeemoreArea>
        <a
          target="_blank"
          href="https://blue-ocarina-b66.notion.site/7521f6afa92c418080a84bfd148b74ea"
          rel="noreferrer"
        >
          <SeeMore>?????????</SeeMore>
        </a>
      </SeemoreArea>
    </Wrapper>
  );
};

export default Press;
