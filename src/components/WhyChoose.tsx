import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data';
import { FlaskConical, Target, Laptop, BookOpen, Star, Heart } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical':
        return <FlaskConical className="w-8 h-8 text-emerald-600" />;
      case 'Target':
        return <Target className="w-8 h-8 text-teal-600" />;
      case 'Laptop':
        return <Laptop className="w-8 h-8 text-cyan-600" />;
      case 'BookOpen':
        return <BookOpen className="w-8 h-8 text-emerald-600" />;
      case 'Star':
        return <Star className="w-8 h-8 text-blue-600" />;
      case 'Heart':
        return <Heart className="w-8 h-8 text-purple-600" />;
      default:
        return <FlaskConical className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <section id="why-choose" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Lynsey?
          </h2>
          <div className="w-16 h-1 bg-[#00A86B] mx-auto rounded-full" />
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-emerald-50 border border-emerald-100/80 group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.iconName)}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
