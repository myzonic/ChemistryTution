import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Show 3 testimonials on large screen, 1 on mobile
  const getVisibleTestimonials = () => {
    const total = TESTIMONIALS.length;
    return [
      TESTIMONIALS[currentIndex % total],
      TESTIMONIALS[(currentIndex + 1) % total],
      TESTIMONIALS[(currentIndex + 2) % total],
    ];
  };

  const visible = getVisibleTestimonials();

  return (
    <section id="testimonials" className="py-20 bg-slate-50/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Students Say
          </h2>
          <div className="w-16 h-1 bg-[#00A86B] mx-auto rounded-full" />
        </div>

        {/* Carousel Outer Container */}
        <div className="relative px-2 sm:px-12">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-emerald-600 hover:border-emerald-200 transition-all cursor-pointer"
            aria-label="Previous Testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-emerald-600 hover:border-emerald-200 transition-all cursor-pointer"
            aria-label="Next Testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left relative group"
              >
                <div>
                  {/* Top Quote Icon & Rating Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-7 h-7 text-emerald-500/40 fill-emerald-100" />
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-emerald-100 shadow-2xs"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{item.name}</h4>
                    {item.role && (
                      <span className="text-xs font-semibold text-emerald-600 block">
                        {item.role}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Pagination */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'bg-[#00A86B] w-6' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
