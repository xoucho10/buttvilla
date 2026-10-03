"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabase";

const CATS = ["all","40Yrs Celebration","1986-1995","1996-2005","2006-2015","2016-2026","Graduation","Sports","Facilities","Classroom"];

export default function GalleryPage(){
  const [gallery, setGallery] = useState([]);
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);
  const [yearFilter, setYearFilter] = useState("all");

  useEffect(()=>{
    supabase.from('gallery').select('*').order('created_at',{ascending:false}).then(({data})=>setGallery(data||[]));
  },[]);

  const years = [...new Set(gallery.map(g=>g.year).filter(Boolean))].sort((a,b)=>b-a);

  const filtered = gallery.filter(g=>{
    const catOk = filter==="all" || g.category===filter;
    const yearOk = yearFilter==="all" || g.year==yearFilter;
    return catOk && yearOk;
  });

  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="bg-[#7A0F14] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <p className="inline-flex bg-white/15 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest">📸 40 YEARS IN PICTURES</p>
          <h1 className="text-4xl md:text-5xl font-black mt-4 leading-tight">Our Memories,<br/>From 1986 to Now</h1>
          <p className="text-white/70 mt-3 max-w-xl text-sm">Browse 40 years of Buttvilla Kindergarten — first classrooms, graduations, sports days, and our 40th Anniversary journey. Tap any photo to view.</p>

          <div className="flex gap-2 mt-6 overflow-auto pb-2 scrollbar-hide">
            {CATS.map(c=>(
              <button key={c} onClick={()=>setFilter(c)} className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold border transition ${filter===c?'bg-white text-[#7A0F14] border-white':'border-white/30 text-white/70 hover:bg-white/10'}`}>{c==="all"?"All Photos":c}</button>
            ))}
          </div>

          {years.length>0 && (
            <div className="flex gap-2 mt-3 flex-wrap">
              <button onClick={()=>setYearFilter("all")} className={`px-4 py-1.5 rounded-full text-xs font-bold ${yearFilter==="all"?'bg-[#C5A880] text-white':'bg-white/10'}`}>All Years</button>
              {years.map(y=><button key={y} onClick={()=>setYearFilter(y)} className={`px-4 py-1.5 rounded-full text-xs font-bold ${yearFilter==y?'bg-[#C5A880] text-white':'bg-white/10'}`}>{y}</button>)}
            </div>
          )}
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {filtered.length===0? (
          <div className="bg-white border-2 border-dashed rounded-[2rem] p-16 text-center">
            <p className="text-5xl">🖼️</p>
            <p className="font-bold mt-3">No photos in {filter}</p>
            <p className="text-sm text-gray-400">Add photos in /admin/gallery</p>
          </div>
        ) : (
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {filtered.map((g,i)=>(
              <div key={g.id} onClick={()=>setLightbox(g)} className="break-inside-avoid bg-white rounded-[1.5rem] overflow-hidden border hover:shadow-xl transition cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img src={g.image_url} alt={g.caption||'Gallery'} className="w-full object-cover group-hover:scale-105 transition duration-700" loading="lazy"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                    <span className="bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-black">{g.category}</span>
                    {g.year && <span className="bg-[#7A0F14] text-white px-2.5 py-1 rounded-full text-[10px] font-bold">{g.year}</span>}
                  </div>
                </div>
                {g.caption && <p className="p-3 text-xs font-medium leading-tight">{g.caption}</p>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-8" onClick={()=>setLightbox(null)}>
          <button onClick={()=>setLightbox(null)} className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full grid place-items-center font-bold z-10">✕</button>
          <div className="max-w-4xl w-full" onClick={e=>e.stopPropagation()}>
            <img src={lightbox.image_url} className="w-full max-h-[80vh] object-contain rounded-2xl bg-black" alt=""/>
            <div className="bg-white rounded-2xl p-5 mt-4">
              <div className="flex gap-2">
                <span className="bg-[#7A0F14] text-white px-3 py-1 rounded-full text-xs font-bold">{lightbox.category}</span>
                {lightbox.year && <span className="border px-3 py-1 rounded-full text-xs font-bold">{lightbox.year}</span>}
              </div>
              {lightbox.caption && <p className="font-bold mt-3">{lightbox.caption}</p>}
            </div>
          </div>
        </div>
      )}

      <Footer/>
    </div>
  )
}