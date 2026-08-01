import React from 'react';
import { STATS_ITEMS } from '../data';
import { Users, Clock, ShieldCheck, Heart, Award } from 'lucide-react';

export const StatsRow: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-blue-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-cyan-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-rose-500" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-500" />;
      default:
        return <Award className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS_ITEMS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center space-y-2"
            >
              <div className={`p-3 rounded-full mb-1 ${stat.iconColor.split(' ')[1]} ${stat.iconColor.split(' ')[2]}`}>
                {getStatIcon(stat.iconName)}
              </div>
              <div className="text-2xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-600 font-semibold text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
