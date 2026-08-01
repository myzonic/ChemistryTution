import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { X, Calendar, CheckCircle, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLevel?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultLevel = 'Higher' }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    level: defaultLevel as any,
    preferredDays: ['Monday', 'Wednesday'],
    lessonType: 'One-to-One Online',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const toggleDay = (day: string) => {
    if (formData.preferredDays.includes(day)) {
      setFormData({
        ...formData,
        preferredDays: formData.preferredDays.filter((d) => d !== day),
      });
    } else {
      setFormData({
        ...formData,
        preferredDays: [...formData.preferredDays, day],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00A86B', '#10B981', '#38BDF8', '#F59E0B'],
      });
    }, 700);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A86B] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Booking Request Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-800">{formData.studentName}</span>! Lynsey Robinson will review your availability for <span className="font-semibold text-[#00A86B]">{formData.level} Chemistry</span> and respond via email ({formData.email}) within 24 hours.
            </p>

            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="bg-[#00A86B] hover:bg-[#00925d] text-white font-bold px-8 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Senior Phase Chemistry Tuition</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Book Your Lesson with Lynsey
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Select your Chemistry course level and preferred times for a tailored consultation.
              </p>
            </div>

            {/* Course Level Picker */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Chemistry Course Level *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['National 5', 'Higher', 'Advanced Higher'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setFormData({ ...formData, level: lvl as any })}
                    className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      formData.level === lvl
                        ? 'bg-[#00A86B] text-white border-[#00A86B] shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Student & Parent Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Student Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Emma Smith"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Parent / Guardian Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Smith"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+44 7123 456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                />
              </div>
            </div>

            {/* Preferred Days */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Preferred Days for Online Tuition</span>
              </label>
              <div className="flex flex-wrap gap-1.5">
                {daysList.map((day) => {
                  const isSelected = formData.preferredDays.includes(day);
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(day)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-50 text-[#00A86B] border-emerald-300 font-bold'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Specific Topics or Exam Board Notes
              </label>
              <textarea
                rows={2}
                placeholder="e.g., Struggling with mole calculations and Hess's Law in Unit 1 Higher Chemistry."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-100 outline-none text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00A86B] hover:bg-[#00925d] text-white font-bold text-base py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Confirming Request...</span>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  <span>Submit Lesson Request</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
