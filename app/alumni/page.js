"use client";
import { useState } from "react";

const START_YEAR = 1986;
const CURRENT_YEAR = new Date().getFullYear();
const ALL_YEARS = Array.from({ length: CURRENT_YEAR - START_YEAR + 1 }, (_, i) => CURRENT_YEAR - i);

export default function AlumniPage() {
  const [showRegister, setShowRegister] = useState(false);
  const [form, setForm] = useState({ name: "", year: CURRENT_YEAR, role: "", whatsapp: "", email: "" });
  const [files, setFiles] = useState({ then: null, now: null });
  const [previews, setPreviews] = useState({ then: "", now: "" });
  const [localAlumni, setLocalAlumni] = useState([
    { year: 2024, name: "Sample Alumni" },
    { year: 2010, name: "Sample Alumni" },
    { year: 1995, name: "Sample Alumni" },
  ]);

  const handleFile = (e, type) => {
    const file = e.target.files[0];
    if(!file) return;
    setFiles(p=>({...p, [type]: file}));
    setPreviews(p=>({...p, [type]: URL.createObjectURL(file)}));
  };

  const handleRegister = () => {
    if(!form.name ||!form.role ||!form.whatsapp){
      alert("Fill name, role, whatsapp *");
      return;
    }
    // Structural only - add to local list (no DB)
    setLocalAlumni(prev => [{ year: Number(form.year), name: form.name, role: form.role },...prev]);
    alert(`Registered (structural only): ${form.name} - Class of ${form.year}\nDB will be added later.`);
    setShowRegister(false);
    setForm({ name: "", year: CURRENT_YEAR, role: "", whatsapp: "", email: "" });
    setFiles({ then: null, now: null });
    setPreviews({ then: "", now: "" });
  };

  return (
    <div className="bg-[#FFFCF7]">
      {/* TOP BANNER - KEEP YOUR DISPLAY */}
      <div className="w-full bg-[#7A0F14]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white/10 border border-white/20 text-white/80 text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full">
              EST 1986 • 40 YEARS • 500+ ALUMNI • P.O BOX 580 BULAGA
            </span>
            <span className="bg-[#C5A880] text-[#7A0F14] text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full">
              STRUCTURAL ONLY
            </span>
          </div>
          <h1 className="font-black leading-[0.9] tracking-tight text-[36px] md:text-[56px] max-w-4xl">
            <span className="text-white block">Once a Buttvilla Child,</span>
            <span className="text-[#C5A880] block">Always Family.</span>
          </h1>
          <p className="text-white/60 text-[14px] max-w-[720px] mt-5 leading-relaxed">
            From the mud room in 1986 to P.O Box 580 Bulaga today - 100m from Bulaga Post Office. Same reddish maroon, same family. Database will be added later.
          </p>
        </div>
      </div>

      {/* SEARCH + FILTER BAR */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 flex-wrap items-center bg-white border rounded-full shadow-sm mt-4">
        <div className="flex-1 relative min-w-[200px]">
          <span className="absolute left-4 top-1/2 -translate-y-1/2">🔍</span>
          <input placeholder="Search classmate..." className="w-full pl-11 pr-4 py-3 rounded-full border bg-[#FFFDF0] text-sm outline-none" />
        </div>
        <select className="px-5 py-3 rounded-full border bg-white text-sm font-bold">
          <option>All Filled Years</option>
        </select>
        <button onClick={()=>setShowRegister(true)} className="px-8 py-3 rounded-full bg-[#7A0F14] text-white text-sm font-black hover:bg-black">
          👤 Register Alumni
        </button>
      </div>

      {/* MAIN CONTENT - SAME AS SCREENSHOT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white border rounded-[2rem] p-12 text-center">
          <p className="text-5xl">🎓</p>
          <h3 className="font-black text-xl mt-4">Alumni Page - Structural Ready</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
            No DB logic yet. Years with alumni will show here once DB is connected. Then/Now photos, masked WhatsApp, and contact requests will be added later.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-3 text-left max-w-3xl mx-auto">
            {localAlumni.slice(0,3).map((item, idx) => (
              <div key={idx} className="bg-[#FFFCF7] border rounded-2xl p-4">
                <div className="bg-[#7A0F14] text-white px-4 py-1.5 rounded-full text-xs font-bold inline-block">{item.year} • FILLED</div>
                <div className="mt-3 flex gap-2">
                  <div className="w-14 h-14 rounded-xl bg-gray-200" />
                  <div className="w-14 h-14 rounded-xl bg-gray-200" />
                  <div className="flex-1">
                    <div className="h-3 w-24 bg-gray-200 rounded mb-1" />
                    <div className="h-2 w-16 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#7A0F14] font-bold mt-8 tracking-widest uppercase">DB WILL BE ADDED ANOTHER TIME</p>
        </div>
      </div>

      {/* REGISTER MODAL - NOW WORKING STRUCTURAL ONLY */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/60 z-[200] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-[1.8rem] max-h-[92vh] overflow-y-auto p-6 shadow-2xl">
            <div className="flex justify-between items-start">
              <div><h3 className="font-black text-xl">Register as Alumni</h3><p className="text-[12px] text-gray-500 mt-1">P.O Box 580 Bulaga • Since 1986 • STRUCTURAL ONLY</p></div>
              <button onClick={()=>setShowRegister(false)} className="w-9 h-9 bg-black text-white rounded-full grid place-items-center">✕</button>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <label className="border-2 border-dashed rounded-xl p-3 text-center cursor-pointer">
                <input type="file" hidden onChange={e=>handleFile(e,'then')} accept="image/*"/>
                <p className="text-[11px] font-bold">Then Photo (Optional)</p>
                <div className="w-16 h-16 mx-auto mt-2 rounded-full bg-gray-100 overflow-hidden border grid place-items-center">
                  {previews.then? <img src={previews.then} className="w-full h-full object-cover"/> : <span className="text-[10px] text-gray-400">Baby</span>}
                </div>
              </label>
              <label className="border-2 border-dashed rounded-xl p-3 text-center cursor-pointer">
                <input type="file" hidden onChange={e=>handleFile(e,'now')} accept="image/*"/>
                <p className="text-[11px] font-bold">Now Photo (Optional till DB)</p>
                <div className="w-16 h-16 mx-auto mt-2 rounded-full bg-gray-100 overflow-hidden border grid place-items-center">
                  {previews.now? <img src={previews.now} className="w-full h-full object-cover"/> : <span className="text-[10px] text-gray-400">Now</span>}
                </div>
              </label>
            </div>
            <div className="space-y-3 mt-5">
              <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name * e.g salim hussein" className="w-full p-3 rounded-xl border text-sm"/>
              <select value={form.year} onChange={e=>setForm({...form,year:e.target.value})} className="w-full p-3 rounded-xl border text-sm font-bold">
                {ALL_YEARS.map(y=><option key={y} value={y}>{y}</option>)}
              </select>
              <input value={form.role} onChange={e=>setForm({...form,role:e.target.value})} placeholder="Current job / role * e.g IT" className="w-full p-3 rounded-xl border text-sm"/>
              <input value={form.whatsapp} onChange={e=>setForm({...form,whatsapp:e.target.value})} placeholder="WhatsApp * e.g 0700***123" className="w-full p-3 rounded-xl border text-sm"/>
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email (Optional)" className="w-full p-3 rounded-xl border text-sm bg-gray-50"/>
            </div>
            <button onClick={handleRegister} className="w-full mt-6 py-4 rounded-xl bg-[#7A0F14] text-white font-black hover:bg-black">Submit (Structural Only)</button>
            <p className="text-[10px] text-center text-gray-400 mt-2">No DB yet - saved locally only for display test</p>
          </div>
        </div>
      )}
    </div>
  )
}