import React from 'react';
export default function Home(){
  return (
    <section className="hero" aria-label="Beranda">
      <h1 style={{fontSize:32,margin:0}}>Selamat Datang di Bimbel Bee</h1>
      <p style={{color:'#374151',maxWidth:720,margin:'12px auto'}}>Tempat belajar menyenangkan untuk Calistung, Bimbel SD, dan English Class — guru berpengalaman & metode interaktif.</p>
      <div style={{marginTop:18}}>
        <a 
  className="btn" 
  href="https://docs.google.com/forms/d/e/1FAIpQLSeW89WuLL4sNUoYRQrWnw_iVb9YIpxRaoS3UpDuQXFYtVgs5Q/viewform?usp=sf_link" 
  target="_blank" 
  rel="noreferrer"
>
  Daftar Sekarang
</a>

      </div>
    </section>
  )
}
