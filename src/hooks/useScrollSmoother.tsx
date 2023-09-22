import React from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const useScrollSmoother = () => {
  const [scrollerSmooth, setScrollerSmooth] = React.useState<ScrollSmoother>();
  const [scrollProgress, setScrollProgress] = React.useState<number>(0);
  const location = useLocation();

  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.normalizeScroll(true);
      const scrollSmoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
        onUpdate: (self) => {
          setScrollProgress(self?.progress ?? 0);
        },
      });
      setScrollerSmooth(scrollSmoother);
      const fragmentId = location.hash;
      if (fragmentId !== '') {
        const el = document.querySelector(fragmentId);
        if (el !== null) scrollSmoother.scrollTo(fragmentId, true, 'top 100px');
      }
    });
    return () => ctx.revert();
  }, [location.hash]);

  return { scrollerSmooth, scrollProgress };
};

export default useScrollSmoother;
