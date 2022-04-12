import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    padding: 0 10px 0 10px;
  }
  @media screen and (max-width: 770px) {
    padding: 0;
    nav {
      display: none;
    }
  }
  @media screen and (max-width: 420px) {
    height: 55px;
    padding: 0;
  }
`;

const LeftMarginMenu = styled.div`
  margin-left: 10%;
  width: 95px;
  display: flex;
  align-items: center;
  .bold {
    font-family: SUIT-SemiBold;
  }
  @media screen and (max-width: 1100px) {
    margin-left: 5%;
  }
`;

const LinkNoneDeco = styled(Link)`
  text-decoration: none;
  color: black;
`;

const DivArea = styled.div`
  width: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 110px;
  .menuImg {
    display: none;
  }
  @media screen and (max-width: 1100px) {
    margin-left: 55px;
  }
  @media screen and (max-width: 770px) {
    margin: 20px;
    justify-content: space-between;
    width: 100vw;

    .menuImg {
      display: block;
    }
  }
  @media screen and (max-width: 420px) {
    img {
      width: 90px;
    }
    .menuImg {
      height: 27px;
      width: 27px;
    }
  }
`;

const NavArea = styled.nav`
  width: 70%;
  display: flex;
  margin-right: 110px;
  justify-content: flex-end;
  font-size: 19px;
  @media screen and (max-width: 1100px) {
    margin-right: 55px;
  }
`;

const ModalWrapper = styled.div`
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
`;

const ModalSection = styled.section`
  height: 100%;
  position: fixed;
  background-color: white;
  top: 0;
  z-index: 1000;
  width: 100vw;

  li {
    &:hover {
      background: #f4f5f7;
    }
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 420px) {
    height: 55px;
    padding: 0;
  }
`;

const ModalHeaderContent = styled.div`
  width: 100%;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 27px;
    width: 119.69px;
  }
  .close {
    width: 34px;
    height: 34px;
  }

  @media screen and (max-width: 420px) {
    .logo {
      width: 90px;
    }
    .close {
      width: 27px;
      height: 27px;
    }
  }
`;

const SunmapLink = styled.div`
  display: flex;
  justify-content: center;
  width: 170px;
  align-items: center;
  background-color: #ec5b44;
  border-radius: 50px;
  color: white;
  font-size: 26px;
  height: 50px;
  @media screen and (max-width: 420px) {
    font-size: 23px;
    height: 40px;
    width: 140px;
  }
`;

const OtherLink = styled(Link)`
  a {
    text-decoration: none;
  }
  color: black;
  @media screen and (max-width: 420px) {
    font-size: 30px;
    line-height: 60px;
  }
`;

const Header = () => {
  const [scrollState, setScrollState] = useState('zero');
  const [openModal, setOpenModal] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        if (scrollState === 'notzero') return;
        setScrollState('notzero');
      } else {
        setScrollState('zero');
      }
    });
  });

  // useEffect(() => {
  //   if (openModal) {
  //     document.body.style.height = '100%';
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  // }, [openModal]);

  return (
    <>
      <HeaderWrapper className={scrollState}>
        <DivArea>
          <Link to="/">
            <img src="/60hz.svg" height="27px" alt="logo" />
          </Link>
          <img
            src="/menu.svg"
            className={openModal ? 'menuImg hide' : 'menuImg show'}
            style={{ cursor: 'pointer' }}
            alt="menu_img"
            onClick={() => setOpenModal(true)}
          />
        </DivArea>
        <NavArea>
          <div
            style={{
              backgroundColor: '#ec5b44',
              borderRadius: '50px',
              height: '40px',
              width: '140px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <a
              target="_blank"
              href="https://map.60hz.io/index.html"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              햇빛바람지도
            </a>
          </div>
          <LeftMarginMenu>
            <LinkNoneDeco
              to="/about"
              className={pathname === '/about' ? 'bold' : null}
            >
              ABOUT
            </LinkNoneDeco>
          </LeftMarginMenu>
          <LeftMarginMenu>
            <LinkNoneDeco
              to="/business"
              className={pathname === '/business' ? 'bold' : null}
            >
              BUSINESS
            </LinkNoneDeco>
          </LeftMarginMenu>
          <LeftMarginMenu>
            <LinkNoneDeco
              to="/career"
              className={pathname === '/career' ? 'bold' : null}
              style={{ color: '#ec5b44' }}
            >
              CAREER
            </LinkNoneDeco>
          </LeftMarginMenu>
        </NavArea>
      </HeaderWrapper>
      <ModalWrapper>
        <ModalSection
          className={openModal ? 'menu_modal show' : 'menu_modal hide'}
        >
          <ModalHeader>
            <ModalHeaderContent>
              <Link to="/" onClick={() => setOpenModal(false)}>
                <img src="/60hz.svg" alt="logo" className="logo" />
              </Link>
              <img
                src="/close.svg"
                className="close"
                style={{ cursor: 'pointer' }}
                alt="close_img"
                onClick={() => setOpenModal(false)}
              />
            </ModalHeaderContent>
          </ModalHeader>
          <ul
            style={{
              listStyle: 'none',
              textAlign: 'left',
              marginTop: '70px',
              lineHeight: '70px',
              fontSize: '40px',
              fontFamily: 'SUIT',
              padding: '0',
            }}
          >
            <a
              href="https://map.60hz.io/index.html"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <li
                style={{
                  paddingLeft: '20px',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <SunmapLink>햇빛바람지도</SunmapLink>
              </li>
            </a>
            <OtherLink
              to="about"
              onClick={() => setOpenModal(false)}
              style={{ textDecoration: 'none' }}
            >
              <li style={{ paddingLeft: '20px' }}>ABOUT</li>
            </OtherLink>
            <OtherLink to="business" onClick={() => setOpenModal(false)}>
              <li style={{ paddingLeft: '20px' }}>BUSINESS</li>
            </OtherLink>
            <OtherLink
              to="career"
              style={{ color: '#ec5b44' }}
              onClick={() => setOpenModal(false)}
            >
              <li style={{ paddingLeft: '20px' }}>CAREER</li>
            </OtherLink>
          </ul>
        </ModalSection>
      </ModalWrapper>
    </>
  );
};

export default Header;
