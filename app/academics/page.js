import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from "next/link"

export default function Page(){
  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="inline-block bg-[#7A0F14] text-white px-4 py-1 rounded-full text-[11px] font-black">ACADEMICS</div>
        <h1 className="font-black text-[36px] leading-[0.9] mt-4">Play-based learning<br/>that sticks</h1>
        <p className="text-[14px] text-gray-600 mt-3 max-w-[560px]">Ugandan curriculum, Montessori play, lots of songs. Baby to Top, all in reddish maroon uniform.</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-[24px] p-5 border border-black/5 shadow-sm">
            <div className="font-black">Baby Class • 3–4y</div>
            <div className="text-[12px] text-gray-600 mt-1">ABC, colors, sharing.</div>
            <img src="/today/baby-class-3-4.jpg" alt="Baby Class" className="mt-4 rounded-[16px] h-[200px] w-full object-cover"/>
          </div>
          <div className="bg-white rounded-[24px] p-5 border border-black/5 shadow-sm">
            <div className="font-black">Middle Class • 4–5y</div>
            <div className="text-[12px] text-gray-600 mt-1">Numbers, garden, art.</div>
            <img src="/today/middle-class-4-5.jpg" alt="Middle Class" className="mt-4 rounded-[16px] h-[200px] w-full object-cover"/>
          </div>
          <div className="bg-white rounded-[24px] p-5 border border-black/5 shadow-sm">
            <div className="font-black">Top Class • 5–6y</div>
            <div className="text-[12px] text-gray-600 mt-1">Reading ready for P1.</div>
            <img src="/today/top-class-5-6.jpg" alt="Top Class" className="mt-4 rounded-[16px] h-[200px] w-full object-cover"/>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="bg-[#7A0F14] text-white px-6 py-3 rounded-full text-[12px] font-black inline-block">← Back Home</Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
