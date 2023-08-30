/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLayoutEffect } from 'react';
import AppRoutes from 'AppRoutes';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const App = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // ScrollTrigger.normalizeScroll(true);
    // let smoother = ScrollSmoother.create({
    //   smooth: 2,
    //   effects: true,
    //   normalizeScroll: true,
    // });
  }, []);

  return (
    <div id={'smooth-wrapper'}>
      <div id={'smooth-content'}>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
