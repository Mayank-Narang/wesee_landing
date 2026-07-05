import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '80px', minHeight: '100vh' }}>
        <Hero />
        {/* Components for future parts will go here */}
      </main>
    </>
  );
}

export default App;
