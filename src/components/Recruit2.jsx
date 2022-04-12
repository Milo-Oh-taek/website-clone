import React, { useState } from 'react';
import styled from 'styled-components';

import { Accordion } from 'react-bootstrap';
import SeeMore from '../static/style/seemore';

const JobTitle = styled(Accordion.Header)`
  border-top: 1px solid #c8c8c8;
  font-size: 20px;
  justify-content: space-between;
  line-height: 100px;
  padding-right: 20px;
  height: 100px;
  align-items: center;
  display: flex;
  img {
    cursor: pointer;
  }
  background-color: white;
`;
const JobTitleH2 = styled.h2`
  font-family: Spoqa-Han-Sans-Neo-Bold;
  margin: 0;
`;

const ArticleItem = styled.div`
  margin: 50px;
  font-size: 23px;
  p {
    line-height: 0.8rem;
  }
`;
const ArticleItemH2 = styled.h2`
  margin-bottom: 2rem;
`;
const ApplyAreaDiv = styled.div`
  margin: 50px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }
`;

const Recruit = () => {
  const [openItem, setOpenItem] = useState('');

  const openClose = (item) => {
    alert(item);
    return;
    if (openItem === item) {
      setOpenItem('');
    }
    setOpenItem(item);
  };

  return (
    <div
      style={{ margin: '300px auto', maxWidth: '1300px', textAlign: 'left' }}
    >
      <h1
        style={{
          fontSize: '40px',
          marginBottom: '50px',
          fontFamily: 'Pretendard-SemiBold',
        }}
      >
        인재영입
      </h1>
      <Accordion className="bg-danger">
        <Accordion.Item eventKey="0" style={{ border: 'none' }}>
          <JobTitle>
            <JobTitleH2>서비스 개발팀 - 백엔드</JobTitleH2>
            <img src="/hire_down.png" onClick={() => openClose('back')} />
          </JobTitle>
          <Accordion.Body>
            <ArticleItem>
              <ArticleItemH2>테크 스택</ArticleItemH2>
              <p>
                - 식스티헤르츠는 매일 10만개가 넘는 재생에너지 발전소의 발전량을
                예측하고 있습니다.
              </p>
              <p>
                - 한국, 미국, EU의 기상청 및 유관 기관에서 받은 대량 데이터를
                효율적으로 처리해야 합니다.
              </p>
              <p>
                - 인공위성 영상, 각국의 수치예보모델 자료를 아마존 클라우드
                기반으로 처리 합니다.
              </p>
            </ArticleItem>
            <ArticleItem>
              <ArticleItemH2>주요 업무</ArticleItemH2>
              <p>- 발전량 예측 API 등 백엔드 시스템 개발</p>
              <p>- 재생에너지 모니터링 시스템 개발 (대쉬보드)</p>
              <p>
                - 사용자 문제 해결을 위한 신규 피처(feature) 개발에 관한 논의에
                참여
              </p>
            </ArticleItem>
            <ArticleItem>
              <ArticleItemH2>개발 스택</ArticleItemH2>
              <p>
                - Django/Flask 등 Python 기반 Web Application Framework 경험
                (필수)
              </p>
              <p>- Web Application Framework / ORM 이해 (필수)</p>
              <p>- AWS 기반 인프라 사용 경험 (필수)</p>
              <p>- Slack / Jira / Confluence</p>
            </ArticleItem>
            <ApplyAreaDiv>
              <a
                href="https://www.notion.so/994ec0493d0a4c9284529ee6fe932b79"
                target="_blank"
              >
                <SeeMore>지원하기</SeeMore>
              </a>
            </ApplyAreaDiv>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{ border: 'none' }}>
          <JobTitle>
            <JobTitleH2>서비스 개발팀 - 프론트엔드</JobTitleH2>
            <img src="/hire_down.png" onClick={() => openClose('front')} />
          </JobTitle>
          <Accordion.Body>
            <ArticleItem>
              <ArticleItemH2>테크 스택</ArticleItemH2>
              <p>
                - 식스티헤르츠는 매일 10만개가 넘는 재생에너지 발전소의 발전량을
                예측하고 있습니다.
              </p>
              <p>
                - 한국, 미국, EU의 기상청 및 유관 기관에서 받은 대량 데이터를
                효율적으로 처리해야 합니다.
              </p>
              <p>
                - 인공위성 영상, 각국의 수치예보모델 자료를 아마존 클라우드
                기반으로 처리 합니다.
              </p>
            </ArticleItem>
            <ArticleItem>
              <ArticleItemH2>주요 업무</ArticleItemH2>
              <p>- 햇빛바람지도 개발 (https://map.60hz.io)</p>
              <p>- 재생에너지 모니터링 시스템 개발 (대쉬보드)</p>
            </ArticleItem>
            <ArticleItem>
              <ArticleItemH2>개발 스택</ArticleItemH2>
              <p>- HTML / JavaScript / CSS 관련 기본지식 보유 (필수)</p>
              <p>- Mapbox 기반 작업 경력 (우대)</p>
              <p>- DOM 랜더링 관련 지식 (우대)</p>
              <p>- 대쉬보드 구축 경험 (우대)</p>
              <p>- Slack / Jira / Confluence</p>
            </ArticleItem>
            <ApplyAreaDiv>
              <a
                href="https://www.notion.so/994ec0493d0a4c9284529ee6fe932b79"
                target="_blank"
              >
                <SeeMore>지원하기</SeeMore>
              </a>
            </ApplyAreaDiv>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Recruit;
