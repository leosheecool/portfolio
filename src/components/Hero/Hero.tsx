import React, { useLayoutEffect, useRef } from 'react';
import { ReactComponent as CodeTypingImg } from 'assets/illustrations/code-typing-animate.svg';
import { ReactComponent as CreationProcessImg } from 'assets/illustrations/creation-process-animate.svg';
import styles from './Hero.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cn from 'classnames';

const Hero = () => {
  const codeTypingRef = useRef<SVGSVGElement>(null);
  const creationProcessRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef(null);
  const titleRefContainer = useRef(null);
  const titleContainerRef = useRef(null);
  const title1Ref = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('screen and (min-width: 768px)', () => {
      const timeline = gsap
        .timeline()
        .to(titleRef.current, {
          opacity: 0,
          scrollTrigger: {
            pin: true,
            scrub: true,
            end: '+=100px',
          },
        })
        .to(codeTypingRef.current, {
          scale: 0.5,
          xPercent: -50,
          y: 150,
          opacity: 0,
          scrollTrigger: {
            pin: true,
            scrub: true,
            start: 'top top',
            end: '+=150',
          },
          onComplete: () => {
            if (!codeTypingRef.current) return;
            codeTypingRef.current.classList.add('animated');
          },
        })
        .fromTo(
          title1Ref.current,
          {
            opacity: 0,
            scrollTrigger: {
              pin: true,
              scrub: true,
              end: '+=100px',
            },
          },
          {
            opacity: 1,
            scrollTrigger: {
              pin: true,
              scrub: true,
              end: '+=100px',
            },
          }
        );
      gsap.fromTo(
        creationProcessRef.current,
        {
          scale: 0.5,
          xPercent: 50,
          y: -150,
          opacity: 0,

          scrollTrigger: {
            scrub: true,
            start: 'top top',
            end: '+=150',
          },
        },
        {
          scale: 1,
          xPercent: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            scrub: true,
            start: 'top top',
            end: '+=150',
          },
        }
      );

      ScrollTrigger.create({
        trigger: titleRefContainer.current,
        end: '+=500px',
        start: 'top top',
        pin: true,
        animation: timeline,
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer} ref={titleRefContainer}>
        <h1 className={styles.title} ref={titleRef}>
          Seamless solutions,
          <br />
          Serenely crafted
        </h1>
        <div data-speed="-0.2">
          <CodeTypingImg
            ref={codeTypingRef}
            className={cn(styles.workingImg, 'animated')}
          />
        </div>
      </div>
      <div className={styles.titleContainer} ref={titleContainerRef}>
        <h1 className={styles.title} ref={title1Ref}>
          Seamless solutions,
          <br />
          Serenely crafted
        </h1>
        <div>
          <CreationProcessImg
            ref={creationProcessRef}
            className={cn(styles.workingImg, 'animated')}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
