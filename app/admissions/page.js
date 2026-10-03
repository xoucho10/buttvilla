"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabase";

export default function Admissions(){
  const [form, setForm] = useState({parent_name:"", phone:"", child_name:"", child_age:"", class_interest:"Top Class", message:""});
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if(!form.parent_name ||!form.phone ||!form.child_name) return alert("Parent Name, Phone, Child Name required *");
    setLoading(true);
    const { error } = await supabase.from('admission_inquiries').insert([{
      parent_name: form.parent_name,
      phone: form.phone,
      child_name: form.child_name,
      child_age: form.child_age? Number(form.child_age) : null,
      class_interest: form.class_interest,
      message: form.message,
      status: 'new'
    }]);
    setLoading(false);
    if(error) alert(error.message);
    else { setDone(true); setForm({parent_name:"", phone:"", child_name:"", child_age:"", class_interest:"Top Class", message:""}); }
  }

  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>

      <div className="max-w-7xl mx-auto px-6 pt-8 grid md:grid-cols-2 gap-8">
        {/* LEFT INFO */}
        <div className="bg-[#7A0F14] rounded-[2.5rem] p-8 md:p-10 text-white h-fit">
          <p className="inline-flex bg-white/15 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest">🎓 ADMISSIONS 2026 • 40TH YEAR</p>
          <h1 className="text-4xl font-black mt-4 leading-tight">Give Your Child<br/>40 Years of Legacy</h1>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">Since 1986, we have nurtured over 500+ children. Enrollment for 2026 intake is open — Baby, Middle & Top Class. Fill the form and we will call you within 24hrs.</p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-3"><div className="w-10 h-10 bg-white/15 rounded-full grid place-items-center">📚</div><div><p className="font-bold text-sm">Baby - Top Class</p><p className="text-xs text-white/60">Age 2 - 6 Years</p></div></div>
            <div className="flex gap-3"><div className="w-10 h-10 bg-white/15 rounded-full grid place-items-center">🕗</div><div><p className="font-bold text-sm">8am - 4pm • Mon-Fri</p><p className="text-xs text-white/60">Daycare available</p></div></div>
            <div className="flex gap-3"><div className="w-10 h-10 bg-white/15 rounded-full grid place-items-center">📍</div><div><p className="font-bold text-sm">Iganga, Uganda</p><p className="text-xs text-white/60">Near Iganga Main</p></div></div>
          </div>

          <div className="mt-8 bg-white/10 rounded-2xl p-4">
            <p className="text-xs font-bold tracking-widest">NEED HELP?</p>
            <p className="font-black text-lg mt-1">+256 700 000 000</p>
            <p className="text-xs text-white/60">WhatsApp / Call</p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-[2.5rem] p-8 border">
          {done? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full grid place-items-center text-3xl mx-auto">✓</div>
              <h2 className="text-2xl font-black mt-4">Inquiry Sent!</h2>
              <p className="text-sm text-gray-500 mt-2">We have received details for <b>{form.child_name || 'your child'}</b>. Our admissions team will call you on WhatsApp within 24 hours.</p>
              <button onClick={()=>setDone(false)} className="mt-6 px-6 py-3 bg-black text-white rounded-full font-bold text-sm">Send Another</button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-black">Admission Inquiry</h2>
              <p className="text-sm text-gray-400 mt-1">Fill in - we will contact you</p>
              <div className="space-y-4 mt-6">
                <input value={form.parent_name} onChange={e=>setForm({...form, parent_name:e.target.value})} placeholder="Parent / Guardian Name *" className="w-full p-4 rounded-xl border text-sm"/>
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="WhatsApp Number * e.g 0700..." className="w-full p-4 rounded-xl border text-sm"/>
                <div className="grid grid-cols-2 gap-3">
                  <input value={form.child_name} onChange={e=>setForm({...form, child_name:e.target.value})} placeholder="Child Name *" className="p-4 rounded-xl border text-sm"/>
                  <input value={form.child_age} onChange={e=>setForm({...form, child_age:e.target.value})} type="number" placeholder="Age" className="p-4 rounded-xl border text-sm"/>
                </div>
                <select value={form.class_interest} onChange={e=>setForm({...form, class_interest:e.target.value})} className="w-full p-4 rounded-xl border text-sm font-bold">
                  <option>Baby Class</option><option>Middle Class</option><option>Top Class</option><option>Daycare</option>
                </select>
                <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Message (Optional) - e.g when to visit?" className="w-full p-4 rounded-xl border text-sm h-24"></textarea>
              </div>
              <button onClick={submit} disabled={loading} className="w-full mt-6 py-4 bg-[#7A0F14] text-white rounded-full font-black">{loading? "Sending..." : "Submit Inquiry →"}</button>
              <p className="text-[11px] text-gray-400 text-center mt-3">🔒 Your info is safe — saved to admissions DB, we will WhatsApp you</p>
            </>
          )}
        </div>
      </div>

      <Footer/>
    </div>
  )
}