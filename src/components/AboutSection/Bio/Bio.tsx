import React from 'react';
import { useTranslation } from 'react-i18next';
import PP from 'assets/images/EZ7A9815.jpg';
import styles from './Bio.module.scss';
import utilsStyles from 'styles/utils.module.scss';
import stringToFormatedJSXOutput from 'hooks/stringToFormatedJSXOutput';

const Bio = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h2 className={utilsStyles.title}>{t('aboutMe.title')}</h2>
      <img src={PP} alt="profile" className={styles.image} />
      <h3 className={utilsStyles.subtitle}>Léo</h3>
      <p className={styles.text}>
        {stringToFormatedJSXOutput(t('aboutMe.text'))}
      </p>
    </div>
  );
};

export default Bio;
