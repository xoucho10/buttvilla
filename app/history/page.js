import Link from "next/link"

export default function HistoryPage(){
  return (
    <main className="bg-[#FFFCF7]">
      {/* HERO */}
      <section className="relative h-[36vh] min-h-[280px] bg-[#5a0a0f] overflow-hidden border-b-[4px] border-[#C5A880]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <p className="text-white/60 text-[11px] tracking-[0.2em] font-black">HOME {'>'} ABOUT {'>'} OUR HISTORY</p>
          <h1 className="text-white text-[34px] lg:text-[46px] font-black leading-[0.9] mt-3">Our History<br/>40 Years of Roosters</h1>
          <p className="text-[#C5A880] text-[13px] mt-3 font-bold">1986 Classroom 25 pupils → 2026 4 classrooms • P.O Box 580</p>
          <span className="mt-3 inline-block bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full w-fit border border-white/20">DB NO - STATIC TIMELINE</span>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-black text-[22px] text-center">From ClassRoom to 4 Classrooms</h2>

          <div className="mt-10 relative">
            {/* Line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[3px] bg-[#C5A880]/30 -translate-x-1/2 hidden lg:block"></div>
            <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-[#C5A880]/30 lg:hidden"></div>

            {/* 1986 */}
            <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-10 mb-10 pl-16 lg:pl-0">
              <div className="lg:w-1/2 lg:text-right lg:pr-10">
                <p className="font-black text-[#7A0F14] text-[28px]">1986</p>
                <h3 className="font-black text-[16px]">ClassRoom • 25 Pupils</h3>
                <p className="text-[13px] text-gray-600 mt-2 leading-6">Started by mama founder in small Classroom near Post Office. One blackboard, 25 eggs (pupils) learning to be roosters. No uniform, just spirit.</p>
              </div>
              <div className="absolute left-6 lg:left-1/2 top-2 w-4 h-4 bg-[#7A0F14] rounded-full border-4 border-[#C5A880] -translate-x-1/2"></div>
              <div className="lg:w-1/2 lg:pl-10"><div className="bg-[#E8CFCF] rounded-[16px] h-[120px] grid place-items-center border"><span className="text-[11px] font-black">PHOTO: Old Classroom</span></div></div>
            </div>

            {/* 1995 */}
            <div className="relative flex flex-col lg:flex-row-reverse gap-4 lg:gap-10 mb-10 pl-16 lg:pl-0">
              <div className="lg:w-1/2 lg:pl-10">
                <p className="font-black text-[#7A0F14] text-[28px]">1995</p>
                <h3 className="font-black text-[16px]">First Permanent Block</h3>
                <p className="text-[13px] text-gray-600 mt-2 leading-6">Community built first permanent classroom. 60 pupils. Maroon uniform introduced. Roosters motto written on wall.</p>
              </div>
              <div className="absolute left-6 lg:left-1/2 top-2 w-4 h-4 bg-[#7A0F14] rounded-full border-4 border-white -translate-x-1/2"></div>
              <div className="lg:w-1/2 lg:text-right lg:pr-10"><div className="bg-[#C5A880]/20 rounded-[16px] h-[120px] grid place-items-center border"><span className="text-[11px] font-black">PHOTO: First block</span></div></div>
            </div>

            {/* 2005 */}
            <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-10 mb-10 pl-16 lg:pl-0">
              <div className="lg:w-1/2 lg:text-right lg:pr-10">
                <p className="font-black text-[#7A0F14] text-[28px]">2005</p>
                <h3 className="font-black text-[16px]">4 Classrooms • Baby to Top</h3>
                <p className="text-[13px] text-gray-600 mt-2 leading-6">4 bright classrooms complete: Baby, Middle, Top. 2 dedicated teachers who stay 3 years with same child. Hot meals started.</p>
              </div>
              <div className="absolute left-6 lg:left-1/2 top-2 w-4 h-4 bg-[#7A0F14] rounded-full border-4 border-white -translate-x-1/2"></div>
              <div className="lg:w-1/2 lg:pl-10"><div className="bg-[#FFD93D]/20 rounded-[16px] h-[120px] grid place-items-center border"><span className="text-[11px] font-black">PHOTO: 4 classrooms</span></div></div>
            </div>

            {/* 2026 */}
            <div className="relative flex flex-col lg:flex-row-reverse gap-4 lg:gap-10 pl-16 lg:pl-0">
              <div className="lg:w-1/2 lg:pl-10">
                <p className="font-black text-[#7A0F14] text-[28px]">2026</p>
                <h3 className="font-black text-[16px]">Today • QR Gate • WhatsApp</h3>
                <p className="text-[13px] text-gray-600 mt-2 leading-6">40 years. Same location 100m Post Office. QR gate 5pm, WhatsApp updates daily, same 2 teachers 68+ yrs combined. P.O Box 580 still.</p>
                <span className="inline-block mt-3 bg-[#7A0F14] text-white text-[10px] font-black px-3 py-1 rounded-full">40 YRS HERITAGE</span>
              </div>
              <div className="absolute left-6 lg:left-1/2 top-2 w-4 h-4 bg-[#25D366] rounded-full border-4 border-white -translate-x-1/2"></div>
              <div className="lg:w-1/2 lg:text-right lg:pr-10"><div className="bg-[#5a0a0f] rounded-[16px] h-[120px] grid place-items-center border border-[#C5A880]"><span className="text-[11px] font-black text-white">PHOTO: Today 2026</span></div></div>
            </div>

          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-[20px] border p-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-black text-[13px] tracking-widest opacity-40">NEXT IN ABOUT (5)</p>
            <div className="flex gap-2 mt-2">
              <Link href="/mission" className="border border-[#7A0F14]/30 rounded-full px-4 py-2 text-[12px] font-bold">Mission & Vision →</Link>
              <Link href="/teachers" className="bg-[#7A0F14] text-white rounded-full px-4 py-2 text-[12px] font-bold">Teachers 40 Yrs (DB YES)</Link>
            </div>
          </div>
          <Link href="/about" className="text-[12px] font-black opacity-60">← Back to About Us</Link>
        </div>
      </section>
    </main>
  )
}