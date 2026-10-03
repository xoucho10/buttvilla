"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabase";

const ERAS = ["all","1986-1995","1996-2005","2006-2015","2016-2026"];

export default function TeachersPage(){
  const [teachers, setTeachers] = useState([]);
  const [era, setEra] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(()=>{
    supabase.from('teachers').select('*').order('from_year',{ascending:true}).then(({data})=>setTeachers(data||[]));
  },[]);

  const filtered = teachers.filter(t=>{
    const eraOk = era==="all" || t.era===era;
    const searchOk = t.name.toLowerCase().includes(search.toLowerCase()) || t.subject.toLowerCase().includes(search.toLowerCase());
    return eraOk && searchOk;
  });

  const avatar = (n) => `https://ui-avatars.com/api/?name=${encodeURIComponent(n)}&background=7A0F14&color=fff`;

  const calcYears = (from,to) => {
    const end = to || new Date().getFullYear();
    return end - from;
  }

  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="bg-[#7A0F14] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C5A880]/10 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex bg-white/15 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest">🎓 THE PILLARS • 1986-2026</div>
            <h1 className="text-4xl md:text-5xl font-black mt-4 leading-tight">The Teachers Who<br/>Built 40 Years</h1>
            <p className="mt-3 text-white/70 max-w-2xl text-sm leading-relaxed">They taught ABCs in 1986 with chalk, and still teach with love in 2026. Honor their Then & Now journey — from when to when, and the lives they shaped.</p>

            <div className="mt-6 flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative max-w-md"><span className="absolute left-4 top-1/2 -translate-y-1/2">🔍</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search teacher or subject..." className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-sm placeholder:text-white/50 focus:bg-white focus:text-black outline-none"/></div>
              <div className="flex gap-2 flex-wrap">
                {ERAS.map(e=>(
                  <button key={e} onClick={()=>setEra(e)} className={`px-5 py-2.5 rounded-full text-sm font-bold border ${era===e?'bg-white text-[#7A0F14]':'border-white/30 text-white/70'}`}>{e==="all"?"All Eras":e}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filtered.length===0? (
          <div className="bg-white border-2 border-dashed rounded-[2rem] p-16 text-center">
            <p className="text-5xl">🎓</p>
            <p className="font-bold mt-3">No teachers in {era}</p>
            <p className="text-sm text-gray-400">Add them in /admin/teachers</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map(t=>(
              <div key={t.id} onClick={()=>setSelected(t)} className="bg-white rounded-[2rem] p-4 border hover:shadow-xl transition cursor-pointer group">
                <div className="grid grid-cols-2 gap-3">
                  <div><p className="text-[9px] tracking-widest font-black text-gray-400 mb-1">THEN • {t.from_year}</p><img src={t.photo_then_url || avatar(t.name)} className="w-full h-40 object-cover rounded-2xl bg-gray-100 group-hover:scale-[1.02] transition" alt=""/></div>
                  <div><p className="text-[9px] tracking-widest font-black text-[#7A0F14] mb-1">NOW • {t.to_year || 'PRESENT'}</p><img src={t.photo_now_url || avatar(t.name)} className="w-full h-40 object-cover rounded-2xl bg-gray-100 group-hover:scale-[1.02] transition" alt=""/></div>
                </div>
                <div className="mt-4">
                  <h3 className="font-black text-[#7A0F14]">{t.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{t.role? `${t.role} • `:''}{t.subject}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-[#FFFCF7] border px-3 py-1 rounded-full text-[11px] font-bold">{t.from_year} - {t.to_year || 'Present'}</span>
                    <span className="bg-[#7A0F14] text-white px-3 py-1 rounded-full text-[11px] font-bold">{calcYears(t.from_year, t.to_year)} Years</span>
                  </div>
                  {t.tribute && <p className="text-sm mt-3 bg-[#FFFCF7] p-3 rounded-xl italic line-clamp-2">"{t.tribute}"</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL - FULL DETAILS */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4" onClick={()=>setSelected(null)}>
          <div className="bg-white w-full max-w-2xl rounded-[2rem] overflow-hidden max-h-[90vh] overflow-y-auto" onClick={e=>e.stopPropagation()}>
            <div className="grid grid-cols-2 gap-0">
              <img src={selected.photo_then_url || avatar(selected.name)} className="w-full h-72 object-cover" alt=""/>
              <img src={selected.photo_now_url || avatar(selected.name)} className="w-full h-72 object-cover" alt=""/>
            </div>
            <div className="p-7">
              <div className="flex justify-between items-start">
                <div><h2 className="text-2xl font-black text-[#7A0F14]">{selected.name}</h2><p className="text-sm text-gray-500 mt-1">{selected.role} • {selected.subject}</p></div>
                <button onClick={()=>setSelected(null)} className="w-9 h-9 bg-black text-white rounded-full grid place-items-center">✕</button>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="bg-[#FFFCF7] p-3 rounded-2xl text-center"><p className="text-[10px] tracking-widest text-gray-400">FROM</p><p className="font-black text-lg">{selected.from_year}</p></div>
                <div className="bg-[#FFFCF7] p-3 rounded-2xl text-center"><p className="text-[10px] tracking-widest text-gray-400">TO</p><p className="font-black text-lg">{selected.to_year || 'Present'}</p></div>
                <div className="bg-[#7A0F14] p-3 rounded-2xl text-center text-white"><p className="text-[10px] tracking-widest text-white/60">SERVICE</p><p className="font-black text-lg">{calcYears(selected.from_year, selected.to_year)} Yrs</p></div>
              </div>

              <div className="mt-6 space-y-4">
                {selected.bio && <div><p className="text-[11px] tracking-widest font-black text-gray-400 mb-1">JOURNEY</p><p className="text-sm leading-relaxed">{selected.bio}</p></div>}
                {selected.tribute && <div><p className="text-[11px] tracking-widest font-black text-gray-400 mb-1">TRIBUTE</p><p className="text-sm bg-[#FFFCF7] p-4 rounded-2xl italic leading-relaxed">"{selected.tribute}"</p></div>}
                <p className="text-xs"><span className="font-bold">Era:</span> {selected.era} • <span className="font-bold">Years Active:</span> {selected.years_active}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <a href={`https://wa.me/${selected.phone?.replace(/\D/g,'')}`} className="py-3 bg-green-600 text-white rounded-full text-center font-bold text-sm">WhatsApp Teacher</a>
                <button onClick={()=>setSelected(null)} className="py-3 border rounded-full font-bold text-sm">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer/>
    </div>
  )
}