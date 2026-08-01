import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenSyllabus: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenSyllabus }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-emerald-50/30">
      {/* Background Subtle Atom / Molecule Grid Deco */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Elite Chemistry Tuition for{' '}
                <span className="text-[#00A86B] underline decoration-emerald-200 decoration-wavy underline-offset-4">
                  Senior Phase
                </span>{' '}
                Students
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
                Here to support and mentor senior phase pupils throughout their Chemistry curriculum with personalised, engaging, and results-focused tuition.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#00A86B] hover:bg-[#00925d] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Book Your Lesson</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenSyllabus}
                className="inline-flex items-center gap-2 bg-emerald-50/80 hover:bg-emerald-100/80 text-emerald-800 font-semibold text-base px-6 py-3.5 rounded-xl border border-emerald-200/80 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 text-emerald-600" />
              </button>
            </div>

            {/* Key Features Badges Row */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6 text-slate-800 text-sm sm:text-base font-semibold">
              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#00A86B] fill-emerald-50" />
                <span>Expert Tutor</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#00A86B] fill-emerald-50" />
                <span>Personalised Learning</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#00A86B] fill-emerald-50" />
                <span>Exam Focused</span>
              </div>
            </div>
          </div>

          {/* Right Visual 3D Graphics Column */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-xl">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-100/60 via-cyan-50 to-blue-50 -z-10 blur-xl opacity-70" />

              {/* Main Generated 3D Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-100 bg-white p-2">
                <img
                  src="/src/assets/images/hero_chemistry_3d_1785616622060.jpg"
                  alt="3D Chemistry Laboratory glassware, floating elements, and periodic tiles"
                  className="w-full h-auto object-cover rounded-xl transform hover:scale-[1.01] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Periodic Table Element Overlay Cards matching design */}
                <div className="absolute top-4 right-4 bg-cyan-900/90 backdrop-blur-md text-white p-2.5 rounded-lg border border-cyan-400/40 shadow-lg text-left hidden sm:block animate-bounce-slow">
                  <div className="flex items-baseline justify-between text-[10px] text-cyan-200">
                    <span>6</span>
                    <span className="font-mono">12.011</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-center my-0.5 text-cyan-300">C</div>
                  <div className="text-[10px] font-medium text-center text-cyan-100">Carbon</div>
                </div>

                <div className="absolute bottom-6 left-6 bg-[#00A86B]/90 backdrop-blur-md text-white p-2.5 rounded-lg border border-emerald-300/40 shadow-lg text-left hidden sm:block">
                  <div className="flex items-baseline justify-between text-[10px] text-emerald-100">
                    <span>1</span>
                    <span className="font-mono">1.008</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-center my-0.5 text-white">H</div>
                  <div className="text-[10px] font-medium text-center text-emerald-100">Hydrogen</div>
                </div>

                <div className="absolute bottom-16 right-8 bg-blue-900/90 backdrop-blur-md text-white p-2.5 rounded-lg border border-blue-300/40 shadow-lg text-left hidden sm:block">
                  <div className="flex items-baseline justify-between text-[10px] text-blue-200">
                    <span>8</span>
                    <span className="font-mono">15.999</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-center my-0.5 text-cyan-200">O</div>
                  <div className="text-[10px] font-medium text-center text-blue-100">Oxygen</div>
                </div>

                {/* Chemical Formula Bubble */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-200 text-slate-800 text-xs font-bold font-mono shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>H₂SO₄ & Organic Synthesis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
