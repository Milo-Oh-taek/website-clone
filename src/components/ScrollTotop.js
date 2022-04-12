import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTotop = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollTotop;
