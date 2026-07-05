import React from 'react';

const Features = () => {
  const featureList = [
    {
      title: 'Frictionless Hotkey',
      description: 'Press Ctrl+Shift+Space from anywhere. No need to open a browser, switch tabs, or lose your flow state. The AI is always exactly one keystroke away.',
      icon: '⚡'
    },
    {
      title: 'Screen-Aware Context',
      description: 'WeSee instantly captures your active screen when triggered. It sees your code, your errors, and your UI exactly as you do, providing perfect context instantly.',
      icon: '👁️'
    },
    {
      title: 'Sub-second Streaming',
      description: 'Powered by Gemini 1.5 Flash and a direct REST streaming pipeline, text is delivered to the glassmorphic overlay token-by-token in under 500ms.',
      icon: '🚀'
    }
  ];

  return (
    <section id="features" style={styles.featuresSection}>
      <h2 style={styles.sectionTitle}>Why WeSee?</h2>
      
      <div style={styles.grid}>
        {featureList.map((feature, index) => (
          <div key={index} style={styles.card} className="glass">
            <div style={styles.icon}>{feature.icon}</div>
            <h3 style={styles.cardTitle}>{feature.title}</h3>
            <p style={styles.cardDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  featuresSection: {
    padding: '6rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '4rem',
    color: 'var(--text-primary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    padding: '0 1rem',
  },
  card: {
    padding: '2.5rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    background: 'rgba(74, 222, 128, 0.1)',
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '1px solid rgba(74, 222, 128, 0.2)',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: 'var(--text-primary)',
  },
  cardDesc: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  }
};

export default Features;
