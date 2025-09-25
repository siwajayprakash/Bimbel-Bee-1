import React from 'react';
export default function Navbar(){
  return (
    <header className="header" role="banner">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div style={{width:44,height:44,background:'#FDE68A',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>BB</div>
        <div style={{fontWeight:700,fontSize:18}}>Bimbel Bee</div>
      </div>
      <nav className="nav-links" aria-label="Main Navigation">
        <a href="#program">Program</a>
        <a href="#about">Tentang</a>
        <a href="#form-daftar">Daftar</a>
        <a href="#contact">Kontak</a>
      </nav>
      <button className="btn" onClick={()=>document.getElementById('form-daftar')?.scrollIntoView({behavior:'smooth'})}>Daftar</button>
    </header>
  )
}
