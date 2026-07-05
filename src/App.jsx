import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '80px', minHeight: '100vh', padding: '2rem' }}>
        {/* Components for future parts will go here */}
        <h1 style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Welcome to WeSee</h1>
      </main>
    </>
  );
}

export default App;
