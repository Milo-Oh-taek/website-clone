import React, { useRef, useEffect, useCallback } from 'react';

const useScroll = () => {
  const dom = useRef();

  const handleCallback = useCallback(([entry]) => {
    const { current } = dom;
    const test = current.classList;

    if (entry.isIntersecting) {
      console.log(test);
      if (test.contains('one')) {
        current.classList.add('inside_of_viewport1');
        current.classList.remove('out_of_viewport');
      } else if (test.contains('two')) {
        current.classList.add('inside_of_viewport2');
        current.classList.remove('out_of_viewport');
      } else if (test.contains('three')) {
        current.classList.add('inside_of_viewport3');
        current.classList.remove('out_of_viewport');
      } else if (test.contains('four')) {
        current.classList.add('inside_of_viewport4');
        current.classList.remove('out_of_viewport');
      }
    } else {
      if (test.contains('one')) {
        current?.classList.add('out_of_viewport');
        current?.classList.remove('inside_of_viewport1');
      } else if (test.contains('two')) {
        current?.classList.add('out_of_viewport');
        current?.classList.remove('inside_of_viewport2');
      } else if (test.contains('three')) {
        current?.classList.add('out_of_viewport');
        current?.classList.remove('inside_of_viewport3');
      } else if (test.contains('four')) {
        current?.classList.add('out_of_viewport');
        current?.classList.remove('inside_of_viewport4');
      }
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleCallback, { threshold: 0.4 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleCallback]);

  return {
    ref: dom,
    //   className: {...,'out_of_viewport'}
  };
};

export default useScroll;
