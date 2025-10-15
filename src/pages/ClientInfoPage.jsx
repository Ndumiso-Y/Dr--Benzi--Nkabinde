import React from "react";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';
import Footer from "../components/Footer.jsx";

export default function ClientInfoPage() {
  return (
    <>
    <section className="max-w-[1400px] mx-auto px-8 py-20">
      <div className="mb-12 space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy">CLIENT INFORMATION</h1>
        <div className="w-20 h-1.5 bg-brand-orange rounded-full"></div>
      </div>

      <div className="prose prose-lg prose-neutral max-w-none space-y-10">

        <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mt-0 mb-4 flex items-center gap-3">
            <FaExclamationTriangle className="text-amber-600" />
            Disclaimer
          </h2>
          <p className="text-amber-900/90 leading-relaxed m-0">
            The information provided here may vary from time to time without notice depending on circumstances. Kindly call the contact number provided on this website to verify the validity of the information. The owners of this website will not be held liable for any damage or inconvenience caused by following this information.
          </p>
        </div>

        <div className="bg-gradient-to-br from-brand-navy to-brand-dark text-white p-10 rounded-3xl shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2 text-white">
            Workshops
            <span className="text-brand-orange">→</span>
          </h2>
          <div className="space-y-5 text-white leading-relaxed">
            <p>
              It is important to understand that adolescence spans over six to eight years. It is not adequate to read the book once and expect the information to be retained forever. The book must be read every year until the young person exits the teenage years.
            </p>
            <p>
              Dr Nkabinde will hold regular workshops to assist parents and teenagers on how to effectively use the book. These workshops will be for people who have already bought the book, enabling them to derive maximum benefit.
            </p>
            <p>
              Dates of workshops will be advertised on this website at regular intervals. During workshops, teenagers and parents will have the opportunity to ask questions about any issues pertaining to physical, mental and emotional wellbeing. Where possible, referrals to relevant health professionals will be suggested.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-0 mb-4">Privacy Policy</h2>
          <p className="text-gray-600 italic">
            <em>What to Include in the Privacy Policy</em> (section heading placeholder)
          </p>
        </div>

        <div className="border-t-2 border-brand-orange/30 pt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">Contact Info</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-3 text-gray-700">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-brand-orange text-xl flex-shrink-0" />
              <span>17 South Road, Lindhaven, Roodepoort 1724</span>
            </p>
            <p className="flex items-center gap-3">
              <FaWhatsapp className="text-brand-orange text-xl flex-shrink-0" />
              <span>WhatsApp +27 76 421 9522</span>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-brand-orange text-xl flex-shrink-0" />
              <a className="text-brand-orange hover:text-brand-navy font-medium transition-colors duration-300" href="mailto:drnkabindedigital@gmail.com">
                drnkabindedigital@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}