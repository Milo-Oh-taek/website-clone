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
  .title {
    font-size: 40px;
    font-family: SUIT-Bold;
  }
  .subtitle {
    font-size: 24px;
    font-family: SUIT-Medium;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1280px) {
    img {
      height: 50px;
      width: 50px;
    }
    .title {
      font-size: 30px;
    }
    .subtitle {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 770px) {
    img {
      height: 45px;
      width: 45px;
    }
    height: 300px;
    .title {
      font-size: 25px;
      margin-bottom: 4px;
      line-height: 30px;
    }
    .subtitle {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      height: 40px;
      width: 40px;
    }
    height: 300px;
    .title {
      font-size: 25px;
      margin-bottom: 4px;
      line-height: 30px;
    }
    .subtitle {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 420px) {
    img {
      height: 35px;
      width: 35px;
    }
    height: 300px;
    .title {
      font-size: 25px;
      margin-bottom: 4px;
      line-height: 30px;
    }
    .subtitle {
      font-size: 15px;
      margin-bottom: 20px;
    }
  }
`;

const Together = () => {
  return (
    <SectionWrapper>
      <div>
        <img src="/emoji.png" width="60px" height="60px" alt="emoji" />
        <div className="title">함께해요!</div>
        <div className="subtitle">
          에너지 시장의 새로운 미래를 열어갈 당신을 기다립니다.
        </div>
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
