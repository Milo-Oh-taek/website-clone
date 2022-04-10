import React from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';

import { Container, Row, Col } from 'react-bootstrap';
import useScroll from '../hooks/useScroll';

const Wrapper = styled.div`
  margin: 50px 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .inside_of_viewport1 {
    transform: translateY(-50px);
    transition-duration: 0.3s;
  }
  .inside_of_viewport2 {
    transform: translateY(-50px);
    transition-duration: 0.5s;
  }
  .inside_of_viewport3 {
    transform: translateY(-50px);
    transition-duration: 0.7s;
  }
  .inside_of_viewport4 {
    transform: translateY(-50px);
    transition-duration: 0.9s;
  }
  .out_of_viewport {
    transform: translateY(30px);
  }
  @media screen and (max-width: 1080px) {
    margin: 100px 0;
  }
  @media screen and (max-width: 420px) {
    margin: 0;
  }
`;

const ContentWrapper = styled.div`
  .award_item {
    background-color: #f5f8fa;
    width: 340px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: SUIT-SemiBold;
    span {
      font-family: SUIT-Regular;
    }
  }
  .inside_of_viewport1 {
    transform: translateY(-50px);
    transition-duration: 0.3s;
  }
  .inside_of_viewport2 {
    transform: translateY(-50px);
    transition-duration: 0.5s;
  }
  .inside_of_viewport3 {
    transform: translateY(-50px);
    transition-duration: 0.7s;
  }
  .inside_of_viewport4 {
    transform: translateY(-50px);
    transition-duration: 0.9s;
  }
  .out_of_viewport {
    transform: translateY(50px);
  }
`;
const ContentUl = styled.ul`
  display: grid;
  gap: 13px;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  width: 1440px;
  height: 250px;
  padding: 0;

  @media screen and (max-width: 1600px) {
    width: 1290px;
  }
  @media screen and (max-width: 1280px) {
    width: 1000px;
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    // width: 50vw;
  }
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(1, 1fr);
    width: 700px;
    /* grid-gap: 10px; */
    gap: 20px;
  }
`;

const ContentLi = styled.li`
  height: 250px;
  background-color: #f5f8fa;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: SUIT-SemiBold;
  font-size: 18px;
  span {
    font-family: SUIT-Regular;
  }

  img {
    height: 38px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1480px) {
    height: 200px;
    /* width: 300px; */
  }
  @media screen and (max-width: 1280px) {
    font-size: 17px;
    height: 200px;
    /* width: 250px; */
    img {
      height: 30px;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: 770px) {
    height: 130px;
    margin: 0 auto;
    width: 90%;
    .content_pc_br {
      display: none;
    }
  }
  @media screen and (max-width: 420px) {
    font-size: 12px;
    height: 120px;
    /* width: 85%; */
    line-height: 20px;
  }
`;
const AboutAwards = () => {
  const firstRef = useScroll();
  const secondRef = useScroll();
  const thirdRef = useScroll();
  const fourthRef = useScroll();
  return (
    <Wrapper>
      {/* <ContentWrapper> */}
      <ContentUl>
        <ContentLi className="award_item one" {...firstRef}>
          {/* <div className="award_item one" {...firstRef}> */}
          <img src="/about/logo/행정안전부.svg" />
          제9회 범정부 공공데이터 활용
          <br className="content_pc_br" />
          창엽경진대회 (대통령상)
          <br />
          <span>2021.11</span>
          {/* </div> */}
        </ContentLi>

        <ContentLi className="award_item two" {...secondRef}>
          {/* <div className="award_item two" {...secondRef}> */}
          <img src="/about/logo/고용노동부.svg" />
          제9회 범정부 공공데이터 활용
          <br className="content_pc_br" />
          창엽경진대회 (대통령상)
          <br />
          <span>2021.11</span>
          {/* </div> */}
        </ContentLi>
        <ContentLi className="award_item three" {...thirdRef}>
          {/* <div className="award_item three" {...thirdRef}> */}
          <img src="/about/logo/산업통상자원부.svg" />
          제9회 범정부 공공데이터 활용
          <br className="content_pc_br" />
          창엽경진대회 (대통령상)
          <br />
          <span>2021.11</span>
          {/* </div> */}
        </ContentLi>
        <ContentLi className="award_item four" {...fourthRef}>
          {/* <div className="award_item four" {...fourthRef}> */}
          <img src="/about/logo/중기부.svg" />
          제9회 범정부 공공데이터 활용
          <br className="content_pc_br" />
          창엽경진대회 (대통령상)
          <br />
          <span>2021.11</span>
          {/* </div> */}
        </ContentLi>
      </ContentUl>
      {/* </ContentWrapper> */}
    </Wrapper>
  );
};

export default AboutAwards;
