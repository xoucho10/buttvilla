"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function AdminTeachers(){
  const [form, setForm] = useState({name:"", subject:"", role:"", from_year:1986, to_year:2026, still:true, tribute:"", bio:"", phone:""});
  const [files, setFiles] = useState({then:null, now:null});
  const [uploading, setUp] = useState(false);

  const upload = async (file, bucket) => {
    if(!file) return null;
    const name = `${Date.now()}-${file.name}`;
    await supabase.storage.from(bucket).upload(name, file);
    return supabase.storage.from(bucket).getPublicUrl(name).data.publicUrl;
  }

  const submit = async () => {
    if(!form.name ||!form.subject ||!form.from_year) return alert("Name, Subject, From Year required");
    setUp(true);
    const thenUrl = await upload(files.then, 'teachers-then');
    const nowUrl = await upload(files.now, 'teachers-now');
    const era = form.from_year < 1996? '1986-1995' : form.from_year < 2006? '1996-2005' : form.from_year < 2016? '2006-2015' : '2016-2026';

    const { error } = await supabase.from('teachers').insert([{
      name: form.name, subject: form.subject, role: form.role,
      from_year: Number(form.from_year),
      to_year: form.still? null : Number(form.to_year),
      photo_then_url: thenUrl, photo_now_url: nowUrl,
      tribute: form.tribute, bio: form.bio, phone: form.phone, era
    }]);
    setUp(false);
    if(error) alert(error.message); else alert("Teacher saved!");
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-[#7A0F14]">Add Teacher - 40Yrs Journey</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <label className="border-2 border-dashed p-4 rounded-xl text-center">Then Photo<input type="file" hidden onChange={e=>setFiles({...files, then:e.target.files[0]})}/><p className="text-xs mt-2">{files.then?.name || "Upload Then"}</p></label>
        <label className="border-2 border-dashed p-4 rounded-xl text-center">Now Photo<input type="file" hidden onChange={e=>setFiles({...files, now:e.target.files[0]})}/><p className="text-xs mt-2">{files.now?.name || "Upload Now"}</p></label>
      </div>
      <div className="space-y-3 mt-6">
        <input placeholder="Full Name *" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="w-full p-3 border rounded-xl"/>
        <div className="grid grid-cols-2 gap-3">
          <input placeholder="Subject * e.g Math" value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} className="p-3 border rounded-xl"/>
          <input placeholder="Role e.g Head Teacher" value={form.role} onChange={e=>setForm({...form, role:e.target.value})} className="p-3 border rounded-xl"/>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <input type="number" placeholder="From Year *" value={form.from_year} onChange={e=>setForm({...form, from_year:e.target.value})} className="p-3 border rounded-xl"/>
          <input type="number" placeholder="To Year" disabled={form.still} value={form.to_year} onChange={e=>setForm({...form, to_year:e.target.value})} className="p-3 border rounded-xl disabled:bg-gray-100"/>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.still} onChange={e=>setForm({...form, still:e.target.checked})}/> Still Teaching</label>
        </div>
        <input placeholder="Phone (optional)" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="w-full p-3 border rounded-xl"/>
        <textarea placeholder="Bio / Journey - e.g Joined in 1986 as..." value={form.bio} onChange={e=>setForm({...form, bio:e.target.value})} className="w-full p-3 border rounded-xl h-20"/>
        <textarea placeholder="Tribute message" value={form.tribute} onChange={e=>setForm({...form, tribute:e.target.value})} className="w-full p-3 border rounded-xl h-20"/>
      </div>
      <button onClick={submit} disabled={uploading} className="w-full mt-6 py-3 bg-[#7A0F14] text-white rounded-full font-bold">{uploading? "Saving...":"Save Teacher"}</button>
    </div>
  )
}