"use client"
import Link from "next/link"
import { useState } from "react"

const menu = [
  { label: "About", items: [
    { label: "About Us", href: "/about" },
    { label: "Our History", href: "/history" },
    { label: "Mission & Vision", href: "/mission" },
    { label: "🔥 500+ Alumni", href: "/alumni" },
    { label: "🎓 Teachers • 40 Yrs", href: "/teachers" },
  ]},
  { label: "Academics", items: [
    { label: "Academics", href: "/academics" },
    { label: "Curriculum", href: "/curriculum" },
    { label: "🎓 Teachers 40Yrs Journey", href: "/teachers" },
    { label: "Facilities", href: "/facilities" },
  ]},
  { label: "Admissions", items: [
    { label: "Admissions", href: "/admissions" },
    { label: "Enrollment", href: "/enrollment" },
    { label: "Fees Structure", href: "/fees" },
    { label: "Uniform", href: "/uniform" },
  ]},
  { label: "School Life", items: [
    { label: "Gallery", href: "/gallery" },
    { label: "Events", href: "/events" },
    { label: "Parents Portal", href: "/parents" },
    { label: "Nutrition", href: "/nutrition" },
    { label: "Transport", href: "/transport" },
    { label: "Safety & Care", href: "/safety" },
  ]},
]

export default function Header(){
  const [open, setOpen] = useState(null)
  const [mobile, setMobile] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-6 h-[88px] md:h-[96px] flex justify-between items-center gap-3">

        {/* LOGO - FIXED CLIP */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#C5A880]/30 flex items-center justify-center p-1.5 shrink-0">
            <img
              src="/logo.png"
              alt="Buttvilla Kindergarten Iganga Logo"
              className="w-full h-full object-contain"
              onError={(e)=>{ e.currentTarget.src="https://via.placeholder.com/100x100/7A0F14/FFFFFF?text=B" }}
            />
          </div>
          <div className="leading-none">
            <p className="font-black text-[#7A0F14] text-[20px] md:text-[22px] tracking-tight">Buttvilla</p>
            <p className="text-[10px] md:text-[11px] tracking-[0.22em] text-[#C5A880] uppercase font-bold mt-[2px]">Kindergarten Iganga</p>
          </div>
        </Link>

        {/* ALUMNI BADGE - DESKTOP */}
        <Link href="/alumni" className="hidden md:flex items-center gap-2 bg-[#7A0F14] text-white px-6 py-3 rounded-full font-black text-[13px] tracking-wide shadow-[0_4px_14px_rgba(122,15,20,0.3)] hover:shadow-[0_6px_20px_rgba(122,15,20,0.4)] hover:scale-[1.02] transition-all shrink-0">
          <span className="text-[16px]">🔥</span> 500+ ALUMNI
          <span className="bg-white text-[#7A0F14] text-[10px] px-2 py-0.5 rounded-full font-bold ml-1">40 YRS</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-0.5 items-center">
          {menu.map((m)=>(
            <div key={m.label} className="relative" onMouseEnter={()=>setOpen(m.label)} onMouseLeave={()=>setOpen(null)}>
              <button className="px-3.5 py-2.5 text-[13px] font-semibold hover:text-[#7A0F14] flex items-center gap-1 rounded-full hover:bg-[#FFFCF7] transition">{m.label} <span className="text-[8px] opacity-60">▼</span></button>
              {open===m.label && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-2xl p-2 min-w-[230px] z-50 animate-in fade-in slide-in-from-top-1">
                  {m.items.map((it)=>{
                    const isTeachers = it.href==="/teachers";
                    return <Link key={it.label+it.href} href={it.href} className={`block px-4 py-2.5 text-[13px] rounded-xl transition ${isTeachers? 'bg-[#7A0F14] text-white font-bold hover:bg-[#5a0b0f] mt-1 shadow' : 'hover:bg-[#FFFCF7] hover:text-[#7A0F14] font-medium text-gray-700'}`}>{it.label}</Link>
                  })}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="ml-2 bg-black text-white px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-[#1a1a1a] transition">Contact</Link>
        </nav>

        <button onClick={()=>setMobile(!mobile)} className="lg:hidden w-11 h-11 grid place-items-center border-2 border-black/10 rounded-full font-bold text-[18px] hover:bg-black hover:text-white transition">
          {mobile? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE */}
      {mobile && (
        <div className="lg:hidden bg-white border-t border-black/5 max-h-[85vh] overflow-auto shadow-2xl">
          <div className="px-6 py-6 grid gap-6">
            <div className="grid grid-cols-2 gap-3">
              <Link href="/alumni" onClick={()=>setMobile(false)} className="bg-[#7A0F14] text-white text-center py-4 rounded-full font-black text-[13px] shadow">🔥 500+ ALUMNI</Link>
              <Link href="/teachers" onClick={()=>setMobile(false)} className="bg-black text-white text-center py-4 rounded-full font-black text-[13px] shadow">🎓 TEACHERS 40YRS</Link>
            </div>
            {menu.map((m)=>(
              <div key={m.label}>
                <p className="font-black text-[#7A0F14] text-[12px] tracking-widest mb-3 opacity-60">{m.label.toUpperCase()}</p>
                <div className="grid grid-cols-2 gap-2">
                  {m.items.map((it)=><Link key={it.label} href={it.href} onClick={()=>setMobile(false)} className={`text-[13px] py-3 px-3 rounded-full border text-center font-medium transition ${it.href==="/teachers"? 'bg-[#7A0F14] text-white border-[#7A0F14] font-bold' : 'bg-[#FFFCF7] border-black/5 hover:border-[#7A0F14]/20'}`}>{it.label}</Link>)}
                </div>
              </div>
            ))}
            <Link href="/contact" onClick={()=>setMobile(false)} className="bg-black text-white text-center py-4 rounded-full font-bold">Contact School →</Link>
          </div>
        </div>
      )}
    </header>
  )
}