import React, { useLayoutEffect, useRef } from 'react';
import cn from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SideImageWithText from './SideImageWithText/SideImageWithText';
import styles from './Hero.module.scss';
import { ReactComponent as CodeTypingImg } from 'assets/illustrations/code-typing-animate.svg';
import { ReactComponent as CreationProcessImg } from 'assets/illustrations/creation-process-animate.svg';

const Hero = () => {
  const codeTypingRef = useRef<SVGSVGElement>(null);
  const creationProcessRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef(null);
  const titleRefContainer = useRef(null);
  const title1Ref = useRef(null);

  const elements = [
    {
      id: 1,
      text: (
        <h1 className={styles.title} ref={titleRef}>
          Welcome to Serenity Dev,
          <br />
          Seamless solutions, Serenely crafted
        </h1>
      ),
      image: (
        <div className={styles.illustrationContainer}>
          <CodeTypingImg
            ref={codeTypingRef}
            className={cn(styles.workingImg, 'animated')}
          />
        </div>
      ),
    },
    {
      id: 2,
      text: (
        <h2 className={styles.title} ref={title1Ref}>
          Code is good,
          <br />
          Clean code is better
        </h2>
      ),
      image: (
        <div className={styles.illustrationContainer}>
          <CreationProcessImg
            ref={creationProcessRef}
            className={cn(styles.workingImg, 'animated')}
          />
        </div>
      ),
    },
  ];

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
              start: '+=150 top',
              end: '+=300',
            },
          },
          {
            opacity: 1,
            scrollTrigger: {
              pin: true,
              scrub: true,
              start: '+=150 top',
              end: '+=300',
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
            start: '+=150 top',
            end: '+=300',
          },
        },
        {
          scale: 1,
          xPercent: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            scrub: true,
            start: '+=150 top',
            end: '+=300',
          },
        }
      );

      ScrollTrigger.create({
        trigger: titleRefContainer.current,
        end: 'center top',
        start: 'top top',
        animation: timeline,
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      {elements.map((element) => (
        <SideImageWithText
          text={element.text}
          image={element.image}
          ref={titleRefContainer}
          key={element.id}
        />
      ))}
    </div>
  );
};

export default Hero;
