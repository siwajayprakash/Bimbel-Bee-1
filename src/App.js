import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';

export default function App(){
  return (
    <div style={{background:'#fbfbfd',minHeight:'100vh'}}>
      <div className="container">
        <Navbar />
        <main>
          <Home />
          <Programs />
          <About />
          <Contact />
        </main>
      </div>
      <a className="fixed-wa" href="https://wa.me/6282123990998" target="_blank" rel="noreferrer">WA</a>
      <footer className="footer">© {new Date().getFullYear()} Bimbel Bee — Ruko Grand Niaga Mas Blok B No.52, Kota Batam</footer>
    </div>
  );
}
