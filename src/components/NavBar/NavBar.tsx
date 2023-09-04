import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from './NavBar.module.scss';
import utilsStyles from 'styles/utils.module.scss';

const menuItems = [
  {
    id: 1,
    name: 'About',
    path: '#',
  },
  {
    id: 2,
    name: 'Contact',
    path: '#',
  },
];

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <p className={styles.brandName}>SerenityDev</p>
        <ul className={styles.linkList}>
          {menuItems.map((item) => (
            <li className={styles.link} key={item.id}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.menuContainer}>
          <div
            className={styles.menuIcon}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            {menuIsOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <div className={menuIsOpen ? styles.menu : styles.menuHidden}>
            <ul className={styles.menuLinkList}>
              {menuItems.map((item, index) => (
                <>
                  <li className={styles.link} key={item.id}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                  {index !== menuItems.length - 1 && (
                    <div
                      className={cn(utilsStyles.separator, styles.separator)}
                    />
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
