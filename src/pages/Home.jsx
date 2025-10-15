import React from 'react'
import Carousel from '../components/Carousel.jsx'
import Footer from '../components/Footer.jsx'
import bookCover from '../assets/BookCover.png'
import drPhoto from '../assets/DSC_4393.jpg'

// Auto-load all DSC*.jpg images from assets for the gallery
const gallery = Object
  .values(import.meta.glob('../assets/DSC*.{jpg,JPG,jpeg,JPEG}', { eager: true, import: 'default' }))
  .sort((a,b) => a.localeCompare(b))

export default function Home(){

  return (<div>
    {/* HERO */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={bookCover} alt="Book Cover" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-8 py-20 sm:py-24 lg:pt-32">
        <div className="flex justify-center lg:justify-end">
          {/* Text Content */}
          <div className="text-white space-y-6 sm:space-y-8 max-w-2xl text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-brand-cream leading-[0.95] tracking-tight drop-shadow-2xl">
                CHOOSE WELL<br/>CHOOSE LIFE
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-cream/95 font-light tracking-wide drop-shadow-lg px-4 lg:px-0">
              A GUIDE TO A PURPOSE-FILLED LIFE FOR SOUTH AFRICAN TEENAGERS
            </p>
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5">
              <a href="#/book" className="px-6 sm:px-8 py-3 sm:py-4 bg-black/60 backdrop-blur-sm hover:bg-black text-brand-cream rounded-md font-semibold text-base sm:text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300 border border-white/20">
                ABOUT BOOK →
              </a>
              <a href="#/order" className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-md font-semibold text-base sm:text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300">
                BUY BOOK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ABOUT directly under hero */}
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">About Dr Benzi</h2>
              <div className="w-20 sm:w-28 h-1 sm:h-1.5 bg-brand-orange rounded-full mx-auto lg:mx-0"></div>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              Dr Benzile Monica Fakazile Nkabinde is a specialist obstetrician/gynaecologist with <span className="font-semibold text-brand-orange">34 years</span> dedicated to women's health, a mother of five, and author of <em className="font-medium text-brand-navy">Choose Well, Choose Life</em> — a guide to help South African teenagers make purpose-filled choices.
            </p>
            <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
              <a href="#/about" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-brand-navy hover:bg-brand-navy/90 text-white font-semibold text-base sm:text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300">
                Read More About Dr Benzi
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/30 to-brand-navy/20 rounded-full blur-3xl transform scale-90"></div>
              <img src={drPhoto} alt="Dr Benzi" className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* QUALIFICATIONS */}
    <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-dark text-brand-cream py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="mb-10 sm:mb-12 space-y-2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Qualifications
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-brand-orange rounded-full mx-auto lg:mx-0"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { title: "MB.ChB (KZN)", desc: "Bachelor of Medicine and Bachelor of Surgery. University of KwaZulu-Natal." },
            { title: "FCOG (SA)", desc: "Fellow of the College of Obstetricians and Gynaecologists of South Africa. College of Medicine of South Africa." },
            { title: "MBA (Bond Univ)", desc: "Masters in Business Administration (MBA), Bond University Australia." },
            { title: "DGM (SA)", desc: "Diploma in General Management, University of South Africa." },
            { title: "Dip Obst (SA)", desc: "Diploma in Obstetrics, College of Medicine of South Africa." },
          ].map(({title, desc}) => (
            <div key={title} className="group relative bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 hover:border-brand-orange/60 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-brand-orange/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-white">{title}</h3>
                <p className="text-xs sm:text-sm text-brand-cream/90 text-center leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MEMBERSHIPS */}
    <section className="bg-brand-dark text-brand-cream py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="mb-10 sm:mb-12 space-y-2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Memberships & Associations</h2>
          <div className="w-16 sm:w-20 h-1 bg-brand-orange rounded-full mx-auto lg:mx-0"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { title: "SASOG", desc: "South African Society of Obstetricians & Gynaecologists" },
            { title: "SASUOG", desc: "South African Society of Ultrasound in Obstetrics and Gynaecology" },
            { title: "GMG", desc: "Gynaecology Management Group" },
            { title: "SAMS", desc: "South African Menopause Society" },
            { title: "SAMA", desc: "South African Medical Association" },
          ].map(({title, desc}) => (
            <div key={title} className="group relative bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 hover:border-brand-orange/60 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-brand-orange/20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-white">{title}</h3>
                <p className="text-xs sm:text-sm text-brand-cream/90 text-center leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* GALLERY */}
    <section className="max-w-[1400px] mx-auto px-6 sm:px-8 py-16 sm:py-20">
      <div className="mb-6 sm:mb-8 space-y-2 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">Gallery</h2>
        <div className="w-16 sm:w-20 h-1 bg-brand-orange rounded-full mx-auto lg:mx-0"></div>
      </div>
      <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
        <Carousel images={gallery} autoplay interval={3000} />
      </div>
    </section>

    {/* MAP */}
    <section className="max-w-[1400px] mx-auto px-6 sm:px-8 pb-16 sm:pb-20">
      <div className="mb-6 sm:mb-8 space-y-2 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">Find Us</h2>
        <div className="w-16 sm:w-20 h-1 bg-brand-orange rounded-full mx-auto lg:mx-0"></div>
      </div>
      <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-200">
        <iframe title="Map" src="https://www.google.com/maps?q=17%20South%20Road,%20Lindhaven,%20Roodepoort%201724&output=embed" width="100%" height="350" className="sm:h-[450px]" style={{border:0}} loading="lazy" allowFullScreen></iframe>
      </div>
    </section>

    <Footer />
  </div>)
}
