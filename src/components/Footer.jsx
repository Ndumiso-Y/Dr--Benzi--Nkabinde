import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-navy via-brand-dark to-[#0a0f1a] text-brand-cream">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-brand-cream">Dr. MF Nkabinde</h3>
            <p className="text-brand-cream/80 leading-relaxed">
              Dedicated to women's health for over 34 years. Helping South African teenagers make purpose-filled life choices through guidance and wisdom.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-cream">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#/" className="text-brand-cream/80 hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                  <span>→</span> Home
                </a>
              </li>
              <li>
                <a href="#/about" className="text-brand-cream/80 hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                  <span>→</span> About
                </a>
              </li>
              <li>
                <a href="#/book" className="text-brand-cream/80 hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                  <span>→</span> Book
                </a>
              </li>
              <li>
                <a href="#/order" className="text-brand-cream/80 hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                  <span>→</span> Order
                </a>
              </li>
              <li>
                <a href="#/client-info" className="text-brand-cream/80 hover:text-brand-orange transition-colors duration-300 flex items-center gap-2">
                  <span>→</span> Client Info
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-cream">Contact</h4>
            <div className="space-y-3 text-brand-cream/80">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-orange text-lg flex-shrink-0 mt-1" />
                <span className="text-sm">17 South Road, Lindhaven, Roodepoort 1724</span>
              </p>
              <p className="flex items-center gap-3">
                <FaWhatsapp className="text-brand-orange text-lg flex-shrink-0" />
                <span className="text-sm">+27 76 421 9522</span>
              </p>
              <p className="flex items-start gap-3">
                <FaEnvelope className="text-brand-orange text-lg flex-shrink-0 mt-1" />
                <a className="text-sm hover:text-brand-orange transition-colors duration-300" href="mailto:drnkabindedigital@gmail.com">
                  drnkabindedigital@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-cream/70 text-sm">
            © {new Date().getFullYear()} Dr. MF Nkabinde. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              className="flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              href="https://www.facebook.com/share/15yeqSp7xx/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-xl" />
              <span className="hidden sm:inline">Follow Us</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
