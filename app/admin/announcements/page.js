"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function AdminAnn(){
  const [anns, setAnns] = useState([]);
  const [form, setForm] = useState({title:"🎉 40 Years Anniversary!", message:"Grand Celebration on 14th Dec 2026 at Buttvilla Kindergarten Iganga - All Alumni Invited!", link:"/events", bg_color:"#7A0F14", is_active:true});

  const load = ()=> supabase.from('announcements').select('*').order('created_at',{ascending:false}).then(({data})=>setAnns(data||[]));
  useEffect(()=>{load()},[]);

  const save = async ()=>{
    await supabase.from('announcements').insert([form]);
    setForm({title:"", message:"", link:"", bg_color:"#7A0F14", is_active:true});
    load();
  }

  const toggle = async (id, active)=> { await supabase.from('announcements').update({is_active:!active}).eq('id',id); load(); }
  const del = async (id)=> { await supabase.from('announcements').delete().eq('id',id); load(); }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-black">Homepage Banner</h1>
      <div className="bg-white border rounded-2xl p-6 mt-6 space-y-3">
        <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="Title e.g 40 Years Anniversary!" className="w-full p-3 border rounded-xl text-sm"/>
        <input value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message e.g Grand Celebration on 14th Dec..." className="w-full p-3 border rounded-xl text-sm"/>
        <div className="grid grid-cols-2 gap-3">
          <input value={form.link} onChange={e=>setForm({...form,link:e.target.value})} placeholder="Link e.g /events" className="p-3 border rounded-xl text-sm"/>
          <input value={form.bg_color} onChange={e=>setForm({...form,bg_color:e.target.value})} type="color" className="p-1 border rounded-xl h-12 w-full"/>
        </div>
        <button onClick={save} className="w-full py-3 bg-[#7A0F14] text-white rounded-full font-bold">Publish Banner</button>
      </div>

      <div className="mt-8 space-y-3">
        {anns.map(a=>(
          <div key={a.id} className="bg-white border rounded-xl p-4 flex justify-between items-center">
            <div><p className="font-bold text-sm">{a.title}</p><p className="text-xs text-gray-500">{a.message}</p></div>
            <div className="flex gap-2"><button onClick={()=>toggle(a.id,a.is_active)} className={`px-3 py-1 rounded-full text-xs font-bold ${a.is_active?'bg-green-600 text-white':'bg-gray-200'}`}>{a.is_active?'Active':'Off'}</button><button onClick={()=>del(a.id)} className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs">Del</button></div>
          </div>
        ))}
      </div>
    </div>
  )
}