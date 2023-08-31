import React from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useScrollSmoother = () => {
  const [scrollerSmooth, setScrollerSmooth] = React.useState<ScrollSmoother>();
  const [scrollProgress, setScrollProgress] = React.useState<number>(0);

  React.useEffect(() => {
    ScrollTrigger.normalizeScroll(true);
    setScrollerSmooth(
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
        onUpdate: (self) => {
          setScrollProgress(self?.progress ?? 0);
        },
      })
    );
  }, []);

  return { scrollerSmooth, scrollProgress };
};

export default useScrollSmoother;
