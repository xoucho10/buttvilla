"use client";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabase";

const YEARS = Array.from({ length: 40 }, (_, i) => 2026 - i);

export default function Alumni() {
  const [alumni, setAlumni] = useState([]);
  const [search, setSearch] = useState("");
  const [filterYear, setFilterYear] = useState("all");
  const [expandedYear, setExpandedYear] = useState(2026);
  const [showRegister, setShowRegister] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [form, setForm] = useState({ name: "", year: 2026, role: "", whatsapp: "", email: "", txn: "", payMethod: "mtn" });
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState({ then: null, now: null });
  const [previews, setPreviews] = useState({ then: "", now: "" });
  const [errors, setErrors] = useState({});

  const avatar = (name, bg="7A0F14") => `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Alumni')}&background=${bg}&color=fff`;
  const safeImg = (url, name, bg) => url && url.trim()!== ""? url : avatar(name, bg);

  const fetchAlumni = async () => {
    const { data } = await supabase.from('alumni').select('*').eq('is_verified', true).order('year', { ascending: false });
    if (data) setAlumni(data);
  };
  useEffect(() => { fetchAlumni(); }, []);

  const handleFile = (e, type) => {
    const file = e.target.files[0]; if(!file) return;
    setFiles(p=>({...p, [type]: file}));
    setPreviews(p=>({...p, [type]: URL.createObjectURL(file)}));
  };
  const uploadPhoto = async (file, bucket) => {
    if(!file) return null;
    const name = `${Date.now()}-${file.name}`;
    await supabase.storage.from(bucket).upload(name, file);
    return supabase.storage.from(bucket).getPublicUrl(name).data.publicUrl;
  };

  const validate = () => {
    let e = {};
    if(!form.name.trim()) e.name = "Required";
    if(!form.role.trim()) e.role = "Required";
    if(!form.whatsapp.trim()) e.whatsapp = "Required";
    if(!files.now) e.now = "Now picture required *";
    setErrors(e); return Object.keys(e).length===0;
  };

  const handleRegister = async () => {
    if(!validate()) return;
    setUploading(true);
    const thenUrl = await uploadPhoto(files.then, 'alumni-then');
    const nowUrl = await uploadPhoto(files.now, 'alumni-now');
    const { error } = await supabase.from('alumni').insert([{
      name: form.name.trim(), year: Number(form.year), role: form.role.trim(),
      whatsapp: form.whatsapp.trim(), email: form.email?.trim() || null,
      photo_then_url: thenUrl, photo_now_url: nowUrl,
      pay_method: form.payMethod, txn_id: form.txn?.trim() || null, is_verified: true
    }]);
    if(error) alert(error.message);
    else { alert("Registered!"); setShowRegister(false); fetchAlumni(); setFiles({then:null, now:null}); setPreviews({then:"", now:""}); }
    setUploading(false);
  };

  const handleRequestSend = async () => {
    const name = document.getElementById('req_name').value;
    const year = document.getElementById('req_year').value;
    const wa = document.getElementById('req_wa').value;
    const msg = document.getElementById('req_msg').value;
    if(!name ||!year ||!wa) return alert("Fill Name, Year, WhatsApp *");

    await supabase.from('contact_requests').insert([{
      alumni_id: selected.id, requester_name: name,
      requester_year: Number(year), requester_whatsapp: wa, message: msg
    }]);

    const text = encodeURIComponent(`Hello ${selected.name} 👋\nI'm ${name} (Class of ${year}) from Buttvilla Alumni portal.\n\n${msg || "I would like to connect with you."}\n\nMy WhatsApp: ${wa}\n\nPlease Accept my request on the portal.`);
    const cleanNumber = selected.whatsapp.replace(/\D/g,'');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
    alert("Request sent to WhatsApp + saved!");
    setSelected(null); setShowRequestForm(false);
  };

  const filtered = alumni.filter(a => a.name.toLowerCase().includes(search.toLowerCase()) && (filterYear==="all" || a.year===Number(filterYear)));
  const getYear = (y) => filtered.filter(a=>a.year===y);

  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header />

      {/* ===== RESTORED ALUMNI INTRO ===== */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-2">
        <div className="bg-[#7A0F14] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-[#C5A880]/20 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest">🎉 CELEBRATING 40 YEARS • 1986 - 2026</div>
            <h1 className="text-4xl md:text-[46px] font-black mt-4 leading-[1.05]">Once a Buttvilla Child,<br/>Always Family.</h1>
            <p className="mt-4 text-white/70 max-w-2xl text-sm md:text-[15px] leading-relaxed">
              From our first class in 1986 to today, over 500+ children have passed through Buttvilla Kindergarten Iganga.
              This is our living archive — find your classmates Then vs Now, celebrate teachers who built us for 40 years,
              and reconnect for the next journey. Search your year, register, and let's make the 40th unforgettable.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div><p className="text-3xl font-black">{alumni.length}+</p><p className="text-[11px] text-white/60 tracking-widest uppercase">Alumni Registered</p></div>
              <div className="w-px bg-white/20 hidden md:block"></div>
              <div><p className="text-3xl font-black">40</p><p className="text-[11px] text-white/60 tracking-widest uppercase">Years of Excellence</p></div>
              <div className="w-px bg-white/20 hidden md:block"></div>
              <div><p className="text-3xl font-black">1986</p><p className="text-[11px] text-white/60 tracking-widest uppercase">Since Foundation</p></div>
              <div className="ml-auto hidden md:flex items-center gap-3">
                <a href="/teachers" className="bg-white text-[#7A0F14] px-6 py-3 rounded-full text-sm font-black">🎓 Meet Our Teachers</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-[96px] z-20 bg-[#FFFCF7]/90 backdrop-blur border-b py-4">
        <div className="max-w-7xl mx-auto px-6 flex gap-3">
          <div className="flex-1 relative"><span className="absolute left-4 top-1/2 -translate-y-1/2">🔍</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search your classmate..." className="w-full pl-11 pr-4 py-3 rounded-full border bg-[#FFFDF0] text-sm"/></div>
          <select value={filterYear} onChange={e=>setFilterYear(e.target.value)} className="px-5 py-3 rounded-full border bg-white text-sm font-bold"><option value="all">All Years</option>{YEARS.map(y=><option key={y} value={y}>{y}</option>)}</select>
          <button onClick={()=>setShowRegister(true)} className="px-6 py-3 rounded-full bg-[#7A0F14] text-white text-sm font-bold">👤 Register</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-3">
          {YEARS.map(year => {
            const list = getYear(year);
            if(filterYear!=="all" && year!==Number(filterYear)) return null;
            return (
              <div key={year} className="bg-white border rounded-[2rem] p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4"><div className="bg-[#7A0F14] text-white px-6 py-2 rounded-full text-sm font-bold">{year}</div><div className="flex -space-x-2">{list.slice(0,5).map(a=><img key={a.id} src={safeImg(a.photo_now_url || a.photo_then_url, a.name)} className="w-9 h-9 rounded-full border-2 border-white object-cover" alt=""/>)}</div><span className="text-sm">{list.length} alumni</span></div>
                  <button onClick={()=>setExpandedYear(expandedYear===year?null:year)} className="px-5 py-2 rounded-full border border-[#7A0F14] text-sm font-bold">{expandedYear===year?"Hide":"View All"}</button>
                </div>
                {expandedYear===year && (
                  <div className="grid md:grid-cols-3 gap-4 pt-4 mt-4 border-t">
                    {list.length===0? <p className="text-sm text-gray-400 col-span-3 py-6 text-center">No alumni yet for {year}. Be the first to register!</p> : list.map(a=>(
                      <div key={a.id} onClick={()=>{setSelected(a); setShowRequestForm(false);}} className="bg-[#FFFCF7] border rounded-2xl p-4 flex gap-4 cursor-pointer hover:shadow">
                        <img src={safeImg(a.photo_then_url, a.name,'7A0F14')} className="w-16 h-16 rounded-xl object-cover"/>
                        <img src={safeImg(a.photo_now_url, a.name,'C5A880')} className="w-16 h-16 rounded-xl object-cover"/>
                        <div><p className="font-bold text-sm text-[#7A0F14]">{a.name}</p><p className="text-xs">{a.role} • {a.year}</p></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" onClick={()=>setSelected(null)}>
          <div className="bg-white w-full max-w-md rounded-[2rem] p-6" onClick={e=>e.stopPropagation()}>
            {!showRequestForm? (
              <>
                <div className="flex justify-between"><h3 className="font-bold text-xl text-[#7A0F14]">{selected.name}</h3><button onClick={()=>setSelected(null)}>✕</button></div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div><p className="text-[10px] tracking-widest text-gray-400 mb-2">THEN {selected.photo_then_url? "" : "(Not provided)"}</p><img src={safeImg(selected.photo_then_url, selected.name,'7A0F14')} className="w-full h-48 rounded-2xl object-cover bg-gray-100" alt=""/></div>
                  <div><p className="text-[10px] tracking-widest text-gray-400 mb-2">NOW</p><img src={safeImg(selected.photo_now_url, selected.name,'C5A880')} className="w-full h-48 rounded-2xl object-cover bg-gray-100" alt=""/></div>
                </div>
                <div className="mt-4 text-sm space-y-1"><p><b>Year:</b> {selected.year}</p><p><b>Role:</b> {selected.role}</p><p><b>WhatsApp:</b> +256 *** ***{selected.whatsapp?.slice(-3)}</p></div>
                <button onClick={()=>setShowRequestForm(true)} className="w-full mt-6 py-3 rounded-full bg-[#7A0F14] text-white font-bold">Request Contact →</button>
              </>
            ) : (
              <>
                <h3 className="font-bold">Contact {selected.name}</h3>
                <p className="text-xs text-gray-500 mt-1">Your details will be sent to owner for approval</p>
                <div className="space-y-3 mt-4">
                  <input id="req_name" placeholder="Your full name *" className="w-full p-3 rounded-xl border text-sm"/>
                  <input id="req_year" placeholder="Your year *" type="number" className="w-full p-3 rounded-xl border text-sm"/>
                  <input id="req_wa" placeholder="Your WhatsApp * 0700..." className="w-full p-3 rounded-xl border text-sm"/>
                  <textarea id="req_msg" placeholder="Message (Optional)" className="w-full p-3 rounded-xl border text-sm h-20"></textarea>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <button onClick={()=>setShowRequestForm(false)} className="py-3 rounded-full border font-bold text-sm">Back</button>
                  <button onClick={handleRequestSend} className="py-3 rounded-full bg-green-600 text-white font-bold text-sm">Send WhatsApp</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-lg rounded-[1.5rem] p-6 my-8">
            <div className="flex justify-between"><h3 className="font-bold text-xl">Register as Alumni</h3><button onClick={()=>setShowRegister(false)}>✕</button></div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <label className="border-2 border-dashed rounded-xl p-3 text-center cursor-pointer"><input type="file" hidden onChange={e=>handleFile(e,'then')} accept="image/*"/><p className="text-xs">Then Photo (Optional)</p><div className="w-14 h-14 mx-auto mt-2 rounded-full bg-gray-100 overflow-hidden">{previews.then && <img src={previews.then} className="w-full h-full object-cover"/>}</div></label>
              <label className={`border-2 border-dashed rounded-xl p-3 text-center cursor-pointer ${errors.now? 'border-red-500 bg-red-50':''}`}><input type="file" hidden onChange={e=>handleFile(e,'now')} accept="image/*"/><p className="text-xs font-bold">Now Photo *</p><div className="w-14 h-14 mx-auto mt-2 rounded-full bg-gray-100 overflow-hidden">{previews.now? <img src={previews.now} className="w-full h-full object-cover"/> : <span className="text-[10px] text-gray-400 flex items-center justify-center h-full">Required</span>}</div>{errors.now && <p className="text-[10px] text-red-500">{errors.now}</p>}</label>
            </div>
            <div className="space-y-3 mt-4">
              <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name *" className={`w-full p-3 rounded-xl border text-sm ${errors.name? 'border-red-500':''}`}/>
              <select value={form.year} onChange={e=>setForm({...form,year:e.target.value})} className="w-full p-3 rounded-xl border text-sm">{YEARS.map(y=><option key={y} value={y}>{y}</option>)}</select>
              <input value={form.role} onChange={e=>setForm({...form,role:e.target.value})} placeholder="Current job / role *" className={`w-full p-3 rounded-xl border text-sm ${errors.role? 'border-red-500':''}`}/>
              <input value={form.whatsapp} onChange={e=>setForm({...form,whatsapp:e.target.value})} placeholder="WhatsApp * e.g 0700568634" className={`w-full p-3 rounded-xl border text-sm ${errors.whatsapp? 'border-red-500':''}`}/>
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email (Optional)" className="w-full p-3 rounded-xl border text-sm bg-gray-50"/>
            </div>
            <button disabled={uploading} onClick={handleRegister} className="w-full mt-6 py-3 rounded-xl bg-[#7A0F14] text-white font-bold">{uploading?"Uploading...":"Submit Registration"}</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}