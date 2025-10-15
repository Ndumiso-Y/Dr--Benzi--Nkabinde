import React from "react";
import Footer from "../components/Footer.jsx";

export default function BookPage() {
  const aims = [
    "Empower young people to take control of their God-given destiny.",
    "Give them tools to avoid being blown all over by existing winds and shifting sands of opinion.",
    "Highlight the barriers that keep youth from harnessing the dreams, future and blessings God planted in them."
  ];

  const chapters = [
    "God Created You for a Purpose",
    "Premature Sexual Activity",
    "Sexual Health Risk",
    "Consequences of Premature Sexual Activity",
    "Rebellious Spirit",
    "Broken Family Units & Single-Parent Households",
    "Addiction to Alcohol, Drugs, Pornography and Sex",
    "Idle Minds, Idle Hands (Laziness)",
    "Sexually Transmitted Infections and Diseases",
    "Contraception (Family Planning)",
    "Adolescence",
    "Gender and Sexuality – A Medical Perspective",
    "The Ten Commandments",
    "Useful Statistics: How Do We Fare as a Country?",
    "Let's Talk About It",
    "Prayers You May Find Useful",
    "A Teacher's Perspective",
    "Conclusion"
  ];

  return (
    <>
    <section className="max-w-[1400px] mx-auto px-8 py-20">
      <div className="mb-12 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-navy leading-tight">
          Choose Well, Choose Life — A Guide to a Purpose-Filled Life for South African Teenagers
        </h1>
        <div className="w-20 h-1.5 bg-brand-orange rounded-full"></div>
      </div>

      <div className="prose prose-lg prose-neutral max-w-none space-y-8">
        <div className="bg-gradient-to-r from-brand-orange/10 to-transparent border-l-4 border-brand-orange p-6 rounded-r-xl">
          <p className="text-gray-800 leading-relaxed m-0">
            Introducing <em>Choose Well, Choose Life – A Guide to a Purpose-Filled Life for South African Teenagers</em>, a book that assists South African teenagers to weave through the information clutter to make good choices for their lives. Good informed choices will help young people harness all the blessings God planted in them at conception.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Taking cognisance of all the psycho-social problems confronting our country, this book is absolutely essential to rebuild our moral fabric and build a sound moral foundation for our nation. Written from a medical, religious and cultural perspective — all in firm agreement about human behaviour that leads to desirable outcomes in one's life.
        </p>

        <div className="bg-brand-navy text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2 text-white">
            The Book Aims To
            <span className="text-brand-orange">→</span>
          </h2>
          <ul className="space-y-3 list-none pl-0">
            {aims.map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-brand-orange font-bold text-xl mt-0.5">•</span>
                <span className="text-white">{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">Further Description</h2>
          <p className="text-gray-700 leading-relaxed">
            South Africa's children need to know they are fearfully and wonderfully made, that they have a God-given place under the sun. <em>Choose Well, Choose Life</em> addresses the social ills confronting our children today. Dr Nkabinde tackles many difficult issues with brutal honesty and believes it's only by telling raw, unadulterated truth with kindness that we can reach the youth. The book answers every question a teenager will ever ask and opens communication between parent and child. It also serves adults in youth ministries, teachers, and church personnel.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            With her extensive experience as a medical doctor and specialist obstetrician/gynaecologist, Dr Nkabinde is well positioned to write this book.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">Chapters</h2>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
            {chapters.map((c, i) => (
              <li key={i} className="text-base leading-relaxed hover:text-brand-orange transition-colors duration-300">
                {c}
              </li>
            ))}
          </ol>
        </div>

        <div className="border-t-2 border-brand-orange/30 pt-8">
          <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4">Contact Info</h3>
          <div className="space-y-2 text-gray-700">
            <p>17 South Road, Lindhaven, Roodepoort 1724</p>
            <p>WhatsApp +27 76 421 9522</p>
            <p>
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