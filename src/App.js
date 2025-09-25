import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';

    <div style={{ background: '#f0fbfd', minHeight: '100vh' }}>
      <div className="container">
        <Navbar />
        <main>
          {/* Logo Bimbel Bee */}
          <img
            src="/logo.jpg"
            alt="Bimbel Bee Logo"
            style={{ height: 80, marginTop: 20 }}
          />

          {/* Halaman lain */}
          <Home />
          <Programs />
          <About />
          <Contact />
        </main>
      </div>

      {/* Tombol WhatsApp */}
      <a
        className="fixed-wa"
        href="https://wa.me/6282123990998"
        target="_blank"
        rel="noreferrer"
      >
        WA
      </a>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Bimbel Bee — Ruko Grand Niaga Mas Blok B
        No.52, Kota Batam
      </footer>
    </div>
  );
}
