import React from 'react';
import styled from 'styled-components';
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
    width: 50vw;
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
      <ContentUl>
        <ContentLi className="award_item one" {...firstRef}>
          <img src="/about/logo/???????????????.svg" alt="???????????????_Logo" />
          ???9??? ????????? ??????????????? ??????
          <br className="content_pc_br" />
          ?????????????????? (????????????)
          <br />
          <span>2021.11</span>
        </ContentLi>
        <ContentLi className="award_item two" {...secondRef}>
          <img src="/about/logo/???????????????.svg" alt="???????????????_Logo" />
          ???9??? ????????? ??????????????? ??????
          <br className="content_pc_br" />
          ?????????????????? (????????????)
          <br />
          <span>2021.11</span>
        </ContentLi>
        <ContentLi className="award_item three" {...thirdRef}>
          <img src="/about/logo/?????????????????????.svg" alt="?????????????????????_Logo" />
          ???9??? ????????? ??????????????? ??????
          <br className="content_pc_br" />
          ?????????????????? (????????????)
          <br />
          <span>2021.11</span>
        </ContentLi>
        <ContentLi className="award_item four" {...fourthRef}>
          <img src="/about/logo/?????????.svg" alt="?????????_Logo" />
          ???9??? ????????? ??????????????? ??????
          <br className="content_pc_br" />
          ?????????????????? (????????????)
          <br />
          <span>2021.11</span>
        </ContentLi>
      </ContentUl>
    </Wrapper>
  );
};

export default AboutAwards;
