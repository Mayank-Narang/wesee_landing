import React from 'react';

const Installation = () => {
  return (
    <section id="installation" style={styles.installationSection}>
      <h2 style={styles.sectionTitle}>Developer Setup</h2>
      <p style={styles.sectionDesc}>
        WeSee requires your own Gemini API key to run locally. Setup takes less than 2 minutes.
      </p>

      <div style={styles.terminal} className="glass">
        <div style={styles.terminalHeader}>
          <div style={{ ...styles.dot, backgroundColor: '#ff5f56' }}></div>
          <div style={{ ...styles.dot, backgroundColor: '#ffbd2e' }}></div>
          <div style={{ ...styles.dot, backgroundColor: '#27c93f' }}></div>
          <span style={styles.terminalTitle}>bash</span>
        </div>
        
        <div style={styles.terminalBody}>
          <div style={styles.commandRow}>
            <span style={styles.prompt}>$</span>
            <span style={styles.command}>git clone https://github.com/Mayank-Narang/wesee.git</span>
          </div>
          <div style={styles.commandRow}>
            <span style={styles.prompt}>$</span>
            <span style={styles.command}>cd wesee</span>
          </div>
          <div style={styles.commandRow}>
            <span style={styles.prompt}>$</span>
            <span style={styles.command}>npm install</span>
          </div>
          <div style={styles.commandRow}>
            <span style={styles.prompt}>$</span>
            <span style={styles.comment}># Add your Gemini API key to the environment file</span>
          </div>
          <div style={styles.commandRow}>
            <span style={styles.prompt}>$</span>
            <span style={styles.command}>echo "GOOGLE_API_KEY=your_key_here" &gt; .env</span>
          </div>
          <div style={styles.commandRow}>
            <span style={styles.prompt}>$</span>
            <span style={styles.command}>npm start</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  installationSection: {
    padding: '6rem 1rem',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: 'var(--text-primary)',
  },
  sectionDesc: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
  },
  terminal: {
    textAlign: 'left',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid var(--glass-border)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
  },
  terminalHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid var(--glass-border)',
    gap: '8px',
    position: 'relative',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
  },
  terminalTitle: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
    fontWeight: '500',
    fontFamily: 'monospace',
  },
  terminalBody: {
    padding: '1.5rem',
    fontFamily: '"Fira Code", "Courier New", Courier, monospace',
    fontSize: '0.95rem',
    color: '#e5e7eb',
    lineHeight: '1.7',
    background: 'rgba(0, 0, 0, 0.3)',
  },
  commandRow: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '0.5rem',
  },
  prompt: {
    color: 'var(--accent-color)',
    userSelect: 'none',
  },
  command: {
    color: '#e5e7eb',
  },
  comment: {
    color: '#6b7280',
    fontStyle: 'italic',
  }
};

export default Installation;
