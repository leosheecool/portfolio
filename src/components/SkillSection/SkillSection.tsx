import { FaReact } from 'react-icons/fa';
import {
  BiLogoTypescript,
  BiLogoPython,
  BiLogoFlask,
  BiLogoCPlusPlus,
  BiLogoDocker,
  BiLogoNodejs,
} from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { HiOutlineTranslate } from 'react-icons/hi';
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
    {
      id: 5,
      name: 'English',
      icon: <HiOutlineTranslate className={styles.icon} />,
    },
    {
      id: 6,
      name: 'Flask',
      icon: <BiLogoFlask className={styles.icon} />,
    },
    {
      id: 7,
      name: 'NodeJS',
      icon: <BiLogoNodejs className={styles.icon} />,
    },
    {
      id: 8,
      name: 'C++',
      icon: <BiLogoCPlusPlus className={styles.icon} />,
    },
    {
      id: 9,
      name: 'Docker',
      icon: <BiLogoDocker className={styles.icon} />,
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={utilsStyles.title}>My skills</h2>
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
