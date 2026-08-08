import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={styles.footer}
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandGroup}>
            <a
              href="https://dribl.com/"
              className={styles.logoLink}
              aria-label="Home Dashboard"
            >
              <span className={styles.brandTitle}>Home</span>
            </a>
            <p className={styles.brandDescription}>
              Implementation-ready, token-driven dashboard interface for
              operational consistency.
            </p>
          </div>

          <nav className={styles.navGroup} aria-label="Footer Navigation">
            <div className={styles.navColumn}>
              <h2 className={styles.columnTitle}>Product</h2>
              <ul className={styles.linkList}>
                <li>
                  <a href="#dashboard" className={styles.link}>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#analytics" className={styles.link}>
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#system-status" className={styles.link}>
                    System Status
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h2 className={styles.columnTitle}>Resources</h2>
              <ul className={styles.linkList}>
                <li>
                  <a href="#documentation" className={styles.link}>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#token-library" className={styles.link}>
                    Design Tokens
                  </a>
                </li>
                <li>
                  <a href="#accessibility" className={styles.link}>
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h2 className={styles.columnTitle}>Account</h2>
              <ul className={styles.linkList}>
                <li>
                  <a href="#settings" className={styles.link}>
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#operator-portal" className={styles.link}>
                    Operator Portal
                  </a>
                </li>
                <li>
                  <a href="#support" className={styles.link}>
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Home Dashboard (dribl.com). All rights
            reserved.
          </p>
          <ul className={styles.legalList}>
            <li>
              <a href="#privacy" className={styles.link}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className={styles.link}>
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#security" className={styles.link}>
                Security
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
