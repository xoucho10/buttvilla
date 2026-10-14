"use client"
import Link from "next/link"
import { useState } from "react"

const menu = [
  { label: "About", count: "5 pages", items: [
    { label: "About Us", href: "/about", db: "NO" },
    { label: "Our History", href: "/history", db: "NO" },
    { label: "Mission & Vision", href: "/mission", db: "NO" },
    { label: "Teachers 40 Yrs", href: "/teachers", db: "YES" },
    { label: "Alumni", href: "/alumni", db: "YES" },
  ]},
  { label: "Academics", count: "4 pages", items: [
    { label: "Academics", href: "/academics", db: "NO" },
    { label: "Curriculum", href: "/curriculum", db: "NO" },
    { label: "Facilities", href: "/facilities", db: "NO" },
    { label: "A Day at School", href: "/day", db: "NO" },
  ]},
  { label: "Admissions", count: "4 pages", items: [
    { label: "Admissions", href: "/admissions", db: "NO" },
    { label: "Enrollment", href: "/enrollment", db: "YES" },
    { label: "Fees Structure", href: "/fees", db: "NO" },
    { label: "Uniform", href: "/uniform", db: "NO" },
  ]},
  { label: "School Life", count: "6 pages", items: [
    { label: "Gallery", href: "/gallery", db: "YES" },
    { label: "Events", href: "/events", db: "YES" },
    { label: "Parents Portal", href: "/parents", db: "YES" },
    { label: "Nutrition", href: "/nutrition", db: "NO" },
    { label: "Transport", href: "/transport", db: "NO" },
    { label: "Safety & Care", href: "/safety", db: "NO" },
  ]},
]

export default function Header(){
  const [open, setOpen] = useState(null)
  const [mobile, setMobile] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#C5A880]/20">
      <div className="max-w-7xl mx-auto px-6 h-[88px] md:h-[96px] flex justify-between items-center gap-3">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full bg-white shadow border border-[#C5A880]/30 flex items-center justify-center p-1.5">
            <img src="/logo.png" alt="Buttvilla Logo" className="w-full h-full object-contain" />
          </div>
          <div className="leading-none">
            <p className="font-black text-[#7A0F14] text-[20px] md:text-[22px] tracking-tight">Buttvilla</p>
            <p className="text-[10px] md:text-[11px] tracking-[0.22em] text-[#C5A880] uppercase font-bold mt-[2px]">Kindergarten Iganga</p>
          </div>
        </Link>

        <Link href="/alumni" className="hidden md:flex items-center gap-2 bg-[#7A0F14] text-white px-6 py-3 rounded-full font-black text-[13px] shadow">
          🔥 500+ ALUMNI
        </Link>

        <nav className="hidden lg:flex gap-0.5 items-center">
          <Link href="/" className="px-3.5 py-2.5 text-[13px] font-bold hover:text-[#7A0F14] rounded-full hover:bg-[#FFFCF7]">Home</Link>
          {menu.map((m)=>(
            <div key={m.label} className="relative" onMouseEnter={()=>setOpen(m.label)} onMouseLeave={()=>setOpen(null)}>
              <button className="px-3.5 py-2.5 text-[13px] font-semibold hover:text-[#7A0F14] flex items-center gap-1 rounded-full hover:bg-[#FFFCF7]">{m.label} <span className="text-[8px] opacity-60">▼</span></button>
              {open===m.label && (
                <div className="absolute top-full left-0 pt-3 z-50">
                  <div className="bg-white border border-black/10 shadow-[0_16px_50px_rgba(0,0,0,0.14)] rounded-[20px] p-3 min-w-[280px]">
                    <div className="bg-[#E8CFCF] border border-[#7A0F14]/30 rounded-[12px] px-4 py-3 mb-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#7A0F14]/20 grid place-items-center">👤</div>
                      <div>
                        <p className="font-black text-[#7A0F14] text-[16px] leading-none">{m.label}</p>
                        <p className="text-[11px] text-[#7A0F14]/70 font-bold">({m.count})</p>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      {m.items.map((it)=>(
                        <Link key={it.href} href={it.href} className="group flex items-center justify-between bg-white border border-[#7A0F14]/40 rounded-[12px] px-4 py-2.5 hover:bg-[#FFFCF7] transition">
                          <span className={`text-[13px] ${it.db==="YES"? 'font-bold text-black' : 'font-medium text-black'}`}>{it.label}</span>
                          <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${it.db==="YES"? 'bg-[#7A0F14] text-white' : 'bg-[#6B7280] text-white'}`}>DB {it.db}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="ml-2 bg-black text-white px-6 py-2.5 rounded-full text-[13px] font-bold">Contact</Link>
        </nav>

        <button onClick={()=>setMobile(!mobile)} className="lg:hidden w-11 h-11 grid place-items-center border-2 border-black/10 rounded-full font-bold text-[18px]">
          {mobile? "✕" : "☰"}
        </button>
      </div>

      {mobile && (
        <div className="lg:hidden bg-white border-t max-h-[85vh] overflow-auto shadow-2xl">
          <div className="px-6 py-6 grid gap-6">
            {menu.map((m)=>(
              <div key={m.label}>
                <div className="bg-[#E8CFCF] border border-[#7A0F14]/20 rounded-[12px] px-4 py-2 flex justify-between items-center mb-2">
                  <p className="font-black text-[#7A0F14] text-[14px]">{m.label} ({m.count})</p>
                  <span className="text-[10px] font-bold opacity-60">{m.items.filter(i=>i.db==="YES").length} DB YES</span>
                </div>
                <div className="grid gap-2">
                  {m.items.map((it)=><Link key={it.href} href={it.href} onClick={()=>setMobile(false)} className="flex justify-between items-center bg-white border border-[#7A0F14]/30 rounded-full px-4 py-3 text-[13px]"><span>{it.label}</span><span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${it.db==="YES"? 'bg-[#7A0F14] text-white' : 'bg-gray-500 text-white'}`}>DB {it.db}</span></Link>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

