import React from 'react';
import codeTyping from 'assets/illustrations/Code typing-amico.svg';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 data-scroll data-scroll-speed="0.5" className={styles.title}>
          Seamless solutions,
          <br />
          Serenely crafted
        </h1>
        <div data-scroll data-scroll-speed="0.01">
          <img
            src={codeTyping}
            alt="Code typing"
            className={styles.workingImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
