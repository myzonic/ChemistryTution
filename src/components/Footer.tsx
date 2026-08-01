import React from 'react';
import { CONTACT_INFO } from '../data';
import { ArrowUp, Phone, Mail, User, Facebook, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenSyllabus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenSyllabus }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1325] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#00A86B]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-6 h-6"
                >
                  <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
                  <ellipse cx="12" cy="12" rx="6" ry="2" transform="rotate(30 12 12)" />
                  <ellipse cx="12" cy="12" rx="6" ry="2" transform="rotate(-30 12 12)" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">Chemistry Tuition</span>
                <span className="text-[10px] font-semibold text-emerald-400 tracking-[0.2em] uppercase">
                  LYNSEY ROBINSON
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Supporting and mentoring senior phase Students to achieve their full potential in Chemistry.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#00A86B] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#00A86B] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.phoneRaw.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#00A86B] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#00A86B] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-white font-bold text-base tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-emerald-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-emerald-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
              </li>
              <li>
                <button onClick={onOpenSyllabus} className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold text-left">
                  Syllabus Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-white font-bold text-base tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Senior Phase Chemistry</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Exam Preparation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Homework Support</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Revision Sessions</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Online Lessons</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-white font-bold text-base tracking-wide">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-[#00A86B] shrink-0" />
                <span className="text-slate-200">{CONTACT_INFO.name}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A86B] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-emerald-400 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A86B] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-emerald-400 transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Lynsey Robinson Chemistry Tuition. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#00A86B] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
