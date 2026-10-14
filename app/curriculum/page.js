import Link from "next/link"

export default function CurriculumPage(){
  return (
    <main className="bg-[#FFFCF7]">
      <section className="min-h-[380px] bg-[#7A0F14] border-b-[6px] border-[#C5A880] flex items-center relative overflow-hidden">
        <div className="absolute -right-10 top-10 w-[400px] h-[400px] bg-white/10 rounded-full blur-[60px]"></div>
        <div className="max-w-7xl mx-auto px-6 py-12 w-full relative z-10">
          <p className="text-white/60 text-[11px] tracking-[0.2em] font-black">HOME {'>'} ACADEMICS {'>'} CURRICULUM DB YES</p>
          <h1 className="text-white text-[36px] md:text-[50px] font-black leading-[0.9] mt-3">Curriculum<br/><span className="text-[#C5A880]">Baby to Top - P1 Ready</span></h1>
          <p className="text-white/70 text-[14px] mt-4 max-w-2xl leading-6">Not rushing ABC. Baby 2-3y safe attachment language, Middle 4y phonics numbers start, Top 5-6y reading writing interview ready. Same auntie 3 years knows child strength. Early to rise eager to learn - 40 years method.</p>
          <div className="mt-4 flex gap-2 flex-wrap"><span className="bg-[#C5A880] text-[#7A0F14] text-[10px] font-black px-3 py-1 rounded-full">DB YES - SUBJECTS FROM curriculum TABLE - ADMIN ADDS</span></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-6 relative z-20">
        <div className="bg-white rounded-[20px] border shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-3 flex gap-2 overflow-x-auto">
          {[
            { href:"/academics", label:"Overview" },
            { href:"/curriculum", label:"Curriculum", active:true },
            { href:"/facilities", label:"Facilities" },
            { href:"/day", label:"A Day" },
          ].map(i=>(
            <Link key={i.label} href={i.href} className={`whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black ${i.active?'bg-[#7A0F14] text-white border-[#7A0F14]':'bg-[#FFFCF7]'}`}>{i.label} {i.active?'•':''}</Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="font-black text-[22px]">Learning Areas - 6 Areas - Uganda + Whole Child</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { icon:"🔤", title:"Language & Literacy", desc:"Luganda + English songs, phonics, reading 3-letter words Top Class, writing name, storytime. Baby first words, Middle A-Z, Top reads." },
            { icon:"🔢", title:"Mathematics & Logic", desc:"Sorting colors, 1-20 Middle, addition subtraction Top, counting porridge cups, shapes, puzzles, size big small." },
            { icon:"🎨", title:"Creative & MDD", desc:"Drawing, coloring, MDD dance daily, cultural songs, drum, imagination, role play market, church, home." },
            { icon:"🌍", title:"Social & Environment", desc:"Sharing, greeting elders, anthems 8:30, my family, Bulaga community, Post Office 100m, clean environment." },
            { icon:"💪", title:"Physical & Health", desc:"Outdoor play, MDD, hand wash, toilet training love, 11am porridge nutrition, nap mats Baby, health check 7am." },
            { icon:"🙏", title:"Spiritual & Values", desc:"Morning prayer, kindness, honesty, no beating love corrects, respect, thanks, same auntie models daily." },
          ].map(c=>(
            <div key={c.title} className="bg-white rounded-[20px] border p-5">
              <div className="flex gap-3 items-start"><span className="text-[22px]">{c.icon}</span><div><p className="font-black text-[13px]">{c.title}</p><p className="text-[12px] text-gray-600 mt-1 leading-5">{c.desc}</p><span className="inline-block mt-3 bg-[#FFFCF7] border rounded-full px-2 py-1 text-[9px] font-black">DB YES curriculum_areas</span></div></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="font-black text-[22px]">Subjects By Class - What Child Learns Each Year - DB YES</h2>
          <p className="text-[12px] text-gray-500 mt-1">Admin adds subjects from curriculum table - Baby Middle Top Daycare - Edit any term - No code change</p>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            {/* BABY */}
            <div className="rounded-[24px] border bg-[#FFF9F9] p-6 border-[#E8CFCF]">
              <div className="flex justify-between"><span className="bg-[#E8CFCF] text-[#7A0F14] text-[9px] font-black px-3 py-1 rounded-full">BABY CLASS 2-3 YRS EGG • DB YES</span><span className="text-[10px] font-black opacity-50">YEAR 1</span></div>
              <h3 className="font-black text-[18px] mt-3">Baby - Safe Attachment</h3>
              <p className="text-[11px] font-bold text-[#7A0F14]">Focus: Trust + First Words + Potty</p>
              <div className="mt-4 space-y-3">
                {[
                  ["Language", "First words Luganda/English, songs, greeting, bye"],
                  ["Numbers", "Colors red yellow, big small, sorting toys"],
                  ["Social", "Sharing toys, saying sorry, thank you, auntie bond"],
                  ["Physical", "MDD baby dance, outdoor slide, 11am porridge together"],
                  ["Daily", "Nap mats 12-2, toilet training love, hand wash"],
                ].map(([k,v])=>(
                  <div key={k} className="bg-white rounded-xl border p-3 flex gap-3"><span className="font-black text-[11px] min-w-[70px]">{k}</span><span className="text-[11px] text-gray-600 leading-4">{v}</span></div>
                ))}
              </div>
              <div className="mt-4 bg-white rounded-xl border p-3 text-[11px]"><b>Outcome:</b> Child stops crying, says 50+ words, potty trained, knows auntie name, eats porridge alone.</div>
            </div>

            {/* MIDDLE */}
            <div className="rounded-[24px] border bg-[#FFFBF0] p-6 border-[#C5A880]">
              <div className="flex justify-between"><span className="bg-[#C5A880] text-[#7A0F14] text-[9px] font-black px-3 py-1 rounded-full">MIDDLE CLASS 4 YRS CHICK • DB YES</span><span className="text-[10px] font-black opacity-50">YEAR 2</span></div>
              <h3 className="font-black text-[18px] mt-3">Middle - Phonics Start</h3>
              <p className="text-[11px] font-bold text-[#7A0F14]">Focus: A-Z + 1-20 + Respect</p>
              <div className="mt-4 space-y-3">
                {[
                  ["Language", "A-Z phonics sounds, writing A-Z in sand, my name"],
                  ["Numbers", "1-20 counting, addition with cups, shapes circle square"],
                  ["Reading", "Storytime daily, picture reading, Luganda songs"],
                  ["Values", "Anthems 8:30 stand straight, respect elders, sharing"],
                  ["MDD", "Cultural dance weekly, drum, drawing coloring contest"],
                ].map(([k,v])=>(
                  <div key={k} className="bg-white rounded-xl border p-3 flex gap-3"><span className="font-black text-[11px] min-w-[70px]">{k}</span><span className="text-[11px] text-gray-600 leading-4">{v}</span></div>
                ))}
              </div>
              <div className="mt-4 bg-white rounded-xl border p-3 text-[11px]"><b>Outcome:</b> Child writes A-Z, counts 1-20, knows anthems, shares, draws family.</div>
            </div>

            {/* TOP */}
            <div className="rounded-[24px] border-2 bg-white p-6 border-[#7A0F14] shadow-[0_10px_30px_rgba(122,15,20,0.12)]">
              <div className="flex justify-between"><span className="bg-[#7A0F14] text-white text-[9px] font-black px-3 py-1 rounded-full">TOP CLASS 5-6 YRS ROOSTER • DB YES • P1 READY</span><span className="text-[10px] font-black">YEAR 3</span></div>
              <h3 className="font-black text-[18px] mt-3">Top - Reading Writing Ready for P1</h3>
              <p className="text-[11px] font-bold text-[#7A0F14]">Focus: Read Write Interview + Graduation Gown</p>
              <div className="mt-4 space-y-3">
                {[
                  ["Reading", "3-4 letter words cat dog, sentence I am, story reading"],
                  ["Writing", "Writing full name, sentences, my family paragraph"],
                  ["Maths", "Addition subtraction to 20, time, money coins, interview maths"],
                  ["Interview", "P1 interview practice: my name, school, colors, respect, confident"],
                  ["Graduation", "Gown day, alumni speech, certificate, ready for Primary 1 leading"],
                ].map(([k,v])=>(
                  <div key={k} className="bg-[#FFFCF7] rounded-xl border p-3 flex gap-3"><span className="font-black text-[11px] min-w-[70px]">{k}</span><span className="text-[11px] text-gray-600 leading-4">{v}</span></div>
                ))}
              </div>
              <div className="mt-4 bg-[#7A0F14] text-white rounded-xl p-3 text-[11px]"><b>Outcome 40 yrs:</b> 100% Top Class read & write, join P1 top of class, alumni now doctors teachers.</div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-[#FFFCF7] border rounded-[16px] p-5 flex gap-4">
              <span className="w-10 h-10 rounded-full bg-[#7A0F14] text-white grid place-items-center">📋</span>
              <div><p className="font-black text-[13px]">Assessment - Not Exams - Observation Daily</p><p className="text-[12px] text-gray-600 mt-1 leading-5">No beating no ranking. Auntie observes daily: can child count? share? write name? WhatsApp parent weekly report. Top Class readiness check term 3 before P1 interview. From curriculum_assessments DB YES.</p></div>
            </div>
            <div className="bg-[#5a0a0f] text-white border border-[#C5A880]/20 rounded-[16px] p-5 flex gap-4">
              <span className="w-10 h-10 rounded-full bg-white/10 grid place-items-center">👩‍🏫</span>
              <div><p className="font-black text-[13px]">Same Auntie 3 Years Method - Why We Keep Her</p><p className="text-[12px] text-white/70 mt-1 leading-5">Baby → Middle → Top same auntie. She knows child fear, strength, parent number, allergy, best friend. Child trusts, learns fast, no crying term 2. 40 years proven. Alumni remember auntie name.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-[20px] border p-6 flex flex-col md:flex-row justify-between gap-4 items-center">
          <p className="text-[13px]"><b>Next:</b> See where we learn? Classrooms playground kitchen toilets QR gate photos - Facilities DB YES - Admin adds photos.</p>
          <Link href="/facilities" className="bg-black text-white px-8 py-3 rounded-full text-[12px] font-black whitespace-nowrap">Facilities Photos →</Link>
        </div>
      </section>
    </main>
  )
}
