import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      {/* ナビゲーションバー (簡易版) */}
      <header style={{
        position: 'fixed', width: '100%', top: 0, zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '15px 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--color-primary)' }}>
            AI Consultant<span style={{ color: 'var(--color-secondary)' }}>.</span>
          </div>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="#services" style={{ textDecoration: 'none', color: 'var(--color-text-main)', fontWeight: '500' }}>Services</a>
            <a href="#about" style={{ textDecoration: 'none', color: 'var(--color-text-main)', fontWeight: '500' }}>About</a>
            <a href="#contact" style={{ textDecoration: 'none', color: 'var(--color-text-main)', fontWeight: '500' }}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
