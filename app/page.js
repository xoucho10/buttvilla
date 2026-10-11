"use client"
import "./effects.css"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { supabase } from "../lib/supabase"

export default function Home(){
  const [gallery, setGallery] = useState([])
  const [teachers, setTeachers] = useState([])
  const [stats, setStats] = useState({ total:12, combined:0 })

  useEffect(()=>{
    // Featured for home - 4 cards
    supabase.from('gallery').select('*').eq('featured', true).limit(8).then(({data})=> setGallery(data||[]))
    supabase.from('teachers').select('*').order('from_year').limit(4).then(({data})=>{
      setTeachers(data||[])
      if(data){
        const combined = data.reduce((s,t)=> s + ((t.to_year||2026)-(t.from_year||2026)),0)
        setStats({ total: data.length, combined })
      }
    })
  },[])

  // Fallback static if DB empty
  const cards = gallery.length>=4? gallery.slice(0,4) : [
    { category:'baby', title:'Baby Class', image_url:'/today/baby-class-3-4.jpg', year:2026, caption:'3-4 Years' },
    { category:'middle', title:'Middle Class', image_url:'/today/middle-class-4-5.jpg', year:2026, caption:'4-5 Years' },
    { category:'top', title:'Top Class', image_url:'/today/top-class-5-6.jpg', year:2026, caption:'5-6 Years' },
    { category:'daycare', title:'Daycare & Meals', image_url:'/today/daycare-meals.jpg', year:2026, caption:'Daily Care' },
  ]

  const avatar = (n) => `https://ui-avatars.com/api/?name=${encodeURIComponent(n)}&background=7A0F14&color=fff`

  return (
    <div className="bg-[#FFFCF7] min-h-screen w-full text-[#2a0a0d]">
      <Header/>

      {/* HERO - INFINITY - DYNAMIC FROM GALLERY HERITAGE */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] h-[520px] lg:h-[680px] w-full overflow-hidden">
          <div className="relative bg-[#f6ead6] rain">
            <img src={gallery.find(g=>g.category==='heritage')?.image_url || "/heritage/1986-mud-room.jpg"} alt="1986" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            <div className="absolute top-6 left-6 bg-white/95 px-4 py-2 rounded-full text-[11px] font-black shadow">1986 • 25 PUPILS</div>
          </div>
          <div className="relative bg-[#FEF3E2] rain-d2">
            <img src={gallery.find(g=>g.category==='top')?.image_url || "/today/top-class-5-6.jpg"} alt="Today" className="w-full h-full object-cover"/>
            <div className="absolute top-6 right-6 bg-[#7A0F14] text-white px-4 py-2 rounded-full text-[11px] font-black shadow">2026 • 350+ KIDS</div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="bg-white rounded-[28px] shadow-[0_25px_80px_rgba(0,0,0,0.35)] border-[3px] border-[#C5A880] px-10 py-7 text-center w-[420px] pop">
            <div className="text-[10px] font-black tracking-[0.35em] text-[#7A0F14]">40 YEARS • SAME MISSION • {gallery.length} PHOTOS</div>
            <div className="mt-3 font-black text-[32px] leading-[0.9]">Foundation to<br/><span className="text-[#7A0F14]">Leadership</span></div>
            <div className="mt-5 flex gap-3 justify-center">
              <Link href="/admissions" className="bg-[#7A0F14] text-white px-6 py-3 rounded-full text-[12px] font-black">Apply for 2026</Link>
              <Link href="/gallery" className="bg-white border-2 border-[#7A0F14] text-[#7A0F14] px-6 py-3 rounded-full text-[12px] font-black">View Gallery</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY 4 CARDS - NOW FROM GALLERY DB */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div><div className="text-[12px] font-black tracking-[0.25em] text-[#7A0F14]">TODAY AT BUTTVILLA • FROM DB</div><h2 className="font-black text-[36px] lg:text-[44px] leading-[0.9] mt-2">Where play becomes<br/>purpose.</h2></div>
          <div className="flex gap-3"><div className="text-[14px] text-gray-600 max-w-[360px]">Four stages, all in reddish maroon uniform. Safe, fed, and loved every day.</div><Link href="/gallery" className="text-[12px] font-black text-[#7A0F14] underline">Manage in Gallery →</Link></div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c,i)=>(
            <div key={i} className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow hover:shadow-xl transition">
              <div className="h-[200px] relative"><img src={c.image_url} alt={c.title} className="w-full h-full object-cover"/><div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded-full text-[10px] font-black">{c.year}</div></div>
              <div className="p-5"><div className="text-[11px] font-black text-[#7A0F14] uppercase">{c.caption || c.category} • {c.year}</div><div className="font-bold text-[18px]">{c.title}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* DAILY LIFE - STATIC */}
      <section className="bg-white border-y border-black/5 py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div><div className="text-[12px] font-black tracking-[0.25em] text-[#7A0F14]">A DAY IN THE LIFE — 2026</div><h2 className="font-black text-[32px] lg:text-[42px] leading-[0.9] mt-2">What happens every day,<br/>7am to 5pm.</h2></div>
            <div className="bg-[#FFFCF7] border rounded-full px-5 py-2 text-[12px] font-bold">⏰ Gates open 7:00 AM • Last pickup 5:00 PM</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-[#FFFCF7] rounded-[20px] p-5 border"><div className="text-[11px] font-black text-[#7A0F14]">7:00 - 8:30</div><div className="font-black text-[14px] mt-2">Arrival & Health Check</div><div className="text-[12px] text-gray-600 mt-2">Parents drop, welcome, handwash</div></div>
            <div className="bg-white rounded-[20px] p-5 border shadow-sm"><div className="text-[11px] font-black text-[#7A0F14]">8:30 - 10:00</div><div className="font-black text-[14px] mt-2">Morning Lessons</div><div className="text-[12px] text-gray-600 mt-2">Literacy, numeracy, Montessori</div></div>
            <div className="bg-[#FFFCF7] rounded-[20px] p-5 border"><div className="text-[11px] font-black text-[#7A0F14]">10:00 - 10:30</div><div className="font-black text-[14px] mt-2">Porridge Break</div><div className="text-[12px] text-gray-600 mt-2">Hot porridge + fruit together</div></div>
            <div className="bg-white rounded-[20px] p-5 border shadow-sm"><div className="text-[11px] font-black text-[#7A0F14]">10:30 - 12:30</div><div className="font-black text-[14px] mt-2">Play & Creative</div><div className="text-[12px] text-gray-600 mt-2">Garden, drawing, singing</div></div>
            <div className="bg-[#FFFCF7] rounded-[20px] p-5 border"><div className="text-[11px] font-black text-[#7A0F14]">12:30 - 2:00</div><div className="font-black text-[14px] mt-2">Lunch & Nap</div><div className="text-[12px] text-gray-600 mt-2">Hot meals, baby naps on mats</div></div>
            <div className="bg-[#7A0F14] rounded-[20px] p-5 text-white"><div className="text-[11px] font-black opacity-70">2:00 - 5:00</div><div className="font-black text-[14px] mt-2">Afternoon Club</div><div className="text-[12px] opacity-80 mt-2">Story time, daycare till pickup</div></div>
          </div>
        </div>
      </section>

      {/* TEACHERS - NOW FROM DB */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[11px] font-black tracking-[0.3em] text-[#7A0F14]">MEET THE TEACHERS — {teachers.length} ACTIVE • {stats.combined} YRS COMBINED</div>
            <h3 className="font-black text-[28px] lg:text-[36px] leading-[0.9] mt-2">The aunties who have seen<br/>1,200 kids grow.</h3>
          </div>
          <Link href="/teachers" className="bg-[#7A0F14] text-white px-6 py-3 rounded-full text-[13px] font-black">View All {teachers.length || 12} Teachers →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {teachers.length>0? teachers.map(t=>(
            <div key={t.id} className="bg-white rounded-[20px] border overflow-hidden hover:shadow-lg transition">
              <div className="h-[180px] bg-[#FEF3E2]"><img src={t.photo_now_url || t.photo_then_url || avatar(t.name)} alt={t.name} className="w-full h-full object-cover"/></div>
              <div className="p-4"><div className="font-bold text-[14px]">{t.name}</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">{t.subject || t.role} • {(t.to_year||2026)-t.from_year} Yrs</div></div>
            </div>
          )) : (
            <>
              <div className="bg-white rounded-[20px] border overflow-hidden"><div className="h-[180px] bg-[#FEF3E2] flex items-center justify-center text-[40px]">👩‍🏫</div><div className="p-4"><div className="font-bold text-[14px]">Tr. Namulondo</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">Baby Class • 18 Yrs</div></div></div>
              <div className="bg-white rounded-[20px] border overflow-hidden"><div className="h-[180px] bg-[#FEF3E2] flex items-center justify-center text-[40px]">👩‍🏫</div><div className="p-4"><div className="font-bold text-[14px]">Tr. Isabirye</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">Middle • 12 Yrs • Alumni 1998</div></div></div>
              <div className="bg-white rounded-[20px] border overflow-hidden"><div className="h-[180px] bg-[#FEF3E2] flex items-center justify-center text-[40px]">👩‍🏫</div><div className="p-4"><div className="font-bold text-[14px]">Tr. Aisha</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">Top Class • 15 Yrs</div></div></div>
              <div className="bg-[#7A0F14] rounded-[20px] p-5 text-white flex flex-col justify-center"><div className="font-black text-[22px]">12 Teachers</div><div className="text-[12px] opacity-80 mt-1">Average 10 years at Buttvilla. Your child knows their auntie for 3 years.</div></div>
            </>
          )}
        </div>
      </section>

      {/* TIMELINE - FROM GALLERY HERITAGE */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
          <div className="flex justify-between items-end"><h3 className="font-black text-[28px]">40 Years Timeline</h3><Link href="/gallery?cat=heritage" className="text-[12px] font-black text-[#7A0F14]">View Heritage →</Link></div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(gallery.filter(g=>g.category==='heritage').length? gallery.filter(g=>g.category==='heritage').slice(0,4) : [
              { year:1986, title:'1986 • Founding', caption:'25 pupils, parents brought stools.', image_url:'/heritage/1986-mud-room.jpg' },
              { year:1989, title:'1989 • First Grads', caption:'First class in reddish gowns.', image_url:'/heritage/1989-first-grads.jpg' },
              { year:1996, title:'1996 • 10th', caption:'Permanent classrooms built.', image_url:'/heritage/1996-10th-anniversary.jpg' },
              { year:2026, title:'2026 • 40 Years', caption:'350+ kids, 1,200+ alumni.', image_url:'/today/top-class-5-6.jpg' },
            ]).map((g,i)=>(
              <div key={i} className="flex gap-4 bg-[#FFFCF7] rounded-[18px] p-4 border"><div className="w-[84px] h-[84px] rounded-[14px] overflow-hidden flex-shrink-0 border"><img src={g.image_url} className="w-full h-full object-cover"/></div><div><div className="text-[13px] font-black">{g.year} • {g.title?.replace(`${g.year} • `,'') || g.title}</div><div className="text-[12px] text-gray-600 mt-1">{g.caption}</div></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7A0F14]"><div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-5 gap-6 text-white text-center"><div><div className="font-black text-[28px]">40</div><div className="text-[11px] opacity-80">Years</div></div><div><div className="font-black text-[28px]">1,200+</div><div className="text-[11px] opacity-80">Alumni</div></div><div><div className="font-black text-[28px]">350+</div><div className="text-[11px] opacity-80">Kids Today</div></div><div><div className="font-black text-[28px]">{teachers.length||12}</div><div className="text-[11px] opacity-80">Teachers</div></div><div><div className="font-black text-[28px]">100%</div><div className="text-[11px] opacity-80">P1 Placement</div></div></div></section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        <div className="bg-white rounded-[28px] border-2 border-[#7A0F14] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 ">
          <div><div className="font-black text-[24px]">Ready to give your child the same foundation?</div><div className="text-[13px] text-gray-600 mt-2">2026 Intake: 23 spots left • Gallery: {gallery.length} photos • Tour daily 8am-4pm</div></div>
          <div className="flex gap-3"><Link href="/admissions" className="bg-[#7A0F14] text-white px-7 py-3 rounded-full text-[13px] font-black">Apply for 2026</Link><a href="https://wa.me/256700000000" className="bg-[#25D366] text-white px-7 py-3 rounded-full text-[13px] font-black">WhatsApp Us</a></div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}