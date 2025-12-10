import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          E-TechMerge:
        </div>
        <span className={styles.nav}>
          <a href="#article" className={styles.navLink}>ARTIGOS</a>
          <a href="#about" className={styles.navLink}>SOBRE NÓS</a>
        </span>
      </div>
    </div>
  );
};

export default Header;
