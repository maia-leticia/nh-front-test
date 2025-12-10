import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.copyright}>© 2023 Copyright. Emerging Tech</span>
      </div>
    </div>
  );
};

export default Footer;
