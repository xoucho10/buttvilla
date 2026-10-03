"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SafetyPage(){
  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <p className="inline-flex bg-[#7A0F14] text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-widest">🛡️ SAFETY & CARE • 40 YEARS NO INCIDENT</p>
        <h1 className="text-5xl md:text-7xl font-black mt-4 text-[#7A0F14] leading-none">Safety & Care</h1>
        <p className="text-gray-500 mt-4 max-w-2xl">Trained matrons, first aid, fenced compound, 24/7 security. Your child is safe like at home.</p>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {[
            {icon:"👩‍⚕️", title:"Trained Matrons", desc:"3 full-time matrons, all female, CPR & first-aid trained. 1 matron per 15 children."},
            {icon:"🚧", title:"Fenced & Gated", desc:"8ft brick fence, single locked gate, security guard 24/7. No child leaves without parent ID."},
            {icon:"🩹", title:"First Aid & Clinic", desc:"First aid room stocked, partnership with Iganga Hospital 5 mins away. Monthly health checks."},
            {icon:"🍛", title:"Safe Meals", desc:"Kitchen staff medical check every 6 months. Food tasted by matron before serving. Clean water borehole."},
            {icon:"👀", title:"CCTV & Monitoring", desc:"Play areas & gate under CCTV, monitored by director. Parents can visit anytime unannounced."},
            {icon:"🚌", title:"Safe Transport", desc:"Van with lady attendant, speed limit 40km/h, no child alone. Pick-up list checked daily."},
          ].map((s,i)=>(
            <div key={i} className="bg-white border rounded-[1.5rem] p-6">
              <div className="w-12 h-12 bg-[#FFFCF7] rounded-full grid place-items-center text-xl">{s.icon}</div>
              <div className="font-black mt-4">{s.title}</div>
              <div className="text-sm text-gray-500 mt-1 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="bg-black text-white rounded-[2rem] p-8 md:p-10 mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-black">What parents see</h3>
            <p className="text-white/60 text-sm mt-2">Daily: matron checks uniform, nails, temperature. If child is sick, we call you immediately. No medication given without parent WhatsApp approval.</p>
            <div className="mt-4 flex gap-2 text-xs">
              <span className="bg-white/10 px-3 py-1 rounded-full">✓ Daily health check</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">✓ Call parent if fever</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">✓ Safe pick-up ID</span>
            </div>
          </div>
          <div className="bg-[#7A0F14] rounded-[1.5rem] p-6">
            <p className="font-black">Pick-up Policy</p>
            <p className="text-sm text-white/80 mt-2">Only persons on your approved list with Student Code can pick. Boda driver must show parent SMS. We never release child to strangers. This is why we use Student Code + PIN.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}