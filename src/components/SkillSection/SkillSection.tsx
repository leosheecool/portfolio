import { FaReact } from 'react-icons/fa';
import { BiLogoTypescript, BiLogoPython } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import styles from './SkillSection.module.scss';
import utilsStyles from 'styles/utils.module.scss';

const SkillSection = () => {
  const Skills = [
    {
      id: 1,
      name: 'React',
      icon: <FaReact className={styles.icon} />,
    },
    {
      id: 2,
      name: 'TypeScript',
      icon: <BiLogoTypescript className={styles.icon} />,
    },
    {
      id: 3,
      name: 'Github',
      icon: <AiFillGithub className={styles.icon} />,
    },
    {
      id: 4,
      name: 'Python',
      icon: <BiLogoPython className={styles.icon} />,
    },
  ];

  return (
    <div style={{ padding: 24, height: 'fit-content' }}>
      <h2>My skills</h2>
      <div className={styles.skillsContainer}>
        {Skills.map((skill) => (
          <div key={skill.id} className={styles.skillContainer}>
            <div className={styles.iconContainer}>{skill.icon}</div>
            <p className={utilsStyles.subtitle}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
