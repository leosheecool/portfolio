import React from 'react';
import codeTyping from 'assets/illustrations/Code typing-amico.svg';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				Seamless solutions,
				<br />
				Serenely crafted
			</h1>
			<img src={codeTyping} alt="Code typing" />
		</div>
	);
};

export default Hero;
