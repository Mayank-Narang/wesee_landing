import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '80px', minHeight: '100vh', paddingBottom: '4rem' }}>
        <div className="animate-fade-in-up delay-100">
          <Hero />
        </div>
        <div className="animate-fade-in-up delay-200">
          <Features />
        </div>
        <div className="animate-fade-in-up delay-300">
          <Installation />
        </div>
      </main>
    </>
  );
}

export default App;
