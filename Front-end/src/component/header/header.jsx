import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoAccent}>CSAT</span>
          <span className={styles.logoText}> AI</span>
        </a>

        <nav className={styles.nav}>

<NavLink to="/">HOME</NavLink>

<NavLink to="/prediction">
  PREDICTION
</NavLink>

<NavLink to="/analytics">
  ANALYTICS
</NavLink>

<NavLink to="/model">
  MODEL
</NavLink>

<NavLink to="/about">
  ABOUT
</NavLink>

<NavLink to="/contact">
  CONTACT
</NavLink>

</nav>

        <button className={styles.github}>
          GITHUB
        </button>
      </div>
    </header>
  );
};

export default Header;