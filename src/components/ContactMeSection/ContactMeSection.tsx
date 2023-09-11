import { Link } from 'react-router-dom';
import { HiExternalLink } from 'react-icons/hi';
import { BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdOutlineContentCopy } from 'react-icons/md';
import { ReactComponent as MaltIcon } from 'assets/icons/malt.svg';
import styles from './ContactMeSection.module.scss';
import utilsStyles from 'styles/utils.module.scss';
import { useToast } from 'hooks/useToast';

const ContactMeSection = () => {
  const toast = useToast();

  const links = [
    {
      id: 1,
      icon: <BsLinkedin className={styles.icon} />,
      description: 'Connect with me',
      url: 'https://www.linkedin.com/in/l%C3%A9o-levacher/',
    },
    {
      id: 2,
      icon: <MdEmail className={styles.icon} />,
      description: 'Send me an email',
      url: `mailto:${process.env.REACT_APP_EMAIL}`,
    },
    {
      id: 3,
      icon: <MaltIcon className={styles.icon} />,
      description: 'Malt',
      url: 'https://www.malt.fr/profile/leolevacher',
    },
    {
      id: 4,
      icon: <BsFillTelephoneFill className={styles.icon} />,
      description: 'Call me',
      url: `tel:${process.env.REACT_APP_PHONE}`,
    },
  ];

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>, content: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(content);
    toast?.displayToast('Copied to clipboard!');
  };

  return (
    <div className={styles.container}>
      <h2 className={utilsStyles.title}>Contact me:</h2>
      <div className={styles.linksContainer}>
        {links.map((link) => (
          <>
            <Link
              to={link.url}
              target="_blank"
              rel="external"
              className={styles.link}
              key={link.id}
            >
              <HiExternalLink className={styles.externalLinkIcon} />
              {link.icon}
              <div className={styles.descriptionContainer}>
                <p className={styles.description}>{link.description}</p>
              </div>
              {link.url.includes('tel') && (
                <div
                  className={styles.copyButton}
                  onClick={(e) => handleCopy(e, link.url.replace('tel:', ''))}
                >
                  <span>{link.url.replace('tel:', '')}</span>
                  <MdOutlineContentCopy />
                </div>
              )}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default ContactMeSection;
