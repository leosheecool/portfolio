import React, { useLayoutEffect } from 'react';
import styles from './ValuesSection.module.scss';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ReactComponent as BulletPoint } from 'assets/illustrations/bullet-point.svg';

const VALUES_LIST = [
  {
    id: 1,
    title: 'Quality',
    description:
      'At Serenity Dev, I embrace impeccable code, where every line we write embodies robustness, efficiency, and reliability.',
  },
  {
    id: 2,
    title: 'Agility',
    description:
      'I believe that the best way to create value in IT projects is by being agile. We are always ready to adapt to the ever-changing needs of our clients and the market.',
  },
  {
    id: 3,
    title: 'Communication',
    description:
      'Communication is the key to success. I am always ready to communicate with you and your team to ensure that we are on the same page.',
  },
  {
    id: 4,
    title: 'Trust',
    description:
      'Trust is the foundation of every healthy relationship. I believe in building trust with my clients by being transparent and honest.',
  },
  {
    id: 5,
    title: 'Autonomy',
    description:
      'Through autonomy, I liberate your time and mental space, allowing you to focus on enhancing and adding value to your project.',
  },
  {
    id: 6,
    title: 'Education',
    description:
      'Education holds immense significance for me. I am consistently eager to learn and share my knowledge with you and/or your team.',
  },
];

const ValuesSection = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

    const ctx = gsap.context(() => {
      const pulses = gsap
        .timeline({
          defaults: {
            duration: 0.05,
            autoAlpha: 1,
            scale: 2,
            transformOrigin: 'center',
            ease: 'elastic(2.5, 1)',
          },
        })
        .to('#ball_2, .text01', {}, 0.1)
        .to('.text01', {}, 0.1)
        .to('#ball_3, .text02', {}, 0.19)
        .to('#ball_4, .text03', {}, 0.26)
        .to('#ball_5, .text04', {}, 0.35)
        .to('#ball_6, .text05', {}, 0.42)
        .to('#ball_7, .text06', {}, 0.55);

      gsap
        .timeline({
          defaults: { duration: 1 },
          scrollTrigger: {
            trigger: '#bullet_point',
            scrub: true,
            start: 'top center',
            end: 'bottom-=100px center',
          },
        })
        .to('#ball_1', { duration: 0.01, autoAlpha: 1 })
        .from('#the_line', { drawSVG: 0 }, 0)
        .to(
          '#ball_1',
          {
            motionPath: {
              path: '#the_line',
              align: '#the_line',
              alignOrigin: [0.5, 0.5],
            },
          },
          0
        )
        .add(pulses, 0);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>The values I promote</h2>
      <BulletPoint className={styles.illustration} />

      <ul className={styles.list}>
        {VALUES_LIST.map((value) => (
          <li className={styles.listItem} key={value.id}>
            <div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <div className={styles.valueLine} />
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValuesSection;
