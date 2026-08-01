import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#why-choose' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-emerald-100/60'
          : 'bg-white py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group text-left"
          >
            {/* Custom Atom Hex Icon */}
            <div className="relative w-11 h-11 flex items-center justify-center bg-emerald-50 rounded-xl border border-emerald-200 group-hover:scale-105 transition-transform duration-200 shadow-xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 text-emerald-600"
              >
                {/* Outer hexagon */}
                <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" className="stroke-emerald-600 opacity-90" />
                {/* Orbit 1 */}
                <ellipse cx="12" cy="12" rx="6" ry="2" transform="rotate(30 12 12)" className="stroke-teal-500 opacity-80" />
                {/* Orbit 2 */}
                <ellipse cx="12" cy="12" rx="6" ry="2" transform="rotate(-30 12 12)" className="stroke-emerald-500 opacity-80" />
                {/* Center nucleus */}
                <circle cx="12" cy="12" r="1.8" className="fill-emerald-600 stroke-none" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-none">
                Chemistry Tuition
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-emerald-600 uppercase mt-1">
                LYNSEY ROBINSON
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase() || (link.name === 'Home' && activeSection === 'home');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-base font-semibold transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-emerald-600'
                      : 'text-slate-700 hover:text-emerald-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-emerald-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#00A86B] hover:bg-[#00925d] text-white font-semibold text-sm sm:text-base px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Book a Lesson</span>
              <Calendar className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#00A86B] text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-slate-800 hover:text-emerald-600 py-2 border-b border-gray-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-emerald-500">→</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#00A86B] text-white font-semibold py-3 rounded-xl shadow-sm"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Lesson</span>
              </button>
              <div className="text-xs text-center text-slate-500 flex items-center justify-center gap-4 pt-1">
                <a href="tel:+447708907247" className="flex items-center gap-1 hover:text-emerald-600">
                  <Phone className="w-3.5 h-3.5" /> +44 7708 907247
                </a>
                <a href="mailto:larobinson21@hotmail.com" className="flex items-center gap-1 hover:text-emerald-600">
                  <Mail className="w-3.5 h-3.5" /> Email
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
