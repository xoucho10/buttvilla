"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabase";

export default function ContactPage(){
  const [form, setForm] = useState({name:"", phone:"", email:"", subject:"General Inquiry", message:""});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if(!form.message ||!form.name) return alert("Name and Message required");
    setLoading(true);
    const { error } = await supabase.from('contact_messages').insert([form]);
    setLoading(false);
    if(error) alert(error.message);
    else { setDone(true); setForm({name:"", phone:"", email:"", subject:"General Inquiry", message:""}); }
  }

  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>

      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="bg-[#7A0F14] rounded-[2.5rem] p-8 md:p-12 text-white grid md:grid-cols-2 gap-10">
          <div>
            <p className="inline-flex bg-white/15 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest">📞 GET IN TOUCH</p>
            <h1 className="text-4xl md:text-5xl font-black mt-4 leading-tight">Talk to<br/>Buttvilla Team</h1>
            <p className="mt-3 text-white/70 text-sm">For alumni, admissions, or 40Yrs celebration partnerships — we reply within hours.</p>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="bg-white/10 rounded-2xl p-5 flex gap-4"><div className="w-12 h-12 bg-white rounded-full grid place-items-center">📍</div><div><p className="font-bold text-sm">Location</p><p className="text-sm text-white/70">Buttvilla Kindergarten, Iganga District, Uganda</p></div></div>
              <div className="bg-white/10 rounded-2xl p-5 flex gap-4"><div className="w-12 h-12 bg-white rounded-full grid place-items-center">📱</div><div><p className="font-bold text-sm">WhatsApp</p><p className="text-sm text-white/70">+256 700 000 000 / +256 700 000 001</p></div></div>
              <div className="bg-white/10 rounded-2xl p-5 flex gap-4"><div className="w-12 h-12 bg-white rounded-full grid place-items-center">✉️</div><div><p className="font-bold text-sm">Email</p><p className="text-sm text-white/70">info@buttvillakindergarten.ac.ug</p></div></div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-7 text-black">
            {done? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full grid place-items-center text-3xl mx-auto">✓</div>
                <h2 className="text-xl font-black mt-4">Message Sent!</h2>
                <p className="text-sm text-gray-500 mt-1">We saved your message to our inbox. We will reply on WhatsApp/Email soon.</p>
                <button onClick={()=>setDone(false)} className="mt-6 px-6 py-3 bg-black text-white rounded-full font-bold text-sm">Send Another</button>
              </div>
            ) : (
              <>
                <h2 className="font-black text-xl">Send Message</h2>
                <div className="space-y-3 mt-5">
                  <div className="grid grid-cols-2 gap-3">
                    <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your Name *" className="p-4 rounded-xl border text-sm bg-[#FFFCF7]"/>
                    <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone / WhatsApp" className="p-4 rounded-xl border text-sm bg-[#FFFCF7]"/>
                  </div>
                  <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email (optional)" className="w-full p-4 rounded-xl border text-sm bg-[#FFFCF7]"/>
                  <select value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} className="w-full p-4 rounded-xl border text-sm font-bold bg-[#FFFCF7]">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Alumni - 40Yrs Celebration</option>
                    <option>Partnership / Donation</option>
                    <option>Complaint</option>
                  </select>
                  <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your Message *" className="w-full p-4 rounded-xl border text-sm h-32 bg-[#FFFCF7]"></textarea>
                </div>
                <button onClick={submit} disabled={loading} className="w-full mt-5 py-4 bg-[#7A0F14] text-white rounded-full font-black text-sm">{loading?"Sending...":"Send Message →"}</button>
              </>
            )}
          </div>
        </div>

        {/* MAP */}
        <div className="mt-8 bg-white rounded-[2rem] overflow-hidden border h-[320px]">
          <iframe src="https://maps.google.com/maps?q=Iganga,Uganda&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0" loading="lazy"></iframe>
        </div>
      </div>

      <Footer/>
    </div>
  )
}