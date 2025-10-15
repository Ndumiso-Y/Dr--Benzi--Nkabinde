import React from "react";
import coverFront from "../assets/BookCoverFront.png";
import { FaAmazon, FaBook, FaMapMarkerAlt } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';
import Footer from "../components/Footer.jsx";

export default function OrderPage() {
  return (
    <>
    <section className="max-w-[1400px] mx-auto px-8 py-20">
      <div className="mb-12 space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy">ORDER BOOK</h1>
        <div className="w-20 h-1.5 bg-brand-orange rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="prose prose-lg prose-neutral max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Dr Benzile Monica Fakazile Nkabinde is a medical doctor, specialist obstetrician and gynaecologist, and mother of five grown children including two sets of twins. She has dedicated 34 years of her life to women's healthcare with a special interest in pregnancy and childbirth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Many times, patients have asked her to speak to their teenage daughters — this book addresses that crucial need for information and guidance from a medical, cultural and religious perspective to help make better life choices. <em>Choose Well, Choose Life</em> addresses all the social ills confronting today's youth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-brand-navy to-brand-dark text-brand-cream p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Buy Online
              <span className="text-brand-orange">→</span>
            </h2>
            <ul className="space-y-4">
              <li>
                <a className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group" href="https://www.amazon.com/dp/B0DFX418L4" target="_blank" rel="noreferrer">
                  <FaBook className="text-brand-orange text-2xl group-hover:scale-110 transition-transform" />
                  <span className="text-brand-cream font-medium">Amazon (Paperback)</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group" href="https://www.amazon.com/Choose-Well-Life-Monica-Nkabinde/dp/B0DFX8QTSN/" target="_blank" rel="noreferrer">
                  <FaAmazon className="text-brand-orange text-2xl group-hover:scale-110 transition-transform" />
                  <span className="text-brand-cream font-medium">Amazon (Kindle)</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group" href="https://books2read.com/u/bwLPwP" target="_blank" rel="noreferrer">
                  <MdDevices className="text-brand-orange text-2xl group-hover:scale-110 transition-transform" />
                  <span className="text-brand-cream font-medium">Draft2Digital eBook (Books2Read)</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Collect Physical Copies</h2>
            <p className="text-gray-700 mb-4">Available at 17 South Road, Lindhaven, Roodepoort 1724.</p>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300">
              <iframe title="Map" src="https://www.google.com/maps?q=17%20South%20Road,%20Lindhaven,%20Roodepoort%201724&output=embed" width="100%" height="320" style={{border:0}} loading="lazy" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:sticky lg:top-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-orange to-brand-navy rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              src={coverFront}
              alt="Book Cover Front"
              className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl object-contain bg-white p-3 transform group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">Get Updates</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="border-2 border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 rounded-xl p-3.5 outline-none transition-all" placeholder="First Name *" required />
                <input className="border-2 border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 rounded-xl p-3.5 outline-none transition-all" placeholder="Last Name *" required />
              </div>
              <input type="email" className="w-full border-2 border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 rounded-xl p-3.5 outline-none transition-all" placeholder="Email *" required />
              <input className="w-full border-2 border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 rounded-xl p-3.5 outline-none transition-all" placeholder="Birthday (YYYY/MM/DD)" />
              <input className="w-full border-2 border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 rounded-xl p-3.5 outline-none transition-all" placeholder="Phone" />
              <button type="submit" className="w-full px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
