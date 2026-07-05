import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '80px', minHeight: '100vh' }}>
        <Hero />
        <Features />
        {/* Components for future parts will go here */}
      </main>
    </>
  );
}

export default App;
