import Link from "next/link"

export default function AboutPage(){
  return (
    <main className="bg-[#FFFCF7]">
      {/* SECTION 1 - HERO 40vh - ABOUT */}
      <section className="relative h-[38vh] min-h-[300px] bg-[#7A0F14] overflow-hidden">
        <img src="/hero-kids.jpg" alt="Buttvilla" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <p className="text-white/70 text-[11px] tracking-[0.2em] font-bold">HOME {'>'} ABOUT</p>
          <h1 className="text-white text-[34px] lg:text-[48px] font-black leading-[0.9] mt-3">About Us<br/>Buttvilla Kindergarten</h1>
          <p className="text-white/80 text-[13px] mt-3 max-w-md">P.O Box 580 • 100m Post Office, Iganga • Est. 1986 • Body Spirit Mind</p>
          <div className="mt-4 flex gap-2">
            <span className="bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-full border border-white/20">DB NO - STATIC PAGE</span>
            <span className="bg-[#C5A880] text-[#7A0F14] text-[10px] font-black px-3 py-1 rounded-full">40 YRS HERITAGE</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 - WHO WE ARE - P.O Box 580 */}
      <section className="max-w-7xl mx-auto px-6 py-10 lg:py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <div>
          <span className="inline-block bg-[#7A0F14]/10 text-[#7A0F14] text-[11px] font-black px-3 py-1 rounded-full tracking-widest border border-[#7A0F14]/20">EST. 1986 • P.O BOX 580</span>
          <h2 className="text-[28px] lg:text-[38px] font-black text-black mt-4 leading-[1.05]">Nurturing eggs into<br/>roosters since 1986</h2>
          <p className="text-gray-700 text-[14px] leading-7 mt-5">
            Buttvilla Kindergarten started in a mud room with 25 pupils in 1986. Today we have 4 bright classrooms
            100 meters from Iganga Post Office, P.O Box 580. Same location for 40 years. Body Spirit Mind - we teach child to be healthy, respectful, and bright.
          </p>
          <p className="text-gray-700 text-[14px] leading-7 mt-3">
            Morning 8:30am both Uganda anthem and school anthem. Roosters motto - early to rise, eager to learn. Same auntie stays with your child for 3 years from Baby to Top - child feels safe, teacher knows child deeply.
          </p>
          <div className="flex gap-3 mt-6">
            <Link href="/history" className="bg-[#7A0F14] text-white px-6 py-3 rounded-full text-[13px] font-black shadow">Our History →</Link>
            <Link href="/contact" className="border-2 border-black text-black px-6 py-3 rounded-full text-[13px] font-black">Visit 8am-4pm</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#E8CFCF] rounded-[24px] h-[200px] grid place-items-center border border-[#7A0F14]/10">
            <p className="font-black text-[#7A0F14] text-[12px]">PHOTO: Team Building</p>
          </div>
          <div className="bg-[#C5A880]/30 rounded-[24px] h-[200px] mt-6 grid place-items-center border">
            <p className="font-black text-[#7A0F14] text-[12px]">PHOTO: Class Lesson</p>
          </div>
          <div className="bg-[#FFD93D]/30 rounded-[24px] h-[160px] -mt-6 grid place-items-center border">
            <p className="font-black text-[12px]">Outdoor Play</p>
          </div>
          <div className="bg-[#7A0F14]/10 rounded-[24px] h-[160px] grid place-items-center border">
            <p className="font-black text-[12px]">MDD Dance</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - CORE VALUES - BODY SPIRIT MIND */}
      <section className="bg-white border-y border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-center font-black text-[22px]">Our Core - Body Spirit Mind</h3>
          <p className="text-center text-[13px] text-gray-500 mt-2">40 years same values - DB NO static</p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-[#FFFCF7] rounded-[20px] p-6 border border-black/5">
              <div className="w-10 h-10 rounded-full bg-[#7A0F14] text-white grid place-items-center font-black">B</div>
              <h4 className="font-black mt-3 text-[15px]">Body</h4>
              <p className="text-[13px] text-gray-600 mt-2 leading-6">Hot porridge 10am, lunch 12:30pm, handwash station, clean toilets, fenced compound 7am-5pm safe, nap mats.</p>
              <span className="inline-block mt-3 text-[10px] font-black bg-gray-200 px-2 py-1 rounded-full">DB NO</span>
            </div>
            <div className="bg-[#FFFCF7] rounded-[20px] p-6 border border-black/5">
              <div className="w-10 h-10 rounded-full bg-[#7A0F14] text-white grid place-items-center font-black">S</div>
              <h4 className="font-black mt-3 text-[15px]">Spirit</h4>
              <p className="text-[13px] text-gray-600 mt-2 leading-6">Both anthems 8:30am daily, Roosters motto early rise, respect, sharing gifts Fridays, MDD dance.</p>
              <span className="inline-block mt-3 text-[10px] font-black bg-gray-200 px-2 py-1 rounded-full">DB NO</span>
            </div>
            <div className="bg-[#FFFCF7] rounded-[20px] p-6 border border-black/5">
              <div className="w-10 h-10 rounded-full bg-[#7A0F14] text-white grid place-items-center font-black">M</div>
              <h4 className="font-black mt-3 text-[15px]">Mind</h4>
              <p className="text-[13px] text-gray-600 mt-2 leading-6">English Day 1, Literacy, Numeracy, weekly assessment, same auntie 3 yrs knows child well.</p>
              <span className="inline-block mt-3 text-[10px] font-black bg-gray-200 px-2 py-1 rounded-full">DB NO</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - STATS - MAROON BAR */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-[#5a0a0f] rounded-[20px] p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-white border-t-[4px] border-[#C5A880]">
          <div><p className="text-[28px] font-black">1986</p><p className="text-[10px] opacity-70 tracking-widest font-bold">ESTABLISHED • DB NO</p></div>
          <div><p className="text-[28px] font-black">4</p><p className="text-[10px] opacity-70 tracking-widest font-bold">BRIGHT CLASSROOMS • DB NO</p></div>
          <div><p className="text-[28px] font-black">2</p><p className="text-[10px] opacity-70 tracking-widest font-bold">TEACHERS 40YRS • DB YES</p></div>
          <div><p className="text-[28px] font-black">7am-5pm</p><p className="text-[10px] opacity-70 tracking-widest font-bold">SAFE CARE QR GATE • DB NO</p></div>
        </div>
      </section>

      {/* SECTION 5 - NEXT STEPS - ABOUT NAV */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-[20px] border border-black/5 p-6">
          <p className="font-black text-[13px] tracking-widest opacity-50">ABOUT SECTION (5 PAGES) - NEXT</p>
          <div className="grid md:grid-cols-4 gap-3 mt-4">
            <Link href="/history" className="border border-[#7A0F14]/30 rounded-[12px] px-4 py-3 flex justify-between items-center hover:bg-[#FFFCF7]"><span className="text-[13px] font-bold">Our History</span><span className="text-[10px] bg-gray-500 text-white px-2 py-1 rounded-full font-black">DB NO</span></Link>
            <Link href="/mission" className="border border-[#7A0F14]/30 rounded-[12px] px-4 py-3 flex justify-between items-center hover:bg-[#FFFCF7]"><span className="text-[13px] font-bold">Mission & Vision</span><span className="text-[10px] bg-gray-500 text-white px-2 py-1 rounded-full font-black">DB NO</span></Link>
            <Link href="/teachers" className="border border-[#7A0F14] rounded-[12px] px-4 py-3 flex justify-between items-center bg-[#7A0F14]/5"><span className="text-[13px] font-bold">Teachers 40 Yrs</span><span className="text-[10px] bg-[#7A0F14] text-white px-2 py-1 rounded-full font-black">DB YES</span></Link>
            <Link href="/alumni" className="border border-[#7A0F14] rounded-[12px] px-4 py-3 flex justify-between items-center bg-[#7A0F14]/5"><span className="text-[13px] font-bold">Alumni</span><span className="text-[10px] bg-[#7A0F14] text-white px-2 py-1 rounded-full font-black">DB YES</span></Link>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/256772428743" className="bg-[#25D366] text-white px-6 py-3 rounded-full text-[13px] font-black">WhatsApp 0772 428 743</a>
            <Link href="/enrollment" className="bg-black text-white px-6 py-3 rounded-full text-[13px] font-black">Enroll 2026 →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
