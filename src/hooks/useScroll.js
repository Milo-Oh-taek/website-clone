import { useRef, useEffect, useCallback } from 'react';

const useScroll = () => {
  const dom = useRef();

  const handleCallback = useCallback(([entry]) => {
    const { current } = dom;
    const domTokenList = current.classList;

    if (entry.isIntersecting) {
      console.log(domTokenList);
      if (domTokenList.contains('one')) {
        current.classList.add('inside_of_viewport1');
      } else if (domTokenList.contains('two')) {
        current.classList.add('inside_of_viewport2');
      } else if (domTokenList.contains('three')) {
        current.classList.add('inside_of_viewport3');
      } else if (domTokenList.contains('four')) {
        current.classList.add('inside_of_viewport4');
      }
      current.classList.remove('out_of_viewport');
    } else {
      if (domTokenList.contains('one')) {
        current?.classList.add('out_of_viewport');
        current?.classList.remove('inside_of_viewport1');
      } else if (domTokenList.contains('two')) {
        current?.classList.add('out_of_viewport');
        current?.classList.remove('inside_of_viewport2');
      } else if (domTokenList.contains('three')) {
        current?.classList.add('out_of_viewport');
        current?.classList.remove('inside_of_viewport3');
      } else if (domTokenList.contains('four')) {
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
