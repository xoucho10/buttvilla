import Link from "next/link"

export default function TeachersPage(){
  return (
    <main className="bg-[#FFFCF7]">
      {/* HERO - 40 YRS */}
      <section className="relative h-[38vh] min-h-[300px] bg-[#7A0F14] border-b-[4px] border-[#C5A880] overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <p className="text-white/60 text-[11px] tracking-[0.2em] font-black">HOME {'>'} ABOUT {'>'} TEACHERS 40 YRS</p>
          <h1 className="text-white text-[34px] lg:text-[46px] font-black leading-[0.9] mt-3">Teachers 40 Yrs<br/>Same Auntie 3 Years</h1>
          <p className="text-white/80 text-[13px] mt-3 max-w-xl">2 dedicated teachers 68 plus years combined Same child Baby to Top Trust P.O Box 580 100m Post Office Iganga Body Spirit Mind</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            <span className="bg-[#C5A880] text-[#7A0F14] text-[10px] font-black px-3 py-1 rounded-full">DB YES - ADMIN ADDS LATER</span>
            <span className="bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full border border-white/20">68 PLUS YRS COMBINED • THEN vs NOW</span>
          </div>
        </div>
      </section>

      {/* WHY SAME AUNTIE */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-center text-[11px] tracking-widest font-black opacity-40">WHY SAME AUNTIE 3 YEARS MATTERS - ADMIN NOTE</p>
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-[20px] p-6 border shadow-sm">
            <h3 className="font-black text-[16px]">DB YES STRUCTURE READY FOR ADMIN</h3>
            <p className="text-[13px] text-gray-600 mt-2 leading-6">Admin will add from dashboard later Teacher name Photo Then Now years bio tribute All fields from teachers table Then vs Now design like alumni</p>
            <div className="mt-4 grid gap-2">
              <div className="bg-[#FFFCF7] rounded-[12px] p-3 border flex justify-between items-center"><span className="text-[12px] font-bold">Teacher Name + Avatar</span><span className="text-[10px] bg-[#7A0F14] text-white px-2 py-1 rounded-full font-black">DB YES</span></div>
              <div className="bg-[#FFFCF7] rounded-[12px] p-3 border flex justify-between items-center"><span className="text-[12px] font-bold">Photo Then (1986) + Photo Now (2026)</span><span className="text-[10px] bg-[#7A0F14] text-white px-2 py-1 rounded-full font-black">DB YES</span></div>
              <div className="bg-[#FFFCF7] rounded-[12px] p-3 border flex justify-between items-center"><span className="text-[12px] font-bold">From Year - To Year - Era - Years Calculation</span><span className="text-[10px] bg-[#7A0F14] text-white px-2 py-1 rounded-full font-black">DB YES</span></div>
              <div className="bg-[#FFFCF7] rounded-[12px] p-3 border flex justify-between items-center"><span className="text-[12px] font-bold">Bio Journey + Tribute + Role Subject</span><span className="text-[10px] bg-[#7A0F14] text-white px-2 py-1 rounded-full font-black">DB YES</span></div>
            </div>
            <div className="mt-4 bg-[#E8CFCF] rounded-[12px] p-3 border border-[#7A0F14]/20">
              <p className="text-[11px] font-black text-[#7A0F14]">ADMIN HOW TO ADD:</p>
              <p className="text-[11px] text-gray-700 mt-1">Supabase table teachers Insert row name from_year to_year photo_then_url photo_now_url era role subject bio tribute is_retired Admin UI later at once</p>
            </div>
          </div>

          <div className="bg-[#5a0a0f] rounded-[20px] p-6 text-white border border-[#C5A880]/20 relative overflow-hidden">
            <h3 className="font-black text-[16px]">Parent Trust Formula - Same Face 3 Years</h3>
            <p className="text-[13px] opacity-80 mt-3 leading-6">Child feels safe because same face 3 years Teacher knows child deep When child cries teacher knows why Not new teacher every term QR gate 5pm WhatsApp daily photo 11am</p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/10 rounded-[16px] p-3 border border-white/10"><p className="font-black text-[18px]">2</p><p className="text-[10px] opacity-60">TEACHERS</p></div>
              <div className="bg-white/10 rounded-[16px] p-3 border border-white/10"><p className="font-black text-[18px]">68 Yrs</p><p className="text-[10px] opacity-60">COMBINED</p></div>
              <div className="bg-white rounded-[16px] p-3 text-[#7A0F14]"><p className="font-black text-[18px]">22 Yrs</p><p className="text-[10px]">LONGEST</p></div>
            </div>
            <div className="mt-4 bg-white/10 rounded-[12px] p-4 border border-white/10">
              <p className="text-[12px] font-black">FROM DB LATER - EXAMPLE:</p>
              <p className="text-[11px] opacity-70 mt-1">Auntie Grace 22 years 3 batches Baby to Top 120 children Body Spirit Mind</p>
              <p className="text-[11px] opacity-70 mt-1">Auntie Sarah 18 years 2 batches Middle to Top 80 children Early to rise eager to learn</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHER CARDS - ADMIN PLACEHOLDER - Then vs Now Upgraded */}
      <section className="max-w-7xl mx-auto px-6 pb-8 grid lg:grid-cols-2 gap-6">
        {/* Teacher 1 */}
        <div className="bg-white rounded-[24px] border p-4 hover:shadow-xl transition">
          <div className="grid grid-cols-2 gap-3">
            <div><p className="text-[9px] tracking-widest font-black text-gray-400 mb-1">THEN • 1986</p><div className="w-full h-[160px] rounded-2xl bg-[#E8CFCF] grid place-items-center border"><span className="text-[10px] font-black text-[#7A0F14]">PHOTO THEN DB</span></div></div>
            <div><p className="text-[9px] tracking-widest font-black text-[#7A0F14] mb-1">NOW • 2026</p><div className="w-full h-[160px] rounded-2xl bg-[#C5A880]/30 grid place-items-center border"><span className="text-[10px] font-black">PHOTO NOW DB</span></div></div>
          </div>
          <div className="mt-4 flex gap-4">
            <div className="w-[60px] h-[60px] rounded-full bg-[#E8CFCF] grid place-items-center shrink-0 border"><span className="text-[10px] font-black">AVATAR</span></div>
            <div className="flex-1">
              <p className="font-black text-[16px] text-[#7A0F14]">Teacher 1 Placeholder</p>
              <p className="text-[11px] font-black text-[#7A0F14]">22 YEARS AT BUTTVILLA • DB YES • 1986-2026</p>
              <p className="text-[12px] text-gray-600 mt-1 leading-5">Story from mud room days Same child 3 years Knows each child by voice 40 yrs heritage Body Spirit Mind</p>
              <div className="mt-3 flex gap-2">
                <span className="bg-[#FFFCF7] border px-3 py-1 rounded-full text-[11px] font-bold">1986 - Present</span>
                <span className="bg-[#7A0F14] text-white px-3 py-1 rounded-full text-[11px] font-bold">22 Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher 2 */}
        <div className="bg-white rounded-[24px] border p-4 hover:shadow-xl transition">
          <div className="grid grid-cols-2 gap-3">
            <div><p className="text-[9px] tracking-widest font-black text-gray-400 mb-1">THEN • 2006</p><div className="w-full h-[160px] rounded-2xl bg-[#E8CFCF] grid place-items-center border"><span className="text-[10px] font-black text-[#7A0F14]">PHOTO THEN DB</span></div></div>
            <div><p className="text-[9px] tracking-widest font-black text-[#7A0F14] mb-1">NOW • 2026</p><div className="w-full h-[160px] rounded-2xl bg-[#C5A880]/30 grid place-items-center border"><span className="text-[10px] font-black">PHOTO NOW DB</span></div></div>
          </div>
          <div className="mt-4 flex gap-4">
            <div className="w-[60px] h-[60px] rounded-full bg-[#C5A880]/30 grid place-items-center shrink-0 border"><span className="text-[10px] font-black">AVATAR</span></div>
            <div className="flex-1">
              <p className="font-black text-[16px] text-[#7A0F14]">Teacher 2 Placeholder</p>
              <p className="text-[11px] font-black text-[#7A0F14]">18 YEARS AT BUTTVILLA • DB YES • 2006-2026</p>
              <p className="text-[12px] text-gray-600 mt-1 leading-5">Joins 2006 Baby class expert Nap mats song MDD dance practice Child loves her Early to rise eager to learn</p>
              <div className="mt-3 flex gap-2">
                <span className="bg-[#FFFCF7] border px-3 py-1 rounded-full text-[11px] font-bold">2006 - Present</span>
                <span className="bg-[#7A0F14] text-white px-3 py-1 rounded-full text-[11px] font-bold">18 Years</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAV */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-[20px] border p-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex gap-2">
            <Link href="/alumni" className="bg-black text-white rounded-full px-6 py-3 text-[12px] font-black shadow">Alumni DB YES Next →</Link>
            <a href="https://wa.me/256772428743" className="bg-[#25D366] text-white rounded-full px-6 py-3 text-[12px] font-black">Ask About Teachers 0772 428 743</a>
          </div>
          <Link href="/mission" className="text-[12px] font-black opacity-60">← Back to Mission</Link>
        </div>
      </section>
    </main>
  )
}
