import React, {useState} from 'react';
export default function Contact(){
  const [form,setForm] = useState({name:'',phone:'',program:'',message:''});
  const change = e => setForm({...form,[e.target.name]: e.target.value});
  const submit = e => {
    e.preventDefault();
    const text = encodeURIComponent(`Halo Bimbel Bee! Saya ${form.name} (${form.phone}) ingin daftar: ${form.program}. Pesan: ${form.message}`);
    window.open(`https://wa.me/6282123990998?text=${text}`,'_blank');
  };
  return (
    <section id="contact" style={{padding:'36px 0'}} aria-label="Kontak & Pendaftaran">
      <h2 style={{textAlign:'center'}}>Kontak & Pendaftaran</h2>
      <div className="form" style={{marginTop:12}}>
        <form onSubmit={submit}>
          <input name="name" placeholder="Nama Lengkap" onChange={change} required style={{width:'100%',padding:10,marginBottom:8,borderRadius:8,border:'1px solid #e5e7eb'}} />
          <input name="phone" placeholder="Nomor Telepon" onChange={change} required style={{width:'100%',padding:10,marginBottom:8,borderRadius:8,border:'1px solid #e5e7eb'}} />
          <input name="program" placeholder="Program yang dipilih" onChange={change} required style={{width:'100%',padding:10,marginBottom:8,borderRadius:8,border:'1px solid #e5e7eb'}} />
          <textarea name="message" placeholder="Pesan tambahan (opsional)" onChange={change} style={{width:'100%',padding:10,marginBottom:8,borderRadius:8,border:'1px solid #e5e7eb'}} />
          <button type="submit" className="btn" style={{width:'100%'}}>Kirim via WhatsApp</button>
        </form>
      </div>
      <p style={{textAlign:'center',marginTop:14}}>Alamat: Ruko Grand Niaga Mas Blok B No. 52, Kota Batam, Kepulauan Riau</p>
      <p style={{textAlign:'center'}}>WA: <a href="https://wa.me/6282123990998" target="_blank" rel="noreferrer">0821-2399-0998</a></p>
    </section>
  )
}