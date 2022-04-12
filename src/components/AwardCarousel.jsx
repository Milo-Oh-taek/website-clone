import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  autoplay: true,
  speed: 750,
};

const Wrapper = styled.div`
  padding: 80px 0 0 0;
  // max-width: 1190px;
  // margin-top: 30px auto;
  height: 110px;
  margin-top: 30px;
  @media screen and (max-width: 1280px) {
    height: 120px;
    padding-top: 80px;
    margin: 20px;
  }
  @media screen and (max-width: 770px) {
    height: 130px;
    padding-top: 60px;
    margin: 30px;
  }
  @media screen and (max-width: 550px) {
    height: 120px;
    padding-top: 40px;
    margin: 30px 0 !important;
  }
  @media screen and (max-width: 420px) {
    height: 100px;
    padding: 0;
    margin: 30px 0 !important;
  }
  @media screen and (max-width: 375px) {
    height: 100px;
    padding: 0;
    margin: 30px 0 !important;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-family: SUIT-SemiBold;
    font-size: 24px;
    margin-left: 1rem;
    .carousel_br {
      display: none;
    }
    @media screen and (max-width: 1280px) {
      font-size: 20px;
    }
    @media screen and (max-width: 770px) {
      .carousel_br {
        display: block;
      }
    }
    @media screen and (max-width: 550px) {
      font-size: 16px;
    }
    // @media screen and (max-width: 420px) {
    //   font-size: 16px;
    // }
  }
  @media screen and (max-width: 1280px) {
    img {
      height: 45px;
    }
  }
  @media screen and (max-width: 770px) {
    flex-direction: column;
    img {
      height: 40px;
      margin: 5px;
    }
  }
  @media screen and (max-width: 550px) {
    img {
      height: 32px;
    }
  }
  @media screen and (max-width: 420px) {
    img {
      height: 25px;
    }
  }
`;

const AwardCarousel = () => {
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <Item>
            <img src="/about/logo/중기부.svg" alt="중기부_Logo" />
            <span>
              사회적경제박람회 소셜벤처IR 대상
              <br className="carousel_br" />
              (중소벤처기업부 장관상)
            </span>
          </Item>
        </div>
        <div>
          <Item>
            <img src="/about/logo/고용노동부.svg" alt="고용노동부_Logo" />
            <span>
              2021 소셜벤처 경연대회 일반부문 대상
              <br className="carousel_br" />
              (국무총리상)
            </span>
          </Item>
        </div>
        <div>
          <Item>
            <img src="/about/logo/행정안전부.svg" alt="행정안전부_Logo" />
            <span>
              사회적경제박람회 소셜벤처IR 대상
              <br className="carousel_br" />
              (국무총리상)
            </span>
          </Item>
        </div>
        <div>
          <Item>
            <img
              src="/about/logo/산업통상자원부.svg"
              alt="산업통상자원부_Logo"
            />
            <span>
              산업통상자원부 공공데이터활용 BI 공모전 대상
              <br className="carousel_br" />
              (산업통상자원부 장관상)
            </span>
          </Item>
        </div>
      </Slider>
    </Wrapper>
  );
};

export default AwardCarousel;
