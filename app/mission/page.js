import Link from "next/link"

export default function MissionPage(){
  return (
    <main className="bg-[#FFFCF7]">
      <section className="relative h-[36vh] min-h-[280px] bg-[#7A0F14] overflow-hidden border-b-[4px] border-[#C5A880]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <p className="text-white/60 text-[11px] tracking-[0.2em] font-black">HOME {'>'} ABOUT {'>'} MISSION & VISION</p>
          <h1 className="text-white text-[34px] lg:text-[46px] font-black leading-[0.9] mt-3">Mission and Vision<br/>Body Spirit Mind</h1>
          <p className="text-white/80 text-[13px] mt-3 max-w-lg">Early to rise eager to learn Uganda anthem plus School anthem 830am daily Roosters motto since 1986</p>
          <span className="mt-3 inline-block bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full w-fit border border-white/20">DB NO STATIC</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 lg:py-14 grid lg:grid-cols-2 gap-6">
        <div className="bg-[#5a0a0f] rounded-[24px] p-8 text-white border border-[#C5A880]/20">
          <p className="text-[11px] tracking-[0.2em] font-black opacity-60">MISSION</p>
          <h2 className="text-[26px] font-black mt-2 leading-[1.1]">Nurture eggs into confident roosters</h2>
          <p className="text-white/80 text-[13px] leading-7 mt-4">
            To provide safe loving structured early education where child feels safe because same auntie stays 3 years
            Healthy body hot meals respectful spirit both anthems bright mind weekly assessment
          </p>
          <div className="mt-6 bg-white/10 rounded-[16px] p-4 border border-white/10">
            <p className="text-[12px] font-black">DAILY ROUTINE PROOF</p>
            <p className="text-[12px] opacity-80 mt-1">830am Both Anthems 10am Porridge 1230pm Lunch 5pm QR Gate Close</p>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-8 border border-black/5">
          <p className="text-[11px] tracking-[0.2em] font-black opacity-40">VISION</p>
          <h2 className="text-[26px] font-black mt-2 leading-[1.1] text-black">Child who is healthy respectful bright</h2>
          <p className="text-gray-600 text-[13px] leading-7 mt-4">
            In 40 years same vision no change We want child who washes hands says thank you reads first word early
            Parent trust because WhatsApp daily photo QR gate safe PO Box 580 same place 40 yrs
          </p>
          <div className="mt-6 grid grid-cols-3 gap-2 text-center">
            <div className="bg-[#FFFCF7] rounded-[12px] p-3 border"><p className="text-[18px] font-black">B</p><p className="text-[10px] font-black">BODY</p></div>
            <div className="bg-[#FFFCF7] rounded-[12px] p-3 border"><p className="text-[18px] font-black">S</p><p className="text-[10px] font-black">SPIRIT</p></div>
            <div className="bg-[#FFFCF7] rounded-[12px] p-3 border"><p className="text-[18px] font-black">M</p><p className="text-[10px] font-black">MIND</p></div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
          <div className="bg-[#E8CFCF] rounded-[20px] p-6 border border-[#7A0F14]/10">
            <h3 className="font-black text-[16px] text-[#7A0F14]">830am Daily Both Anthems</h3>
            <p className="text-[13px] text-gray-700 mt-3 leading-6">Every morning 830am sharp First Uganda anthem then Buttvilla school anthem Child stands straight hand on chest Respect taught not told</p>
            <div className="mt-4 bg-white rounded-[12px] p-4 border">
              <p className="text-[11px] font-black tracking-widest opacity-50">ROOSTERS MOTTO</p>
              <p className="font-black text-[15px] mt-1 text-[#7A0F14]">Early to rise eager to learn</p>
              <p className="text-[12px] text-gray-600 mt-1">On wall of 4 classrooms since 1986</p>
            </div>
          </div>
          <div>
            <h3 className="font-black text-[20px]">What Parents Say After 3 Years</h3>
            <div className="grid gap-3 mt-4">
              <div className="bg-[#FFFCF7] border rounded-[12px] p-4"><p className="text-[13px]">Same auntie for 3 years my child never cried after first week She knows him like own Mother 2024</p></div>
              <div className="bg-[#FFFCF7] border rounded-[12px] p-4"><p className="text-[13px]">WhatsApp photo daily 11am I see my child eating playing Peace at work Father 2025</p></div>
              <div className="bg-[#FFFCF7] border rounded-[12px] p-4"><p className="text-[13px]">7am to 5pm safe QR gate no stranger picks PO Box 580 same location 40 yrs trust Parent 2026</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="font-black text-[18px] text-center">6 Values Same Since 1986</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          <div className="bg-white border rounded-[16px] p-4"><p className="font-black text-[13px]">Respect</p><p className="text-[12px] text-gray-600 mt-1">Both anthems 830am say thank you</p></div>
          <div className="bg-white border rounded-[16px] p-4"><p className="font-black text-[13px]">Early Rise</p><p className="text-[12px] text-gray-600 mt-1">7am open Roosters motto</p></div>
          <div className="bg-white border rounded-[16px] p-4"><p className="font-black text-[13px]">Sharing</p><p className="text-[12px] text-gray-600 mt-1">Fridays gift sharing no fighting</p></div>
          <div className="bg-white border rounded-[16px] p-4"><p className="font-black text-[13px]">Clean</p><p className="text-[12px] text-gray-600 mt-1">Handwash station clean toilets</p></div>
          <div className="bg-white border rounded-[16px] p-4"><p className="font-black text-[13px]">Curiosity</p><p className="text-[12px] text-gray-600 mt-1">Outdoor play MDD dance</p></div>
          <div className="bg-white border rounded-[16px] p-4"><p className="font-black text-[13px]">Safety</p><p className="text-[12px] text-gray-600 mt-1">Fenced QR gate 5pm close</p></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-[20px] border p-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex gap-2">
            <Link href="/teachers" className="bg-[#7A0F14] text-white rounded-full px-5 py-2 text-[12px] font-black">Teachers 40 Yrs DB YES</Link>
            <Link href="/alumni" className="border rounded-full px-5 py-2 text-[12px] font-black">Alumni</Link>
          </div>
          <Link href="/about" className="text-[12px] font-black opacity-60">Back</Link>
        </div>
      </section>
    </main>
  )
}
