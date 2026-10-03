"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>

      {/* HERO - HERITAGE */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="bg-[#7A0F14] rounded-[2rem] p-8 md:p-12 text-white grid md:grid-cols-2 gap-8 items-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="inline-flex bg-white/15 px-4 py-1 rounded-full text-[11px] font-bold tracking-widest">👕 SAME COLOR SINCE 1986 • 40 YEARS LEGACY</p>
            <h1 className="text-4xl md:text-6xl font-black mt-4 leading-none">Uniform</h1>
            <p className="text-white/70 mt-3 text-sm md:text-base">Our reddish maroon is not just a color — it's an identity. Every child from Baby to Top Class wears the same pride that 500+ alumni wore.</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/10 rounded-xl p-3"><p className="font-black text-lg">100%</p><p className="text-[10px] text-white/60">Cotton Cream</p></div>
              <div className="bg-white/10 rounded-xl p-3"><p className="font-black text-lg">Maroon</p><p className="text-[10px] text-white/60">#7A0F14 Official</p></div>
              <div className="bg-white/10 rounded-xl p-3"><p className="font-black text-lg">40 Yrs</p><p className="text-[10px] text-white/60">Unchanged</p></div>
            </div>
          </div>
          <div className="relative z-10 bg-white rounded-[1.5rem] p-6 text-black">
            <p className="font-black">Full Set Includes (UGX 120,000)</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-green-600">✓</span> 2x Cream shirts/blouses</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> 2x Check shorts / dress</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> 1x Maroon sweater with crest</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> 1x Sports kit (white tee + maroon short)</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> 1x School bag (maroon)</li>
            </ul>
            <Link href="/enrollment" className="block text-center mt-5 py-3 bg-[#7A0F14] text-white rounded-full font-bold text-sm">Get Uniform on Enrollment →</Link>
          </div>
        </div>
      </div>

      {/* INTERACTIVE SELECTOR */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[2rem] border p-2 flex gap-2 w-fit">
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
              <p className="text-xs text-gray-400">Illustrative • Actual uniform at school</p>
              <div className="mt-6 flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FFF8DC] border" title="Cream"></div>
                <div className="w-8 h-8 rounded-full bg-[#7A0F14] border" title="Maroon"></div>
                <div className="w-8 h-8 rounded-full bg-black border" title="Black shoes"></div>
                <div className="w-8 h-8 rounded-full bg-white border" title="White sports"></div>
              </div>
            </div>

            <div>
              <h3 className="font-black text-xl">{view==="daily"?'Monday to Tuesday + Thursday':'Wednesday & Friday'}</h3>
              <p className="text-sm text-gray-500 mt-1">{view==="daily"?'Official classroom uniform - must be neat, ironed, crest visible':'PE / Games day - for sports and play-based learning'}</p>
              <div className="mt-6 space-y-3">
                {(view==="daily"?data.daily:data.sports).map((item,i)=>(
                  <div key={i} className="flex gap-3 bg-[#FFFCF7] rounded-xl p-3 text-sm"><span className="w-6 h-6 bg-white rounded-full grid place-items-center text-xs font-black shrink-0">{i+1}</span><span className="font-medium">{item}</span></div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-xs">
                <p className="font-black">⚠️ Grooming Rules</p>
                <ul className="mt-2 space-y-1 list-disc pl-4 text-gray-600">
                  <li>Hair cut short & neat (boys), plaited (girls) - no dye</li>
                  <li>Nails trimmed every Monday checked</li>
                  <li>Sweater must have embroidered crest - no plain</li>
                  <li>Black shoes polished, not open shoes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SIZING GUIDE */}
          <div className="mt-6 bg-white rounded-[2rem] border p-8">
            <h3 className="font-black">Sizing Guide (Age based)</h3>
            <div className="mt-4 grid grid-cols-4 gap-2 text-xs font-bold">
              <div className="bg-[#FFFCF7] p-3 rounded-xl text-center"><p>Age 2-3</p><p className="text-gray-400 font-normal">Size 20</p></div>
              <div className="bg-[#FFFCF7] p-3 rounded-xl text-center"><p>Age 3-4</p><p className="text-gray-400 font-normal">Size 22</p></div>
              <div className="bg-[#FFFCF7] p-3 rounded-xl text-center"><p>Age 4-5</p><p className="text-gray-400 font-normal">Size 24</p></div>
              <div className="bg-[#FFFCF7] p-3 rounded-xl text-center"><p>Age 5-6</p><p className="text-gray-400 font-normal">Size 26</p></div>
            </div>
            <p className="text-[11px] text-gray-400 mt-3">We measure child on admission day at school. Exchange within 7 days if tight.</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">
          <div className="bg-white rounded-[1.5rem] border p-6">
            <p className="font-black">Where to Buy?</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="bg-[#FFFCF7] rounded-xl p-4"><p className="font-bold">1. School Store (Recommended)</p><p className="text-xs text-gray-500 mt-1">Original crest + correct check. Pay on enrollment day.</p><p className="text-xs font-black mt-2 text-[#7A0F14]">UGX 120,000 full set</p></div>
              <div className="bg-[#FFFCF7] rounded-xl p-4 opacity-60"><p className="font-bold">2. Outside Tailor</p><p className="text-xs text-gray-500 mt-1">We give you fabric sample, but crest must be bought at school (UGX 10,000)</p></div>
            </div>
            <a href="https://wa.me/256700000000?text=Uniform%20for%20my%20child" className="block text-center w-full mt-4 py-3 bg-black text-white rounded-full font-bold text-sm">WhatsApp for Uniform</a>
          </div>

          <div className="bg-[#7A0F14] rounded-[1.5rem] p-6 text-white">
            <p className="font-black">Why Maroon?</p>
            <p className="text-sm text-white/70 mt-2 leading-relaxed">Chosen in 1986 by founders for discipline, warmth, and easy stain hiding. For 40 years we never changed it — so when you see maroon & cream check in Iganga, you know it's Buttvilla.</p>
            <p className="text-[11px] mt-4 bg-white/15 inline-block px-3 py-1 rounded-full">Nurturing eggs into roosters since 1986 🐓</p>
          </div>

          <div className="bg-white rounded-[1.5rem] border p-6">
            <p className="font-black text-sm">Not Allowed ❌</p>
            <ul className="mt-3 text-xs text-gray-500 space-y-2 list-disc pl-4">
              <li>Jeans, leggings under uniform</li>
              <li>Colored sweaters (must be maroon)</li>
              <li>Jewelry, makeup, nail polish</li>
              <li>Crocs, sandals, slippers</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}