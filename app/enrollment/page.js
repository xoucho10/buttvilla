"use client";
import { useState } from "react";
import Link from "next/link";

export default function EnrollmentPage(){
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    parent_name:"", phone:"", email:"", relation:"Mother",
    child_name:"", child_age:"", dob:"", gender:"Boy",
    class_interest:"Baby Class", prev_school:"",
    message:"", health_info:""
  });
  const [done, setDone] = useState(false);

  const submit = () => {
    if(!form.parent_name ||!form.phone ||!form.child_name) return alert("Parent Name, Phone, Child Name required");
    setDone(true);
  }

  if(done) return (
    <div className="min-h-[70vh]">
      <div className="bg-[#7A0F14]">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="w-24 h-24 bg-[#C5A880] text-[#7A0F14] rounded-full grid place-items-center text-4xl mx-auto font-black">✓</div>
          <h1 className="text-4xl font-black text-white mt-6">Enrollment Received!</h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm">For <b className="text-white">{form.child_name}</b> - {form.class_interest}. P.O Box 580 Bulaga 100m Post Office.</p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-6 py-10 text-center">
        <button onClick={()=>{setDone(false); setStep(1)}} className="px-8 py-3 bg-black text-white rounded-full font-bold">Enroll Another</button>
      </div>
    </div>
  )

  return (
    <div className="bg-[#FFFCF7]">
      {/* HERO - SAME AS YOUR SCREENSHOT */}
      <div className="w-full bg-[#7A0F14]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-white/10 border border-white/20 text-white/80 text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full">EST 1986 • 40 YEARS • P.O BOX 580</span>
            <span className="bg-[#C5A880] text-[#7A0F14] text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full">STRUCTURAL ONLY - DB LATER</span>
          </div>
          <h1 className="font-black leading-[0.9] tracking-tight text-[36px] md:text-[56px] max-w-4xl">
            <span className="text-white block">Give Your Child</span>
            <span className="text-[#C5A880] block">40 Years Legacy</span>
          </h1>
          <p className="text-white/60 text-[14px] max-w-[720px] mt-5">Same location 100m from Bulaga Post Office. Same auntie 3 years. Reddish maroon uniform since 1986. Baby 2yrs to Top 6yrs.</p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-[720px] border-t border-white/10 pt-8">
            <div><div className="font-black text-[28px] text-white">4</div><div className="mt-2 text-[10px] font-black text-white/50 uppercase">CLASSROOMS<br/>Baby-Top-Daycare</div></div>
            <div className="border-l border-white/10 pl-6"><div className="font-black text-[28px] text-white">3 Yrs</div><div className="mt-2 text-[10px] font-black text-white/50 uppercase">SAME AUNTIE</div></div>
            <div className="border-l border-white/10 pl-6"><div className="font-black text-[28px] text-[#C5A880]">500+</div><div className="mt-2 text-[10px] font-black text-white/50 uppercase">ALUMNI</div></div>
          </div>
          <div className="mt-8 bg-white rounded-[16px] p-2 flex gap-2 max-w-fit">
            <Link href="/admissions" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#FFFCF7] border">Admissions DB NO</Link>
            <Link href="/enrollment" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#7A0F14] text-white">Enrollment</Link>
            <Link href="/fees" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#FFFCF7] border">Fees</Link>
            <Link href="/uniform" className="px-5 py-2 rounded-full text-[12px] font-black bg-[#FFFCF7] border">Uniform</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[1.7fr_0.9fr] gap-8">
        <div className="bg-white rounded-[2rem] border p-8">
          <div className="flex justify-between items-center">
            <h2 className="font-black text-xl text-[#7A0F14]">Step {step}/3</h2>
            <div className="flex gap-2">{[1,2,3].map(n=><div key={n} className={`w-9 h-9 rounded-full grid place-items-center text-xs font-black ${step>=n?'bg-[#7A0F14] text-white':'bg-black/10'}`}>{n}</div>)}</div>
          </div>

          {step===1 && (
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <input value={form.parent_name} onChange={e=>setForm({...form,parent_name:e.target.value})} placeholder="Parent Full Name *" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
              <select value={form.relation} onChange={e=>setForm({...form,relation:e.target.value})} className="p-4 rounded-xl border bg-[#FFFCF7] text-sm font-bold"><option>Mother</option><option>Father</option><option>Guardian</option></select>
              <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="WhatsApp Number *" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email optional" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
              <button onClick={()=>setStep(2)} className="md:col-span-2 w-full mt-2 py-4 bg-black text-white rounded-full font-black">Next: Child Details →</button>
            </div>
          )}

          {step===2 && (
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <input value={form.child_name} onChange={e=>setForm({...form,child_name:e.target.value})} placeholder="Child Full Name *" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm md:col-span-2 font-bold"/>
              <input value={form.child_age} onChange={e=>setForm({...form,child_age:e.target.value})} type="number" placeholder="Age" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
              <input value={form.dob} onChange={e=>setForm({...form,dob:e.target.value})} type="date" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
              <select value={form.gender} onChange={e=>setForm({...form,gender:e.target.value})} className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"><option>Boy</option><option>Girl</option></select>
              <select value={form.class_interest} onChange={e=>setForm({...form,class_interest:e.target.value})} className="p-4 rounded-xl border bg-[#FFFCF7] text-sm font-black text-[#7A0F14]"><option>Baby Class</option><option>Middle Class</option><option>Top Class</option><option>Daycare</option></select>
              <div className="flex gap-3 md:col-span-2 mt-2"><button onClick={()=>setStep(1)} className="flex-1 py-4 border rounded-full font-bold">Back</button><button onClick={()=>setStep(3)} className="flex-1 py-4 bg-black text-white rounded-full font-bold">Next →</button></div>
            </div>
          )}

          {step===3 && (
            <div className="mt-8 space-y-4">
              {/* ONLY SELF DROP - NO TRANSPORT YES */}
              <div className="w-full p-4 rounded-xl border-2 border-[#7A0F14]/20 bg-[#FFFCF7] text-sm font-bold text-[#7A0F14]">Transport: No - Self Drop (100m from Bulaga Post Office)</div>
              <input value={form.health_info} onChange={e=>setForm({...form,health_info:e.target.value})} placeholder="Health / Allergy (optional)" className="w-full p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" className="w-full p-4 rounded-xl border bg-[#FFFCF7] text-sm h-28"></textarea>
              <div className="flex gap-3"><button onClick={()=>setStep(2)} className="flex-1 py-4 border rounded-full font-bold">Back</button><button onClick={submit} className="flex-1 py-4 bg-[#7A0F14] text-white rounded-full font-black">Submit Enrollment ✓</button></div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-[1.5rem] border p-6"><p className="font-black text-[#7A0F14]">Bring to School</p><ul className="text-sm text-gray-500 mt-3 space-y-2 list-disc pl-4"><li>Birth certificate copy</li><li>1 passport photo</li><li>Parent ID</li><li>UGX 30,000 registration</li><li>Transport: Self Drop Only - 100m Bulaga</li></ul></div>
          <div className="bg-[#7A0F14] rounded-[1.5rem] p-6 text-white"><p className="font-black">Need help?</p><a href="https://wa.me/256700000000" className="inline-block mt-4 bg-white text-[#7A0F14] px-5 py-2 rounded-full font-bold text-sm">WhatsApp</a></div>
        </div>
      </div>
    </div>
  )
}