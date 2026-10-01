import "./effects.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Home(){
  return (
    <div className="bg-[#FFFCF7] min-h-screen w-full text-[#2a0a0d]">
      <Header/>

      {/* HERO - INFINITY STRETCHED */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] h-[520px] lg:h-[680px] w-full overflow-hidden">
          <div className="relative bg-[#f6ead6] rain">
            <img src="/heritage/1986-mud-room.jpg" alt="1986" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            <div className="absolute top-6 left-6 bg-white/95 px-4 py-2 rounded-full text-[11px] font-black shadow">1986 • 25 PUPILS</div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 rounded-[16px] p-4 border">
              <div className="text-[11px] font-black text-[#7A0F14]">HERITAGE</div>
              <div className="font-bold text-[15px] mt-1">Parents brought stools. One blackboard. Big dream.</div>
            </div>
          </div>
          <div className="relative bg-[#FEF3E2] rain-d2">
            <img src="/today/top-class-5-6.jpg" alt="Today" className="w-full h-full object-cover"/>
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-[16px] p-4 shadow border-2 border-[#8FA88F]/20">
              <div className="text-[11px] font-black text-[#2E7D32]">TODAYS KINDERGARTEN</div>
              <div className="font-bold text-[14px] mt-1">4 bright classrooms, library, garden, daily meals.</div>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="bg-white rounded-[28px] shadow-[0_25px_80px_rgba(0,0,0,0.35)] pop border-[3px] border-[#C5A880] px-10 py-7 text-center w-[420px]">
            <div className="text-[10px] font-black tracking-[0.35em] text-[#7A0F14]">40 YEARS • SAME MISSION</div>
            <div className="mt-3 font-black text-[32px] leading-[0.9]">Foundation to<br/><span className="text-[#7A0F14]">Leadership</span></div>
            <div className="mt-4 flex justify-center gap-3 text-[12px] font-bold">
              <span className="bg-[#FEF3E2] px-4 py-2 rounded-full">25 in 1986</span>
              <span className="pt-2">→</span>
              <span className="bg-[#7A0F14] text-white px-4 py-2 rounded-full">1,200+ Today</span>
            </div>
            <div className="mt-5 flex gap-3 justify-center">
              <Link href="/admissions" className="bg-[#7A0F14] text-white px-6 py-3 rounded-full text-[12px] font-black">Apply for 2026</Link>
              <Link href="/contact" className="bg-white border-2 border-[#7A0F14] text-[#7A0F14] px-6 py-3 rounded-full text-[12px] font-black">Take a Tour</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="text-[12px] font-black tracking-[0.25em] text-[#7A0F14]">TODAY AT BUTTVILLA</div>
            <h2 className="font-black text-[36px] lg:text-[44px] leading-[0.9] mt-2">Where play becomes<br/>purpose.</h2>
          </div>
          <div className="text-[14px] text-gray-600 max-w-[360px]">Four stages, all in reddish maroon uniform.</div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow reveal">
            <div className="h-[200px] bg-[#FEF3E2]"><img src="/today/baby-class-3-4.jpg" alt="Baby" className="w-full h-full object-cover"/></div>
            <div className="p-5"><div className="text-[11px] font-black text-[#7A0F14]">3-4 Years</div><div className="font-bold text-[18px]">Baby Class</div><div className="text-[13px] text-gray-600 mt-1">ABC through play, colors & kindness.</div></div>
          </div>
          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow reveal">
            <div className="h-[200px] bg-[#FEF3E2]"><img src="/today/middle-class-4-5.jpg" alt="Middle" className="w-full h-full object-cover"/></div>
            <div className="p-5"><div className="text-[11px] font-black text-[#7A0F14]">4-5 Years</div><div className="font-bold text-[18px]">Middle Class</div><div className="text-[13px] text-gray-600 mt-1">Numbers, garden & creativity.</div></div>
          </div>
          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow reveal">
            <div className="h-[200px] bg-[#FEF3E2]"><img src="/today/top-class-5-6.jpg" alt="Top" className="w-full h-full object-cover"/></div>
            <div className="p-5"><div className="text-[11px] font-black text-[#7A0F14]">5-6 Years</div><div className="font-bold text-[18px]">Top Class</div><div className="text-[13px] text-gray-600 mt-1">Reading ready for Primary One.</div></div>
          </div>
          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow reveal">
            <div className="h-[200px] bg-[#FEF3E2]"><img src="/today/daycare-meals.jpg" alt="Daycare" className="w-full h-full object-cover"/></div>
            <div className="p-5"><div className="text-[11px] font-black text-[#7A0F14]">Daily Care</div><div className="font-bold text-[18px]">Daycare & Meals</div><div className="text-[13px] text-gray-600 mt-1">Safe care, porridge & lunch.</div></div>
          </div>
        </div>

        {/* BEYOND CLASSROOM - 3 CARDS */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] border border-black/5 overflow-hidden flex">
            <div className="w-[110px] flex-shrink-0"><img src="/today/playground-garden.jpg" alt="Garden" className="w-full h-full object-cover"/></div>
            <div className="p-4"><div className="text-[11px] font-black text-[#2E7D32]">PLAY & GROW</div><div className="font-bold text-[14px] mt-1">Garden Playground</div><div className="text-[12px] text-gray-600 mt-1">Slides, swings & shamba where kids learn to plant.</div></div>
          </div>
          <div className="bg-white rounded-[24px] border border-black/5 overflow-hidden flex">
            <div className="w-[110px] flex-shrink-0"><img src="/today/daycare-meals.jpg" alt="Meals" className="w-full h-full object-cover"/></div>
            <div className="p-4"><div className="text-[11px] font-black text-[#7A0F14]">FED & SAFE</div><div className="font-bold text-[14px] mt-1">Hot Meals Daily</div><div className="text-[12px] text-gray-600 mt-1">Porridge 10am, lunch 1pm. Clean water.</div></div>
          </div>
          <div className="bg-white rounded-[24px] border border-black/5 overflow-hidden flex">
            <div className="w-[110px] flex-shrink-0 bg-[#FEF3E2] flex items-center justify-center text-[30px]">🛡️</div>
            <div className="p-4"><div className="text-[11px] font-black text-[#7A0F14]">SAFE & LOVED</div><div className="font-bold text-[14px] mt-1">Fenced & Nurtured</div><div className="text-[12px] text-gray-600 mt-1">12 trained teachers, small classes, 7:30-5pm care.</div></div>
          </div>
        </div>
      </section>

      {/* TIMELINE - 4 ITEMS */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
          <h3 className="font-black text-[28px]">40 Years Timeline</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-4 bg-[#FFFCF7] rounded-[18px] p-4 border"><div className="w-[84px] h-[84px] rounded-[14px] overflow-hidden flex-shrink-0 border"><img src="/heritage/1986-mud-room.jpg" className="w-full h-full object-cover"/></div><div><div className="text-[13px] font-black">1986 • Founding</div><div className="text-[12px] text-gray-600 mt-1">25 pupils, parents brought stools.</div></div></div>
            <div className="flex gap-4 bg-[#FFFCF7] rounded-[18px] p-4 border"><div className="w-[84px] h-[84px] rounded-[14px] overflow-hidden flex-shrink-0 border"><img src="/heritage/1989-first-grads.jpg" className="w-full h-full object-cover"/></div><div><div className="text-[13px] font-black">1989 • First Grads</div><div className="text-[12px] text-gray-600 mt-1">First class in reddish gowns.</div></div></div>
            <div className="flex gap-4 bg-[#FFFCF7] rounded-[18px] p-4 border"><div className="w-[84px] h-[84px] rounded-[14px] overflow-hidden flex-shrink-0 border"><img src="/heritage/1996-10th-anniversary.jpg" className="w-full h-full object-cover"/></div><div><div className="text-[13px] font-black">1996 • 10th Anniversary</div><div className="text-[12px] text-gray-600 mt-1">Permanent classrooms built.</div></div></div>
            <div className="flex gap-4 bg-[#FFFCF7] rounded-[18px] p-4 border"><div className="w-[84px] h-[84px] rounded-[14px] overflow-hidden flex-shrink-0 border"><img src="/today/top-class-5-6.jpg" className="w-full h-full object-cover"/></div><div><div className="text-[13px] font-black">2026 • 40 Years Today</div><div className="text-[12px] text-gray-600 mt-1">350+ kids, 1,200+ alumni.</div></div></div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#FFFCF7] rounded-[20px] p-5 border"><div className="text-[22px]">📚</div><div className="font-bold text-[14px] mt-2">Play-Based Learning</div><div className="text-[12px] text-gray-600 mt-1">Ugandan curriculum + play, songs & stories.</div></div>
          <div className="bg-[#FFFCF7] rounded-[20px] p-5 border"><div className="text-[22px]">❤️</div><div className="font-bold text-[14px] mt-2">Maroon + Love</div><div className="text-[12px] text-gray-600 mt-1">Reddish uniform, respect, kindness, character.</div></div>
          <div className="bg-[#FFFCF7] rounded-[20px] p-5 border"><div className="text-[22px]">🍲</div><div className="font-bold text-[14px] mt-2">Meals & Safety</div><div className="text-[12px] text-gray-600 mt-1">Fenced, cooked meals, clean toilets.</div></div>
          <div className="bg-[#FFFCF7] rounded-[20px] p-5 border"><div className="text-[22px]">🎓</div><div className="font-bold text-[14px] mt-2">P1 Ready</div><div className="text-[12px] text-gray-600 mt-1">100% transition to primary. Reading by Top.</div></div>
        </div>
      </section>

      {/* ALUMNI - FIXED TO UGANDAN PHOTO */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-6">
        <div className="bg-[#7A0F14] rounded-[28px] p-2 lg:p-3">
          <div className="bg-white rounded-[22px] grid grid-cols-1 lg:grid-cols-[380px_1fr] overflow-hidden">
            <div className="h-[380px]"><img src="/heritage/1989-first-grads.jpg" alt="Alumni" className="w-full h-full object-cover"/></div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-[11px] font-black tracking-[0.3em] text-[#7A0F14]">ALUMNI PROOF</div>
              <div className="font-black text-[32px] leading-[0.9] mt-3">Kindergarten works.<br/>Here is the proof.</div>
              <div className="mt-4 text-[15px] text-gray-700 max-w-[520px]">1989: Age 5, reddish uniform. Today: Teacher, Nurse, Engineer in Iganga. <span className="font-bold text-[#7A0F14]">1,200+ alumni</span> prove nurturing eggs into roosters works.</div>
              <Link href="/alumni" className="mt-6 bg-[#7A0F14] text-white px-6 py-3 rounded-full text-[12px] font-black w-fit">Meet Our Alumni</Link>
            </div>
          </div>
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

      {/* PARENT VOICES */}
      <section className="bg-[#FFFCF7] border-b border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-[20px] p-6 border shadow-sm"><div className="text-[13px]">My daughter joined shy at 3. Now in Top Class she reads and leads prayers. The teachers love them like their own.</div><div className="mt-3 text-[11px] font-black">— Mrs. Namukose, Mother of Aisha (Top) • Nakavule</div></div>
          <div className="bg-white rounded-[20px] p-6 border shadow-sm"><div className="text-[13px]">Fees are fair, meals included, compound is safe. I went here in 1991, now my son is here.</div><div className="mt-3 text-[11px] font-black">— Mr. Isabirye, Alumni 1991 & Parent • Iganga Main</div></div>
        </div>
      </section>

            {/* ALUMNI BIG CARDS - NEW INSERT */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[11px] font-black tracking-[0.3em] text-[#7A0F14]">FROM RED UNIFORM TO REAL IMPACT</div>
            <h3 className="font-black text-[32px] lg:text-[40px] leading-[0.9] mt-2">Our alumni prove it works.</h3>
            <div className="text-[14px] text-gray-600 mt-2 max-w-[520px]">Baby Class 1986 → Nurse, Teacher, Engineer today. Same maroon foundation.</div>
          </div>
          <a href="/alumni" className="bg-white border-2 border-[#7A0F14] text-[#7A0F14] px-6 py-3 rounded-full text-[13px] font-black hover:bg-[#7A0F14] hover:text-white transition">View All Alumni →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow reveal-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all">
            <div className="h-[280px] bg-[#FEF3E2] relative">
              <img src="/heritage/1989-first-grads.jpg" alt="Alumni 1992" className="w-full h-full object-cover"/>
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[11px] font-black">1992 • Baby Class</div>
            </div>
            <div className="p-6">
              <div className="font-black text-[18px]">Sarah N.</div>
              <div className="text-[11px] font-black tracking-widest text-[#7A0F14] mt-1">THEN → NOW</div>
              <div className="text-[13px] text-gray-600 mt-1">Reddish maroon uniform, Top Class 1998 → <span className="font-bold text-black">Nurse, Iganga Hospital</span></div>
              <div className="mt-3 text-[11px] bg-[#FFFCF7] border px-3 py-2 rounded-full inline-block">“Buttvilla taught me kindness first.”</div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow reveal-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all">
            <div className="h-[280px] bg-[#FEF3E2] relative">
              <img src="/today/top-class-5-6.jpg" alt="Alumni 1998" className="w-full h-full object-cover"/>
              <div className="absolute top-4 left-4 bg-[#7A0F14] text-white px-3 py-1 rounded-full text-[11px] font-black">1998 • Top Class</div>
            </div>
            <div className="p-6">
              <div className="font-black text-[18px]">Isabirye J.</div>
              <div className="text-[11px] font-black tracking-widest text-[#7A0F14] mt-1">THEN → NOW</div>
              <div className="text-[13px] text-gray-600 mt-1">Graduated 2004 → <span className="font-bold text-black">Teacher at Buttvilla</span> + Parent</div>
              <div className="mt-3 text-[11px] bg-[#FFFCF7] border px-3 py-2 rounded-full inline-block">“I returned to give back.”</div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] overflow-hidden border border-black/5 shadow reveal-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all">
            <div className="h-[280px] bg-[#FEF3E2] relative">
              <img src="/today/baby-class-3-4.jpg" alt="Alumni 2005" className="w-full h-full object-cover"/>
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[11px] font-black">2005 • Top Class</div>
            </div>
            <div className="p-6">
              <div className="font-black text-[18px]">Aisha K.</div>
              <div className="text-[11px] font-black tracking-widest text-[#7A0F14] mt-1">THEN → NOW</div>
              <div className="text-[13px] text-gray-600 mt-1">Shy at 3 years → <span className="font-bold text-black">Makerere Student, Engineering</span></div>
              <div className="mt-3 text-[11px] bg-[#FFFCF7] border px-3 py-2 rounded-full inline-block">“Play-based start made me confident.”</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a href="/alumni" className="bg-[#7A0F14] text-white px-8 py-4 rounded-full text-[13px] font-black shadow-[0_10px_30px_rgba(122,15,20,0.3)] hover:bg-[#5a0a0f] transition">View All 1,200+ Alumni Stories →</a>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        <div className="bg-white rounded-[28px] border-2 border-[#7A0F14] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div><div className="font-black text-[24px]">Ready to give your child the same foundation?</div><div className="text-[13px] text-gray-600 mt-2">2026 Intake: 23 spots left • Tour daily 8am-4pm • Iganga Main Street</div></div>
          <div className="flex gap-3"><Link href="/admissions" className="bg-[#7A0F14] text-white px-7 py-3 rounded-full text-[13px] font-black">Apply for 2026</Link><a href="https://wa.me/256700000000" className="bg-[#25D366] text-white px-7 py-3 rounded-full text-[13px] font-black">WhatsApp Us</a></div>
        </div>
      </section>

            {/* ANIMATION OBSERVER - no layout change */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function(){
          const obs = new IntersectionObserver((entries)=>{
            entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('active'); });
          },{threshold:0.15});
          document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
        });
      `}} />
      <Footer/>
    </div>
  )
}




