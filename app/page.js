"use client"
import "./effects.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Home(){
  return (
    <div className="bg-[#FFFCF7] min-h-screen w-full text-[#2a0a0d]">
      <Header/>

      {/* HERO - INFINITY */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] h-[520px] lg:h-[680px] w-full overflow-hidden">
          <div className="relative bg-[#f6ead6] rain">
            <img src="/heritage/1986-mud-room.jpg" alt="1986" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            <div className="absolute top-6 left-6 bg-white/95 px-4 py-2 rounded-full text-[11px] font-black shadow">1986 • 25 PUPILS</div>
          </div>
          <div className="relative bg-[#FEF3E2] rain-d2">
            <img src="/today/top-class-5-6.jpg" alt="Today" className="w-full h-full object-cover"/>
            <div className="absolute top-6 right-6 bg-[#7A0F14] text-white px-4 py-2 rounded-full text-[11px] font-black shadow">2026 • 350+ KIDS</div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="bg-white rounded-[28px] shadow-[0_25px_80px_rgba(0,0,0,0.35)] border-[3px] border-[#C5A880] px-10 py-7 text-center w-[420px] pop">
            <div className="text-[10px] font-black tracking-[0.35em] text-[#7A0F14]">40 YEARS • SAME MISSION</div>
            <div className="mt-3 font-black text-[32px] leading-[0.9]">Foundation to<br/><span className="text-[#7A0F14]">Leadership</span></div>
            <div className="mt-5 flex gap-3 justify-center">
              <Link href="/admissions" className="bg-[#7A0F14] text-white px-6 py-3 rounded-full text-[12px] font-black">Apply for 2026</Link>
              <Link href="/contact" className="bg-white border-2 border-[#7A0F14] text-[#7A0F14] px-6 py-3 rounded-full text-[12px] font-black">Take a Tour</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY 4 CARDS */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div><div className="text-[12px] font-black tracking-[0.25em] text-[#7A0F14]">TODAY AT BUTTVILLA</div><h2 className="font-black text-[36px] lg:text-[44px] leading-[0.9] mt-2">Where play becomes<br/>purpose.</h2></div>
          <div className="text-[14px] text-gray-600 max-w-[360px]">Four stages, all in reddish maroon uniform. Safe, fed, and loved every day.</div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow"><div className="h-[200px]"><img src="/today/baby-class-3-4.jpg" alt="Baby" className="w-full h-full object-cover"/></div><div className="p-5"><div className="text-[11px] font-black text-[#7A0F14]">3-4 Years</div><div className="font-bold text-[18px]">Baby Class</div></div></div>
          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow"><div className="h-[200px]"><img src="/today/middle-class-4-5.jpg" alt="Middle" className="w-full h-full object-cover"/></div><div className="p-5"><div className="text-[11px] font-black text-[#7A0F14]">4-5 Years</div><div className="font-bold text-[18px]">Middle Class</div></div></div>
          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow"><div className="h-[200px]"><img src="/today/top-class-5-6.jpg" alt="Top" className="w-full h-full object-cover"/></div><div className="p-5"><div className="text-[11px] font-black text-[#7A0F14]">5-6 Years</div><div className="font-bold text-[18px]">Top Class</div></div></div>
          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow"><div className="h-[200px]"><img src="/today/daycare-meals.jpg" alt="Daycare" className="w-full h-full object-cover"/></div><div className="p-5"><div className="text-[11px] font-black text-[#7A0F14]">Daily Care</div><div className="font-bold text-[18px]">Daycare & Meals</div></div></div>
        </div>
      </section>

      {/* DAILY LIFE */}
      <section className="bg-white border-y border-black/5 py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[12px] font-black tracking-[0.25em] text-[#7A0F14]">A DAY IN THE LIFE — 2026</div>
              <h2 className="font-black text-[32px] lg:text-[42px] leading-[0.9] mt-2">What happens every day,<br/>7am to 5pm.</h2>
            </div>
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

      {/* TEACHERS - FIXED NO onError */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[11px] font-black tracking-[0.3em] text-[#7A0F14]">MEET THE TEACHERS — 40 YRS COMBINED</div>
            <h3 className="font-black text-[28px] lg:text-[36px] leading-[0.9] mt-2">The aunties who have seen<br/>1,200 kids grow.</h3>
          </div>
          <Link href="/teachers" className="bg-[#7A0F14] text-white px-6 py-3 rounded-full text-[13px] font-black">View All 12 Teachers →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="bg-white rounded-[20px] border overflow-hidden"><div className="h-[180px] bg-[#FEF3E2] flex items-center justify-center text-[40px]">👩‍🏫</div><div className="p-4"><div className="font-bold text-[14px]">Tr. Namulondo</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">Baby Class • 18 Yrs</div></div></div>
          <div className="bg-white rounded-[20px] border overflow-hidden"><div className="h-[180px] bg-[#FEF3E2] flex items-center justify-center text-[40px]">👩‍🏫</div><div className="p-4"><div className="font-bold text-[14px]">Tr. Isabirye</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">Middle • 12 Yrs • Alumni 1998</div></div></div>
          <div className="bg-white rounded-[20px] border overflow-hidden"><div className="h-[180px] bg-[#FEF3E2] flex items-center justify-center text-[40px]">👩‍🏫</div><div className="p-4"><div className="font-bold text-[14px]">Tr. Aisha</div><div className="text-[11px] text-[#7A0F14] font-black mt-1">Top Class • 15 Yrs</div></div></div>
          <div className="bg-[#7A0F14] rounded-[20px] p-5 text-white flex flex-col justify-center"><div className="font-black text-[22px]">12 Teachers</div><div className="text-[12px] opacity-80 mt-1">Average 10 years at Buttvilla. Your child knows their auntie for 3 years.</div></div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
          <h3 className="font-black text-[28px]">40 Years Timeline</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-4 bg-[#FFFCF7] rounded-[18px] p-4 border"><div className="w-[84px] h-[84px] rounded-[14px] overflow-hidden flex-shrink-0 border"><img src="/heritage/1986-mud-room.jpg" className="w-full h-full object-cover"/></div><div><div className="text-[13px] font-black">1986 • Founding</div><div className="text-[12px] text-gray-600 mt-1">25 pupils, parents brought stools.</div></div></div>
            <div className="flex gap-4 bg-[#FFFCF7] rounded-[18px] p-4 border"><div className="w-[84px] h-[84px] rounded-[14px] overflow-hidden flex-shrink-0 border"><img src="/heritage/1989-first-grads.jpg" className="w-full h-full object-cover"/></div><div><div className="text-[13px] font-black">1989 • First Grads</div><div className="text-[12px] text-gray-600 mt-1">First class in reddish gowns.</div></div></div>
            <div className="flex gap-4 bg-[#FFFCF7] rounded-[18px] p-4 border"><div className="w-[84px] h-[84px] rounded-[14px] overflow-hidden flex-shrink-0 border"><img src="/heritage/1996-10th-anniversary.jpg" className="w-full h-full object-cover"/></div><div><div className="text-[13px] font-black">1996 • 10th</div><div className="text-[12px] text-gray-600 mt-1">Permanent classrooms built.</div></div></div>
            <div className="flex gap-4 bg-[#FFFCF7] rounded-[18px] p-4 border"><div className="w-[84px] h-[84px] rounded-[14px] overflow-hidden flex-shrink-0 border"><img src="/today/top-class-5-6.jpg" className="w-full h-full object-cover"/></div><div><div className="text-[13px] font-black">2026 • 40 Years</div><div className="text-[12px] text-gray-600 mt-1">350+ kids, 1,200+ alumni.</div></div></div>
          </div>
        </div>
      </section>

      {/* ALUMNI */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div><div className="text-[11px] font-black tracking-[0.3em] text-[#7A0F14]">FROM RED UNIFORM TO REAL IMPACT</div><h3 className="font-black text-[32px] lg:text-[40px] leading-[0.9] mt-2">Our alumni prove it works.</h3></div>
          <Link href="/alumni" className="bg-white border-2 border-[#7A0F14] text-[#7A0F14] px-6 py-3 rounded-full text-[13px] font-black">View All Alumni →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] overflow-hidden border shadow"><div className="h-[280px]"><img src="/heritage/1989-first-grads.jpg" alt="Alumni" className="w-full h-full object-cover"/></div><div className="p-6"><div className="font-black text-[18px]">Sarah N. — Nurse</div><div className="text-[11px] font-black text-[#7A0F14] mt-1">1992 Baby → Now Iganga Hospital</div></div></div>
          <div className="bg-white rounded-[24px] overflow-hidden border shadow"><div className="h-[280px]"><img src="/today/top-class-5-6.jpg" alt="Alumni" className="w-full h-full object-cover"/></div><div className="p-6"><div className="font-black text-[18px]">Isabirye J. — Teacher</div><div className="text-[11px] font-black text-[#7A0F14] mt-1">1998 Top → Now Buttvilla</div></div></div>
          <div className="bg-white rounded-[24px] overflow-hidden border shadow"><div className="h-[280px]"><img src="/today/baby-class-3-4.jpg" alt="Alumni" className="w-full h-full object-cover"/></div><div className="p-6"><div className="font-black text-[18px]">Aisha K. — Engineer</div><div className="text-[11px] font-black text-[#7A0F14] mt-1">2005 Top → Makerere</div></div></div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#7A0F14]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-5 gap-6 text-white text-center">
          <div><div className="font-black text-[28px]">40</div><div className="text-[11px] opacity-80">Years</div></div>
          <div><div className="font-black text-[28px]">1,200+</div><div className="text-[11px] opacity-80">Alumni</div></div>
          <div><div className="font-black text-[28px]">350+</div><div className="text-[11px] opacity-80">Kids Today</div></div>
          <div><div className="font-black text-[28px]">12</div><div className="text-[11px] opacity-80">Teachers</div></div>
          <div><div className="font-black text-[28px]">100%</div><div className="text-[11px] opacity-80">P1 Placement</div></div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        <div className="bg-white rounded-[28px] border-2 border-[#7A0F14] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 ">
          <div><div className="font-black text-[24px]">Ready to give your child the same foundation?</div><div className="text-[13px] text-gray-600 mt-2">2026 Intake: 23 spots left • Tour daily 8am-4pm</div></div>
          <div className="flex gap-3"><Link href="/admissions" className="bg-[#7A0F14] text-white px-7 py-3 rounded-full text-[13px] font-black">Apply for 2026</Link><a href="https://wa.me/256700000000" className="bg-[#25D366] text-white px-7 py-3 rounded-full text-[13px] font-black">WhatsApp Us</a></div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}