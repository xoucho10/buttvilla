import Link from "next/link"

export default function Footer(){
  return (
    <footer className="w-full bg-[#5a0a0f] text-white mt-0 border-t-[4px] border-[#C5A880]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] gap-10">

          {/* BRAND */}
          <div className="flex gap-5 items-start">
            <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-[3px] border-white">
              <img src="/logo.png" alt="Buttvilla Logo" className="w-[58px] h-[58px] object-contain" />
            </div>
            <div>
              <div className="font-black text-[20px] leading-tight tracking-tight">Buttvilla Kindergarten</div>
              <div className="text-[13px] opacity-90 mt-1 font-bold">40 Years of Heritage • Est. 1986</div>
              <div className="text-[13px] opacity-80">Iganga, Uganda</div>
              <div className="mt-3 text-[12px] opacity-60 max-w-[340px] leading-snug">Nurturing eggs into roosters since 1986. Baby to Top Class, all in reddish maroon uniform. Play-based curriculum.</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-[11px] font-black tracking-widest opacity-50">EXPLORE</div>
              <div className="mt-3 flex flex-col gap-2 text-[13px]">
                <Link href="/" className="hover:text-[#FFD93D]">Home</Link>
                <Link href="/about" className="hover:text-[#FFD93D]">Heritage</Link>
                <Link href="/academics" className="hover:text-[#FFD93D]">Academics</Link>
                <Link href="/admissions" className="hover:text-[#FFD93D]">Admissions</Link>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-black tracking-widest opacity-50">PARENTS</div>
              <div className="mt-3 flex flex-col gap-2 text-[13px]">
                <Link href="/contact" className="hover:text-[#FFD93D]">Visit School</Link>
                <Link href="/alumni" className="hover:text-[#FFD93D]">Alumni</Link>
                <a href="https://wa.me/256700000000" className="hover:text-[#FFD93D]">WhatsApp</a>
                <Link href="/contact" className="hover:text-[#FFD93D]">Contact</Link>
              </div>
            </div>
          </div>

          <div className="lg:text-right">
            <div className="text-[11px] font-black tracking-widest opacity-50">VISIT US</div>
            <div className="mt-3 space-y-2 text-[13px]">
              <div>📍 Iganga Main Street</div>
              <div>📞 +256 700 000 000</div>
              <div>✉️ info@buttvilla.ac.ug</div>
            </div>
            <div className="mt-4 inline-flex bg-white/10 border border-white/10 rounded-full px-4 py-2 text-[11px]">🕗 Mon - Sat • 7:30am - 5:00pm</div>
          </div>
        </div>

        {/* BOTTOM BAR - XOUCHO10 WHATSAPP */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col lg:flex-row justify-between gap-3 text-[11px] items-center">
          <div className="opacity-50">© 2026 Buttvilla Kindergarten Iganga. All rights reserved.</div>
          <div className="flex gap-2 items-center">
            <span className="opacity-50">Built with ❤️ for 40 Years</span>
            <span className="opacity-30 hidden lg:inline">|</span>
            <a
              href="https://wa.me/256700568634?text=Hello%20Xoucho10%2C%20I%20saw%20your%20work%20on%20Buttvilla%20Kindergarten%20website%20%E2%80%94%20I%20need%20a%20website%20too!"
              target="_blank"
              className="bg-white text-[#5a0a0f] px-4 py-1.5 rounded-full font-black text-[10px] tracking-widest hover:bg-[#FFD93D] transition flex items-center gap-1"
            >
              WEBSITE BY <span className="text-[#7A0F14]">XOUCHO10</span> 💬
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}