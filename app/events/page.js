"use client";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { supabase } from "../../lib/supabase";

export default function EventsPage(){
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  useEffect(()=>{
    supabase.from('events').select('*').order('event_date', {ascending: true}).then(({data})=> setEvents(data||[]));
  },[]);

  const categories = ["all", "40Yrs Anniversary", "Graduation", "Sports", "General"];
  const filtered = filter==="all"? events : events.filter(e=>e.category===filter);

  const upcoming = filtered.filter(e=> new Date(e.event_date) >= new Date());
  const past = filtered.filter(e=> new Date(e.event_date) < new Date());

  const fmtDate = (d) => new Date(d).toLocaleDateString('en-UG', {day:'numeric', month:'long', year:'numeric'});

  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="bg-[#7A0F14] rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="inline-flex bg-white/15 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest">🎉 40 YEARS • 1986-2026 EVENTS</div>
          <h1 className="text-4xl md:text-5xl font-black mt-4 leading-tight">What's Happening at<br/>Buttvilla Kindergarten</h1>
          <p className="mt-3 text-white/70 max-w-2xl text-sm">From our grand 40th Anniversary celebration to graduations, sports days, and parent meetings — never miss a moment.</p>

          <div className="flex gap-2 mt-6 flex-wrap">
            {categories.map(c=>(
              <button key={c} onClick={()=>setFilter(c)} className={`px-5 py-2 rounded-full text-sm font-bold border transition ${filter===c? 'bg-white text-[#7A0F14] border-white':'border-white/30 text-white/80 hover:bg-white/10'}`}>{c==="all"?"All Events":c}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* UPCOMING */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-black text-[#7A0F14]">Upcoming Events</h2>
            <span className="bg-[#7A0F14] text-white text-xs px-3 py-1 rounded-full font-bold">{upcoming.length}</span>
          </div>
          {upcoming.length===0? (
            <div className="bg-white border-2 border-dashed rounded-[2rem] p-12 text-center">
              <p className="text-4xl">📅</p>
              <p className="font-bold mt-2">No upcoming events for {filter}</p>
              <p className="text-sm text-gray-400">Check back soon or view past events below</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {upcoming.map(ev=>(
                <div key={ev.id} onClick={()=>setSelected(ev)} className="bg-white rounded-[2rem] overflow-hidden border hover:shadow-xl transition cursor-pointer group">
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <img src={ev.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(ev.title)}&background=7A0F14&color=fff`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt=""/>
                    <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-[11px] font-black">{ev.category || 'Event'}</div>
                    {ev.is_featured && <div className="absolute top-3 right-3 bg-[#C5A880] text-white px-3 py-1 rounded-full text-[10px] font-black">FEATURED</div>}
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] tracking-widest text-[#7A0F14] font-bold">{fmtDate(ev.event_date)} • {ev.location}</p>
                    <h3 className="font-bold text-[17px] mt-2 leading-tight">{ev.title}</h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{ev.description}</p>
                    <button className="mt-4 text-sm font-bold text-[#7A0F14]">View Details →</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PAST EVENTS */}
        {past.length>0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-gray-400 mb-6">Past Events</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {past.map(ev=>(
                <div key={ev.id} onClick={()=>setSelected(ev)} className="bg-white/60 rounded-2xl p-3 border flex gap-3 cursor-pointer hover:bg-white">
                  <img src={ev.image_url || `https://ui-avatars.com/api/?name=${ev.title}&background=C5A880&color=fff`} className="w-16 h-16 rounded-xl object-cover bg-gray-100" alt=""/>
                  <div><p className="text-[10px] text-gray-400">{fmtDate(ev.event_date)}</p><p className="font-bold text-sm leading-tight">{ev.title}</p></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" onClick={()=>setSelected(null)}>
          <div className="bg-white w-full max-w-lg rounded-[2rem] overflow-hidden" onClick={e=>e.stopPropagation()}>
            <img src={selected.image_url || `https://ui-avatars.com/api/?name=${selected.title}&background=7A0F14&color=fff`} className="w-full h-56 object-cover" alt=""/>
            <div className="p-6">
              <div className="flex justify-between"><span className="bg-[#7A0F14] text-white px-3 py-1 rounded-full text-xs font-bold">{selected.category}</span><button onClick={()=>setSelected(null)} className="font-bold">✕</button></div>
              <h2 className="text-2xl font-black mt-4">{selected.title}</h2>
              <p className="text-sm text-[#7A0F14] font-bold mt-1">{fmtDate(selected.event_date)} • {selected.location}</p>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed whitespace-pre-wrap">{selected.description}</p>
              <a href="/admissions" className="block w-full text-center mt-6 py-3 bg-black text-white rounded-full font-bold text-sm">Join This Event</a>
            </div>
          </div>
        </div>
      )}

      <Footer/>
    </div>
  )
}