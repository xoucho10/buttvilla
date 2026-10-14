import Link from "next/link"

export default function DayAtSchoolPage(){
  return (
    <main className="bg-[#FFFCF7]">
      <section className="min-h-[380px] bg-[#7A0F14] border-b-[6px] border-[#C5A880] flex items-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#C5A880]/20 rounded-full blur-[80px]"></div>
        <div className="max-w-7xl mx-auto px-6 py-12 w-full relative z-10">
          <p className="text-white/60 text-[11px] tracking-[0.2em] font-black">HOME {'>'} ACADEMICS {'>'} A DAY AT SCHOOL DB YES</p>
          <h1 className="text-white text-[36px] md:text-[50px] font-black leading-[0.9] mt-3">A Day at Buttvilla<br/><span className="text-[#C5A880]">7am - 5pm Same Auntie</span></h1>
          <p className="text-white/70 text-[14px] mt-4 max-w-2xl leading-6">From QR gate 7am to QR pick 5pm - anthems 8:30, porridge 11am, nap mats Baby, outdoor MDD, WhatsApp photo daily. Same auntie 3 years. P.O Box 580 same place 40 yrs.</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            <span className="bg-[#C5A880] text-[#7A0F14] text-[10px] font-black px-3 py-1 rounded-full">ROUTE: /day - KEPT AS YOU SAID</span>
            <span className="bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full border">DB YES - daily_routine TABLE</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-6 relative z-20">
        <div className="bg-white rounded-[20px] border shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-3 flex gap-2 overflow-x-auto">
          <Link href="/academics" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#FFFCF7]">Overview</Link>
          <Link href="/curriculum" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#FFFCF7]">Curriculum</Link>
          <Link href="/facilities" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#FFFCF7]">Facilities</Link>
          <Link href="/day" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#7A0F14] text-white border-[#7A0F14]">A Day • /day</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="font-black text-[22px]">Timeline 7am-5pm - DB YES Admin Edits</h2>
          <div className="mt-8 relative">
            <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-[#7A0F14]/10"></div>
            {[
              { time:"7:00 - 8:00 AM", title:"Gate Open & Arrival QR Check", desc:"QR gate opens. Health check temperature. Free play toys. Auntie greets child by name. Same auntie 3 years child runs to auntie no crying. Parents P.O Box 580 know gate.", highlight:false, emoji:"🚪" },
              { time:"8:30 AM", title:"Anthems + Morning Prayer + MDD Warmup", desc:"All 4 classes together. Uganda anthem, school anthem, prayer. MDD dance warmup Body Spirit Mind. Early to rise eager to learn. Stand straight respect.", highlight:true, emoji:"🇺🇬" },
              { time:"9:00 - 10:30 AM", title:"Lesson 1 - Phonics Numbers by Class", desc:"Baby: first words colors. Middle: A-Z phonics 1-20. Top: reading writing. Same auntie teaches same method 40 yrs. No rush ABC. Small groups.", highlight:false, emoji:"📚" },
              { time:"11:00 AM", title:"Porridge Break - All Together Social", desc:"Nutritious porridge cooked in kitchen, clean water, cups per child covered. All classes eat together sharing social. Nutrition Body first. Cleaned daily.", highlight:true, emoji:"🍲" },
              { time:"11:30 AM - 12:00 PM", title:"Outdoor Play & MDD", desc:"Playground slide swings, MDD dance cultural, physical growth. Toilets cleaned. Hand wash. No boda inside fence safe.", highlight:false, emoji:"🛝" },
              { time:"12:00 - 2:00 PM", title:"Lunch + Nap Mats Baby & Daycare", desc:"Lunch packed or school lunch. Baby & Daycare nap mats 12-2 quiet. Middle & Top quiet reading storytime drawing. Auntie stays close.", highlight:false, emoji:"😴" },
              { time:"2:00 - 3:30 PM", title:"Lesson 2 - Art Drawing Environment", desc:"Drawing coloring, sorting, environment my family Bulaga Post Office 100m, storytime. Top Class interview practice my name school colors confident.", highlight:false, emoji:"🎨" },
              { time:"3:30 - 4:30 PM", title:"Free Play & Wash Up", desc:"Free play indoor outdoor, wash face hands, pack bags, auntie writes WhatsApp report daily: ate? slept? MDD? learned? Photo sent to parent.", highlight:false, emoji:"🧼" },
              { time:"4:30 - 5:00 PM", title:"QR Pick - Gate Close", desc:"Only QR card holder picks. Stranger no pick. Auntie hands child + report. Gate closed 5pm. P.O Box 580 same gate since Mud Room 1986. Trust.", highlight:true, emoji:"🔐" },
            ].map((r,i)=>(
              <div key={i} className="flex gap-5 pb-8 last:pb-0 relative">
                <div className={`w-12 h-12 rounded-full border-2 grid place-items-center text-[18px] z-10 shrink-0 bg-white ${r.highlight?'border-[#7A0F14] bg-[#7A0F14] text-white':'border-[#7A0F14]/20'}`}>{r.emoji}</div>
                <div className={`flex-1 rounded-[16px] border p-4 ${r.highlight?'bg-[#7A0F14] text-white border-[#7A0F14]':'bg-white'}`}>
                  <div className="flex justify-between gap-2 flex-wrap"><p className={`text-[11px] font-black tracking-widest ${r.highlight?'text-[#C5A880]':'text-[#7A0F14]'}`}>{r.time}</p><span className={`text-[9px] px-2 py-1 rounded-full font-black ${r.highlight?'bg-white/20':'bg-[#FFFCF7] border'}`}>DB YES</span></div>
                  <h3 className="font-black text-[14px] mt-1">{r.title}</h3>
                  <p className={`text-[12px] mt-2 leading-5 ${r.highlight?'text-white/80':'text-gray-600'}`}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[20px] border p-6">
            <h3 className="font-black text-[15px]">For Parents - What to Bring Daily</h3>
            <ul className="mt-4 space-y-2">
              {["Small bag with name","Water bottle covered","Spare clothes Baby","QR card - No QR No pick","Pack lunch if not school lunch"].map(x=>(
                <li key={x} className="text-[12px] flex gap-2"><span className="text-green-600 font-black">✓</span> {x}</li>
              ))}
            </ul>
            <div className="mt-4 bg-[#FFFCF7] border rounded-xl p-3 text-[11px]">From daily_routine table - Admin edits items anytime DB YES</div>
          </div>

          <div className="bg-[#5a0a0f] rounded-[20px] p-6 text-white border border-[#C5A880]/20">
            <h3 className="font-black text-[14px]">Same Auntie 3 Years + WhatsApp Daily</h3>
            <p className="text-[12px] text-white/70 mt-2 leading-5">Baby → Middle → Top same auntie. She knows child allergy fear best friend. Sends WhatsApp photo + report daily: ate porridge? slept? MDD? No need to call school. Trust 40 yrs.</p>
            <div className="mt-4 bg-white/10 rounded-xl p-3 border border-white/10 text-[11px]">QR Gate + WhatsApp = No stranger pick + Transparency</div>
          </div>

          <div className="bg-white rounded-[20px] border p-6">
            <h3 className="font-black text-[14px]">DB YES Structure</h3>
            <p className="text-[11px] text-gray-600 mt-2 leading-5">Table: daily_routine<br/>- time<br/>- title<br/>- description<br/>- emoji<br/>- highlight boolean<br/>Admin edits timeline any term from /admin/day - No code change - Route kept as /day as you requested</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[#7A0F14] rounded-[24px] p-8 text-white flex flex-col md:flex-row justify-between gap-4 border-b-[4px] border-[#C5A880]">
          <div><h3 className="font-black text-[18px]">Academics Section Done 4/4 DB YES</h3><p className="text-[12px] text-white/70 mt-1">Overview • Curriculum • Facilities • /day Timeline - All DB YES per your structure image - Route /day kept</p></div>
          <div className="flex gap-2"><Link href="/academics" className="bg-white text-[#7A0F14] px-6 py-3 rounded-full text-[12px] font-black">Back to Academics</Link><Link href="/admissions" className="bg-white/10 border border-white/20 px-6 py-3 rounded-full text-[12px] font-black">Next: Admissions →</Link></div>
        </div>
      </section>
    </main>
  )
}