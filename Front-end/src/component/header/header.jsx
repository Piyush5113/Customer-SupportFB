import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoAccent}>CSAT</span>
          <span className={styles.logoText}> AI</span>
        </a>

        <nav className={styles.nav}>
          <a href="#">HOME</a>
          <a href="#">PREDICTION</a>
          <a href="#">ANALYTICS</a>
          <a href="#">MODEL</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </nav>

        <button className={styles.github}>
          GITHUB
        </button>
      </div>
    </header>
  );
};

export default Header;