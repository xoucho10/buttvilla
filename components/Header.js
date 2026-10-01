"use client"
import Link from "next/link"
import { useState } from "react"
const menu = [
  { label: "About", items: [
    { label: "About Us", href: "/about" },
    { label: "Our History", href: "/history" },
    { label: "Mission & Vision", href: "/mission" },
    { label: "🔥 500+ Alumni", href: "/alumni" },
  ]},
  { label: "Academics", items: [
    { label: "Academics", href: "/academics" },
    { label: "Curriculum", href: "/curriculum" },
    { label: "Teachers", href: "/teachers" },
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-6 h-[96px] flex justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <img src="/logo.png" alt="Buttvilla Kindergarten Iganga Logo" className="w-20 h-20 md:w-[84px] md:h-[84px] object-contain" />
          <div>
            <p className="font-bold text-[#7A0F14] leading-none text-[20px] md:text-[22px] tracking-tight">Buttvilla</p>
            <p className="text-[11px] md:text-[12px] tracking-[0.22em] text-[#C5A880] uppercase font-medium mt-1">Kindergarten Iganga</p>
          </div>
        </Link>

        <Link href="/alumni" className="hidden md:flex items-center gap-2 bg-[#7A0F14] text-white px-7 py-3 rounded-full font-black text-[15px] tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          <span className="text-[18px]">🔥</span> 500+ ALUMNI
          <span className="bg-white text-[#7A0F14] text-[10px] px-2 py-0.5 rounded-full font-bold ml-1">40 YRS</span>
        </Link>

        <nav className="hidden lg:flex gap-1 items-center">
          {menu.map((m)=>(
            <div key={m.label} className="relative" onMouseEnter={()=>setOpen(m.label)} onMouseLeave={()=>setOpen(null)}>
              <button className="px-3 py-2 text-[13px] font-medium hover:text-[#7A0F14] flex items-center gap-1">{m.label} <span className="text-[9px]">▼</span></button>
              {open===m.label && (
                <div className="absolute top-full left-0 bg-white border shadow-xl rounded-2xl p-2 min-w-[200px] z-50">
                  {m.items.map((it)=><Link key={it.href} href={it.href} className="block px-4 py-2.5 text-sm rounded-xl hover:bg-[#FFFCF7] hover:text-[#7A0F14]">{it.label}</Link>)}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="ml-2 bg-black text-white px-6 py-2.5 rounded-full text-[13px] font-medium">Contact</Link>
        </nav>

        <button onClick={()=>setMobile(!mobile)} className="lg:hidden w-11 h-11 grid place-items-center border-2 rounded-full font-bold">☰</button>
      </div>

      {mobile && (
        <div className="lg:hidden bg-white border-t max-h-[90vh] overflow-auto">
          <div className="px-6 py-6 grid gap-5">
            <Link href="/alumni" onClick={()=>setMobile(false)} className="bg-[#7A0F14] text-white text-center py-4 rounded-full font-black text-lg shadow-lg">🔥 500+ ALUMNI • 40 YEARS</Link>
            {menu.map((m)=>(
              <div key={m.label}><p className="font-bold text-[#7A0F14] text-sm mb-2">{m.label}</p><div className="grid grid-cols-2 gap-2">{m.items.map((it)=><Link key={it.href} href={it.href} onClick={()=>setMobile(false)} className="text-sm py-2.5 px-3 bg-[#FFFCF7] rounded-full border text-center">{it.label}</Link>)}</div></div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}