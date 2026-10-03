"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const FEES = {
  "Baby Class": { term: 350000, registration: 30000, uniform: 120000, meals: 150000 },
  "Middle Class": { term: 400000, registration: 30000, uniform: 120000, meals: 150000 },
  "Top Class": { term: 450000, registration: 30000, uniform: 120000, meals: 150000 },
};

export default function FeesPage(){
  const [cls, setCls] = useState("Top Class");
  const [needTransport, setNeedTransport] = useState(false);
  const [needMeals, setNeedMeals] = useState(true);
  const data = FEES[cls];
  const total = data.term + data.registration + data.uniform + (needMeals? data.meals:0) + (needTransport? 180000:0);
  const monthly = Math.round(total/3);

  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="bg-[#7A0F14] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex bg-white/15 px-4 py-1 rounded-full text-[11px] font-bold tracking-widest">💰 TRANSPARENT • NO HIDDEN FEES • 40 YEARS TRUST</div>
            <h1 className="text-4xl md:text-6xl font-black mt-4 leading-none">Fees Structure</h1>
            <p className="text-white/70 mt-3 max-w-2xl text-sm md:text-base">We keep it affordable for Iganga families. Same maroon uniform since 1986. Pay termly or monthly — no child sent home.</p>
            <div className="mt-6 flex gap-2 text-xs"><span className="bg-white text-[#7A0F14] px-3 py-1 rounded-full font-bold">M-PESA & Bank Accepted</span><span className="bg-white/20 px-3 py-1 rounded-full">Siblings 10% Off</span></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[1.5rem] border p-2 flex gap-2">
            {Object.keys(FEES).map(c=>(
              <button key={c} onClick={()=>setCls(c)} className={`flex-1 py-3 rounded-full font-black text-sm transition ${cls===c?'bg-[#7A0F14] text-white shadow':'bg-[#FFFCF7] text-gray-500'}`}>{c}</button>
            ))}
          </div>

          <div className="bg-white rounded-[2rem] border overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center">
                <h2 className="font-black text-xl">{cls} — Term 1 2026</h2>
                <span className="text-[11px] bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">INTAKE OPEN</span>
              </div>

              <div className="mt-6 divide-y">
                {[
                  {label:"Tuition Fee (per term)", value:data.term, desc:"Learning, books, play materials"},
                  {label:"Registration (one-time)", value:data.registration, desc:"New students only, paid once"},
                  {label:"Uniform Full Set", value:data.uniform, desc:"Reddish maroon - 2 shirts, shorts/dress, sweater"},
                  {label:"Lunch & Porridge", value:data.meals, desc:"Optional but recommended", toggle: needMeals, set: setNeedMeals},
                  {label:"School Van (Iganga town)", value:180000, desc:"Optional door-to-door", toggle: needTransport, set: setNeedTransport},
                ].map((row,i)=>(
                  <div key={i} className="flex justify-between py-4 gap-4">
                    <div>
                      <div className="font-bold text-sm flex items-center gap-2">
                        <span>{row.label}</span>
                        {row.toggle!==undefined && (
                          <label className="relative inline-flex items-center cursor-pointer ml-2">
                            <input type="checkbox" checked={row.toggle} onChange={e=>row.set(e.target.checked)} className="sr-only peer"/>
                            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-[#7A0F14] relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition"></div>
                          </label>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{row.desc}</div>
                    </div>
                    <div className={`font-black text-sm shrink-0 ${row.toggle===false?'text-gray-300 line-through':''}`}>{row.value.toLocaleString()} UGX</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#FFFCF7] rounded-2xl p-5 flex justify-between items-center">
                <div><div className="text-xs text-gray-400 font-bold tracking-widest">TOTAL FIRST TERM</div><div className="text-3xl font-black text-[#7A0F14]">{total.toLocaleString()} UGX</div><div className="text-xs text-gray-500">≈ {monthly.toLocaleString()} UGX / month if paid monthly</div></div>
                <Link href="/enrollment" className="bg-[#7A0F14] text-white px-6 py-3 rounded-full font-bold text-sm">Enroll Now →</Link>
              </div>
            </div>

            <div className="bg-black text-white p-6 flex flex-wrap gap-6 text-xs">
              <span>🏦 <b>Bank:</b> Centenary Bank - Buttvilla Kindergarten - 3100000000</span>
              <span>📱 <b>MTN MoMo:</b> 0700 000 000</span>
              <span>📱 <b>Airtel Money:</b> 0700 000 001</span>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border p-8">
            <h3 className="font-black">Common Questions</h3>
            <div className="mt-4 space-y-3 text-sm">
              <details className="bg-[#FFFCF7] rounded-xl p-4"><summary className="font-bold cursor-pointer">Is uniform included every term?</summary><div className="text-gray-500 mt-2">No, only first term. Replacement if child outgrows.</div></details>
              <details className="bg-[#FFFCF7] rounded-xl p-4"><summary className="font-bold cursor-pointer">Can I pay in installments?</summary><div className="text-gray-500 mt-2">Yes! Pay monthly via MoMo. No extra charge. We never send children home for fees.</div></details>
              <details className="bg-[#FFFCF7] rounded-xl p-4"><summary className="font-bold cursor-pointer">Sibling discount?</summary><div className="text-gray-500 mt-2">10% off for 2nd child, 15% off for 3rd child.</div></details>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-[1.5rem] border p-6 sticky top-6">
            <div className="font-black">Fee Calculator</div>
            <div className="text-xs text-gray-400 mt-1">Select options above — total updates live.</div>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Class</span><span className="font-bold">{cls}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Meals</span><span className="font-bold">{needMeals?'Yes':'No'}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Transport</span><span className="font-bold">{needTransport?'Yes':'No'}</span></div>
              <div className="h-px bg-gray-100 my-3"/>
              <div className="flex justify-between text-lg"><span className="font-black">Pay Now</span><span className="font-black text-[#7A0F14]">{total.toLocaleString()} UGX</span></div>
            </div>
            <Link href="/enrollment" className="block text-center w-full mt-6 py-3 bg-black text-white rounded-full font-bold text-sm">Proceed to Enrollment</Link>
            <a href={`https://wa.me/256700000000?text=Hello%20Buttvilla%2C%20I%20want%20fees%20details%20for%20${cls}`} className="block text-center w-full mt-2 py-3 border rounded-full font-bold text-sm">WhatsApp Bursar</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}