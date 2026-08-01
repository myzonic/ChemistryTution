import React, { useState } from 'react';
import { COURSE_LEVEL_DETAILS } from '../data';
import { CourseLevelDetail } from '../types';
import { X, BookOpen, CheckCircle, ArrowRight, GraduationCap } from 'lucide-react';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLevelToBook: (levelName: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  onSelectLevelToBook,
}) => {
  const [activeTabId, setActiveTabId] = useState<string>('higher-chem');

  if (!isOpen) return null;

  const currentDetail = COURSE_LEVEL_DETAILS.find((item) => item.id === activeTabId) || COURSE_LEVEL_DETAILS[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6 pr-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <GraduationCap className="w-4 h-4" />
            <span>Senior Phase SQA Curriculum Guide</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Chemistry Course Specifications
          </h3>
          <p className="text-slate-500 text-sm">
            Explore topic units, core practical skills, and exam prep modules taught by Lynsey Robinson.
          </p>
        </div>

        {/* Level Switcher Tabs */}
        <div className="flex border-b border-slate-200 gap-2 mb-6">
          {COURSE_LEVEL_DETAILS.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveTabId(course.id)}
              className={`pb-3 px-4 font-bold text-sm border-b-2 transition-all cursor-pointer ${
                activeTabId === course.id
                  ? 'border-[#00A86B] text-[#00A86B]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {course.title.replace('SQA ', '')}
            </button>
          ))}
        </div>

        {/* Active Course Content */}
        <div className="space-y-6">
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                Target Audience: {currentDetail.targetAudience}
              </span>
              <h4 className="text-xl font-extrabold text-slate-900">{currentDetail.title}</h4>
              <p className="text-slate-600 text-sm mt-0.5">{currentDetail.subtitle}</p>
            </div>

            <button
              onClick={() => {
                onClose();
                onSelectLevelToBook(currentDetail.title.includes('Higher') ? 'Higher' : currentDetail.title.includes('National') ? 'National 5' : 'Advanced Higher');
              }}
              className="bg-[#00A86B] hover:bg-[#00925d] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book This Level</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Modules List */}
          <div className="space-y-4">
            {currentDetail.modules.map((mod, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl p-5 bg-white shadow-2xs">
                <h5 className="font-bold text-slate-900 text-base flex items-center gap-2 mb-3 text-emerald-800">
                  <BookOpen className="w-4 h-4 text-[#00A86B]" />
                  <span>{mod.name}</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {mod.topics.map((t, tidx) => (
                    <div key={tidx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
