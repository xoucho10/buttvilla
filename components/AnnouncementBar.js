"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";

export default function AnnouncementBar(){
  const [ann, setAnn] = useState(null);
  const [hidden, setHidden] = useState(false);

  useEffect(()=>{
    supabase.from('announcements').select('*').eq('is_active', true).order('created_at',{ascending:false}).limit(1).single().then(({data})=> setAnn(data));
  },[]);

  if(!ann || hidden) return null;

  return (
    <div className="relative z-50" style={{background: ann.bg_color || '#7A0F14'}}>
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4 text-white text-[13px]">
        <div className="flex items-center gap-2">
          <span className="bg-white text-black px-2 py-0.5 rounded-full text-[10px] font-black animate-pulse">NEW</span>
          <p className="font-bold truncate"><span className="hidden md:inline">{ann.title} • </span>{ann.message}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {ann.link && <Link href={ann.link} className="bg-white text-black px-4 py-1 rounded-full font-bold text-xs">{ann.link.includes('admissions')?'Enroll Now':'View'}</Link>}
          <button onClick={()=>setHidden(true)} className="w-6 h-6 bg-white/20 rounded-full grid place-items-center text-xs">✕</button>
        </div>
      </div>
    </div>
  )
}