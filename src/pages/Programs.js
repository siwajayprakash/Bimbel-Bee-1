import React from 'react';
export default function Programs(){
  return (
    <section id="program" style={{padding:'36px 0'}} aria-label="Program Kami">
      <h2 style={{textAlign:'center'}}>Program Kami</h2>
      <div className="card-grid" style={{marginTop:18}}>
        <div className="card">
          <h3>Kelas Calistung</h3>
          <p>Membaca, menulis, dan berhitung untuk anak usia dini.</p>
        </div>
        <div className="card">
          <h3>Bimbel SD</h3>
          <p>Belajar semua mata pelajaran SD dengan cara yang menyenangkan.</p>
        </div>
        <div className="card">
          <h3>English Class</h3>
          <p>Kelas bahasa Inggris interaktif untuk anak-anak.</p>
        </div>
      </div>
    </section>
  )
}