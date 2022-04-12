import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: SUIT-Regular;
  text-align: center;
  max-width: 100%;
  width: 100%;
  line-height: 1.5;
  color: #252525;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
