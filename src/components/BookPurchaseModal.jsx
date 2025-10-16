import React, { useState, useEffect } from 'react';
import { HiX } from 'react-icons/hi';
import bookCover from '../assets/BookCoverFront.png';

export default function BookPurchaseModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 1 second on initial load
    const hasSeenModal = sessionStorage.getItem('hasSeenBookModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenBookModal', 'true');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <HiX className="w-6 h-6 text-brand-navy" />
        </button>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 p-8">
          {/* Book Cover */}
          <div className="flex justify-center items-start">
            <img
              src={bookCover}
              alt="Choose Well, Choose Life Book Cover"
              className="w-full max-w-xs rounded-2xl shadow-2xl"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
                Choose Well<br />Choose Life
              </h2>
              <div className="w-16 h-1.5 bg-brand-orange rounded-full"></div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              A Guide to a Purpose-Filled Life for South African Teenagers
            </p>

            <div className="bg-brand-navy/5 p-6 rounded-2xl space-y-3">
              <p className="text-brand-navy font-semibold text-xl">
                Available Now!
              </p>
              <p className="text-gray-600">
                Get your copy today and empower the teenagers in your life to make wise, purposeful choices.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#/order"
                onClick={() => setIsOpen(false)}
                className="flex-1 px-6 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl font-semibold text-center transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                BUY NOW
              </a>
              <a
                href="#/book"
                onClick={() => setIsOpen(false)}
                className="flex-1 px-6 py-4 bg-brand-navy hover:bg-brand-navy/90 text-white rounded-xl font-semibold text-center transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
