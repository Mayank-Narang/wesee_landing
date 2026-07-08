import React from 'react';

const Hero = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.textContent}>
        <h1 style={styles.headline}>
          The Zero-Friction <br />
          <span style={styles.highlight}>Desktop AI</span>
        </h1>
        <p style={styles.subheadline}>
          Press a global hotkey, speak naturally, and get instant, context-aware answers overlaid directly on your active screen. No tabs, no context switching, zero latency.
        </p>
        
        <div style={styles.ctaContainer}>
          <a href="#installation" style={{ ...styles.button, ...styles.primaryBtn }}>
            Get Started
          </a>
          <a href="https://github.com/Mayank-Narang/wesee" target="_blank" rel="noreferrer" style={{ ...styles.button, ...styles.secondaryBtn }}>
            View GitHub
          </a>
        </div>
      </div>

      <div style={styles.videoContainer}>
        {/* Placeholder for the demo video */}
        <div style={styles.videoWrapper} className="glass">
          <iframe
            style={{ ...styles.video, aspectRatio: '16/9', border: 'none' }}
            src="https://www.youtube.com/embed/w0cUYbhhuyg?autoplay=1&mute=1&loop=1&playlist=w0cUYbhhuyg&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="WeSee Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '4rem 1rem 6rem',
    gap: '4rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  textContent: {
    maxWidth: '800px',
  },
  headline: {
    fontSize: '4rem',
    lineHeight: '1.1',
    fontWeight: '800',
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
  },
  highlight: {
    color: 'var(--accent-color)',
    textShadow: '0 0 20px rgba(74, 222, 128, 0.3)',
  },
  subheadline: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
    fontWeight: '400',
    padding: '0 1rem',
  },
  ctaContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  button: {
    padding: '0.8rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
  primaryBtn: {
    backgroundColor: 'var(--accent-color)',
    color: '#000',
    boxShadow: '0 4px 14px rgba(74, 222, 128, 0.4)',
  },
  secondaryBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'var(--text-primary)',
    border: '1px solid var(--glass-border)',
  },
  videoContainer: {
    width: '100%',
    maxWidth: '1000px',
  },
  videoWrapper: {
    padding: '0.5rem',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
  },
  video: {
    width: '100%',
    borderRadius: '16px',
    display: 'block',
    backgroundColor: '#000',
  }
};

export default Hero;
