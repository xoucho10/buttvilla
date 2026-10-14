"use client";
import { useState } from "react";
import Link from "next/link";

const FEES = {
  "Baby Class": { term: 350000, registration: 30000, uniform: 120000, meals: 150000 },
  "Middle Class": { term: 400000, registration: 30000, uniform: 120000, meals: 150000 },
  "Top Class": { term: 450000, registration: 30000, uniform: 120000, meals: 150000 },
};

export default function FeesPage(){
  const [cls, setCls] = useState("Top Class");
  const [needMeals, setNeedMeals] = useState(true);
  const [siblings, setSiblings] = useState(1);

  const data = FEES[cls];
  const subtotal = data.term + data.registration + data.uniform + (needMeals? data.meals:0);
  const discount = siblings===2? 0.10 : siblings>=3? 0.15 : 0;
  const total = Math.round(subtotal * (1 - discount));
  const monthly = Math.round(total/3);

  return (
    <div className="bg-[#FFFCF7]">
      {/* HERO SAME AS ENROLLMENT/UNIFORM - FULL WIDTH */}
      <div className="w-full bg-[#7A0F14]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white/10 border border-white/20 text-white/80 text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full">EST 1986 • 40 YEARS • P.O BOX 580 • NO HIDDEN FEES</span>
            <span className="bg-[#C5A880] text-[#7A0F14] text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full">STRUCTURAL ONLY - DB LATER</span>
          </div>
          <h1 className="font-black leading-[0.9] tracking-tight text-[36px] md:text-[56px] max-w-4xl">
            <span className="text-white block">Transparent Fees</span>
            <span className="text-[#C5A880] block">No Hidden Since 1986</span>
          </h1>
          <p className="text-white/60 text-[14px] max-w-[720px] mt-5">We keep it affordable for Iganga families. Same maroon uniform since 1986. Pay termly or monthly — no child sent home for fees. Sibling discount up to 15%. P.O Box 580 Bulaga 100m Post Office.</p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-[720px] border-t border-white/10 pt-8">
            <div><div className="font-black text-[28px] text-white">350k+</div><div className="mt-2 text-[10px] font-black text-white/50 uppercase">TUITION TERM<br/>Baby to Top</div></div>
            <div className="border-l border-white/10 pl-6"><div className="font-black text-[28px] text-white">0</div><div className="mt-2 text-[10px] font-black text-white/50 uppercase">HIDDEN FEES<br/>40 Yrs Trust</div></div>
            <div className="border-l border-white/10 pl-6"><div className="font-black text-[28px] text-[#C5A880]">15%</div><div className="mt-2 text-[10px] font-black text-white/50 uppercase">SIBLING OFF<br/>2nd & 3rd Child</div></div>
          </div>
          <div className="mt-8 bg-white rounded-[16px] p-2 flex gap-2 max-w-fit overflow-x-auto">
            <Link href="/admissions" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#FFFCF7] border whitespace-nowrap">Admissions DB NO</Link>
            <Link href="/enrollment" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#FFFCF7] border whitespace-nowrap">Enrollment</Link>
            <Link href="/fees" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#7A0F14] text-white whitespace-nowrap">Fees DB NO</Link>
            <Link href="/uniform" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#FFFCF7] border whitespace-nowrap">Uniform DB NO</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-8 grid lg:grid-cols-[1.1fr_0.6fr] gap-6">
        <div className="space-y-6">
          <div className="bg-white rounded-[1.5rem] border p-2 flex gap-2">
            {Object.keys(FEES).map(c=>(
              <button key={c} onClick={()=>setCls(c)} className={`flex-1 py-3 rounded-full font-black text-sm ${cls===c?'bg-[#7A0F14] text-white':'bg-[#FFFCF7] text-gray-500'}`}>{c}</button>
            ))}
          </div>

          <div className="bg-white rounded-[2rem] border overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center">
                <h2 className="font-black text-xl">{cls} — Term 1 2026</h2>
                <span className="text-[11px] bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">INTAKE OPEN • 23 SLOTS</span>
              </div>

              <div className="mt-6 divide-y">
                <div className="flex justify-between py-4"><div><div className="font-bold text-sm">Tuition Fee (per term) <span className="text-red-500">*</span></div><div className="text-xs text-gray-400">Learning, books, play, P1 prep</div></div><div className="font-black text-sm">{data.term.toLocaleString()} UGX</div></div>
                <div className="flex justify-between py-4"><div><div className="font-bold text-sm">Registration (one-time) <span className="text-red-500">*</span></div><div className="text-xs text-gray-400">New students only, paid once</div></div><div className="font-black text-sm">{data.registration.toLocaleString()} UGX</div></div>
                <div className="flex justify-between py-4"><div><div className="font-bold text-sm">Uniform Full Set <span className="text-red-500">*</span></div><div className="text-xs text-gray-400">Reddish maroon since 1986 - 2 shirts, check</div></div><div className="font-black text-sm">{data.uniform.toLocaleString()} UGX</div></div>
                <div className="flex justify-between py-4"><div><div className="font-bold text-sm flex gap-2">Lunch & Porridge <label className="relative inline-flex items-center cursor-pointer ml-2"><input type="checkbox" checked={needMeals} onChange={e=>setNeedMeals(e.target.checked)} className="sr-only peer"/><div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-[#7A0F14] relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition"></div></label></div><div className="text-xs text-gray-400">Hot porridge 10am + lunch 12:30 - Recommended</div></div><div className={`font-black text-sm ${!needMeals?'text-gray-300 line-through':''}`}>{data.meals.toLocaleString()} UGX</div></div>
                {/* ONLY SELF DROP - NO VAN */}
                <div className="flex justify-between py-4 bg-[#FFFCF7] px-4 rounded-xl mt-2"><div><div className="font-bold text-sm text-[#7A0F14]">Transport: No - Self Drop Only</div><div className="text-xs text-gray-400">100m from Bulaga Post Office, Iganga - 7am-5pm drop - No school van</div></div><div className="font-black text-sm text-gray-400">0 UGX</div></div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-[#FFFCF7] rounded-2xl p-5">
                  <div className="text-[11px] font-black tracking-widest opacity-50">SIBLINGS?</div>
                  <div className="mt-2 flex gap-2">{[1,2,3].map(n=><button key={n} onClick={()=>setSiblings(n)} className={`px-4 py-2 rounded-full text-sm font-bold border ${siblings===n?'bg-black text-white':'bg-white'}`}>{n} child {n>1 && `• -${n===2?10:15}%`}</button>)}</div>
                </div>
                <div className="bg-[#7A0F14] rounded-2xl p-5 text-white flex justify-between items-center">
                  <div><div className="text-[11px] opacity-60 font-bold">TOTAL FIRST TERM</div><div className="text-3xl font-black">{total.toLocaleString()} UGX</div><div className="text-xs opacity-80">≈ {monthly.toLocaleString()} / month</div></div>
                  <Link href="/enrollment" className="bg-white text-[#7A0F14] px-6 py-3 rounded-full font-black text-sm">Enroll →</Link>
                </div>
              </div>
            </div>
            <div className="bg-black text-white p-6 flex flex-wrap gap-6 text-xs">
              <span>🏦 Bank: Centenary - Buttvilla - 3100000000</span>
              <span>📱 MoMo: 0700 000 000</span>
              <span>📍 Self Drop Only: P.O Box 580 Bulaga</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-[1.5rem] border p-6 sticky top-6">
            <div className="font-black text-lg">Fee Calculator • Live</div>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Class</span><span className="font-bold">{cls}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Meals</span><span className="font-bold">{needMeals?'Yes':'No'}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Transport</span><span className="font-bold">No - Self Drop</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Siblings</span><span className="font-bold">{siblings} {discount>0 && `(-${discount*100}%)`}</span></div>
              <div className="h-px bg-gray-100 my-3"/>
              <div className="flex justify-between text-lg"><span className="font-black">Pay Now</span><span className="font-black text-[#7A0F14]">{total.toLocaleString()} UGX</span></div>
            </div>
            <Link href="/enrollment" className="block text-center w-full mt-6 py-3.5 bg-[#7A0F14] text-white rounded-full font-black text-sm">Proceed to Enrollment →</Link>
            <div className="mt-4 text-[10px] text-gray-400 text-center">Structural only - DB later - Self Drop Only</div>
          </div>
        </div>
      </div>
    </div>
  )
}