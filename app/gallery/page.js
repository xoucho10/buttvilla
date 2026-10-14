"use client";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "../../lib/supabase";

const CATS = [
  { id:"all", label:"All" },
  { id:"heritage", label:"Heritage 1986-99" },
  { id:"baby", label:"Baby" },
  { id:"middle", label:"Middle" },
  { id:"top", label:"Top" },
  { id:"daycare", label:"Daycare" },
  { id:"meals", label:"Meals" },
  { id:"play", label:"Play" },
  { id:"event", label:"Events 2026" },
];

export default function GalleryPage(){
  const [items, setItems] = useState([]);
  const [cat, setCat] = useState("all");
  const [year, setYear] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchG = async () => {
      setLoading(true);
      const { data } = await supabase.from('gallery').select('*').order('year',{ascending:false});
      setItems(data||[]);
      setLoading(false);
    }
    fetchG();
  },[]);

  const years = useMemo(()=> [...new Set(items.map(i=>i.year))].sort((a,b)=>b-a), [items]);

  const filtered = useMemo(()=> items.filter(i=>{
    const catOk = cat==="all" || i.category===cat;
    const yearOk = year==="all" || String(i.year)===String(year);
    const q = search.toLowerCase();
    const searchOk =!q || i.title?.toLowerCase().includes(q) || i.caption?.toLowerCase().includes(q);
    return catOk && yearOk && searchOk;
  }), [items, cat, year, search]);

  return (
    <div className="bg-[#FFFCF7] min-h-screen text-[#2a0a0d]">
      <div className="max-w-[1280px] mx-auto px-6 pt-8">
        <div className="bg-white rounded-[2.5rem] border p-8 md:p-10 flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <div className="inline-flex bg-[#7A0F14] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest">📸 40 YEARS IN PHOTOS • {items.length} PHOTOS</div>
            <h1 className="text-4xl font-black mt-4 leading-[0.9]">Where Play Becomes<br/>Purpose</h1>
            <p className="text-sm text-gray-500 mt-3 max-w-md">From 1986 mud room with stools to 2026 with 350+ kids. Filter by class, year, or heritage.</p>
          </div>
          <div className="lg:text-right">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#FFFCF7] border rounded-2xl p-3 text-center"><div className="font-black text-xl">{items.filter(i=>i.category==='heritage').length}</div><div className="text-[10px]">Heritage</div></div>
              <div className="bg-[#7A0F14] text-white rounded-2xl p-3 text-center"><div className="font-black text-xl">{items.filter(i=>i.featured).length}</div><div className="text-[10px] opacity-70">Featured</div></div>
              <div className="bg-black text-white rounded-2xl p-3 text-center"><div className="font-black text-xl">{items.filter(i=>i.year===2026).length}</div><div className="text-[10px] opacity-70">2026</div></div>
            </div>
            <div className="mt-4 flex gap-2">
              <div className="relative flex-1"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">🔍</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search..." className="w-full pl-9 pr-3 py-2.5 rounded-full border text-sm"/></div>
              <select value={year} onChange={e=>setYear(e.target.value)} className="px-4 py-2.5 rounded-full border text-sm font-bold">
                <option value="all">All Years</option>
                {years.map(y=><option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2 flex-wrap">
          {CATS.map(c=>(
            <button key={c.id} onClick={()=>setCat(c.id)} className={`px-5 py-2.5 rounded-full text-sm font-bold border transition ${cat===c.id?'bg-[#7A0F14] text-white border-[#7A0F14]':'bg-white hover:bg-black hover:text-white'}`}>
              {c.label} {c.id!=="all" && `(${items.filter(i=>i.category===c.id).length})`}
            </button>
          ))}
        </div>

        <div className="mt-8 pb-16">
          {loading? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{[1,2,3,4,5,6,7,8].map(i=><div key={i} className="h-[200px] bg-white border rounded-[20px] animate-pulse"></div>)}</div>
          ) : filtered.length===0? (
            <div className="bg-white border-2 border-dashed rounded-[2rem] p-16 text-center"><p className="text-5xl">📸</p><p className="font-bold mt-3">No photos in {cat} {year!=="all"?year:""}</p><p className="text-sm text-gray-400">Add in Supabase gallery table</p></div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map(item=>(
                <div key={item.id} onClick={()=>setSelected(item)} className="group bg-white rounded-[20px] overflow-hidden border hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
                  <div className="h-[200px] relative overflow-hidden">
                    <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-black px-2 py-1 rounded-full">{item.year}</div>
                    {item.featured && <div className="absolute top-2 right-2 bg-[#FFD93D] text-black text-[9px] font-black px-2 py-1 rounded-full">★ FEATURED</div>}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <div className="text-white text-[12px] font-bold leading-tight line-clamp-1">{item.title}</div>
                      <div className="text-white/70 text-[10px] uppercase tracking-widest">{item.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4" onClick={()=>setSelected(null)}>
          <div className="bg-white w-full max-w-3xl rounded-[2rem] overflow-hidden" onClick={e=>e.stopPropagation()}>
            <div className="relative">
              <img src={selected.image_url} className="w-full max-h-[70vh] object-contain bg-black" alt=""/>
              <button onClick={()=>setSelected(null)} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full grid place-items-center font-black">✕</button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                <div className="text-white"><span className="bg-[#7A0F14] px-3 py-1 rounded-full text-[10px] font-black">{selected.category?.toUpperCase()} • {selected.year}</span><h3 className="text-xl font-black mt-2">{selected.title}</h3>{selected.caption && <p className="text-sm text-white/80 mt-1">{selected.caption}</p>}</div>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center text-[12px]">
              <span className="text-gray-500">📸 {selected.taken_by || "Buttvilla Archive"}</span>
              <a href={selected.image_url} target="_blank" download className="px-4 py-2 bg-black text-white rounded-full font-bold">Download</a>
            </div>
          </div>
        </div>
      )}

      </div>
  )
}
