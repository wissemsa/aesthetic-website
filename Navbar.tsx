import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';
import { ClinicInfo } from '../data/clinicData';

interface NavbarProps {
  activeRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeRoute,
  onRouteChange,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Services', route: 'treatments' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Specialists', route: 'specialists' },
    { label: 'Pricing', route: 'pricing' },
    { label: 'Testimonials', route: 'testimonials' },
    { label: 'FAQ', route: 'faq' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-white/10 py-3 px-4 sm:px-6 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 px-4 sm:px-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Logo & Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform">
            <svg
              width="22"
              height="22"
              viewBox="0 0 256 256"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xl sm:text-2xl font-playfair italic tracking-tight leading-none">
              WESS_SAID
            </span>
          </div>
        </button>

        {/* Center Navigation Pill (Desktop) */}
        <div className="hidden xl:flex bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1.5 items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = activeRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-gray-900 shadow-sm font-semibold'
                    : 'text-white/80 hover:bg-white/15 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Desktop Compact Nav for medium screens */}
        <div className="hidden lg:flex xl:hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1.5 items-center gap-0.5">
          {navItems.slice(0, 6).map((item) => {
            const isActive = activeRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-gray-900 shadow-sm font-semibold'
                    : 'text-white/80 hover:bg-white/15 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${ClinicInfo.phone}`}
            className="text-white/80 hover:text-white text-xs font-medium flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#e8702a]" />
            <span className="hidden xl:inline">{ClinicInfo.phone}</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-[#e8702a]/30 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="bg-[#e8702a] text-white text-xs font-semibold px-3.5 py-2 rounded-full flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer border border-white/20"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-3 right-3 mt-2 bg-gray-950/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 flex flex-col gap-4 shadow-2xl z-[110] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = activeRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-white text-gray-900 font-semibold shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#e8702a] hover:bg-[#d2611f] text-white text-center text-sm font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`tel:${ClinicInfo.phone}`}
              className="w-full text-center text-white/70 hover:text-white text-xs py-2 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#e8702a]" />
              <span>Call Concierge: {ClinicInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
