import React from 'react';
import Recruit from '../components/Recruit';
// import Recruit from '../components/Recruit2';
import Together from '../components/Together';
import { SeeMore } from './home';
import styled from 'styled-components';

const TitleH1 = styled.h1`
  font-family: SUIT-Bold;
  line-height: 65px;
  margin-bottom: 30px;
  @media screen and (max-width: 1280px) {
    font-size: 37px;
  }
  @media screen and (max-width: 770px) {
    line-height: 50px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px;
    line-height: 40px;
  }
`;

const MainWrapper = styled.main`
  padding-bottom: 260px;
  @media screen and (max-width: 1280px) {
    img {
      height: 50px;
    }
  }
  @media screen and (max-width: 770px) {
    img {
      height: 40px;
    }
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 150px;
    img {
      height: 30px;
    }
  }
`;

const SectionWrapper = styled.section`
  // height: 1209px;
  padding-top: 240px;
  background: linear-gradient(
    172.3deg,
    rgba(254, 251, 193, 0.92) 0%,
    rgba(198, 245, 255, 0) 90.22%
  );

  @media screen and (max-width: 1280px) {
    h1 {
      font-size: 37px;
    }
  }
  @media screen and (max-width: 770px) {
    h1 {
      line-height: 50px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    padding-top: 120px;
    h1 {
      font-size: 25px;
      line-height: 40px;
    }
  }
`;

const WorkContentTitle = styled.h1`
  text-align: left;
  font-family: SUIT-Bold;
  @media screen and (max-width: 1300px) {
    margin-left: 5%;
  }
  @media screen and (max-width: 965px) {
    text-align: center;
    margin: 0;
  }
`;

const WorkContentWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  gap: 143px;
  justify-content: center;
  flex-wrap: wrap;
  h1{
    font-family: SUIT-SemiBold;
     font-size: 27px;
  }
  @media screen and (max-width: 1300px) {
    gap: 80px;
    h1 {
      font-size: 23px;
    }
    img{
      height:40px;
    }
    li {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 1100px) {
    gap: 30px;
    h1 {
      font-size: 23px;
    }

    img{
      height:40px;
    }
    li {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 965px) {
      width: 90vw;
      display: flex;
      justify-content: start;
      padding-left: 10%;
    h1 {
      font-size: 30px;
      line-height: 50px;
      margin-bottom: 20px;
    }
    li {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 770px) {
    h1 {
      line-height: 50px;
    }
  }
  @media screen and (max-width: 500px) {
    margin-top: 40px;
    h1 {
      font-size: 20px;
      margin-bottom: 0px;
    }
    li {
      font-size: 18px;
      line-height: 30px;
    }
`;

const WorkContentUl = styled.ul`
  list-style: none;
  text-align: left;
  line-height: 35px;
  font-size: 22px;
  margin: 1rem 0 0 0;
  padding: 0;
  @media screen and (max-width: 500px) {
    margin-top: 0;
`;

const Career = () => {
  return (
    <>
      <SectionWrapper>
        <MainWrapper>
          <TitleH1>
            식스티헤르츠와 함께
            <br />
            에너지 시장의 새로운 미래를
            <br />
            열어갈 당신을 기다립니다.
          </TitleH1>
          <img src="/emoji_finger.png" alt="Finger_emoji" />
          <img src="/emoji_finger.png" alt="Finger_emoji" />
          <img src="/emoji_finger.png" alt="Finger_emoji" />
        </MainWrapper>
        <div style={{ margin: '0 auto', maxWidth: '1300px' }}>
          <WorkContentTitle>함께 만들어나가는 문화</WorkContentTitle>
          <WorkContentWrapper>
            <div style={{ textAlign: 'left' }} className="item_wrapper">
              <div>
                <img src="/human.png" alt="Finger_emoji" />
              </div>
              <WorkContentUl>
                <li>
                  <h1>집중할 수 있는 업무 환경</h1>
                </li>
                <li>· 최신 사양 노트북 직무별 맞춤 지원</li>
                <li>· 식사비와 무제한 간식 제공</li>
                <li>· 업무 관련 도서 상시 신청 가능</li>
                <li>* 청년내일채움공제 지원</li>
              </WorkContentUl>
            </div>
            <div style={{ textAlign: 'left' }}>
              <img src="/score.png" alt="Finger_emoji" />
              <WorkContentUl>
                <li>
                  <h1>유연한 근무시간</h1>
                </li>
                <li>· 8-11시 시차 출퇴근제</li>
                <li>· 눈치보지 않는 연차/반차/반반차 사용</li>
                <li>· 생일 축하 휴가(생일자 4시간 근무)</li>
                <li>· 동서남북 오피스(명동, 역삼, 성수)</li>
              </WorkContentUl>
            </div>
            <div style={{ textAlign: 'left' }}>
              <img src="/talk.png" alt="Finger_emoji" />
              <WorkContentUl>
                <li>
                  <h1>수평적인 소통문화</h1>
                </li>
                <li>· 한달 한번 전직원 올핸즈 미팅</li>
                <li>· 직급 상관없이 모든 팀원 '님' 호칭 사용</li>
                <li>· 워크툴 이용한 활발한 업무 정보 공유</li>
                <li> &nbsp;&nbsp;&nbsp;(슬랙·노션·플렉스·먼데이닷컴)</li>
              </WorkContentUl>
            </div>
          </WorkContentWrapper>
        </div>
      </SectionWrapper>
      <Recruit />
      <Together />
    </>
  );
};

export default Career;
