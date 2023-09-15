import React from 'react';
import styles from './WIPBanner.module.scss';
import { useTranslation } from 'react-i18next';

const WIPBanner = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <p>{t('WIPBanner')}</p>
    </div>
  );
};

export default WIPBanner;
