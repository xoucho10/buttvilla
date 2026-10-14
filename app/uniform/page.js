"use client";
import { useState } from "react";
import Link from "next/link";

const UNIFORMS = {
  Boy: {
    daily: ["Cream short-sleeve shirt (with logo)", "Maroon & cream check shorts", "Maroon sweater with crest", "Black shoes + grey socks", "Maroon tie (Top Class only)"],
    sports: ["White t-shirt with Buttvilla logo", "Maroon shorts", "White socks + white sneakers"],
    image: "👦"
  },
  Girl: {
    daily: ["Cream short-sleeve blouse (with logo)", "Maroon & cream check dress / pinafore", "Maroon sweater with crest", "Black shoes + white socks", "Maroon bow tie (Top Class)"],
    sports: ["White t-shirt with Buttvilla logo", "Maroon skorts", "White socks + white sneakers"],
    image: "👧"
  }
};

export default function UniformPage(){
  const [gender, setGender] = useState("Boy");
  const [view, setView] = useState("daily");
  const data = UNIFORMS[gender];

  return (
    <div className="bg-[#FFFCF7]">
      {/* HERO SAME AS ENROLLMENT/ACADEMICS - FULL WIDTH MAROON */}
      <div className="w-full bg-[#7A0F14]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white/10 border border-white/20 text-white/80 text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full">EST 1986 • 40 YEARS • P.O BOX 580 • SAME COLOR</span>
            <span className="bg-[#C5A880] text-[#7A0F14] text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full">UNIFORM DB NO - SAME SINCE 1986</span>
          </div>
          <h1 className="font-black leading-[0.9] tracking-tight text-[36px] md:text-[56px] max-w-4xl">
            <span className="text-white block">Reddish Maroon</span>
            <span className="text-[#C5A880] block">Identity Since 1986</span>
          </h1>
          <p className="text-white/60 text-[14px] max-w-[720px] mt-5">Our reddish maroon is not just a color — it's an identity. Every child from Baby to Top Class wears same pride 500+ alumni wore. Cream + maroon check, same place 100m Bulaga Post Office. P.O Box 580 Bulaga.</p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-[720px] border-t border-white/10 pt-8">
            <div><div className="font-black text-[28px] text-white">40 Yrs</div><div className="mt-2 text-[10px] font-black text-white/50 uppercase">UNCHANGED COLOR<br/>#7A0F14 Official</div></div>
            <div className="border-l border-white/10 pl-6"><div className="font-black text-[28px] text-white">120k</div><div className="mt-2 text-[10px] font-black text-white/50 uppercase">FULL SET<br/>2 Shirts + Check</div></div>
            <div className="border-l border-white/10 pl-6"><div className="font-black text-[28px] text-[#C5A880]">100%</div><div className="mt-2 text-[10px] font-black text-white/50 uppercase">COTTON CREAM<br/>Cotton + Crest</div></div>
          </div>
          <div className="mt-8 bg-white rounded-[16px] p-2 flex gap-2 max-w-fit overflow-x-auto">
            <Link href="/admissions" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#FFFCF7] border whitespace-nowrap">Admissions DB NO</Link>
            <Link href="/enrollment" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#FFFCF7] border whitespace-nowrap">Enrollment DB YES</Link>
            <Link href="/fees" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#FFFCF7] border whitespace-nowrap">Fees DB NO</Link>
            <Link href="/uniform" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#7A0F14] text-white whitespace-nowrap">Uniform DB NO</Link>
          </div>
        </div>
      </div>

      {/* YOUR INTERACTIVE SELECTOR - KEPT SAME */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[2rem] border p-2 flex gap-2 w-fit flex-wrap">
            <button onClick={()=>setGender("Boy")} className={`px-6 py-3 rounded-full font-black text-sm ${gender==="Boy"?'bg-black text-white':'bg-[#FFFCF7] text-gray-500'}`}>👦 Boy</button>
            <button onClick={()=>setGender("Girl")} className={`px-6 py-3 rounded-full font-black text-sm ${gender==="Girl"?'bg-black text-white':'bg-[#FFFCF7] text-gray-500'}`}>👧 Girl</button>
            <div className="w-px bg-gray-200 mx-2"/>
            <button onClick={()=>setView("daily")} className={`px-6 py-3 rounded-full font-bold text-sm ${view==="daily"?'bg-[#7A0F14] text-white':'bg-[#FFFCF7]'}`}>Daily</button>
            <button onClick={()=>setView("sports")} className={`px-6 py-3 rounded-full font-bold text-sm ${view==="sports"?'bg-[#7A0F14] text-white':'bg-[#FFFCF7]'}`}>Sports (Wed & Fri)</button>
          </div>

          <div className="mt-6 bg-white rounded-[2rem] border p-8 grid md:grid-cols-2 gap-8">
            <div className="bg-[#FFFCF7] rounded-[1.5rem] p-8 grid place-items-center">
              <div className="text-[120px]">{data.image}</div>
              <p className="font-black mt-2">{gender} - {view==="daily"?'Daily Class':'Sports Day'}</p>
              <p className="text-xs text-gray-400">Illustrative • Actual uniform at school P.O Box 580</p>
              <div className="mt-6 flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FFF8DC] border" title="Cream"></div>
                <div className="w-8 h-8 rounded-full bg-[#7A0F14] border" title="Maroon"></div>
                <div className="w-8 h-8 rounded-full bg-black border" title="Black shoes"></div>
              </div>
            </div>
            <div>
              <h3 className="font-black text-xl">{view==="daily"?'Mon Tue Thu':'Wed & Fri Sports'}</h3>
              <p className="text-sm text-gray-500 mt-1">{view==="daily"?'Official classroom - must be neat, ironed, crest visible':'PE / Games - for sports and play-based learning'}</p>
              <div className="mt-6 space-y-3">
                {(view==="daily"?data.daily:data.sports).map((item,i)=>(
                  <div key={i} className="flex gap-3 bg-[#FFFCF7] rounded-xl p-3 text-sm"><span className="w-6 h-6 bg-white rounded-full grid place-items-center text-xs font-black shrink-0">{i+1}</span><span className="font-medium">{item}</span></div>
                ))}
              </div>
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-xs">
                <p className="font-black">⚠️ Grooming Rules - Same Since 1986</p>
                <ul className="mt-2 space-y-1 list-disc pl-4 text-gray-600">
                  <li>Hair cut short & neat (boys), plaited (girls) - no dye</li>
                  <li>Nails trimmed Monday checked</li>
                  <li>Sweater must have embroidered crest - no plain</li>
                  <li>Black shoes polished, not open shoes - Self Drop</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-[2rem] border p-8">
            <h3 className="font-black">Sizing Guide (Age based) - Measure at School</h3>
            <div className="mt-4 grid grid-cols-4 gap-2 text-xs font-bold">
              <div className="bg-[#FFFCF7] p-3 rounded-xl text-center"><p>Age 2-3</p><p className="text-gray-400 font-normal">Size 20</p></div>
              <div className="bg-[#FFFCF7] p-3 rounded-xl text-center"><p>Age 3-4</p><p className="text-gray-400 font-normal">Size 22</p></div>
              <div className="bg-[#FFFCF7] p-3 rounded-xl text-center"><p>Age 4-5</p><p className="text-gray-400 font-normal">Size 24</p></div>
              <div className="bg-[#FFFCF7] p-3 rounded-xl text-center"><p>Age 5-6</p><p className="text-gray-400 font-normal">Size 26</p></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-[1.5rem] border p-6">
            <p className="font-black">Where to Buy? P.O Box 580 Bulaga</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="bg-[#FFFCF7] rounded-xl p-4 border-2 border-[#7A0F14]/20"><p className="font-bold">1. School Store (Recommended)</p><p className="text-xs text-gray-500 mt-1">Original crest + correct check. Pay on enrollment day.</p><p className="text-xs font-black mt-2 text-[#7A0F14]">UGX 120,000 full set</p></div>
            </div>
            <Link href="/enrollment" className="block text-center w-full mt-4 py-3 bg-[#7A0F14] text-white rounded-full font-bold text-sm">Get Uniform on Enrollment →</Link>
          </div>
          <div className="bg-[#7A0F14] rounded-[1.5rem] p-6 text-white">
            <p className="font-black">Why Maroon? Since 1986</p>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">Chosen in 1986 for discipline, warmth, stain hiding. For 40 years we never changed it — when you see maroon & cream check in Iganga, you know it's Buttvilla. Self drop 100m Bulaga Post Office.</p>
            <p className="text-[11px] mt-4 bg-white/15 inline-block px-3 py-1 rounded-full">Nurturing eggs into roosters since 1986 🐓</p>
          </div>
        </div>
      </div>
    </div>
  )
}