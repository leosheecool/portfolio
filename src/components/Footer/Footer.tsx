import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <div className={styles.linkList}>
          <Link to="/" className={styles.link}>
            {t('navigation.home')}
          </Link>
          <Link to="/" className={styles.link}>
            {t('navigation.about')}
          </Link>
          <Link to="/" className={styles.link}>
            {t('navigation.skills')}
          </Link>
          <Link to="/" className={styles.link}>
            {t('navigation.contact')}
          </Link>
        </div>
        <div className={styles.socialLinksContainer}>
          <Link to="/" className={styles.link}>
            <BsLinkedin />
          </Link>
          <Link to="/" className={styles.link}>
            <MdEmail />
          </Link>
          <Link to="/" className={styles.link}>
            <BiPhone />
          </Link>
        </div>
        <div className={styles.linkList}>
          <Link to="/GTC" className={styles.link}>
            {t('navigation.GTC')}
          </Link>
          <Link to="/" className={styles.link}>
            {t('navigation.terms')}
          </Link>
          <Link to="/" className={styles.link}>
            {t('navigation.privacy')}
          </Link>
        </div>
      </div>
      <div>
        <p>©SerenityDev 2023</p>
      </div>
    </div>
  );
};

export default Footer;
