import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChoose } from './components/WhyChoose';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { StatsRow } from './components/StatsRow';
import { Testimonials } from './components/Testimonials';
import { FaqAndContact } from './components/FaqAndContact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SyllabusModal } from './components/SyllabusModal';
import { ServiceItem } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [syllabusModalOpen, setSyllabusModalOpen] = useState(false);
  const [selectedBookingLevel, setSelectedBookingLevel] = useState<string>('Higher');
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'why-choose', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBookingWithLevel = (level: string = 'Higher') => {
    setSelectedBookingLevel(level);
    setBookingModalOpen(true);
  };

  const handleSelectService = (_service: ServiceItem) => {
    setSyllabusModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header */}
      <Header
        onOpenBooking={() => handleOpenBookingWithLevel('Higher')}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBookingWithLevel('Higher')}
          onOpenSyllabus={() => setSyllabusModalOpen(true)}
        />

        {/* Why Choose Lynsey Section */}
        <WhyChoose />

        {/* Services Section */}
        <Services
          onSelectService={handleSelectService}
          onOpenBooking={() => handleOpenBookingWithLevel('Higher')}
        />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Stats & Key Benefits Row */}
        <StatsRow />

        {/* What Students Say (Testimonials) */}
        <Testimonials />

        {/* FAQ & Get In Touch Form */}
        <FaqAndContact
          onOpenBooking={() => handleOpenBookingWithLevel('Higher')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBookingWithLevel('Higher')}
        onOpenSyllabus={() => setSyllabusModalOpen(true)}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultLevel={selectedBookingLevel}
      />

      {/* Interactive Syllabus & Course Guide Modal */}
      <SyllabusModal
        isOpen={syllabusModalOpen}
        onClose={() => setSyllabusModalOpen(false)}
        onSelectLevelToBook={(level) => handleOpenBookingWithLevel(level)}
      />
    </div>
  );
}
