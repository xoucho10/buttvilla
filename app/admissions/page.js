"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function Admissions(){
  const [form, setForm] = useState({
    parent_name:"", phone:"", email:"", relationship:"Mother",
    child_name:"", child_age:"", gender:"Female", village:"",
    class_interest:"Top Class", previous_school:"", message:"", how_heard:"WhatsApp"
  });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refId, setRefId] = useState("");

  const submit = async () => {
    if(!form.parent_name ||!form.phone ||!form.child_name) return alert("Parent Name, Phone, Child Name required *");
    setLoading(true);
    const id = "BTV-" + Date.now().toString().slice(-6);
    const { error } = await supabase.from('admission_inquiries').insert([{
      parent_name: form.parent_name,
      phone: form.phone,
      email: form.email || null,
      relationship: form.relationship,
      child_name: form.child_name,
      child_age: form.child_age? Number(form.child_age) : null,
      gender: form.gender,
      village: form.village,
      class_interest: form.class_interest,
      previous_school: form.previous_school,
      how_heard: form.how_heard,
      message: form.message,
      status: 'new',
      reference: id
    }]);
    setLoading(false);
    if(error) alert(error.message);
    else { setRefId(id); setDone(true); }
  }

  return (
    <div className="bg-[#FFFCF7] min-h-screen text-[#2a0a0d]">
      <div className="bg-[#7A0F14] text-white text-center py-2.5 text-[11px] font-black tracking-widest border-b border-[#C5A880]/30">
        🎓 2026 INTAKE OPEN • 23 SPOTS LEFT • SAME PLACE 40 YRS • P.O BOX 580 BULAGA • 100M POST OFFICE • CALL +256 700 000 000
      </div>

      <section className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="bg-white rounded-[20px] border shadow-sm p-3 flex gap-2 overflow-x-auto mb-6">
          <Link href="/admissions" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 text-[12px] font-black bg-[#7A0F14] text-white">Admissions • DB YES</Link>
          <Link href="/day" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#FFFCF7]">A Day 7am-5pm</Link>
          <Link href="/fees" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#FFFCF7]">Fees DB YES</Link>
          <Link href="/facilities" className="whitespace-nowrap rounded-[12px] px-5 py-2.5 border text-[12px] font-black bg-[#FFFCF7]">Facilities</Link>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">

          <div>
            <div className="bg-[#7A0F14] rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden border-b-[6px] border-[#C5A880]">
              <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#C5A880]/20 rounded-full blur-[60px]"></div>
              <div className="relative z-10">
                <p className="inline-flex bg-white/15 border border-white/20 px-4 py-1.5 rounded-full text-[11px] font-black tracking-widest">🎓 ADMISSIONS 2026 • 40TH YEAR • EST. 1986 • P.O BOX 580</p>
                <h1 className="text-4xl md:text-[44px] font-black mt-4 leading-[0.9]">Give Your Child<br/><span className="text-[#C5A880]">40 Years of Same Place Trust</span></h1>
                <p className="mt-4 text-white/70 text-[13px] leading-6 max-w-lg">Mud Room 1986 → QR Gate 2026. Same gate 100m from Bulaga Post Office. Parents who studied here now bring kids. Same auntie 3 years, WhatsApp daily photo, porridge 11am same taste. Alumni on Top Class wall.</p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/10"><div className="font-black text-xl">2-6</div><div className="text-[10px] opacity-70 font-black tracking-widest">YEARS EGG TO ROOSTER</div></div>
                  <div className="bg-white/10 rounded-2xl p-4 text-center border border-white/10"><div className="font-black text-xl">1,200+</div><div className="text-[10px] opacity-70 font-black tracking-widest">ALUMNI 1986-NOW</div></div>
                  <div className="bg-[#C5A880] rounded-2xl p-4 text-center text-[#7A0F14]"><div className="font-black text-xl">23</div><div className="text-[10px] font-black tracking-widest">SPOTS LEFT DB YES</div></div>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    { e:"🐣", t:"Baby • Middle • Top • Daycare", d:"Age 1.5-6, Egg Chick Rooster, Same auntie 3 yrs no crying" },
                    { e:"🔐", t:"QR Gate + WhatsApp Daily", d:"Only QR holder picks 5pm. Stranger no pick. Photo report daily" },
                    { e:"📍", t:"P.O Box 580 Bulaga - 100m Post Office", d:"Same place 40 yrs. Never moved. Trust built by staying" },
                    { e:"🍲", t:"Porridge 11am + Toilets Cleaned 3x", d:"Kitchen cooked, cups per child, hand wash, daycare till 5pm" },
                  ].map(x=>(
                    <div key={x.t} className="flex gap-3 bg-white/10 border border-white/10 rounded-2xl p-3">
                      <div className="w-10 h-10 bg-white rounded-full grid place-items-center text-[18px] shrink-0">{x.e}</div>
                      <div><p className="font-black text-[12px]">{x.t}</p><p className="text-[11px] text-white/60 leading-4 mt-1">{x.d}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-[2rem] border p-6">
              <div className="text-[11px] font-black tracking-widest text-[#7A0F14]">HOW ADMISSION WORKS - 3 STEPS</div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                <div className="bg-[#FFFCF7] border rounded-2xl p-4"><div className="w-8 h-8 bg-[#7A0F14] text-white rounded-full grid place-items-center font-black text-sm">1</div><div className="font-black text-[13px] mt-2">Apply Online</div><div className="text-[11px] text-gray-500 mt-1 leading-4">Fill form → Ref ID BTV-xxx → Saved to Supabase admission_inquiries DB YES</div></div>
                <div className="bg-[#FFFCF7] border rounded-2xl p-4"><div className="w-8 h-8 bg-black text-white rounded-full grid place-items-center font-black text-sm">2</div><div className="font-black text-[13px] mt-2">Visit Gate</div><div className="text-[11px] text-gray-500 mt-1 leading-4">P.O Box 580 Bulaga 100m Post Office. Interview child + tour kitchen playground</div></div>
                <div className="bg-[#FFFCF7] border rounded-2xl p-4"><div className="w-8 h-8 bg-[#C5A880] text-white rounded-full grid place-items-center font-black text-sm">3</div><div className="font-black text-[13px] mt-2">Admit + QR</div><div className="text-[11px] text-gray-500 mt-1 leading-4">Pay fees DB YES, uniform reddish maroon, get QR card for pick</div></div>
              </div>

              <div className="mt-5 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FFFCF7] rounded-xl border">
                  <div className="font-black text-[13px]">📄 Documents Needed on Interview Day</div>
                  <ul className="mt-2 text-[11px] text-gray-600 list-disc ml-4 space-y-1 leading-5">
                    <li>Birth Certificate / Immunization Card</li>
                    <li>1 Passport Photo of Child</li>
                    <li>Parent ID + Previous school report (if any)</li>
                    <li>UGX 20k interview fee</li>
                  </ul>
                </div>
                <div className="p-4 bg-[#7A0F14] text-white rounded-xl border-b-[4px] border-[#C5A880]">
                  <div className="font-black text-[13px]">💰 2026 Fees (Term) - DB YES Admin Edits from fees table</div>
                  <div className="mt-3 text-[11px] space-y-2">
                    <div className="flex justify-between bg-white/10 rounded-lg px-3 py-2"><span>Daycare 1.5-2</span><span className="font-black">UGX 300k</span></div>
                    <div className="flex justify-between bg-white/10 rounded-lg px-3 py-2"><span>Baby Class 2-3 Egg</span><span className="font-black">UGX 350k</span></div>
                    <div className="flex justify-between bg-white/10 rounded-lg px-3 py-2"><span>Middle 4 Chick</span><span className="font-black">UGX 350k</span></div>
                    <div className="flex justify-between bg-[#C5A880] text-[#7A0F14] rounded-lg px-3 py-2"><span>Top 5-6 Rooster P1 Ready</span><span className="font-black">UGX 380k</span></div>
                    <div className="text-[10px] opacity-60 mt-2 leading-4">Includes porridge 11am + daycare till 5pm + WhatsApp. Uniform separate UGX 80k reddish maroon. Admin edits anytime from /admin/fees.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-7 md:p-8 border shadow-[0_20px_40px_rgba(0,0,0,0.06)] h-fit">
            {done? (
              <div className="text-center py-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full grid place-items-center text-3xl mx-auto">✓</div>
                <h2 className="text-2xl font-black mt-4">Inquiry Received!</h2>
                <div className="mt-3 inline-flex bg-black text-white px-4 py-1.5 rounded-full text-xs font-black">REF: {refId}</div>
                <p className="text-[13px] text-gray-600 mt-4 leading-6">We saved details for <b>{form.child_name}</b> ({form.class_interest}) to <b>admission_inquiries</b> table DB YES. Our auntie will call/WhatsApp you on <b>{form.phone}</b> within 24 hours. Same place P.O Box 580.</p>
                <div className="mt-6 p-4 bg-[#FFFCF7] rounded-xl text-left text-[12px] border">
                  <div className="font-black">Next: Bring on interview at gate:</div>
                  <div className="mt-2 leading-6">• Birth certificate • 1 photo • UGX 20k • Meet same auntie 3 yrs</div>
                  <div className="mt-3 text-[11px] text-gray-500">📍 100m from Bulaga Post Office - Same spot since Mud Room 1986</div>
                </div>
                <div className="mt-6 flex gap-3 justify-center flex-wrap">
                  <button onClick={()=>{setDone(false); setForm({parent_name:"", phone:"", email:"", relationship:"Mother", child_name:"", child_age:"", gender:"Female", village:"", class_interest:"Top Class", previous_school:"", message:"", how_heard:"WhatsApp"})}} className="px-6 py-3 bg-black text-white rounded-full font-black text-[12px]">New Inquiry</button>
                  <a href={`https://wa.me/256700000000?text=Hello Buttvilla, my ref is ${refId} for ${form.child_name} - ${form.class_interest}`} target="_blank" className="px-6 py-3 bg-[#25D366] text-white rounded-full font-black text-[12px]">WhatsApp Us +256</a>
                </div>
                <div className="mt-4 text-[10px] text-gray-400">DB YES - Saved to Supabase admission_inquiries table - Admin sees in /admin</div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-[22px] font-black leading-tight">Admission Inquiry 2026<br/>40th Year Legacy</h2>
                    <p className="text-[12px] text-gray-400 mt-1">Fill in — we call you in 24hrs — Saved DB YES</p>
                  </div>
                  <span className="bg-[#7A0F14] text-white text-[9px] font-black px-2 py-1 rounded-full">DB YES</span>
                </div>

                <div className="mt-6">
                  <div className="text-[10px] font-black tracking-[0.2em] opacity-40 mb-3">CHILD DETAILS - EGG CHICK ROOSTER</div>
                  <div className="space-y-3">
                    <input value={form.child_name} onChange={e=>setForm({...form, child_name:e.target.value})} placeholder="Child Full Name *" className="w-full p-4 rounded-xl border text-[13px] bg-[#FFFCF7] focus:bg-white outline-none focus:border-[#7A0F14]"/>
                    <div className="grid grid-cols-3 gap-3">
                      <input value={form.child_age} onChange={e=>setForm({...form, child_age:e.target.value})} type="number" placeholder="Age *" className="p-4 rounded-xl border text-[13px] bg-[#FFFCF7] focus:bg-white outline-none"/>
                      <select value={form.gender} onChange={e=>setForm({...form, gender:e.target.value})} className="p-4 rounded-xl border text-[13px] font-black bg-[#FFFCF7]"><option>Female</option><option>Male</option></select>
                      <select value={form.class_interest} onChange={e=>setForm({...form, class_interest:e.target.value})} className="p-4 rounded-xl border text-[13px] font-black bg-[#FFFCF7]"><option>Baby Class</option><option>Middle Class</option><option>Top Class</option><option>Daycare</option></select>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input value={form.village} onChange={e=>setForm({...form, village:e.target.value})} placeholder="Village - Bulaga? etc" className="p-4 rounded-xl border text-[13px] bg-[#FFFCF7] focus:bg-white outline-none"/>
                      <input value={form.previous_school} onChange={e=>setForm({...form, previous_school:e.target.value})} placeholder="Previous School (if any)" className="p-4 rounded-xl border text-[13px] bg-[#FFFCF7] focus:bg-white outline-none"/>
                    </div>
                  </div>

                  <div className="text-[10px] font-black tracking-[0.2em] opacity-40 mt-6 mb-3">PARENT / GUARDIAN - QR HOLDER</div>
                  <div className="space-y-3">
                    <input value={form.parent_name} onChange={e=>setForm({...form, parent_name:e.target.value})} placeholder="Parent / Guardian Name *" className="w-full p-4 rounded-xl border text-[13px] bg-[#FFFCF7] focus:bg-white outline-none focus:border-[#7A0F14]"/>
                    <div className="grid grid-cols-2 gap-3">
                      <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="WhatsApp 0700... *" className="p-4 rounded-xl border text-[13px] bg-[#FFFCF7] focus:bg-white outline-none"/>
                      <select value={form.relationship} onChange={e=>setForm({...form, relationship:e.target.value})} className="p-4 rounded-xl border text-[13px] bg-[#FFFCF7]"><option>Mother</option><option>Father</option><option>Guardian</option></select>
                    </div>
                    <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email (Optional)" className="w-full p-4 rounded-xl border text-[13px] bg-[#FFFCF7] focus:bg-white outline-none"/>
                    <select value={form.how_heard} onChange={e=>setForm({...form, how_heard:e.target.value})} className="w-full p-4 rounded-xl border text-[13px] bg-[#FFFCF7]"><option>WhatsApp</option><option>Friend / Alumni</option><option>Facebook</option><option>Walk-in - P.O Box 580</option><option>Google</option></select>
                    <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Any message? Allergy? Fear? When to visit gate?" className="w-full p-4 rounded-xl border text-[13px] h-24 bg-[#FFFCF7] focus:bg-white outline-none resize-none"></textarea>
                  </div>
                </div>

                <button onClick={submit} disabled={loading} className="w-full mt-6 py-4 bg-[#7A0F14] text-white rounded-full font-black hover:bg-black transition text-[13px] tracking-wide border-b-[4px] border-[#5a0a0f]">{loading? "Saving to DB YES..." : "Submit Inquiry → Get Ref BTV-xxx"}</button>
                <p className="text-[10px] text-gray-400 text-center mt-3 leading-4">🔒 Safe — saved to Supabase admission_inquiries DB YES + WhatsApp alert to school. Ref generated. Same place 40 yrs P.O Box 580 Bulaga.</p>

                <div className="mt-4 bg-black text-white rounded-xl p-3 flex justify-between text-[11px]">
                  <span>DB YES Table: admission_inquiries</span>
                  <Link href="/fees" className="text-[#C5A880] font-black">Fees →</Link>
                </div>
              </>
            )}
          </div>

        </div>
      </section>

      </div>
  )
}
