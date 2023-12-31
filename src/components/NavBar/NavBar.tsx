import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from './NavBar.module.scss';
import utilsStyles from 'styles/utils.module.scss';
import WIPBanner from 'components/WIPBanner/WIPBanner';
import { useTranslation } from 'react-i18next';
import { getActiveLanguage, getAvailableLanguages } from 'hooks/utils';

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const menuItems = [
    {
      id: 1,
      name: t('navigation.about'),
      path: '/#about',
    },
    {
      id: 2,
      name: t('navigation.values'),
      path: '/#values',
    },
    {
      id: 3,
      name: t('navigation.skills'),
      path: '/#skills',
    },
    {
      id: 4,
      name: t('navigation.contact'),
      path: '/#contact',
    },
  ];

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsLanguageSelectorOpen(false);
  };

  return (
    <div className={styles.container}>
      <WIPBanner />
      <nav className={styles.navigation}>
        <Link to="/" className={styles.brandName}>
          SerenityDev
        </Link>
        <div>
          <div
            className={styles.menuIcon}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            {menuIsOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <ul
            className={cn(styles.linkList, {
              [styles.menuHidden]: !menuIsOpen,
            })}
          >
            <li className={cn(styles.link, styles.languageSelectorContainer)}>
              <p
                onClick={() => setIsLanguageSelectorOpen((prev) => !prev)}
                className={styles.languageSelectorItem}
              >
                {getAvailableLanguages().find((item) =>
                  getActiveLanguage().includes(item.code)
                )?.formatedName ?? 'en'}
              </p>
              {isLanguageSelectorOpen && (
                <div className={styles.languageSelector}>
                  {getAvailableLanguages()
                    .filter((item) => !getActiveLanguage().includes(item.code))
                    .map((item) => (
                      <p
                        key={item.code}
                        onClick={() => handleLanguageChange(item.code)}
                        className={styles.languageSelectorItem}
                      >
                        {item.formatedName}
                      </p>
                    ))}
                </div>
              )}
            </li>
            <div className={styles.verticalSeparator} />
            {menuItems.map((item, index) => (
              <div key={item.id}>
                <li className={styles.link}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
                {index !== menuItems.length - 1 && (
                  <div
                    className={cn(utilsStyles.separator, styles.separator)}
                  />
                )}
              </div>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
