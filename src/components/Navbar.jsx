import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <div style={styles.logoDot}></div>
        <span style={styles.logoText}>WeSee</span>
      </div>
      <div style={styles.navLinks}>
        <a href="#features" style={styles.link}>Features</a>
        <a href="#installation" style={styles.link}>Installation</a>
        <a href="https://github.com/Mayank-Narang/wesee" target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    zIndex: 1000,
    background: 'rgba(15, 17, 21, 0.8)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid var(--glass-border)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoDot: {
    width: '12px',
    height: '12px',
    backgroundColor: 'var(--accent-color)',
    borderRadius: '50%',
    boxShadow: '0 0 10px var(--accent-color)',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s ease',
  }
};

export default Navbar;
