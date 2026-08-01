import React from 'react';
import { SERVICES_ITEMS } from '../data';
import { ServiceItem } from '../types';
import { Atom, GraduationCap, BookText, ClipboardCheck, UserCheck, Monitor, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenBooking }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-8 h-8 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-[#00A86B]" />;
      case 'BookText':
        return <BookText className="w-8 h-8 text-purple-600" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-8 h-8 text-emerald-600" />;
      case 'UserCheck':
        return <UserCheck className="w-8 h-8 text-amber-600" />;
      case 'Monitor':
        return <Monitor className="w-8 h-8 text-cyan-600" />;
      default:
        return <Atom className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Services
          </h2>
          <div className="w-16 h-1 bg-[#00A86B] mx-auto rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg pt-2">
            Tailored Chemistry mentoring programs designed to build confidence, master SQA course content, and excel in exams.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_ITEMS.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer group relative overflow-hidden"
            >
              {/* Top Level Badge */}
              {service.levelBadge && (
                <div className="absolute top-4 right-4 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  {service.levelBadge}
                </div>
              )}

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 border border-slate-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300">
                {getServiceIcon(service.iconName)}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00A86B] transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {service.description}
              </p>

              <div className="mt-auto flex items-center text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-[#0B1A30] to-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="text-left space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Looking for a custom SQA Chemistry study plan?
            </h3>
            <p className="text-slate-300 text-base">
              Whether you need intensive National 5 calculation help or Advanced Higher lab support, we tailor every lesson to your exact school progress.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 bg-[#00A86B] hover:bg-[#00925d] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-900/40 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
