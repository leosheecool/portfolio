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
            <>
              <li className={styles.link} key={item.id}>
                <Link to={item.path}>{item.name}</Link>
              </li>
              {index !== menuItems.length - 1 && (
                <div className={cn(utilsStyles.separator, styles.separator)} />
              )}
            </>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
