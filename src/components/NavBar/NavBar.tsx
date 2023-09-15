import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from './NavBar.module.scss';
import utilsStyles from 'styles/utils.module.scss';
import WIPBanner from 'components/WIPBanner/WIPBanner';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    {
      id: 1,
      name: t('navbar.about'),
      path: '#',
    },
    {
      id: 2,
      name: t('navbar.values'),
      path: '#',
    },
    {
      id: 2,
      name: t('navbar.skills'),
      path: '#',
    },
    {
      id: 2,
      name: t('navbar.contact'),
      path: '#',
    },
  ];
  return (
    <div className={styles.container}>
      <WIPBanner />
      <nav className={styles.navbar}>
        <p className={styles.brandName}>SerenityDev</p>
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
