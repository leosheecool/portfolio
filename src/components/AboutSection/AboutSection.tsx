import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ReactComponent as WorkingImg } from 'assets/illustrations/Code typing-pana.svg';
import { ReactComponent as TeachingImg } from 'assets/illustrations/Online learning-amico.svg';
import styles from './AboutSection.module.scss';
import Bio from './Bio/Bio';

const AboutSection = () => {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('screen and (min-width: 768px)', () => {
      //   const timeline = gsap.timeline().fromTo(
      //     '.workingImg1',
      //     {
      //       drawSVG: 0,
      //     },
      //     {
      //       drawSVG: '100%',
      //     }
      //   );
      // });
      // ScrollTrigger.create({
      //   trigger: '.workingImg1',
      //   start: 'top bottom',
      //   end: 'bottom bottom',
      //   markers: true,
      //   scrub: true,
      //   animation: gsap.fromTo(
      //     '.workingImg2',
      //     5,
      //     {
      //       drawSVG: 0,
      //       scrollTrigger: {
      //         scrub: true,
      //       },
      //     },
      //     {
      //       drawSVG: '100%',
      //       scrollTrigger: {
      //         scrub: true,
      //       },
      //     }
      //   ),
      //   // toggleActions: 'play none none none',
      //   // once: true,
      // });
    });
  }, []);

  return (
    <section className={styles.container}>
      <TeachingImg data-speed="1.3" className={styles.workingImg} />
      <div className={styles.infoContainer}>
        <Bio />
      </div>
      <WorkingImg data-speed="0.4" className={styles.workingImg} />
      <div className={styles.floatingInfoContainer}>
        <Bio />
      </div>
    </section>
  );
};

export default AboutSection;
