"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabase";

export default function EnrollmentPage(){
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    parent_name:"", phone:"", email:"", relation:"Mother",
    child_name:"", child_age:"", dob:"", gender:"Boy",
    class_interest:"Baby Class", prev_school:"",
    message:"", transport:"No", health_info:""
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async () => {
    if(!form.parent_name ||!form.phone ||!form.child_name) return alert("Parent Name, Phone, Child Name are required");
    setLoading(true);
    const { error } = await supabase.from('admission_inquiries').insert([{
      parent_name: `${form.parent_name} (${form.relation})`,
      phone: form.phone,
      child_name: form.child_name,
      child_age: form.child_age? Number(form.child_age): null,
      class_interest: form.class_interest,
      message: `DOB:${form.dob} Gender:${form.gender} PrevSchool:${form.prev_school} Transport:${form.transport} Health:${form.health_info} Email:${form.email} Note:${form.message}`,
      status: 'enrollment'
    }]);
    setLoading(false);
    if(error) alert(error.message);
    else setDone(true);
  }

  if(done) return (
    <div className="bg-[#FFFCF7] min-h-screen"><Header/>
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full grid place-items-center text-4xl mx-auto">✓</div>
        <h1 className="text-4xl font-black text-[#7A0F14] mt-6">Enrollment Received!</h1>
        <p className="text-gray-500 mt-3">We received enrollment for <b>{form.child_name}</b> into {form.class_interest}. Our admissions team will WhatsApp you on {form.phone} within 24hrs with fees & requirements.</p>
        <div className="bg-white border rounded-2xl p-6 mt-8 text-left text-sm">
          <p><b>Next Steps:</b></p>
          <p className="mt-2">1. Visit school with birth certificate copy</p>
          <p>2. Pay registration fee</p>
          <p>3. Collect uniform (reddish maroon)</p>
        </div>
        <button onClick={()=>{setDone(false); setStep(1)}} className="mt-8 px-8 py-3 bg-black text-white rounded-full font-bold">Enroll Another Child</button>
      </div><Footer/>
    </div>
  )

  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>

      <div className="max-w-7xl mx-auto px-6 pt-6">
        {/* HEADER */}
        <div className="bg-[#7A0F14] rounded-[2rem] p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="inline-flex bg-white/15 px-4 py-1 rounded-full text-[11px] font-bold tracking-widest">ADMISSIONS • 2026 INTAKE OPEN</p>
              <h1 className="text-4xl md:text-5xl font-black mt-3 leading-none">Enrollment</h1>
              <p className="text-white/70 mt-3 text-sm max-w-xl">Join 40 years of heritage. Online form below — takes 2 mins. We will call you.</p>
            </div>
            <div className="flex gap-2">
              {[1,2,3].map(n=>(
                <div key={n} className={`w-10 h-10 rounded-full grid place-items-center font-black text-sm ${step===n?'bg-white text-[#7A0F14]':'bg-white/20 text-white/60'}`}>{n}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        {/* FORM */}
        <div className="md:col-span-2 bg-white rounded-[2rem] border p-8">
          {step===1 && (
            <div>
              <h2 className="font-black text-xl">Parent / Guardian Details</h2>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <input value={form.parent_name} onChange={e=>setForm({...form,parent_name:e.target.value})} placeholder="Full Name *" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
                <select value={form.relation} onChange={e=>setForm({...form,relation:e.target.value})} className="p-4 rounded-xl border bg-[#FFFCF7] text-sm font-bold">
                  <option>Mother</option><option>Father</option><option>Guardian</option>
                </select>
                <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="WhatsApp Number *" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
                <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email (optional)" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
              </div>
              <button onClick={()=>setStep(2)} className="w-full mt-6 py-4 bg-black text-white rounded-full font-bold">Next: Child Details →</button>
            </div>
          )}

          {step===2 && (
            <div>
              <h2 className="font-black text-xl">Child Details</h2>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <input value={form.child_name} onChange={e=>setForm({...form,child_name:e.target.value})} placeholder="Child Full Name *" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm md:col-span-2"/>
                <input value={form.child_age} onChange={e=>setForm({...form,child_age:e.target.value})} type="number" placeholder="Age (e.g 4)" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
                <input value={form.dob} onChange={e=>setForm({...form,dob:e.target.value})} type="date" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
                <select value={form.gender} onChange={e=>setForm({...form,gender:e.target.value})} className="p-4 rounded-xl border bg-[#FFFCF7] text-sm"><option>Boy</option><option>Girl</option></select>
                <select value={form.class_interest} onChange={e=>setForm({...form,class_interest:e.target.value})} className="p-4 rounded-xl border bg-[#FFFCF7] text-sm font-bold"><option>Baby Class</option><option>Middle Class</option><option>Top Class</option><option>Daycare</option></select>
                <input value={form.prev_school} onChange={e=>setForm({...form,prev_school:e.target.value})} placeholder="Previous School (if any)" className="p-4 rounded-xl border bg-[#FFFCF7] text-sm md:col-span-2"/>
              </div>
              <div className="flex gap-3 mt-6"><button onClick={()=>setStep(1)} className="flex-1 py-4 border rounded-full font-bold">Back</button><button onClick={()=>setStep(3)} className="flex-1 py-4 bg-black text-white rounded-full font-bold">Next →</button></div>
            </div>
          )}

          {step===3 && (
            <div>
              <h2 className="font-black text-xl">Final Details</h2>
              <div className="space-y-4 mt-6">
                <select value={form.transport} onChange={e=>setForm({...form,transport:e.target.value})} className="w-full p-4 rounded-xl border bg-[#FFFCF7] text-sm font-bold"><option value="No">Transport: No (Self drop)</option><option value="Yes">Transport: Yes (Need School Van)</option></select>
                <input value={form.health_info} onChange={e=>setForm({...form,health_info:e.target.value})} placeholder="Any health allergy? (optional)" className="w-full p-4 rounded-xl border bg-[#FFFCF7] text-sm"/>
                <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Any message to admissions team?" className="w-full p-4 rounded-xl border bg-[#FFFCF7] text-sm h-24"></textarea>
              </div>
              <div className="flex gap-3 mt-6"><button onClick={()=>setStep(2)} className="flex-1 py-4 border rounded-full font-bold">Back</button><button onClick={submit} disabled={loading} className="flex-1 py-4 bg-[#7A0F14] text-white rounded-full font-black">{loading?"Submitting...":"Submit Enrollment ✓"}</button></div>
            </div>
          )}
        </div>

        {/* RIGHT INFO */}
        <div className="space-y-4">
          <div className="bg-white rounded-[1.5rem] border p-6"><p className="font-black">What you need to bring to school</p><ul className="text-sm text-gray-500 mt-3 space-y-2 list-disc pl-4"><li>Copy of birth certificate</li><li>1 passport photo (child)</li><li>Parent ID copy</li><li>Registration fee: UGX 30,000</li></ul></div>
          <div className="bg-[#7A0F14] rounded-[1.5rem] p-6 text-white"><p className="font-black">Need help?</p><p className="text-sm text-white/70 mt-2">WhatsApp us and we will fill form for you</p><a href="https://wa.me/256700000000" className="inline-block mt-4 bg-white text-[#7A0F14] px-5 py-2 rounded-full font-bold text-sm">WhatsApp Admissions</a></div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}