import cn from 'classnames';
import {
  AboutSection,
  ContactMeSection,
  Hero,
  SkillSection,
  ValuesSection,
} from 'components';
import scrollDownIcon from 'assets/icons/scroll-down.svg';
import styles from './Home.module.scss';
import useScrollSmoother from 'hooks/useScrollSmoother';
import Footer from 'components/Footer/Footer';

const Home = () => {
  const scrollerSmooth = useScrollSmoother();

  return (
    <div>
      <Hero />
      <AboutSection />
      <ValuesSection />
      <SkillSection />
      <ContactMeSection />
      <div
        className={cn(styles.arrowContainer, {
          [styles.removed]: scrollerSmooth.scrollProgress > 0.05,
        })}
      >
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
      <Footer />
    </div>
  );
};

export default Home;
