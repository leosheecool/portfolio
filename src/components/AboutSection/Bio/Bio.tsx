import React from 'react';
import styles from './Bio.module.scss';

const Bio = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About me</h2>
      <img
        src="https://avatars.githubusercontent.com/u/44951969?v=4"
        alt="profile"
        className={styles.image}
      />
      <h3 className={styles.subtitle}>Léo</h3>
      <p className={styles.text}>
        I am a full-stack web developer specialized in frontend with a passion
        for creating beautiful and functional websites.
        <br />
        <br />
        I worked for 6 months at a fintech startup and almost 3 years at
        SogetiLabs France, the R&D department of Sogeti France gathering the 1%
        expert in development.
        <br />
        <br />
        I am currently working as a freelancer. Thanks to my experience at the
        SogetiLabs, I am used to working in an international environment with
        people from all around the world.
        <br />
        <br />
        Also I am used to working in an agile environment with the Scrum
        methodology and to produce clean code, applying the best practices.
      </p>
    </div>
  );
};

export default Bio;
