import React, { useLayoutEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{
        fontFamily: 'SUIT-Regular',
        textAlign: 'center',
        maxWidth: '100%',
        width: '100%',
        lineHeight: '1.5',
        color: '#252525',
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
