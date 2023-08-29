import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	return (
		<nav className={styles.container}>
			<p className={styles.brandName}>SerenityDev</p>
			<ul className={styles.linkList}>
				{/* <li>Home</li> */}
				<li className={styles.link}>
					<Link to="#">About</Link>
				</li>
				{/* <li>Projects</li> */}
				<li className={styles.link}>
					<Link to="#">Contact</Link>
				</li>
			</ul>
			<div className={styles.menuContainer}>
				<div className={styles.menuIcon} onClick={() => setMenuIsOpen(!menuIsOpen)}>
					{menuIsOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
				</div>
				<div className={menuIsOpen ? styles.menu : styles.menuHidden}>
					<ul className={styles.menuLinkList}>
						<li className={styles.link}>
							<Link to="#">About</Link>
						</li>
						<li className={styles.link}>
							<Link to="#">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
