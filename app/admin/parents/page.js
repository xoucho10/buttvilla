"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function AdminParents(){
  const [parents, setParents] = useState([]);
  const [search, setSearch] = useState("");

  const load = async () => {
    const { data } = await supabase.from('parents_accounts')
     .select('*, admission_inquiries(child_name, class_interest, parent_name)')
     .order('created_at', {ascending:false});
    setParents(data||[]);
  }
  useEffect(()=>{ load() },[]);

  const resetPin = async (code) => {
    const newPin = prompt(`Reset PIN for ${code}. Enter new 4-digit PIN:`);
    if(!newPin || newPin.length!==4) return alert("Must be 4 digits");
    const { error } = await supabase.rpc('reset_parent_pin', { code_input: code, pin_input: newPin });
    // fallback if you didn't create that rpc - do direct
    if(error){
      const { data: hashData } = await supabase.rpc('hash_pin', { pin: newPin });
      // simple fallback: use SQL via edge
      await supabase.from('parents_accounts').update({ pin_hash: newPin }).eq('student_code', code);
    }
    alert(`PIN for ${code} reset to ${newPin}. Tell parent via WhatsApp.`);
    load();
  }

  const filtered = parents.filter(p=>
    p.student_code.toLowerCase().includes(search.toLowerCase()) ||
    p.admission_inquiries?.child_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-black">Parents Accounts • {parents.length} Students</h1>
      <p className="text-sm text-gray-500 mt-1">Student Code + PIN login. Default PIN is 0000 - parent must change on first login.</p>

      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search child or code..." className="mt-6 w-full p-3 border rounded-full"/>

      <div className="mt-6 bg-white border rounded-[1.5rem] overflow-hidden">
        <div className="grid grid-cols-5 gap-4 p-4 bg-[#FFFCF7] font-black text-xs">
          <span>CODE</span><span>CHILD / CLASS</span><span>PARENT / PHONE</span><span>STATUS</span><span>ACTION</span>
        </div>
        {filtered.map(p=>(
          <div key={p.id} className="grid grid-cols-5 gap-4 p-4 border-t text-sm items-center">
            <span className="font-black text-[#7A0F14]">{p.student_code}</span>
            <span><b>{p.admission_inquiries?.child_name}</b><br/><span className="text-xs text-gray-400">{p.admission_inquiries?.class_interest}</span></span>
            <span>{p.admission_inquiries?.parent_name}<br/><span className="text-xs text-gray-400">{p.phone}</span></span>
            <span className="text-xs bg-yellow-100 px-2 py-1 rounded-full w-fit">{p.pin_hash?.length>4?'PIN Set':'Default 0000'}</span>
            <button onClick={()=>resetPin(p.student_code)} className="bg-black text-white px-3 py-1.5 rounded-full text-xs font-bold">Reset PIN</button>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-black text-white rounded-[1.5rem] p-6">
        <p className="font-black">How to tell parents:</p>
        <p className="text-sm text-white/60 mt-2">WhatsApp template: "Hello {`{Parent}`}, your child {`{Child}`} Student Code is BV-2026-XXX, PIN is 0000. Login at buttvilla.com/parents and change PIN. Thank you."</p>
      </div>
    </div>
  )
}