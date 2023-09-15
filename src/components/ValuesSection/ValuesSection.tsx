import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ReactComponent as BulletPoint } from 'assets/illustrations/bullet-point.svg';
import { ReactComponent as QualityMedal } from 'assets/icons/quality-medal.svg';
import { BsFillMegaphoneFill, BsPersonFillCheck } from 'react-icons/bs';
import {
  FaHandshakeSimple,
  FaUserGear,
  FaGraduationCap,
} from 'react-icons/fa6';
import styles from './ValuesSection.module.scss';
import utilsStyles from 'styles/utils.module.scss';
import { useTranslation } from 'react-i18next';

const ValuesSection = () => {
  const { t } = useTranslation();

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

  const VALUES_LIST = [
    {
      id: 1,
      icon: <QualityMedal className={styles.icon} />,
      title: t('myValues.quality.title'),
      description: t('myValues.quality.description'),
    },
    {
      id: 2,
      icon: <FaUserGear className={styles.icon} />,
      title: t('myValues.agility.title'),
      description: t('myValues.agility.description'),
    },
    {
      id: 3,
      icon: <BsFillMegaphoneFill className={styles.icon} />,
      title: t('myValues.communication.title'),
      description: t('myValues.communication.description'),
    },
    {
      id: 4,
      icon: <FaHandshakeSimple className={styles.icon} />,
      title: t('myValues.trust.title'),
      description: t('myValues.trust.description'),
    },
    {
      id: 5,
      icon: <BsPersonFillCheck className={styles.icon} />,
      title: t('myValues.autonomy.title'),
      description: t('myValues.autonomy.description'),
    },
    {
      id: 6,
      icon: <FaGraduationCap className={styles.icon} />,
      title: t('myValues.education.title'),
      description: t('myValues.education.description'),
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('myValues.title')}</h2>
      <BulletPoint className={styles.illustration} />

      <ul className={styles.list}>
        {VALUES_LIST.map((value) => (
          <li className={styles.listItem} key={value.id}>
            {value.icon}
            <h3 className={utilsStyles.subtitle}>{value.title}</h3>
            <div className={utilsStyles.separator} />
            <p className={styles.valueDescription}>{value.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValuesSection;
