import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTotop = () => {
  const test = useLocation();

  useEffect(() => {
    // console.log(test);
    if (test.hash) {
      return;
    }
    window.scrollTo(0, 0);
  }, [test.pathname]);

  return null;
};

export default ScrollTotop;
