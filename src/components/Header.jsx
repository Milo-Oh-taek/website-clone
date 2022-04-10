import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  top: 0;
  width: 100vw;
  height: 110px;
  display: flex;
  .zero {
    background: transparent;
  }
  .notzero {
    background: white;
    border-bottom: 1px solid #c3c1c1;
  }

  @media screen and (max-width: 770px) {
    nav {
      display: none;
    }
  }
  @media screen and (max-width: 420px) {
    height: 55px;
  }
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  -webkit-transform: translate3d(0, 0, 0);
`;

const HeaderWrapper = styled.header`
  height: 110px;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 110px 0 110px;
  // background: transparent;
  position: fixed;
  z-index: 100;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    padding: 0 10px 0 10px;
  }
  @media screen and (max-width: 770px) {
    padding: 0 20px 0 20px;
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
  .menuImg {
    display: none;
  }
  @media screen and (max-width: 1100px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 770px) {
    padding: 0 20px;
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
  justify-content: flex-end;
  font-size: 19px;
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

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openModal]);

  return (
    <>
      {/* <Wrapper> */}
      <HeaderWrapper className={scrollState}>
        <DivArea>
          <Link to="/">
            <img src="/60hz.svg" height="27px" />
          </Link>
          <img
            src="/menu.svg"
            className={openModal ? 'menuImg hide' : 'menuImg show'}
            style={{ cursor: 'pointer' }}
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
      {/* </Wrapper> */}
      <ModalWrapper>
        <ModalSection
          className={openModal ? 'menu_modal show' : 'menu_modal hide'}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '55px',
              margin: '0 20px',
            }}
          >
            <Link to="/" onClick={() => setOpenModal(false)}>
              <img src="/60hz.svg" width="90px" height="27px" />
            </Link>
            <img
              src="/close.svg"
              height="27px"
              style={{ cursor: 'pointer' }}
              onClick={() => setOpenModal(false)}
            />
          </div>
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
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '170px',
                    alignItems: 'center',
                    backgroundColor: '#ec5b44',
                    borderRadius: '50px',
                    color: 'white',
                    fontSize: '26px',
                    height: '50px',
                  }}
                >
                  햇빛바람지도
                </div>
              </li>
            </a>
            <Link
              to="about"
              style={{ textDecoration: 'none', color: 'black' }}
              onClick={() => setOpenModal(false)}
            >
              <li style={{ paddingLeft: '20px' }}>ABOUT</li>
            </Link>
            <Link
              to="business"
              style={{ textDecoration: 'none', color: 'black' }}
              onClick={() => setOpenModal(false)}
            >
              <li style={{ paddingLeft: '20px' }}>BUSINESS</li>
            </Link>
            <Link
              to="career"
              style={{ textDecoration: 'none', color: '#ec5b44' }}
              onClick={() => setOpenModal(false)}
            >
              <li style={{ paddingLeft: '20px' }}>CAREER</li>
            </Link>
          </ul>
        </ModalSection>
      </ModalWrapper>
    </>
  );
};

export default Header;
