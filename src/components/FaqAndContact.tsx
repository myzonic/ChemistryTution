import React, { useState } from 'react';
import { FAQS, CONTACT_INFO } from '../data';
import { ChevronDown, User, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FaqAndContactProps {
  onOpenBooking: () => void;
}

export const FaqAndContact: React.FC<FaqAndContactProps> = ({ onOpenBooking }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00A86B', '#10B981', '#06B6D4', '#3B82F6'],
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* FAQ Column (Navy Blue Box) */}
          <div className="lg:col-span-6 bg-[#0F1D38] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-xl">
            {/* Background Chemical Molecule Network SVG */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="4" fill="#10B981" />
                <circle cx="200" cy="80" r="6" fill="#38BDF8" />
                <line x1="100" y1="100" x2="200" y2="80" stroke="#38BDF8" strokeWidth="2" />
                <circle cx="280" cy="180" r="5" fill="#10B981" />
                <line x1="200" y1="80" x2="280" y2="180" stroke="#10B981" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Frequently Asked Questions
              </h2>

              {/* Accordion List */}
              <div className="space-y-3">
                {FAQS.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="border border-slate-700/60 rounded-xl bg-slate-900/60 overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-5 py-4 text-left font-semibold text-sm sm:text-base flex items-center justify-between gap-4 text-slate-100 hover:text-emerald-400 transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 shrink-0 text-emerald-400 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 pt-3 font-normal animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Left 3D Microscope Graphic from Image */}
            <div className="relative z-10 pt-8 flex items-end justify-between">
              <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 opacity-90 drop-shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/src/assets/images/microscope_3d_1785616639340.jpg"
                  alt="3D Chemistry Microscope Graphic"
                  className="w-full h-full object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Have another question? Ask Lynsey →
              </button>
            </div>
          </div>

          {/* Contact Form Column (White Card Container) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Get In Touch
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Contact Details */}
                <div className="md:col-span-5 space-y-5 text-left text-slate-700 text-sm">
                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-[#00A86B] shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900">{CONTACT_INFO.name}</span>
                    </div>

                    <a
                      href={`tel:${CONTACT_INFO.phoneRaw}`}
                      className="flex items-center gap-3 hover:text-emerald-600 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-[#00A86B] shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-slate-800">{CONTACT_INFO.phone}</span>
                    </a>

                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="flex items-center gap-3 hover:text-emerald-600 transition-colors break-all"
                    >
                      <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-[#00A86B] shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-slate-800 text-xs sm:text-sm">{CONTACT_INFO.email}</span>
                    </a>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed pt-2">
                    I'd love to hear from you! Get in touch to discuss your chemistry tuition needs.
                  </p>

                  {/* Chemical Molecule Decorative Graphics */}
                  <div className="pt-2 flex items-center gap-2 text-emerald-500">
                    <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 100 100" fill="none">
                      <circle cx="20" cy="50" r="8" fill="#10B981" />
                      <circle cx="50" cy="20" r="10" fill="#00A86B" />
                      <circle cx="80" cy="50" r="8" fill="#06B6D4" />
                      <circle cx="50" cy="80" r="6" fill="#10B981" />
                      <line x1="20" y1="50" x2="50" y2="20" stroke="#10B981" strokeWidth="3" />
                      <line x1="50" y1="20" x2="80" y2="50" stroke="#00A86B" strokeWidth="3" />
                      <line x1="80" y1="50" x2="50" y2="80" stroke="#06B6D4" strokeWidth="3" />
                      <line x1="50" y1="80" x2="20" y2="50" stroke="#10B981" strokeWidth="3" />
                    </svg>
                  </div>
                </div>

                {/* Right Form Fields */}
                <div className="md:col-span-7">
                  {isSubmitted ? (
                    <div className="bg-emerald-50 rounded-2xl p-6 text-center space-y-3 border border-emerald-200">
                      <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-emerald-900">Message Sent!</h4>
                      <p className="text-emerald-700 text-xs leading-relaxed">
                        Thank you for reaching out. Lynsey will review your inquiry and contact you shortly.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', message: '' });
                        }}
                        className="text-xs font-semibold text-emerald-700 underline pt-2"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-100 outline-none text-sm transition-all"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-100 outline-none text-sm transition-all"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-100 outline-none text-sm transition-all"
                        />
                      </div>

                      <div>
                        <textarea
                          rows={3}
                          placeholder="Message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-100 outline-none text-sm transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#00A86B] hover:bg-[#00925d] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Book Your Lesson</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
