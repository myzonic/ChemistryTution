import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data';
import { UserPlus, FileSpreadsheet, CalendarCheck, Trophy } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserPlus':
        return <UserPlus className="w-7 h-7 text-emerald-600" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-7 h-7 text-emerald-600" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-7 h-7 text-emerald-600" />;
      case 'Trophy':
        return <Trophy className="w-7 h-7 text-amber-500" />;
      default:
        return <UserPlus className="w-7 h-7 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 bg-[#0F1D38] text-white relative overflow-hidden">
      {/* Molecule network line graphics in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-[#00A86B] mx-auto rounded-full" />
        </div>

        {/* 4 Steps Row with Connecting Line */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-emerald-500/30 via-emerald-400 to-amber-400/40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-slate-800 group-hover:border-[#00A86B] group-hover:scale-105 transition-all duration-300 mb-6">
                  {getStepIcon(step.iconName)}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#00A86B] text-white text-xs font-bold flex items-center justify-center border border-white">
                    {step.stepNumber}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed max-w-xs font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
