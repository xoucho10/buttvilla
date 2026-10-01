import Header from "../../components/Header"
import Footer from "../../components/Footer"
export default function Alumni(){
  return (
    <div className="bg-[#FFFCF7] min-h-screen">
      <Header/>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.png" className="w-10 h-10 object-contain" alt="logo"/>
          <p className="text-[#C5A880] font-bold tracking-widest text-xs">OUR LEGACY • 40 YEARS</p>
        </div>
        <h1 className="text-6xl font-bold text-[#7A0F14] leading-[0.9]">500+ Alumni.<br/>One Family.</h1>
        <p className="mt-6 text-gray-600 max-w-3xl text-lg">From Iganga to Makerere, to the world. Buttvilla children lead. This is our greatest testimony — 40 years of raising leaders.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-8 rounded-[1.5rem] border shadow-sm">
            <p className="text-5xl font-bold text-[#7A0F14]">500+</p>
            <p className="font-bold mt-2">Graduates Since 1986</p>
            <p className="text-sm text-gray-500 mt-2">Now in primary, secondary, university & careers across Uganda</p>
          </div>
          <div className="bg-[#7A0F14] text-white p-8 rounded-[1.5rem]">
            <p className="text-5xl font-bold">40+</p>
            <p className="font-bold mt-2">Years of Trust</p>
            <p className="text-sm opacity-80 mt-2">Parents who were pupils now bring their own children</p>
          </div>
          <div className="bg-white p-8 rounded-[1.5rem] border shadow-sm">
            <p className="text-5xl font-bold text-[#C5A880]">4.9/5</p>
            <p className="font-bold mt-2">Parents Rating</p>
            <p className="text-sm text-gray-500 mt-2">The most trusted kindergarten in Iganga District</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-[2rem] p-8 border">
          <h3 className="font-bold text-[#7A0F14]">Where Are They Now?</h3>
          <div className="grid md:grid-cols-4 gap-4 mt-6 text-sm">
            <div className="p-4 bg-[#FFFCF7] rounded-xl"><p className="font-bold">Iganga SS, Jinja College</p><p className="text-gray-500">Top primary & secondary schools</p></div>
            <div className="p-4 bg-[#FFFCF7] rounded-xl"><p className="font-bold">Makerere, Mbarara</p><p className="text-gray-500">University students</p></div>
            <div className="p-4 bg-[#FFFCF7] rounded-xl"><p className="font-bold">Teachers, Doctors</p><p className="text-gray-500">Community leaders</p></div>
            <div className="p-4 bg-[#FFFCF7] rounded-xl"><p className="font-bold">2nd Generation</p><p className="text-gray-500">Alumni now parents at Buttvilla</p></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}