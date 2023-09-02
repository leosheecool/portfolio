import { ReactComponent as WorkingImg } from 'assets/illustrations/Code typing-pana.svg';
import { ReactComponent as TeachingImg } from 'assets/illustrations/Online learning-amico.svg';
import styles from './AboutSection.module.scss';
import Bio from './Bio/Bio';

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay} />
      <TeachingImg data-speed="1.3" className={styles.workingImg} />
      <Bio />
      <WorkingImg data-speed="0.4" className={styles.workingImg} />
    </section>
  );
};

export default AboutSection;
