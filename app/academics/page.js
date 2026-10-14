import Link from "next/link"

export default function AcademicsOverview(){
  return (
    <main className="bg-[#FFFCF7]">
      {/* HERO */}
      <section className="relative min-h-[420px] bg-[#7A0F14] border-b-[6px] border-[#C5A880] overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:`url('https://www.transparenttextures.com/patterns/otis-redding.png')`}}></div>
        <div className="absolute -right-20 top-0 w-[500px] h-[500px] bg-[#C5A880]/20 rounded-full blur-[80px]"></div>
        <div className="max-w-7xl mx-auto px-6 py-14 w-full relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/10 border border-white/20 text-white/80 text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full">EST 1986 • 40 YEARS • P.O BOX 580</span>
            <span className="bg-[#C5A880] text-[#7A0F14] text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full">DB YES - ADMIN EDITS ALL</span>
          </div>
          <h1 className="text-white text-[36px] md:text-[56px] font-black leading-[0.9]">Academics That<br/>Grow <span className="text-[#C5A880]">Body, Spirit & Mind</span></h1>
          <p className="text-white/70 text-[14px] md:text-[15px] leading-7 mt-4 max-w-2xl">At Buttvilla, we don't rush children. From Baby Class 2 years to Top Class 6 years, same auntie for 3 years. We teach the whole child - early to rise, eager to learn, ready for P1 and life. 100m from Bulaga Post Office, same location since 1986.</p>
          <div className="grid grid-cols-3 md:flex gap-4 md:gap-8 mt-8 max-w-xl">
            <div><p className="text-[28px] font-black text-white leading-none">4</p><p className="text-[10px] font-black tracking-widest text-white/60 mt-1">CLASSROOMS Baby-Middle-Top-Daycare</p></div>
            <div className="border-l border-white/10 pl-6"><p className="text-[28px] font-black text-white leading-none">3 Yrs</p><p className="text-[10px] font-black tracking-widest text-white/60 mt-1">SAME AUNTIE Continuity Trust</p></div>
            <div className="border-l border-white/10 pl-6"><p className="text-[28px] font-black text-[#C5A880] leading-none">500+</p><p className="text-[10px] font-black tracking-widest text-white/60 mt-1">ALUMNI Since 1986 Mud Room</p></div>
          </div>
        </div>
      </section>

      {/* QUICK NAV 4 PAGES */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-[20px] border shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-3 flex flex-wrap gap-3">
          {[
            { href:"/academics", label:"Overview", active:true, desc:"You are here" },
            { href:"/curriculum", label:"Curriculum", active:false, desc:"Subjects Baby-Top" },
            { href:"/facilities", label:"Facilities", active:false, desc:"Classrooms Playground" },
            { href:"/day", label:"A Day at School", active:false, desc:"7am-5pm Timeline" },
          ].map(i=>(
            <Link key={i.label} href={i.href} className={`flex-1 min-w-[140px] rounded-[14px] px-4 py-3 border ${i.active?'bg-[#7A0F14] text-white border-[#7A0F14]':'bg-[#FFFCF7] hover:bg-white border-black/5'}`}>
              <p className="font-black text-[13px]">{i.label} {i.active?'•':' '}</p>
              <p className={`text-[10px] mt-0.5 ${i.active?'text-white/60':'text-black/50'}`}>{i.desc} DB YES</p>
            </Link>
          ))}
        </div>
      </section>

      {/* BODY SPIRIT MIND EXPLAINED */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-black tracking-[0.2em] text-[#7A0F14]">OUR PHILOSOPHY - FROM 1986</p>
            <h2 className="text-[28px] md:text-[36px] font-black leading-[0.95] mt-2">We Teach The Whole Child<br/>Not Just ABC</h2>
          </div>
          <p className="text-[13px] text-gray-600 max-w-md leading-6">Inspired by early childhood best practice + Ugandan values. Mud Room 1986 taught us: if child feels safe, spirit is kind, mind learns fast. That's why same auntie 3 years.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-[24px] border p-7 relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-[#FFECEC] grid place-items-center text-[22px]">💪</div>
            <span className="absolute top-6 right-6 bg-[#7A0F14] text-white text-[8px] font-black px-2 py-1 rounded-full">BODY • DB YES</span>
            <h3 className="font-black text-[18px] mt-4">Body - Physical Growth</h3>
            <p className="text-[13px] text-gray-600 mt-2 leading-6">Daily MDD dance, outdoor play, clean water, 11am nutritious porridge, nap mats for Baby, hand washing, toilet training with love. Healthy body ready to learn.</p>
            <ul className="mt-4 space-y-2">
              <li className="text-[12px] flex gap-2"><span className="text-green-600 font-black">✓</span> MDD & Outdoor Play Daily</li>
              <li className="text-[12px] flex gap-2"><span className="text-green-600 font-black">✓</span> 11am Porridge + Safe Water</li>
              <li className="text-[12px] flex gap-2"><span className="text-green-600 font-black">✓</span> Nap Mats Hygiene Toilets</li>
            </ul>
            <div className="mt-5 bg-[#FFFCF7] rounded-xl p-3 border text-[11px]"><b>Age:</b> Baby 2-3y needs more nap + play, Top 5-6y more active games</div>
          </div>

          <div className="bg-[#5a0a0f] rounded-[24px] border border-[#C5A880]/20 p-7 text-white relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-white/10 grid place-items-center text-[22px]">🙏</div>
            <span className="absolute top-6 right-6 bg-[#C5A880] text-[#5a0a0f] text-[8px] font-black px-2 py-1 rounded-full">SPIRIT • DB YES</span>
            <h3 className="font-black text-[18px] mt-4">Spirit - Values & Character</h3>
            <p className="text-[13px] text-white/70 mt-2 leading-6">Morning prayer, anthems 8:30am, sharing, kindness, respect, greeting elders, Luganda & English songs. No beating - love corrects.</p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li className="text-[12px] flex gap-2"><span className="text-[#C5A880] font-black">✓</span> Morning Devotion 8:30 Anthems</li>
              <li className="text-[12px] flex gap-2"><span className="text-[#C5A880] font-black">✓</span> Sharing Caring Respect</li>
              <li className="text-[12px] flex gap-2"><span className="text-[#C5A880] font-black">✓</span> MDD Cultural Values</li>
            </ul>
            <div className="mt-5 bg-white/10 rounded-xl p-3 border border-white/10 text-[11px]"><b>Method:</b> Same auntie 3 years models character daily</div>
          </div>

          <div className="bg-white rounded-[24px] border p-7 relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-[#FFF3D6] grid place-items-center text-[22px]">🧠</div>
            <span className="absolute top-6 right-6 bg-black text-white text-[8px] font-black px-2 py-1 rounded-full">MIND • DB YES</span>
            <h3 className="font-black text-[18px] mt-4">Mind - Learning Ready for P1</h3>
            <p className="text-[13px] text-gray-600 mt-2 leading-6">Phonics, numbers, reading, writing, Luganda & English, counting, sorting, drawing, readiness assessment. Top Class graduates read & write.</p>
            <ul className="mt-4 space-y-2">
              <li className="text-[12px] flex gap-2"><span className="text-green-600 font-black">✓</span> Phonics Reading Writing</li>
              <li className="text-[12px] flex gap-2"><span className="text-green-600 font-black">✓</span> Numbers Counting Sorting</li>
              <li className="text-[12px] flex gap-2"><span className="text-green-600 font-black">✓</span> Graduation Gown P1 Ready</li>
            </ul>
            <div className="mt-5 bg-[#FFFCF7] rounded-xl p-3 border text-[11px]"><b>Outcome:</b> 40 years alumni in P1 leading classes</div>
          </div>
        </div>
      </section>

      {/* CURRICULUM SNAPSHOT */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <h2 className="text-[24px] font-black">Curriculum By Class - What Your Child Learns</h2>
            <Link href="/curriculum" className="bg-[#7A0F14] text-white px-5 py-2.5 rounded-full text-[11px] font-black">Full Curriculum DB YES →</Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {[
              { cls:"Baby Class", age:"2-3 Yrs Egg", focus:"Safe Attachment + Language", subjects:["Potty Training","First Words Luganda/English","Songs MDD","Colors Sorting","11am Porridge Social"], color:"border-[#E8CFCF]" },
              { cls:"Middle Class", age:"4 Yrs Chick", focus:"Phonics + Numbers Start", subjects:["A-Z Phonics","1-20 Counting","Drawing & Coloring","Sharing Respect","Anthems 8:30"], color:"border-[#C5A880]" },
              { cls:"Top Class", age:"5-6 Yrs Rooster", focus:"Reading Writing P1 Ready", subjects:["Reading 3-Letter Words","Writing Name","Addition Subtraction","Graduation Prep","Interview Ready"], color:"border-[#7A0F14] border-2" },
              { cls:"Daycare", age:"1.5-2 Yrs Safe", focus:"Play Trust QR Gate", subjects:["Play mats","Hygiene","Nap 12-2","WhatsApp Photo Daily","5pm Safe Pick"], color:"border-black/10" },
            ].map((c)=>(
              <div key={c.cls} className={`rounded-[20px] border p-5 bg-[#FFFCF7] ${c.color}`}>
                <p className="text-[10px] font-black tracking-widest opacity-50">{c.age}</p>
                <h3 className="font-black text-[15px] mt-1">{c.cls}</h3>
                <p className="text-[11px] font-bold text-[#7A0F14] mt-1">{c.focus}</p>
                <ul className="mt-3 space-y-1.5">
                  {c.subjects.map(s=><li key={s} className="text-[12px] flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#7A0F14] mt-2"></span>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#5a0a0f] rounded-[16px] p-4 flex flex-col md:flex-row gap-3 items-center justify-between text-white">
            <p className="text-[12px]"><b>Same Auntie 3 Years Continuity:</b> Child starts Baby with Auntie Grace, moves to Middle & Top with same auntie - trust, no crying, auntie knows child's strength, speaks to parents on WhatsApp daily.</p>
            <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[10px] font-black whitespace-nowrap">WHY WE KEEP SAME AUNTIE</span>
          </div>
        </div>
      </section>

      {/* WHY PARENTS CHOOSE US + DAY SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-[22px] font-black">Why 500+ Parents Since 1986 Choose Buttvilla</h2>
          <div className="mt-6 space-y-4">
            {[
              { title:"100m From Bulaga Post Office - Same Spot 40 Yrs", desc:"P.O Box 580 Bulaga - Not moving. Parents know where we are. Alumni bring their kids to same classrooms they studied." },
              { title:"QR Gate + WhatsApp Daily Photo - No Stranger Pick", desc:"Every child QR card. 5pm only QR holder picks. Daily WhatsApp photo to parent - ate porridge? slept? MDD? Transparency." },
              { title:"11am Porridge + Safe Water + Nap Mats - Body First", desc:"We don't teach hungry child. Porridge cooked at school, clean water, separate nap mats washed weekly, toilets cleaned 3x daily." },
              { title:"No Beating - Love Corrects - Spirit First", desc:"40 years no cane. We correct with love, talk, time-out, model kindness. Child copies what auntie does, not what auntie says." },
            ].map((i)=>(
              <div key={i.title} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7A0F14] text-white grid place-items-center text-[14px] shrink-0 mt-0.5">✓</div>
                <div><p className="font-black text-[13px]">{i.title}</p><p className="text-[12px] text-gray-600 leading-5 mt-1">{i.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[24px] border p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <h3 className="font-black text-[16px]">A Day at Buttvilla - Snapshot</h3>
            <Link href="/day" className="text-[11px] font-black text-[#7A0F14] underline">Full Timeline DB YES →</Link>
          </div>
          <div className="mt-6 relative">
            <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-[#7A0F14]/10"></div>
            {[
              { time:"7:00 AM", act:"Gate Open QR Check, Health check, Free play" },
              { time:"8:30 AM", act:"Anthems + Morning Prayer + MDD Warmup", highlight:true },
              { time:"9:00 AM", act:"Phonics / Numbers Lesson by class" },
              { time:"11:00 AM", act:"Porridge Break - All classes together social", highlight:true },
              { time:"12:00 PM", act:"Lunch + Nap mats Baby & Daycare" },
              { time:"2:00 PM", act:"Art, Drawing, Outdoor Play, Storytime" },
              { time:"5:00 PM", act:"QR Pick - Gate Closed - WhatsApp report sent" },
            ].map((r)=>(
              <div key={r.time} className="flex gap-4 pb-5 last:pb-0 relative">
                <div className={`w-6 h-6 rounded-full border-2 bg-white grid place-items-center z-10 shrink-0 ${r.highlight?'border-[#7A0F14] bg-[#7A0F14]': 'border-[#7A0F14]/20'}`}>
                  <div className={`w-2 h-2 rounded-full ${r.highlight?'bg-white':'bg-[#7A0F14]/30'}`}></div>
                </div>
                <div className="flex gap-3 -mt-0.5">
                  <p className="text-[11px] font-black min-w-[60px]">{r.time}</p>
                  <p className={`text-[12px] ${r.highlight?'font-black text-[#7A0F14]':'text-gray-600'}`}>{r.act}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#FFFCF7] border rounded-xl p-3 text-[11px]">
            <b>DB YES:</b> Timeline from a_day_at_school table - Admin edits time & activity any term. Same auntie updates daily.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[#7A0F14] rounded-[24px] p-8 md:p-10 text-white flex flex-col md:flex-row justify-between gap-6 border-b-[4px] border-[#C5A880]">
          <div>
            <h3 className="text-[22px] font-black leading-[1.1]">See Our Classrooms & Playground?<br/>Facilities DB YES</h3>
            <p className="text-white/70 text-[12px] mt-2 max-w-md">4 classrooms, playground, kitchen where 11am porridge cooked, toilets, QR gate. Photos updated by Admin from facilities table.</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end justify-center">
            <Link href="/facilities" className="bg-white text-[#7A0F14] px-7 py-3 rounded-full text-[12px] font-black text-center">Facilities Photos →</Link>
            <Link href="/curriculum" className="bg-white/10 border border-white/20 text-white px-7 py-3 rounded-full text-[12px] font-black text-center">Curriculum Subjects →</Link>
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-2 text-[10px] font-black tracking-widest opacity-40">
          <span>ACADEMICS OVERVIEW DB YES</span><span>•</span><span>4 PAGES ALL DB YES PER YOUR STRUCTURE IMAGE</span>
        </div>
      </section>
    </main>
  )
}
