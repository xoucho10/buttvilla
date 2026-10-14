"use client"
import "./effects.css"
import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import { supabase } from "../lib/supabase"

export default function Home(){
  const [gallery, setGallery] = useState([])
  const [teachers, setTeachers] = useState([])
  const [stats, setStats] = useState({ total:2, combined:68, years:40 })

  const heroImages = useMemo(()=> ({
    heritage: "/heritage/1986-mud-room.jpg",
    today: "/today/top-class-5-6.jpg"
  }), [])

  useEffect(()=>{
    supabase.from('gallery').select('*').eq('featured', true).limit(12).then(({data})=> { if(data && data.length>0) setGallery(data) })
    supabase.from('teachers').select('*').order('from_year').limit(4).then(({data})=>{
      if(data && data.length>0){
        setTeachers(data)
        const combined = data.reduce((s,t)=> s + ((t.to_year||2026)-(t.from_year||2026)),0)
        setStats(s=> ({...s, total: data.length, combined, years: 2026-1986 }))
      }
    })
  },[])

  const cards = [
    { title:'Baby Class', subtitle:'3-4 Years • Porridge 10am', image:'/today/baby-class-3-4.jpg', info:'ABC, Colors, Kindness • 1:15', badge:'Baby • 3-4 Yrs' },
    { title:'Middle Class', subtitle:'4-5 Years • Porridge + Lunch', image:'/today/middle-class-4-5.jpg', info:'Numbers, Creativity • 1:20', badge:'Middle • 4-5 Yrs' },
    { title:'Top Class', subtitle:'5-6 Years • P1 Ready', image:'/today/top-class-5-6.jpg', info:'Reading, Writing, English • 1:25', badge:'Top • 5-6 Yrs • P1 Ready' },
    { title:'Daycare & Meals', subtitle:'2-6 Years • 7am-5pm', image:'/today/daycare-meals.jpg', info:'Hot Meals, Nap, Story • Safe', badge:'Daycare • 7am-5pm' },
  ]

  const activates = [
    { title:'MDD Dance & Music', sub:'Singing, Drumming, Performing', img:'/activates/mdd-dance.jpg', fallback:'/today/middle-class-4-5.jpg', tag:'Every Friday • Stage Confidence' },
    { title:'Team Building Activates', sub:'Good works brings us together', img:'/activates/team-building.jpg', fallback:'/today/top-class-5-6.jpg', tag:'Together • Sharing • From Anthem' },
    { title:'Out Door Playing', sub:'Running, Balls, Swings, Fenced Safe', img:'/activates/outdoor-playing.jpg', fallback:'/today/baby-class-3-4.jpg', tag:'10:30-12:30 • Daily • Supervised' },
    { title:'Class Lessons', sub:'NCDC • English Day 1 • Literacy Numeracy', img:'/activates/class-lessons.jpg', fallback:'/today/top-class-5-6.jpg', tag:'8:30-10:00 • Weekly Assessment' },
    { title:'Nap & Daycare', sub:'Mats, Story, Loved till 5pm pickup', img:'/activates/nap-daycare.jpg', fallback:'/today/daycare-meals.jpg', tag:'12:30-2:00 • Safe Mats • Story Time' },
    { title:'Handwash & Safety', sub:'Health Check, Handwash, Clean Toilets', img:'/activates/handwash-safety.jpg', fallback:'/today/baby-class-3-4.jpg', tag:'7:00-8:30 • Health Check Daily' },
  ]

  const TeacherAvatar = ({ name }) => {
    const initials = name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase()
    return <div className="h-[260px] bg-[#7A0F14] flex items-center justify-center"><div className="text-[64px] font-black text-white/90 tracking-widest">{initials}</div></div>
  }

  return (
    <div className="bg-[#FFFCF7] min-h-screen w-full text-[#2a0a0d] pb-[80px] lg:pb-0">
      {/* SECTION 1: HERO - 95 CODE - MOBILE NO HORIZONTAL SCROLL */}
      <section className="relative w-full lg:w-screen lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] h-[560px] lg:h-[720px] w-full overflow-hidden">
          <div className="relative bg-[#f6ead6]">
            <img src={heroImages.heritage} alt="1986 mud classroom 25 pupils parents brought stools" className="w-full h-full object-cover" loading="eager" decoding="async"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full text-[11px] font-black shadow">1986 • 25 pupils • Stools</div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-[20px] p-5 border shadow-xl">
              <div className="text-[10px] font-black tracking-[0.2em] text-[#7A0F14]">WHERE IT STARTED</div>
              <div className="font-bold text-[15px] mt-1 leading-tight">One blackboard. Dream: roosters from eggs.</div>
              <div className="text-[11px] text-gray-600 mt-1">P.O Box 580, Iganga • 100m Post Office</div>
            </div>
          </div>
          <div className="relative bg-[#FEF3E2]">
            <img src={heroImages.today} alt="Today 4 bright classrooms children in maroon uniform" className="w-full h-full object-cover" loading="eager" decoding="async"/>
            <div className="absolute top-6 right-6 bg-[#7A0F14] text-white px-4 py-2 rounded-full text-[11px] font-black shadow">2026 • 4 classrooms • Licensed</div>
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-[20px] p-5 shadow-xl border-2 border-[#7A0F14]/10">
              <div className="text-[10px] font-black tracking-[0.2em] text-[#7A0F14]">TODAY • MODEL KINDERGARTEN</div>
              <div className="font-bold text-[15px] mt-1 leading-tight">4 classrooms, hot meals daily, 7am-5pm care.</div>
              <div className="text-[11px] text-gray-600 mt-1">NCDC • English Day 1 • Maroon uniform</div>
            </div>
            {/* 8 SEC VIDEO FOR 99 - PLACEHOLDER */}
            <div className="hidden lg:block absolute bottom-6 right-6 w-[180px] h-[100px] rounded-[16px] border-2 border-white shadow-xl overflow-hidden bg-black/20 backdrop-blur">
              <div className="w-full h-full flex items-center justify-center text-white text-[10px] font-black text-center p-2">Add 8sec video: /video/8sec-assembly.mp4 for 99/100</div>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="bg-white rounded-[28px] shadow-[0_25px_80px_rgba(0,0,0,0.35)] border-[3px] border-[#C5A880] px-8 py-6 text-center w-[460px]">
            <div className="flex items-center justify-center gap-2 text-[10px] font-black tracking-[0.2em] text-[#7A0F14]"><span>1986</span><span className="w-8 h-[2px] bg-[#7A0F14]"></span><span>40 YEARS</span><span className="w-8 h-[2px] bg-[#7A0F14]"></span><span>2026</span></div>
            <div className="mt-3"><div className="font-serif italic text-[13px] text-gray-600">"Roosters were once eggs"</div><div className="mt-2 font-black text-[34px] leading-[0.9] tracking-tight">Foundation to<br/><span className="text-[#7A0F14]">Leadership</span></div></div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center border-y border-black/5 py-3"><div><div className="font-black text-[18px] text-[#7A0F14]">25 → 350</div><div className="text-[9px] font-bold text-gray-500 uppercase">Growth</div></div><div className="border-x border-black/5"><div className="font-black text-[18px]">260</div><div className="text-[9px] font-bold text-gray-500 uppercase">Days</div></div><div><div className="font-black text-[18px]">100m</div><div className="text-[9px] font-bold text-gray-500 uppercase">Post Office</div></div></div>
            <div className="mt-4 flex gap-2 justify-center"><Link href="/admissions" className="bg-[#7A0F14] text-white px-6 py-3 rounded-full text-[12px] font-black shadow-lg hover:bg-[#5a0c0f] transition">Apply 2026</Link><Link href="/contact" className="bg-white border-2 border-[#7A0F14] text-[#7A0F14] px-5 py-3 rounded-full text-[12px] font-black hover:bg-[#FFFCF7] transition">Tour Today</Link></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 CLASSES - BIGGER PHOTOS - MAROON ONLY BADGES - LAZY */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div><div className="text-[12px] font-black tracking-[0.25em] text-[#7A0F14]">TODAY AT BUTTVILLA • 4 STAGES • 7AM-5PM • NCDC</div><h2 className="font-black text-[36px] lg:text-[46px] leading-[0.9] mt-2">Where play becomes<br/>purpose, daily.</h2></div>
          <div className="text-[14px] text-gray-600 max-w-[380px]">Four stages, reddish maroon uniform. Same auntie for 3 years. Safe, fed, loved.</div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c,i)=>(
            <div key={i} className="bg-white rounded-[28px] overflow-hidden border border-[#7A0F14]/10 shadow hover:shadow-xl transition group">
              <div className="h-[300px] relative overflow-hidden"><img src={c.image} alt={`${c.title} children in maroon uniform at Butt-Villa kindergarten`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" decoding="async"/><div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div><div className="absolute top-3 left-3 bg-white px-3 py-1.5 rounded-full text-[11px] font-black shadow border border-[#7A0F14]/10">{c.badge}</div><div className="absolute bottom-3 left-3 right-3"><div className="bg-[#7A0F14] text-white px-3 py-1.5 rounded-full text-[10px] font-black inline-block">{c.info}</div></div></div>
              <div className="p-5"><div className="font-black text-[18px]">{c.title}</div><div className="text-[12px] text-gray-600 mt-1">{c.subtitle}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2.5: PHOTO ACTIVATES - 6 VISUALS - TEAM BUILDING + OUTDOOR + CLASS LESSONS - LAZY - MAROON */}
      <section className="bg-white border-y border-[#7A0F14]/10 py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[12px] font-black tracking-[0.25em] text-[#7A0F14]">PHOTO ACTIVATES • CHILDREN PICTURES WITH INFO • KINDERGARTEN FEEL</div>
              <h2 className="font-black text-[32px] lg:text-[44px] leading-[0.9] mt-2">What children do every day,<br/>in photos you can feel.</h2>
              <div className="mt-3 text-[13px] text-gray-600 max-w-[500px]">Mother wants to see her child dancing, team building, outdoor playing, class lessons, napping safely - not just text.</div>
            </div>
            <Link href="/gallery" className="bg-[#FFFCF7] border border-[#7A0F14]/20 px-5 py-3 rounded-full text-[12px] font-black text-[#7A0F14]">View All Activities →</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {activates.map((a,i)=>(
              <div key={i} className="bg-[#FFFCF7] rounded-[28px] overflow-hidden border border-[#7A0F14]/10 shadow hover:shadow-xl transition group">
                <div className="h-[340px] relative overflow-hidden">
                  <img src={a.img} onError={(e)=> { e.currentTarget.src = a.fallback }} alt={`${a.title} at Butt-Villa kindergarten Iganga children in maroon uniform`} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" loading="lazy" decoding="async"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full text-[10px] font-black shadow border border-[#7A0F14]/10">{a.tag}</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-black text-[22px] text-white leading-tight">{a.title}</div>
                    <div className="text-[13px] text-white/90 mt-1">{a.sub}</div>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <div className="text-[12px] leading-snug text-gray-700">
                    {i===0 && <>MDD Dance: Children in maroon uniform drumming, dancing, singing both anthems on stage. Confidence, team.</>}
                    {i===1 && <>Team Building: From anthem "Good works brings us together" - boys and girls working together, sharing, garden team building.</>}
                    {i===2 && <>Out Door Playing: Fenced compound, balls, swings, running. 10:30-12:30 daily, supervised, safe. Body development.</>}
                    {i===3 && <>Class Lessons: NCDC curriculum, Literacy, Numeracy, English from Day 1. Weekly assessment, gifts shared when parents come.</>}
                    {i===4 && <>Nap & Daycare: Hot lunch 1pm, mats, story time, loved till 5pm pickup. No lunchbox needed. Safe sleep mats.</>}
                    {i===5 && <>Handwash & Safety: Health check daily 7am, handwash station, clean toilets, fenced. Body spirit mind safe.</>}
                  </div>
                  <div className="mt-3 flex gap-2"><span className="bg-[#7A0F14] text-white px-2 py-1 rounded-full text-[9px] font-black">Maroon Uniform ✓</span><span className="bg-[#FFFCF7] border border-[#7A0F14]/20 px-2 py-1 rounded-full text-[9px] font-bold">Safe • Fed • Loved</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#FFFCF7] rounded-[20px] p-4 border border-[#7A0F14]/10 text-center text-[11px] text-gray-600">
            To reach 99/100: Save 6 real photos to /public/activates/ folder: mdd-dance.jpg, team-building.jpg, outdoor-playing.jpg, class-lessons.jpg, nap-daycare.jpg, handwash-safety.jpg - Horizontal, children smiling in maroon, taken 10:30am outdoor time tomorrow.
          </div>
        </div>
      </section>

      {/* SECTION 3: DAILY LIFE - MAROON ONLY */}
      <section className="bg-[#FFFCF7] border-y border-[#7A0F14]/10 py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10"><h2 className="font-black text-[32px] lg:text-[42px] leading-[0.9]">What happens every day,<br/>7am to 5pm.</h2><div className="bg-white border border-[#7A0F14]/20 rounded-full px-5 py-2 text-[12px] font-bold text-[#7A0F14]">⏰ Gates 7:00 AM - 5:00 PM • Tour 8am-4pm</div></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white rounded-[20px] p-5 border border-[#7A0F14]/10 shadow-sm"><div className="text-[11px] font-black text-[#7A0F14]">7:00 - 8:30</div><div className="font-black text-[14px] mt-2">Arrival & Health</div><div className="text-[12px] text-gray-600 mt-2">Welcome song, handwash, health check.</div></div>
            <div className="bg-[#7A0F14] rounded-[20px] p-5 text-white shadow-sm"><div className="text-[11px] font-black opacity-70">8:30 - 10:00</div><div className="font-black text-[14px] mt-2">Class Lessons</div><div className="text-[12px] opacity-80 mt-2">NCDC, Literacy, English Day 1. Weekly report.</div></div>
            <div className="bg-white rounded-[20px] p-5 border border-[#7A0F14]/10 shadow-sm"><div className="text-[11px] font-black text-[#7A0F14]">10:00 - 10:30</div><div className="font-black text-[14px] mt-2">Porridge Break</div><div className="text-[12px] text-gray-600 mt-2">Hot porridge + fruit together.</div></div>
            <div className="bg-white rounded-[20px] p-5 border border-[#7A0F14]/10 shadow-sm"><div className="text-[11px] font-black text-[#7A0F14]">10:30 - 12:30</div><div className="font-black text-[14px] mt-2">Outdoor + Team</div><div className="text-[12px] text-gray-600 mt-2">Out-door playing + team building activates.</div></div>
            <div className="bg-white rounded-[20px] p-5 border border-[#7A0F14]/10 shadow-sm"><div className="text-[11px] font-black text-[#7A0F14]">12:30 - 2:00</div><div className="font-black text-[14px] mt-2">Lunch & Nap</div><div className="text-[12px] text-gray-600 mt-2">Hot lunch 1pm, baby naps on mats.</div></div>
            <div className="bg-[#2a0a0d] rounded-[20px] p-5 text-white shadow-sm"><div className="text-[11px] font-black opacity-70">2:00 - 5:00</div><div className="font-black text-[14px] mt-2">MDD + Daycare</div><div className="text-[12px] opacity-80 mt-2">Story, MDD dance, daycare till pickup.</div></div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TEACHERS - NO WHITE BOXES - LAZY */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div><div className="text-[11px] font-black tracking-[0.3em] text-[#7A0F14]">MEET THE TEACHERS • {teachers.length>0? teachers.length : 2} ACTIVE • {stats.combined}+ YRS • SAME AUNTIE 3 YEARS</div><h3 className="font-black text-[28px] lg:text-[36px] leading-[0.9] mt-2">The aunties who have seen<br/>kids grow.</h3></div><Link href="/teachers" className="bg-[#7A0F14] text-white px-6 py-3 rounded-full text-[13px] font-black hover:bg-[#5a0c0f] transition">View All →</Link></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {teachers.length>0? teachers.map(t=>(
            <div key={t.id} className="bg-white rounded-[24px] border border-[#7A0F14]/10 overflow-hidden hover:shadow-xl transition"><div className="h-[260px] bg-[#FEF3E2] relative overflow-hidden"><img src={t.photo_now_url || t.photo_then_url} onError={(e)=> e.currentTarget.style.display='none'} alt={t.name} className="w-full h-full object-cover" loading="lazy" decoding="async"/><div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-[9px] font-black shadow border border-[#7A0F14]/10">{(t.to_year||2026)-t.from_year} YRS</div></div><div className="p-4"><div className="font-bold text-[14px]">{t.name}</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">{t.subject || t.role}</div></div></div>
          )) : (
            <>
              <div className="bg-white rounded-[24px] border border-[#7A0F14]/10 overflow-hidden"><TeacherAvatar name="Tr Namulondo" /><div className="p-4"><div className="font-bold text-[14px]">Tr. Namulondo</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">Baby • 40 Yrs • Since 1986</div></div></div>
              <div className="bg-white rounded-[24px] border border-[#7A0F14]/10 overflow-hidden"><TeacherAvatar name="Tr Isabirye" /><div className="p-4"><div className="font-bold text-[14px]">Tr. Isabirye</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">Middle • Alumni 1998 • 28 Yrs</div></div></div>
              <div className="bg-white rounded-[24px] border border-[#7A0F14]/10 overflow-hidden"><TeacherAvatar name="Tr Aisha" /><div className="p-4"><div className="font-bold text-[14px]">Tr. Aisha</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">Top • 15 Yrs • P1 Ready</div></div></div>
              <div className="bg-[#7A0F14] rounded-[24px] p-6 text-white flex flex-col justify-center"><div className="font-black text-[22px] leading-tight">2 Teachers<br/>68+ Years</div><div className="text-[12px] opacity-80 mt-2">Same auntie 3 years. Trust.</div></div>
            </>
          )}
        </div>
      </section>

      {/* SECTION 5+5.5 COMBINED SUMMARY FOR HOMEPAGE */}
      <section className="bg-white border-y border-[#7A0F14]/10 py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-center">
            <div><div className="text-[11px] font-black tracking-[0.3em] text-[#7A0F14]">40 YEARS JOURNEY • SUMMARY</div><h3 className="font-black text-[28px] mt-2 leading-tight">From mud room 1986 to model kindergarten 2026.</h3><div className="mt-4 grid grid-cols-2 gap-4"><div className="flex gap-3 bg-[#FFFCF7] rounded-[16px] p-4 border border-[#7A0F14]/10"><div className="w-[80px] h-[80px] rounded-[12px] overflow-hidden flex-shrink-0"><img src="/heritage/1986-mud-room.jpg" alt="1986 mud room" className="w-full h-full object-cover" loading="lazy" decoding="async"/></div><div><div className="font-black text-[13px]">1986 • 25 pupils</div><div className="text-[11px] text-gray-600 mt-1">Parents brought stools. One blackboard.</div></div></div><div className="flex gap-3 bg-[#FFFCF7] rounded-[16px] p-4 border border-[#7A0F14]/10"><div className="w-[80px] h-[80px] rounded-[12px] overflow-hidden flex-shrink-0"><img src="/today/top-class-5-6.jpg" alt="2026 today" className="w-full h-full object-cover" loading="lazy" decoding="async"/></div><div><div className="font-black text-[13px]">2026 • 4 classrooms</div><div className="text-[11px] text-gray-600 mt-1">NCDC, licensed, 7am-5pm.</div></div></div></div><Link href="/heritage" className="mt-4 inline-block text-[12px] font-black text-[#7A0F14]">Full timeline →</Link></div>
            <div className="bg-[#FFFCF7] rounded-[24px] p-6 border-2 border-[#7A0F14]/20"><div className="flex items-center gap-3"><div className="w-12 h-12 bg-[#7A0F14] rounded-full flex items-center justify-center text-white font-black">BV</div><div><div className="font-black text-[16px]">Our Heartbeat 8:30am</div><div className="text-[11px] text-[#7A0F14] font-bold">Two anthems daily • Since 1986</div></div><div className="ml-auto flex gap-2"><div className="w-[60px] h-[60px] rounded-[12px] overflow-hidden border"><img src="/boards/butt-villa-anthem.jpg" alt="School anthem board" className="w-full h-full object-cover" loading="lazy" decoding="async"/></div><div className="w-[60px] h-[60px] rounded-[12px] overflow-hidden border"><img src="/boards/uganda-anthem.jpg" alt="Uganda anthem board" className="w-full h-full object-cover" loading="lazy" decoding="async"/></div></div></div><div className="mt-4 text-[13px] leading-relaxed bg-white rounded-[16px] p-4 border"><div className="font-bold">Buttvilla all the town Is for children...</div><div className="text-[#7A0F14] mt-2 text-[12px]">Working to develop body, spirit and mind... Religion or what tribes to us are unknown... to glory of God.</div></div><div className="mt-3 flex gap-2"><span className="bg-[#7A0F14] text-white px-3 py-1 rounded-full text-[10px] font-black">All Tribes Welcome</span><span className="bg-white border border-[#7A0F14]/20 px-3 py-1 rounded-full text-[10px] font-bold">Body Spirit Mind</span><Link href="/anthems" className="bg-white border border-[#7A0F14]/20 px-3 py-1 rounded-full text-[10px] font-bold text-[#7A0F14]">Full lyrics →</Link></div></div>
          </div>
        </div>
      </section>

      {/* SECTION 6: REAL PARENTS STRUCTURE */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8"><div><div className="text-[11px] font-black tracking-[0.3em] text-[#7A0F14]">REAL PARENTS • DB LATER • STRUCTURE READY</div><h3 className="font-black text-[28px] lg:text-[38px] leading-[0.9] mt-2">Real parents, real voices,<br/>at the gate at 5pm.</h3></div><div className="bg-[#7A0F14] text-white px-5 py-3 rounded-full text-[11px] font-black">QR at Gate → WhatsApp Voice → DB Later</div></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 bg-white rounded-[28px] p-6 border-2 border-dashed border-[#7A0F14]/20 flex gap-5 items-center">
            <div className="w-[140px] h-[140px] rounded-[20px] overflow-hidden flex-shrink-0 bg-[#FFFCF7] border border-[#7A0F14]/10"><img src="/parents/gate-5pm.jpg" onError={(e)=> e.currentTarget.src='/today/daycare-meals.jpg'} alt="Real parent at gate 5pm" className="w-full h-full object-cover" loading="lazy" decoding="async"/></div>
            <div className="flex-1"><div className="font-black text-[18px]">Be first parent to share real story</div><div className="text-[13px] text-gray-600 mt-2">At 5pm pickup, teacher with phone asks: "Mummy, what changed?" 15 sec video. Save to DB later. No fake.</div><div className="mt-3 bg-[#FFFCF7] rounded-[12px] p-3 border border-[#7A0F14]/10 text-[11px]"><span className="font-black text-[#7A0F14]">Method:</span> QR at gate → WhatsApp 0772428743 → admin approves → shows here real.</div></div>
          </div>
          <div className="bg-[#7A0F14] rounded-[28px] p-6 text-white"><div className="font-black text-[18px]">Why trust 40 years?</div><div className="text-[12px] opacity-80 mt-2">From anthem: "Tribes unknown" - all welcome. "Gifts shared when parents come" - child brings home art/report.</div><div className="mt-4 flex flex-wrap gap-2"><span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold">Body Spirit Mind</span><span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold">All Tribes</span><span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold">Gifts Shared</span></div></div>
        </div>
      </section>

      {/* SECTION 7: STATS - 3 ONLY - MAROON ONLY */}
      <section className="bg-[#7A0F14]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 gap-4 lg:gap-6 text-center">
            <div className="bg-white/10 rounded-[24px] p-6 border border-white/20"><div className="font-black text-[40px] text-white">40</div><div className="text-[12px] text-white/80 mt-1 font-bold">YEARS • 1986→2026</div><div className="text-[10px] text-white/60 mt-1">Same mission</div></div>
            <div className="bg-white rounded-[24px] p-6 text-[#7A0F14]"><div className="font-black text-[40px]">{teachers.length>0? teachers.length : 2}</div><div className="text-[12px] font-black mt-1">{stats.combined}+ YRS COMBINED</div><div className="text-[10px] mt-1 opacity-70">Same auntie 3 years</div></div>
            <div className="bg-white/10 rounded-[24px] p-6 border border-white/20"><div className="font-black text-[40px] text-white">260</div><div className="text-[12px] text-white/80 mt-1 font-bold">LEARNING DAYS • 7-5</div><div className="text-[10px] text-white/60 mt-1">Mon-Fri • Real timetable</div></div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA - MAROON ONLY */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white rounded-[32px] border-[3px] border-[#7A0F14] p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[6px] bg-[#7A0F14]"></div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <div className="text-[11px] font-black tracking-[0.3em] text-[#7A0F14]">READY TO VISIT? • REAL LOCATION • REAL PHONE</div>
              <h3 className="font-black text-[28px] lg:text-[42px] leading-[0.9] mt-3">Give your child the same<br/>foundation that built<br/><span className="text-[#7A0F14]">roosters from eggs.</span></h3>
              <div className="mt-4 font-serif italic text-[14px] text-gray-600">"Roosters were once eggs" - Real motto since 1986. Body, spirit and mind.</div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FFFCF7] rounded-[16px] p-4 border border-[#7A0F14]/10"><div className="text-[10px] font-black text-[#7A0F14]">REAL LOCATION</div><div className="font-bold text-[14px] mt-1">P.O Box 580, Iganga</div><div className="text-[12px] text-gray-600">100m from Post Office • 7am-5pm</div></div>
                <div className="bg-[#FFFCF7] rounded-[16px] p-4 border border-[#7A0F14]/10"><div className="text-[10px] font-black text-[#7A0F14]">REAL CONTACTS</div><div className="font-bold text-[14px] mt-1">0772428743 • WhatsApp</div><div className="text-[12px] text-gray-600">Tour daily 8am-4pm • Licensed</div></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2"><span className="bg-[#7A0F14] text-white px-3 py-1.5 rounded-full text-[10px] font-black">All Tribes Welcome ✓</span><span className="bg-[#7A0F14] text-white px-3 py-1.5 rounded-full text-[10px] font-black">All Religions Welcome ✓</span><span className="bg-[#FFFCF7] border border-[#7A0F14]/20 px-3 py-1.5 rounded-full text-[10px] font-bold">Body Spirit Mind</span></div>
            </div>
            <div className="bg-[#FFFCF7] rounded-[24px] p-6 lg:p-8 border-2 border-[#7A0F14]/10">
              <div className="text-center"><div className="w-16 h-16 bg-[#7A0F14] rounded-full flex items-center justify-center text-white font-black text-[20px] mx-auto">BV</div><div className="font-black text-[20px] mt-3">Butt-Villa Kindergarten</div><div className="text-[11px] text-gray-600">40 Years • Same Mission</div></div>
              <div className="mt-6 space-y-3">
                <Link href="/admissions" className="w-full bg-[#7A0F14] text-white px-6 py-4 rounded-full text-[14px] font-black flex items-center justify-center shadow-lg hover:bg-[#5a0c0f] transition">Apply for 2026 Intake</Link>
                <a href="https://wa.me/256772428743?text=Hello%20Butt-Villa%2C%20I%20want%20to%20tour%20today" className="w-full bg-[#25D366] text-white px-6 py-4 rounded-full text-[14px] font-black flex items-center justify-center hover:bg-[#20b858] transition">WhatsApp 0772428743</a>
                <Link href="/contact" className="w-full bg-white border-2 border-[#7A0F14] text-[#7A0F14] px-6 py-3 rounded-full text-[13px] font-black flex items-center justify-center hover:bg-[#FFFCF7] transition">Tour Today 8am-4pm • 100m from Post Office</Link>
              </div>
              <div className="mt-6 pt-6 border-t border-[#7A0F14]/10"><div className="text-[10px] font-black tracking-[0.2em] text-[#7A0F14]">WHAT HAPPENS NEXT</div><div className="mt-3 space-y-2 text-[12px]"><div className="flex gap-2"><span className="font-black text-[#7A0F14]">1.</span><span>Visit 100m Post Office, see 4 bright classrooms</span></div><div className="flex gap-2"><span className="font-black text-[#7A0F14]">2.</span><span>Meet same auntie for 3 years</span></div><div className="flex gap-2"><span className="font-black text-[#7A0F14]">3.</span><span>Child starts 7am-5pm, hot meals, NCDC</span></div><div className="flex gap-2"><span className="font-black text-[#7A0F14]">4.</span><span>Sings both anthems 8:30am daily</span></div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* 95 CODE: STICKY MOBILE WHATSAPP + APPLY - FOR IGANGA MOTHERS ON TECNO */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#7A0F14]/20 p-3 flex gap-3 z-[9999] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <a href="https://wa.me/256772428743?text=Hello%20Butt-Villa%2C%20I%20want%20to%20tour%20today" className="flex-1 bg-[#25D366] text-white py-3.5 rounded-full text-center font-black text-[13px] flex items-center justify-center gap-2">
          <span>💬</span> WhatsApp 0772428743
        </a>
        <Link href="/admissions" className="flex-1 bg-[#7A0F14] text-white py-3.5 rounded-full text-center font-black text-[13px] flex items-center justify-center gap-2">
          <span>📝</span> Apply 2026
        </Link>
      </div>

      </div>
  )
}
