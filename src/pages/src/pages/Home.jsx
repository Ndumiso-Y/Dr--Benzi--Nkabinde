import React from 'react'
import Carousel from '../components/Carousel.jsx'
import bookCover from '../assets/BookCover.png'
import drPhoto from '../assets/DRBenziRemovedBackground.png'
import { CapIcon, DiplomaIcon, StethoscopeIcon, RibbonIcon, UsersIcon, BadgeIcon } from '../components/Icons.jsx'

// Auto-load all DSC*.jpg images from assets for the gallery
const gallery = Object
  .values(import.meta.glob('../assets/DSC*.{jpg,JPG,jpeg,JPEG}', { eager: true, import: 'default' }))
  .sort((a,b) => a.localeCompare(b))

export default function Home(){

  return (<div>
    {/* HERO */}
    <section className="relative bg-brand-navy">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16">
        <div className="order-2 md:order-1 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-cream leading-tight">CHOOSE WELL<br/>CHOOSE LIFE</h1>
          <p className="mt-4 text-brand-cream/90">A GUIDE TO A PURPOSE-FILLED LIFE FOR SOUTH AFRICAN TEENAGERS</p>
          <div className="mt-6 flex gap-3">
            <a href="#/book" className="px-5 py-3 bg-brand-dark text-brand-cream rounded-md font-semibold">ABOUT BOOK</a>
            <a href="#/order" className="px-5 py-3 bg-brand-orange text-white rounded-md font-semibold">BUY BOOK</a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src={bookCover} alt="Book Cover" className="w-full max-w-md mx-auto rounded-xl shadow-xl object-contain bg-white"/>
        </div>
      </div>
    </section>

    {/* ABOUT directly under hero */}
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold">About Dr Benzi</h3>
        <p className="mt-4 text-gray-700">Dr Benzile Monica Fakazile Nkabinde is a specialist obstetrician/gynaecologist with 34 years dedicated to women’s health, a mother of five, and author of <em>Choose Well, Choose Life</em> — a guide to help South African teenagers make purpose-filled choices.</p>
        <a href="#/about" className="inline-block mt-4 px-4 py-2 rounded-md bg-brand-navy text-white">Read More</a>
      </div>
      <div className="flex justify-center">
        <img src={drPhoto} alt="Dr Benzi" className="h-80 object-contain drop-shadow-2xl"/>
      </div>
    </section>

    {/* QUALIFICATIONS */}
    <section className="bg-brand-navy text-brand-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          Qualifications <DiplomaIcon className="text-brand-cream"/>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "MB.ChB (KZN)", desc: "Bachelor of Medicine and Bachelor of Surgery. University of KwaZulu-Natal.", Icon: StethoscopeIcon },
            { title: "FCOG (SA)", desc: "Fellow of the College of Obstetricians and Gynaecologists of South Africa. College of Medicine of South Africa.", Icon: CapIcon },
            { title: "MBA (Bond Univ)", desc: "Masters in Business Administration (MBA), Bond University Australia.", Icon: RibbonIcon },
            { title: "DGM (SA)", desc: "Diploma in General Management, University of South Africa.", Icon: BadgeIcon },
            { title: "Dip Obst (SA)", desc: "Diploma in Obstetrics, College of Medicine of South Africa.", Icon: DiplomaIcon },
          ].map(({title, desc, Icon}) => (
            <div key={title} className="bg-brand-dark/30 p-8 rounded-xl shadow-sm border border-white/10 hover:bg-brand-dark/50 transition">
              <div className="flex items-center justify-center gap-3">
                <Icon className="text-brand-cream"/>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-brand-cream/90 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* MEMBERSHIPS */}
    <section className="bg-brand-navy text-brand-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 underline underline-offset-4">Memberships & Associations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "SASOG", desc: "South African Society of Obstetricians & Gynaecologists", Icon: UsersIcon },
            { title: "SASUOG", desc: "South African Society of Ultrasound in Obstetrics and Gynaecology", Icon: UsersIcon },
            { title: "GMG", desc: "Gynaecology Management Group", Icon: UsersIcon },
            { title: "SAMS", desc: "South African Menopause Society", Icon: UsersIcon },
            { title: "SAMA", desc: "South African Medical Association", Icon: UsersIcon },
          ].map(({title, desc, Icon}) => (
            <div key={title} className="bg-brand-dark/30 p-8 rounded-xl shadow-sm border border-white/10 hover:bg-brand-dark/50 transition">
              <div className="flex items-center justify-center gap-3">
                <Icon className="text-brand-cream"/>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-brand-cream/90 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* GALLERY */}
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">Gallery</h3>
      <Carousel images={gallery} autoplay interval={3000} />
    </section>

    {/* MAP */}
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">Find Us</h3>
      <div className="rounded-xl overflow-hidden border">
        <iframe title="Map" src="https://www.google.com/maps?q=17%20South%20Road,%20Lindhaven,%20Roodepoort%201724&output=embed" width="100%" height="380" style={{border:0}} loading="lazy" allowFullScreen></iframe>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="bg-gray-100 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <p>© {new Date().getFullYear()} Dr. MF Nkabinde</p>
          <p>17 South Road, Lindhaven, Roodepoort 1724</p>
          <p>WhatsApp +27 76 421 9522</p>
          <p><a className="text-blue-600" href="mailto:drnkabindedigital@gmail.com">drnkabindedigital@gmail.com</a></p>
        </div>
        <div className="md:text-right">
          <a className="text-blue-700 hover:underline" href="https://www.facebook.com/share/15yeqSp7xx/" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  </div>)
}
