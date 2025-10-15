import React from "react";
import aboutImg from "../assets/DSC_4393.jpg";
import Footer from "../components/Footer.jsx";

export default function AboutPage() {
  return (
    <>
    <section className="max-w-[1400px] mx-auto px-8 py-20">
      <div className="mb-12 space-y-3 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy">
          ABOUT DR BENZILE MONICA FAKAZILE NKABINDE
        </h1>
        <div className="w-20 h-1.5 bg-brand-orange rounded-full mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 prose prose-lg prose-neutral max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Dr Benzile Monica Fakazile Nkabinde is a medical doctor, a specialist obstetrician/gynaecologist, and a mother of five grown children, including two sets of twins.
          </p>
          <p className="text-gray-700 leading-relaxed">
            She has dedicated 34 years of her life to the healthcare of women and has a special interest in pregnancy and childbirth. Helping to deliver God's greatest gift to mankind safely into the world has been the greatest blessing and joy of her life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Many times, patients have asked her to speak to their teenage daughters when what used to be a bundle of joy starts going off the rails. This book addresses this crucial need for information and guidance from a medical, cultural and religious perspective.
          </p>
          <p className="text-gray-700 leading-relaxed">
            It aims to assist young people as they delicately weave through the information clutter, helping them to make better choices to unlock God's purpose for their lives. It is in our country's interest that we bring up well-grounded children.
          </p>
          <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 rounded-r-lg mt-8">
            <p className="text-brand-navy font-medium leading-relaxed">
              Dr Nkabinde is very passionate about women's health issues and medico-psycho-social issues affecting the youth of South Africa.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:sticky md:top-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-orange to-brand-navy rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <img src={aboutImg} alt="About Dr Benzi" className="relative rounded-3xl object-cover max-h-[580px] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
