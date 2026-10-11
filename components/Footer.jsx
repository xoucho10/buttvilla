import Link from "next/link"

export default function Footer(){
  return (
    <footer className="w-full bg-[#5a0a0f] text-white mt-0 border-t-[4px] border-[#C5A880]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.4fr] gap-10">

          {/* BRAND */}
          <div className="flex gap-5 items-start">
            <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border-[3px] border-white">
              <img src="/logo.png" alt="Buttvilla Logo" className="w-[58px] h-[58px] object-contain" />
            </div>
            <div>
              <div className="font-black text-[20px] leading-tight tracking-tight">Buttvilla Kindergarten</div>
              <div className="text-[13px] opacity-90 mt-1 font-bold">40 Years of Heritage • Est. 1986</div>
              <div className="text-[13px] opacity-80">Iganga, Uganda</div>
              <div className="mt-3 text-[12px] opacity-60 max-w-[340px] leading-snug">Nurturing eggs into roosters since 1986. Baby to Top Class, all in reddish maroon uniform.</div>
            </div>
          </div>

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

          {/* REAL GOOGLE MAP - SHOWS SCHOOL LOCATION */}
          <div className="rounded-[16px] overflow-hidden border-2 border-white/20 bg-white">
            <iframe
              title="Buttvilla Kindergarten Location"
              src="https://www.google.com/maps?q=Buttvilla+Kindergarten+Iganga+Uganda&z=16&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="p-3 bg-[#5a0a0f]">
              <div className="text-[11px] font-black">📍 Buttvilla Rd, Iganga - Uganda</div>
              <div className="text-[10px] opacity-70 mt-1">Mon - Sat 7:30am - 5:00pm</div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Buttvilla+Kindergarten+Iganga"
                target="_blank"
                className="mt-2 inline-block bg-white text-[#5a0a0f] px-3 py-1 rounded-full text-[10px] font-black"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR - ONLY T256 LOGO AS DEVELOPER - NO XOUCHO10 TEXT */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col lg:flex-row justify-between gap-4 text-[11px] items-center">
          <div className="opacity-50">© 2026 Buttvilla Kindergarten Iganga. All rights reserved.</div>

          <a href="https://talent256.com" target="_blank" className="flex items-center gap-3 bg-white rounded-full pl-2 pr-4 py-1.5 hover:bg-[#FFD93D] transition">
            <span className="text-[#5a0a0f] font-black text-[10px] tracking-widest px-2">WEBSITE BY</span>
            <img src="/talent256.png" alt="Talent256 Group Limited" className="w-9 h-9 rounded-full object-contain bg-white border" />
            <span className="text-[#0a1931] font-black text-[11px] leading-none">TALENT256<br/><span className="text-[8px] opacity-70 tracking-[0.2em]">GROUP LIMITED</span></span>
          </a>
        </div>
      </div>
    </footer>
  )
}