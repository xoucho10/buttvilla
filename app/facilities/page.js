import Link from "next/link"

export default function FacilitiesPage(){
  return (
    <main className="bg-[#FFFCF7]">
      <section className="min-h-[380px] bg-[#7A0F14] border-b-[6px] border-[#C5A880] flex items-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#C5A880]/20 rounded-full blur-[80px]"></div>
        <div className="max-w-7xl mx-auto px-6 py-12 w-full relative z-10">
          <p className="text-white/60 text-[11px] tracking-[0.2em] font-black">HOME {'>'} ACADEMICS {'>'} FACILITIES DB YES</p>
          <h1 className="text-white text-[36px] md:text-[50px] font-black leading-[0.9] mt-3">Facilities<br/><span className="text-[#C5A880]">Safe Clean Same Place 40 Yrs</span></h1>
          <p className="text-white/70 text-[14px] mt-4 max-w-2xl leading-6">P.O Box 580 Bulaga - 100m from Bulaga Post Office - Same spot since Mud Room 1986. 4 classrooms, playground, kitchen where 11am porridge cooked, toilets cleaned 3x daily, QR gate, nap mats. Admin uploads real photos later from facilities table.</p>
          <div className="mt-4 flex gap-2 flex-wrap"><span className="bg-[#C5A880] text-[#7A0F14] text-[10px] font-black px-3 py-1 rounded-full">DB YES - facilities TABLE - PHOTOS ADMIN ADDS</span></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-6 relative z-20">
        <div className="bg-white rounded-[20px] border shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-3 flex gap-2 overflow-x-auto">
          <Link href="/academics" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#FFFCF7]">Overview</Link>
          <Link href="/curriculum" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#FFFCF7]">Curriculum</Link>
          <Link href="/facilities" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#7A0F14] text-white border-[#7A0F14]">Facilities •</Link>
          <Link href="/day" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#FFFCF7]">A Day</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="font-black text-[22px]">Our Spaces - Where Body Spirit Mind Grow - Photos DB YES</h2>
        <p className="text-[12px] text-gray-500 mt-1">Real photos from school to replace placeholders - Admin uploads via facilities table - P.O Box 580 same place</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { name:"Baby Class", age:"2-3 Egg", desc:"Colorful mats, low tables, toys sorted, nap mats corner, toilet nearby. Safe attachment first. Same auntie.", items:["Low tables & chairs","Nap mats washed weekly","Toys sorted colors","Potty training toilet nearby"], icon:"🐣", color:"bg-[#FFF9F9]" },
            { name:"Middle Class", age:"4 Chick", desc:"A-Z wall, numbers 1-20 wall, drawing corner, reading corner storybooks. Phonics start here.", items:["A-Z phonics wall","1-20 numbers wall","Reading corner books","Drawing coloring corner"], icon:"🐥", color:"bg-[#FFFBF0]" },
            { name:"Top Class", age:"5-6 Rooster P1 Ready", desc:"Reading writing desks, blackboard, graduation gown photos of alumni 1986-now. Interview ready.", items:["Reading writing desks","Blackboard & chalk","Graduation gown wall","Alumni photos 1986-now"], icon:"🐓", color:"bg-white border-2 border-[#7A0F14]" },
            { name:"Playground", age:"All classes", desc:"Slide, swings, MDD dance space, open ground, safe fence, no boda inside gate. Body growth daily.", items:["Slide & swings","MDD dance open ground","Safe fence no boda","Outdoor play 2x daily"], icon:"🛝", color:"bg-[#F6FFF6]" },
            { name:"Kitchen", age:"11am Porridge", desc:"Where nutritious porridge cooked daily 11am. Clean water jerrycans, covered cups, hygiene auntie.", items:["Porridge cooked daily","Clean safe water","Covered cups per child","Hygiene checked daily"], icon:"🍲", color:"bg-[#FFF8E6]" },
            { name:"QR Gate & Safety", age:"7am-5pm", desc:"QR card per child, only QR holder picks at 5pm. Stranger no pick. WhatsApp photo daily. P.O Box 580 gate.", items:["QR card per child","Only QR pick 5pm","WhatsApp daily photo","P.O Box 580 same gate 40 yrs"], icon:"🔐", color:"bg-[#F3F0FF]" },
            { name:"Toilets & Hygiene", age:"Clean 3x daily", desc:"Child-size toilets, hand wash stations, toilet training love not fear, cleaned 7am 11am 3pm.", items:["Child-size toilets","Hand wash stations","Cleaned 3x daily","Toilet training love"], icon:"🚿", color:"bg-[#E6F7FF]" },
            { name:"Daycare Room", age:"1.5-2 Safe", desc:"Play mats, safe toys, nap area, auntie close, QR gate near, WhatsApp update midday.", items:["Play mats safe","Safe baby toys","Nap area quiet","Auntie always close"], icon:"👶", color:"bg-[#FFF0F6]" },
          ].map((f)=>(
            <div key={f.name} className={`rounded-[24px] border p-6 ${f.color}`}>
              <div className="flex justify-between items-start">
                <span className="w-12 h-12 rounded-full bg-white border grid place-items-center text-[22px]">{f.icon}</span>
                <span className="bg-black text-white text-[8px] font-black px-2 py-1 rounded-full">DB YES PHOTO</span>
              </div>
              <p className="text-[10px] font-black tracking-widest opacity-50 mt-4">{f.age}</p>
              <h3 className="font-black text-[16px] mt-1">{f.name}</h3>
              <p className="text-[12px] text-gray-600 mt-2 leading-5">{f.desc}</p>
              <div className="mt-4 bg-white/70 rounded-xl border p-3 space-y-1.5">
                {f.items.map(it=>(
                  <p key={it} className="text-[11px] flex gap-2"><span className="text-green-600 font-black">✓</span> {it}</p>
                ))}
              </div>
              <div className="mt-4 h-[120px] bg-black/5 rounded-xl border-2 border-dashed grid place-items-center">
                <span className="text-[11px] font-black opacity-30">PHOTO PLACEHOLDER - ADMIN UPLOADS facilities TABLE</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#5a0a0f] rounded-[20px] p-6 text-white flex flex-col md:flex-row justify-between gap-4 border border-[#C5A880]/20">
          <div>
            <h3 className="font-black text-[16px]">Same Place 40 Years - P.O Box 580 Bulaga - 100m Post Office</h3>
            <p className="text-[12px] text-white/70 mt-2 max-w-xl leading-5">Parents who studied in Mud Room 1986 now bring kids to same gate. Alumni photo on Top Class wall. Trust built by staying same place, QR gate, WhatsApp daily, porridge 11am same taste. Admin will replace placeholders with real school photos via Supabase storage facilities bucket.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 border border-white/10 min-w-[200px]">
            <p className="text-[10px] font-black tracking-widest text-[#C5A880]">DB YES TABLE STRUCTURE</p>
            <p className="text-[11px] mt-2 leading-5">Table: facilities<br/>- name: Baby Class<br/>- description<br/>- photo_url<br/>- items[]<br/>Admin adds via /admin</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-[20px] border p-6 flex flex-col md:flex-row justify-between gap-4 items-center">
          <p className="text-[13px]"><b>Next:</b> See daily timeline 7am-5pm? When anthems? When porridge? When nap? A Day at School DB YES.</p>
          <Link href="/day" className="bg-black text-white px-8 py-3 rounded-full text-[12px] font-black whitespace-nowrap">A Day Timeline →</Link>
        </div>
      </section>
    </main>
  )
}
