import cn from 'classnames';
import { Hero, NavBar } from 'components';
import scrollDownIcon from 'assets/icons/scroll-down.svg';
import styles from './Home.module.scss';
import useScrollSmoother from 'hooks/useScrollSmoother';

const Home = () => {
  const scrollerSmooth = useScrollSmoother();

  return (
    <div>
      <NavBar />
      <div id={'smooth-wrapper'}>
        <div id={'smooth-content'}>
          <Hero />
        </div>
        <div className={styles.arrowContainer}>
          <div className={styles.arrowWrapper}>
            <img
              src={scrollDownIcon}
              alt="scroll down"
              className={cn(styles.arrow, {
                [styles.hidden]: scrollerSmooth.scrollProgress > 0,
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
