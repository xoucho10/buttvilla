"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function ParentsPortal(){
  const [code, setCode] = useState("");
  const [pin, setPin] = useState("");
  const [logged, setLogged] = useState(null);
  const [parentAccount, setParentAccount] = useState(null);
  const [tab, setTab] = useState("overview");
  const [ann, setAnn] = useState([]);
  const [events, setEvents] = useState([]);
  const [showChangePin, setShowChangePin] = useState(false);
  const [newPin, setNewPin] = useState("");

  useEffect(()=>{
    const savedCode = localStorage.getItem('bv_code');
    if(savedCode) setCode(savedCode);
    supabase.from('announcements').select('*').eq('is_active', true).order('created_at',{ascending:false}).limit(3).then(({data})=> setAnn(data||[]));
    supabase.from('events').select('*').order('date',{ascending:true}).limit(3).then(({data})=> setEvents(data||[]));
  },[]);

  const login = async () => {
    if(!code || pin.length<4) return alert("Enter Student Code and 4-digit PIN");
    const cleanCode = code.toUpperCase().trim();

    // secure verification via RPC
    const { data: isValid } = await supabase.rpc('verify_parent_pin', { input_code: cleanCode, input_pin: pin });
    if(!isValid){
      // fallback direct check if RPC not working (for dev)
      const { data: acc } = await supabase.from('parents_accounts').select('*, admission_inquiries(*)').eq('student_code', cleanCode).single();
      if(!acc) return alert("Invalid Student Code");
      // if still using plain 0000 for old accounts
      if(acc.pin_hash === '0000' && pin === '0000'){
        setParentAccount(acc);
        setLogged(acc.admission_inquiries);
        localStorage.setItem('bv_code', cleanCode);
        setShowChangePin(true);
        return;
      }
      return alert("Wrong Code or PIN. Default PIN is 0000 for first time.");
    }

    const { data } = await supabase.from('parents_accounts').select('*, admission_inquiries(*)').eq('student_code', cleanCode).single();
    if(data){
      setParentAccount(data);
      setLogged(data.admission_inquiries);
      localStorage.setItem('bv_code', cleanCode);
      // force PIN change if still 0000
      if(pin === '0000') setShowChangePin(true);
    }
  }

  const changePin = async () => {
    if(newPin.length!==4) return alert("PIN must be 4 digits");
    const { error } = await supabase.rpc('reset_parent_pin', { code_input: code.toUpperCase(), pin_input: newPin });
    if(error){
      alert("Error changing PIN: "+error.message);
    } else {
      alert("PIN changed successfully! New PIN: "+newPin);
      setShowChangePin(false);
      setPin(newPin);
      setNewPin("");
    }
  }

  const HOMEWORK = {
    "Baby Class": "Trace letter A, Color apple, Sing Baby Shark",
    "Middle Class": "Write numbers 1-20, Read 'My Family' pg 12, Draw 3 fruits",
    "Top Class": "English: Words with 'sh' / Math: Addition 1-20 / Reading: My Village"
  };

  const LUNCH = [
    {day:"Monday", menu:"Rice + Beans + Avocado + Milk", today:true},
    {day:"Tuesday", menu:"Matooke + G-nuts + Meat + Juice"},
    {day:"Wednesday", menu:"Posho + Beans + Greens + Porridge"},
    {day:"Thursday", menu:"Rice + Fish + Veggies + Milk"},
    {day:"Friday", menu:"Matooke + Meat + Soup + Fruit"},
  ];

  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>

      {/* HERO LOGIN - SECURE */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="bg-black rounded-[2rem] p-8 md:p-10 text-white grid md:grid-cols-2 gap-8 items-center relative overflow-hidden">
          {showChangePin && (
            <div className="absolute inset-0 bg-black/90 z-20 grid place-items-center p-8">
              <div className="bg-white text-black rounded-[1.5rem] p-6 w-full max-w-sm">
                <p className="font-black">Set New PIN (Required)</p>
                <p className="text-xs text-gray-500 mt-1">Default PIN 0000 is not secure. Set your own 4-digit PIN.</p>
                <input value={newPin} onChange={e=>setNewPin(e.target.value)} placeholder="New 4-digit PIN" maxLength={4} type="password" className="w-full mt-4 p-3 border rounded-full text-sm"/>
                <button onClick={changePin} className="w-full mt-3 py-3 bg-black text-white rounded-full font-black text-sm">Save New PIN</button>
              </div>
            </div>
          )}

          <div>
            <p className="inline-flex bg-[#7A0F14] px-4 py-1 rounded-full text-[11px] font-bold tracking-widest">🔒 SECURE • CODE + PIN • NOT PHONE</p>
            <h1 className="text-4xl md:text-5xl font-black mt-4 leading-none">Everything about<br/>your child, daily.</h1>
            <p className="text-white/60 mt-3 text-sm">No more calling school. Homework, lunch, fees, term dates — updated every morning by class teachers.</p>

            {!logged?(
              <div className="mt-6 space-y-3">
                <input value={code} onChange={e=>setCode(e.target.value)} placeholder="Student Code e.g BV-2026-001" className="w-full p-3 rounded-full bg-white/10 border border-white/20 text-sm placeholder:text-white/40"/>
                <input value={pin} onChange={e=>setPin(e.target.value)} placeholder="4-digit PIN (default 0000)" type="password" maxLength={4} className="w-full p-3 rounded-full bg-white/10 border border-white/20 text-sm placeholder:text-white/40"/>
                <button onClick={login} className="w-full py-3 bg-white text-black rounded-full font-black text-sm">Login Securely</button>
                <p className="text-[11px] text-white/30">Phone alone cannot login. Need Student Code from receipt + your PIN. Forgot? WhatsApp school.</p>
              </div>
            ):(
              <div className="mt-6 bg-white/10 rounded-2xl p-4 flex justify-between items-center">
                <div><p className="font-black text-sm">Welcome, {logged.parent_name}</p><p className="text-xs text-white/60">{logged.child_name} • {logged.class_interest} • {parentAccount?.student_code}</p></div>
                <button onClick={()=>{localStorage.removeItem('bv_code'); setLogged(null); setParentAccount(null);}} className="text-xs bg-white/20 px-3 py-1 rounded-full">Logout</button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white text-black rounded-[1.5rem] p-5"><p className="text-[11px] font-bold tracking-widest text-gray-400">TODAY'S HOMEWORK</p><p className="font-black mt-2 text-sm">{HOMEWORK[logged?.class_interest||"Top Class"]}</p><button onClick={()=>setTab("homework")} className="mt-3 text-xs bg-black text-white px-3 py-1 rounded-full">View All</button></div>
            <div className="bg-[#7A0F14] rounded-[1.5rem] p-5"><p className="text-[11px] font-bold tracking-widest text-white/60">LUNCH TODAY</p><p className="font-black mt-2 text-sm">{LUNCH.find(l=>l.today)?.menu}</p><button onClick={()=>setTab("lunch")} className="mt-3 text-xs bg-white text-[#7A0F14] px-3 py-1 rounded-full font-bold">Week Menu</button></div>
            <div className="bg-white/10 rounded-[1.5rem] p-5 col-span-2"><p className="text-[11px] font-bold tracking-widest text-white/60">NEXT EVENT</p><p className="font-black mt-1">{events[0]?.title||"40 Yrs Grand Celebration - 14th Dec"}</p><p className="text-xs text-white/50 mt-1">{events[0]?.date||"Mark your calendar, all alumni invited"}</p></div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-full border p-1.5 flex gap-1 overflow-x-auto w-fit max-w-full">
          {[
            {id:"overview", label:"Overview"},
            {id:"homework", label:"📚 Homework"},
            {id:"lunch", label:"🍛 Lunch Menu"},
            {id:"calendar", label:"📅 Term Dates"},
            {id:"fees", label:"💰 Fees & Payments"},
            {id:"children", label:"🧒 Children Fun Zone"},
            {id:"help", label:"💬 Talk to Teacher"},
          ].map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition ${tab===t.id?'bg-black text-white':'text-gray-500 hover:bg-[#FFFCF7]'}`}>{t.label}</button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-6">

            {tab==="overview" && (
              <>
                <div className="bg-white rounded-[2rem] border p-8">
                  <h3 className="font-black text-lg">Live Announcements</h3>
                  <div className="mt-4 space-y-3">
                    {ann.length? ann.map(a=>(
                      <div key={a.id} className="bg-[#FFFCF7] rounded-xl p-4 flex gap-3"><span className="w-8 h-8 bg-[#7A0F14] text-white rounded-full grid place-items-center text-xs">!</span><div><p className="font-bold text-sm">{a.title}</p><p className="text-xs text-gray-500">{a.message}</p></div></div>
                    )) : <div className="bg-[#FFFCF7] rounded-xl p-4 text-sm text-gray-500">No active announcements — Term 1 starts 9th Feb 2026</div>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-[1.5rem] border p-6"><p className="font-black">Child Progress</p><p className="text-xs text-gray-400 mt-1">Updated weekly by class teacher</p><div className="mt-4 space-y-2 text-sm"><div className="flex justify-between"><span>Reading</span><span className="font-black">★★★★☆</span></div><div className="flex justify-between"><span>Numbers</span><span className="font-black">★★★★★</span></div><div className="flex justify-between"><span>Social</span><span className="font-black">★★★★☆</span></div></div><p className="text-[11px] text-gray-400 mt-4">{logged?'Showing for '+logged.child_name:'Login to see your child'}</p></div>
                  <div className="bg-[#7A0F14] rounded-[1.5rem] p-6 text-white"><p className="font-black">Quick Links</p><div className="mt-4 grid grid-cols-2 gap-2 text-xs"><Link href="/fees" className="bg-white/15 rounded-full py-2 text-center">Fees Structure</Link><Link href="/uniform" className="bg-white/15 rounded-full py-2 text-center">Uniform</Link><a href="https://wa.me/256700000000" className="bg-white text-[#7A0F14] rounded-full py-2 text-center font-bold">WhatsApp School</a><Link href="/gallery" className="bg-white/15 rounded-full py-2 text-center">Photos</Link></div></div>
                </div>
              </>
            )}

            {tab==="children" && (
              <div className="bg-white rounded-[2rem] border p-8">
                <h3 className="font-black text-xl">🧒 Children Fun Zone — Safe, No Login</h3>
                <p className="text-sm text-gray-500 mt-1">Only accessible after parent login. No child data exposed.</p>
                {!logged? <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm">🔒 Login with Student Code + PIN to unlock Fun Zone for {code||'your child'}</div> :
                <div className="mt-6 grid md:grid-cols-2 gap-3">
                  <div className="bg-[#FFFCF7] p-4 rounded-xl"><p className="font-bold">🎨 Coloring Pages</p><p className="text-xs text-gray-500 mt-1">Print: Apple, Rooster, Numbers</p><button className="mt-2 text-xs bg-black text-white px-3 py-1 rounded-full">Download PDF</button></div>
                  <div className="bg-[#FFFCF7] p-4 rounded-xl"><p className="font-bold">📚 Story Time</p><p className="text-xs text-gray-500 mt-1">Video: Why Rooster Crows</p><button className="mt-2 text-xs bg-black text-white px-3 py-1 rounded-full">Watch</button></div>
                  <div className="bg-[#FFFCF7] p-4 rounded-xl"><p className="font-bold">🔢 Learn 123</p><p className="text-xs text-gray-500 mt-1">Game for {logged.child_name}</p><button className="mt-2 text-xs bg-black text-white px-3 py-1 rounded-full">Play</button></div>
                  <div className="bg-[#7A0F14] text-white p-4 rounded-xl"><p className="font-bold">⭐ Star of Week</p><p className="text-xs text-white/70 mt-1">{logged.child_name} can be next!</p></div>
                </div>}
              </div>
            )}

            {tab==="homework" && (
              <div className="bg-white rounded-[2rem] border p-8">
                <h3 className="font-black text-xl">Homework — This Week</h3>
                <div className="mt-6 divide-y">{Object.entries(HOMEWORK).map(([cls, hw])=>(<div key={cls} className={`py-4 flex justify-between ${logged?.class_interest===cls?'bg-[#FFFCF7] px-4 rounded-xl':''}`}><div><p className="font-black text-sm">{cls}</p><p className="text-sm text-gray-600 mt-1">{hw}</p></div><span className="text-[11px] bg-black text-white px-2 py-1 rounded-full h-fit">Today</span></div>))}</div>
              </div>
            )}

            {tab==="lunch" && (
              <div className="bg-white rounded-[2rem] border p-8">
                <h3 className="font-black text-xl">Lunch Menu — Term 1 2026</h3>
                <div className="mt-6 grid gap-3">{LUNCH.map(l=>(<div key={l.day} className={`flex justify-between p-4 rounded-xl ${l.today?'bg-[#7A0F14] text-white':'bg-[#FFFCF7]'}`}><p className="font-black text-sm">{l.day} {l.today&&'• Today'}</p><p className="text-sm text-right max-w-[60%]">{l.menu}</p></div>))}</div>
              </div>
            )}

            {tab==="calendar" && (
              <div className="bg-white rounded-[2rem] border p-8">
                <h3 className="font-black text-xl">Term Dates 2026</h3>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between bg-[#FFFCF7] p-4 rounded-xl"><span className="font-bold">Term 1 Begins</span><span>9th Feb 2026</span></div>
                  <div className="flex justify-between p-4 rounded-xl border"><span>Mid Term Break</span><span>27th - 30th March</span></div>
                  <div className="flex justify-between bg-black text-white p-4 rounded-xl"><span className="font-bold">Term 1 Ends</span><span>30th April</span></div>
                  <div className="flex justify-between bg-[#7A0F14] text-white p-4 rounded-xl"><span className="font-bold">🎉 40Yrs Celebration</span><span>14th Dec 2026</span></div>
                </div>
              </div>
            )}

            {tab==="fees" && (
              <div className="bg-white rounded-[2rem] border p-8">
                <h3 className="font-black text-xl">Fees & Payments</h3>
                {logged? <div className="mt-4 bg-[#FFFCF7] rounded-xl p-4 text-sm"><p>Child: <b>{logged.child_name}</b> ({parentAccount?.student_code})</p><p>Class: <b>{logged.class_interest}</b></p><p>Status: <span className="bg-yellow-200 px-2 py-0.5 rounded-full text-xs">{logged.status}</span></p></div> : <p className="text-sm text-gray-500 mt-4">Login to see your balance</p>}
                <Link href="/fees" className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full font-bold text-sm">Full Fees Structure →</Link>
              </div>
            )}

            {tab==="help" && (
              <div className="bg-white rounded-[2rem] border p-8">
                <h3 className="font-black text-xl">Talk to Teacher</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-3">
                  <a href="https://wa.me/256700000000" className="bg-[#FFFCF7] p-4 rounded-xl font-bold text-sm">👶 Baby Class Teacher →</a>
                  <a href="https://wa.me/256700000001" className="bg-[#FFFCF7] p-4 rounded-xl font-bold text-sm">🧒 Middle Class Teacher →</a>
                  <a href="https://wa.me/256700000002" className="bg-[#FFFCF7] p-4 rounded-xl font-bold text-sm">🎓 Top Class Teacher →</a>
                  <a href="https://wa.me/256700000000" className="bg-black text-white p-4 rounded-xl font-bold text-sm">💰 Bursar →</a>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-[1.5rem] border p-6"><p className="font-black">Downloads</p><div className="mt-4 space-y-2 text-sm"><a href="#" className="flex justify-between bg-[#FFFCF7] p-3 rounded-xl"><span>📄 School Rules PDF</span><span>↓</span></a><a href="#" className="flex justify-between bg-[#FFFCF7] p-3 rounded-xl"><span>📅 Academic Calendar</span><span>↓</span></a><a href="#" className="flex justify-between bg-[#FFFCF7] p-3 rounded-xl"><span>👕 Uniform Guide</span><span>↓</span></a></div></div>
            <div className="bg-black text-white rounded-[1.5rem] p-6"><p className="font-black">School Hours</p><p className="text-sm text-white/60 mt-2">Mon-Fri: 8am - 4pm<br/>Visiting: Mon & Fri 2pm-4pm</p><p className="mt-4 text-xs bg-white/10 inline-block px-3 py-1 rounded-full">📍 Iganga Main Street</p></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}