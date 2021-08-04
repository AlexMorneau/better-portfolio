import React, { useState, useEffect } from "react";

import UpArrow from '../../media/portfolio/icon/up.svg';

import {
    ScrollContainer,
    ScrollIcon
} from './scroll-to-top.styles';

// reference: https://github.com/macro6461/react-scroll-arrow/

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', checkScrollTop);

      return function cleanup() {
          window.removeEventListener('scroll', checkScrollTop);
      }
  });

  const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
          setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
          setShowScroll(false);
      }
  }

  const scrollTop = () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
      <ScrollContainer
        onClick={scrollTop}
        style={{opacity: showScroll ? '1' : '0'}}>
            <ScrollIcon
                src={UpArrow} />
        </ScrollContainer>
  );
}

export default ScrollToTop;