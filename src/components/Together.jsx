import React from 'react';
import styled from 'styled-components';
import SeeMore from '../static/style/seemore';

const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 430px;
  background: linear-gradient(
    98.95deg,
    #daffed 14.08%,
    hsla(57, 97%, 88%, 0.484) 93.35%,
    rgba(198, 245, 255, 0.48) 113.27%
  );
  h1 {
    font-family: SUIT-Bold;
    font-size: 35px;
    line-height: 70px;
  }
  h3 {
    font-family: SUIT-Regular;
    font-size: 20px;
    margin-bottom: 25px;
  }
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 770px) {
    img {
      height: 45px;
      width: 45px;
    }
    height: 300px;
    h1 {
      margin-top: 10px;
      font-size: 25px;
      line-height: 30px;
    }
    h3 {
      font-size: 15px;
      margin-bottom: 20px;
    }
  }
`;

const Together = () => {
  return (
    <SectionWrapper>
      <div>
        <img src="/emoji.png" width="68px" height="68px" alt="emoji" />
        <h1>함께해요!</h1>
        <h3>에너지 시장의 새로운 미래를 열어갈 당신을 기다립니다.</h3>
        <a
          href="https://blue-ocarina-b66.notion.site/994ec0493d0a4c9284529ee6fe932b79"
          target="_blank"
          rel="noreferrer"
        >
          <SeeMore>채용 바로가기</SeeMore>
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Together;
