import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: #f4f5f7;
  padding: 200px 0;
  .br {
    display: none;
  }
  h1,
  h3 {
    font-family: SUIT-Medium;
  }
  h3 {
    line-height: 45px;
    @media screen and (max-width: 770px) {
      font-size: 20px;
      line-height: 35px;
    }
    @media screen and (max-width: 500px) {
      font-size: 17px;
      line-height: 30px;
    }
    @media screen and (max-width: 420px) {
      font-size: 15px;
      line-height: 25px;
    }
  }
  span {
    color: #ec5b44;
  }
  img {
    height: 100%;
    width: 70%;
  }
  @media screen and (max-width: 770px) {
    .br {
      display: block;
    }
  }
  @media screen and (max-width: 420px) {
    padding: 100px 0;
  }
`;

const Members = () => {
  return (
    <Wrapper>
      <h1>식스티헤르츠 멤버들</h1>
      <article style={{ margin: '50px 0' }}>
        <h3>전체 멤버의 절반이 SW 및 알고리즘 개발 업무를 합니다.</h3>
        <h3>
          <span>30%</span>의 멤버가 석사 이상의 학력입니다.
        </h3>
        <h3>
          3~6년 사이의 경력자가 <span>50%</span>로<br className="br" /> 가장
          많은 비중을 차지하고 있습니다.
        </h3>
        <h3>
          전체 남녀 성비는 <span>1:1</span>입니다.
        </h3>
      </article>
      <img src="/about/members.png" />
    </Wrapper>
  );
};

export default Members;
